Response
==

## Response encoding

All responses from the API are encoded in UTF-8

## Response format

The primaERP API supports two response formats, JSON and XML, where the [JSON](http://en.wikipedia.org/wiki/JSON) format is the default one.

Response format is defined by the HTTP header [Accept](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.1):

#### Syntax

- JSON: `Accept: application/json`
- XML: `Accept: application/xml`

If your HTTP client does not support sending the HTTP header "Accept" or it sends wrong types as such is the case with the JQuery, you can use an alternative method to define the response by using the query parameter "format":

#### Syntax

- JSON: `/{resource}/?format=json`
- XML: `/{resource}/?format=xml`

Where `{resource}` is a module resource such as: `time/projects`, `time/timerecords`, `time/tasks`, etc. Or a global resource such as `user`.

#### Example

- JSON: `GET http://{tenant}.api.primaerp.com/v1/time/projects?format=json`
- XML: `GET http://{tenant}.api.primaerp.com/v1/time/projects?format=xml`


## JSONP (JSON with padding)

The primaERP API also supports the [JSONP](http://en.wikipedia.org/wiki/JSONP) pattern.

To return the JSON padded, you should use the callback query parameter.

#### Syntax

		/{resource}.json/?callback=functionName

#### Example

		GET http://{tenant}.api.primaerp.com/v1/time/projects.json?callback=projectList

JSONP always returns the status code 200 in the following way: `?suppress_response_code=true`


## Date format

PrimaERP uses the following date formatting:

- [ISO 8601] (http://en.wikipedia.org/wiki/ISO_8601) format for XML
- [Microsoft AJAX alike] (http://weblogs.asp.net/bleroy/archive/2008/01/18/dates-and-json.aspx) format for JSON.
"/Date(1198908717056)/", where the number is in milliseconds since January 1st 1970.


## Response collection

The application via API returns a maximum of 1000 records. To retrieve the records after that, you should use [pagination](options.md#paging).


## Response object

POST and PUT methods may return an object which was created or updated. This feature should be enabled by a response_object query parameter.

#### Syntax

		response_object=true


## Response reduction

It is possible to reduce the API output. If a response reduction query parameter is used, then only a stub will be returned instead of an embedded object. A stub is composed of the `id`, `version` and `displayName` fields.

#### Syntax

		/{resource}/?no_expand=true

Where `{resource}` is a module resource such as: `time/projects`, `time/timerecords`, `time/tasks`, etc. Or a global resource such as `user`.

Take into consideration that this query parameter is applicable to every "GET" request:

- list result (e.g. `GET http://{tenant}.api.primaerp.com/v1/time/tasks?no_expand=true`)
- single result (e.g. `GET http://{tenant}.api.primaerp.com/v1/time/tasks/9a761c4b-2217-4c47-946e-2aae4a149c9b?no_expand=true`)
- @deleted view (e.g. `GET http://{tenant}.api.primaerp.com/v1/time/tasks/@deleted?no_expand=true`)
- deleted object (e.g. `GET http://{tenant}.api.primaerp.com/v1/time/tasks/9a761c4b-2217-4c47-946e-2aae4a149c9b/@deleted?no_expand=true`)

#### Example

		GET http://{tenant}.api.primaerp.com/v1/time/tasks?no_expand=true

"project" and "author" fields in the task below are stubs.

```JSON
{
 	"id":"9a761c4b-2217-4c47-946e-2aae4a149c9b",
	"version":0,
	"createdAt":"/Date(1378217576331)/",
	"name":"Task name",
	"project":{
		"id":"ac8057b3-738b-4e3b-9a53-96525a847f09",
		"version":0,
		"name":"Project name",
		"begins":null,
		"ends":null,
		"owner":null,
		"client":null,
		"displayName":"Project name"
		...
	},
	"author":{
		"id":"6f0beb1b-8420-49a2-8e6a-ff47881a96a7",
		"version":2,
		"firstName":"John",
		"lastName":"Smith",
		"email":null,
		"phone":null,
		"displayName":"Smith John"
		...
	},
	...
}
```

The single parts of the displayName, such as firstName and lastName, are parts of the stub.
