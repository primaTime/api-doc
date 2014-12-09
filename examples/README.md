Examples
==

## Data import

The example below shows how to import the list of clients.
The code is written in [Groovy language](http://groovy.codehaus.org/).

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

def rest = new RESTClient('http://your-tenant.api.primaerp.com/v1/')

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
