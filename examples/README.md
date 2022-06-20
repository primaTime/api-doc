Examples
==

The examples bellow are written in the [Groovy language](http://groovy.codehaus.org/).

## Data import

This example shows how to import the list of clients.

```Groovy
@Grab(group='org.codehaus.groovy.modules.http-builder', module='http-builder', version='0.7') 
@Grab(group='net.sf.opencsv', module='opencsv', version='2.3')

import au.com.bytecode.opencsv.CSVReader
import au.com.bytecode.opencsv.CSVParser
import groovyx.net.http.RESTClient 
import java.io.InputStreamReader

def email = 'your@email.com'
def password = 'yourPassword'
def apikey = 'your-apikey'

def rest = new RESTClient('https://your-tenant.api.primaerp.com/v1/')

def file = '/home/user/clients.csv' // or 'c:\\some\\folder\\clients.csv' for Windows

List<String[]> rows = new CSVReader(new InputStreamReader(new FileInputStream(file), 'windows-1250'), 
    '\t' as char, 
    CSVParser.DEFAULT_ESCAPE_CHARACTER, 
    CSVParser.DEFAULT_QUOTE_CHARACTER,
    1
    ).readAll()

def token = rest.get(
        path: 'auth/login',
        headers: ['Authorization': 'Basic ' + "$email:$password".bytes.encodeBase64().toString()],
        contentType: 'application/json',
        query: [apikey: apikey]
    ).data.token
    
rows.each { row ->
    def client = [
        active: true,
        name: row[0],
        code: row[1].take(20),
        email: row[2],
        phone: row[3],
        website: row[4],
        additionalAddressInfo: row[5]
    ]
    if (!rest.get(
            path: 'time/clients',
            query: [token: token, '$filter': "code eq '${client.code}'"]
        ).data)
    {
        rest.post(
            path: 'time/clients',
            requestContentType: 'application/json',
            query: [token: token],
            body: client
        )
    }
}
```

## Project members

This example shows how to add all users to all projects.

```Groovy
@Grab(group='org.codehaus.groovy.modules.http-builder', module='http-builder', version='0.7')

import groovyx.net.http.RESTClient

class Members {

    static main(def args) {

        def email = 'your@email.com'
        def password = 'yourPassword'
        def apikey = 'your-apikey'

        def rest = new RESTClient('https://your-tenant.api.primaerp.com/v1/')

        def token
        try {
            token = rest.get(
                    path: 'auth/login',
                    headers: ['Authorization': 'Basic ' + "$email:$password".bytes.encodeBase64().toString()],
                    contentType: 'application/json',
                    query: [apikey: apikey]
                ).data.token
        } catch (e) {
            println "error ${e.message}"
            println "error ${e.response.data}"
            throw e
        }

        println "token $token"

        def projectIds = rest.get(
                path: 'time/projects',
                query: [token: token, '$filter': '(personal eq false) or (personal eq null)']
            ).data.collect { it.id }

        println "projects # ${projectIds.size}"

        def userIds = rest.get(
                path: 'users',
                query: [token: token]
            ).data.collect { it.id }

        println "users # ${userIds.size}"

        projectIds.each { projectId ->
            println "project $projectId"
            def projectMemberIds = rest.get(
                    path: "time/projects/${projectId}/members",
                    query: [token: token]
                ).data.collect { it.user.id }

            userIds.findAll { !projectMemberIds.contains(it) }.each { userId ->
                def member = [ user: [ id: userId ] ]
                println member
                rest.post(
                        path: "time/projects/${projectId}/members",
                        requestContentType: 'application/json',
                        query: [token: token],
                        body: member
                    )
            }
        }
        println "Done"
    }
}
```
