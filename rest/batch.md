Batch requests
==

The API clients must execute a number of sequential requests to the API in specific scenarios such as: data imports, reporting, syncing etc. Each request spends some time on connecting to the server, the network communication or the request parsing. This time can be omitted when several object requests are processed in one batch request.

## Overview

There is a resource on the path/v1/batch. The resource consumes POST requests of JSON content with a list of the objects. Each object represents a single request and has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| id | String | request id, for response mapping |
| method | String | HTTP method (GET, POST,...) |
| path | String | request path |
| headers | String | (optional) request headers |
| body | String | (optional) request body |
| transaction | String | (optional) transaction id |

When the server processes each request in a batch, it returns a status code 200 and a JSON response body content with a list of objects. Each object represents a response to the original request object and has the following properties:

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| id | String | original request id |
| code | Number | status code |
| headers | String | response headers |
| body | String | response body |

Request example:

GET /v1/batch?token=46e5ae5d-9ff2-4d3a-b73f-a79a8e17cae6

Host: tenant.api.primaerp.com

Content-Type: application/json

Accept: application/json

[

 {

  id : "1",

  method : "GET",

  headers : "Content-Type: application/json"

  path : "/v1/time/timerecords?$filter=(duration eq 1000)"

 },

 {

  id : "2"

  method : "PUT",

  headers : "Content-Type : application/json \n Accept : application/json"

  path : "/v1/time/projects/bb4acd88-a855-40cb-afc8-973ec6d858c2?response\_object=true",

  body : "{ name : \"New name\" }"

 }

]



Response will be:

HTTP/1.1 200 OK

Date: Thu, 26 Sep 2013 03:52:49 GMT

Server: Tomcat 7

[

 {

  id : "1",

  code : 200,

  body : "[]"

 },

 {

  id : "2",

  code : 404,

  body : "{ status: 404, code : \"PE01-1101\", message : \"Object not found\", description : null, constraintViolation : null }"

 }

]



## Headers handling

If the headers are not specified for the requested objects, then all headers from the batch requested will be applied. In other words: you do not need to specify the **headers** property for each requested object, because by default it is going to get them from the batch request header.

## Token handling

The token passed as a query parameter to the batch resource is always used for processing each requested object. Users can specify another token as a query parameter in the **path** property for each requested object.

## Transaction handling

By default each request in the batch is processed with its own transaction. Users can specify which requests are going to be processed together in a separate transaction; these requested objects must have their **transaction** property set to the same id.

## Limitations

- The user has to be authorized and pass a valid token to the batch resource
- Only up to 100 requests in one batch is permitted
