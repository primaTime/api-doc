Errors handling
==

## Overview

This property specifies the value of the status code returned by the server. Status values are defined in the HTTP specification and can be used either to identify an error or to confirm a successful operation.

When a request is successful, the API returns a HTTP Status Code (2xx).

## Basic Error Codes

In case of any problems, will the API return the following HTTP status codes in the response header:

| HTTP Status Code | Description |
| --- | --- |
| 401 | Unauthorized. Wrong or missing credentials. |
| 400 | Bad format. Incorrect parameter or query string. |
| 403 | Forbidden. A user has insufficient rights to perform this action. |
| 404 | Requested entity not found. |
| 409 | Conflict. The request could not be processed because of a conflict in the request. |
| 412 | The precondition failed. The request could not be processed because of a conflict in the request. |
| 424 | Failed dependency. The request failed due to the failure of a previous request. |
| 500 | Internal server error. TargetProcess messed up. |
| 501 | Not implemented. The requested action is either not supported or not implemented yet. |
| 503 | Service unavailable. Unavailable service because the rate limit was exceeded. |

## API Error Codes

Listed below are special errors, which may arise during the interaction with API:

| API error Code | HTTP Status Code | Description                                   |
|----------------|------------------|-----------------------------------------------|
| PE01-1001      | 401              | Unauthorized                                  |
| PE01-1002      | 400              | Token missing                                 |
| PE01-1003      | 400              | Tenant missing                                |
| PE01-1004      | 409              | Tenant conflict                               |
| PE01-1005      | 401              | Tenant unknown                                |
| PE01-1006      | 400              | Confirmation invalid                          |
| PE01-1007      | 401              | Object not confirmed                          |
| PE01-1008      | 403              | Access denied                                 |
| PE01-1009      | 403              | You've reached your account's user limit      |
| PE01-1010      | 401              | Token is invalid or expired                   |
| PE01-1011      | 401              | Refresh token is invalid or expired           |
| PE01-1101      | 404              | Object not found                              |
| PE01-1102      | 409              | Object already exists                         |
| PE01-1103      | 400              | Operation not allowed                         |
| PE01-1104      | 412              | Validation error                              |
| PE01-1105      | 400              | Wrong parameters                              |
| PE01-1106      | 412              | Illegal state                                 |
| PE01-1107      | 409              | Version stale                                 |
| PE01-1108      | 424              | Transaction error                             |
| PE01-1109      | 412              | File size limit exceeded                      |
| PE01-9000      | 500              | Other error                                   |
| PE01-9001      | 500              | Unhandled error                               |
| PE01-9002      | 503              | Limit exceeded                                |
| PE01-9003      | 404              | Resource not found                            |
| PE01-9004      | 400              | Unrecognized request                          |
| PE01-9005      | 406              | You've requested an incompatible content type |

## Error object

The response contains detailed information about the error.

#### Example

A validation error:

```JSON
{
	"status":412,
	"code":"PE01-1104",
	"message":"Validation error",
	"description":"Project.owner - NotNull(may not be null)",
	"constraintViolations":[
		{
			"entityPath":"",
			"entityType":"eu.abra.primaerp.api.beans.time.Project",
			"field":"owner",
			"constraint":"NotNull",
			"message":"may not be null"
		}
	]
}
```

## Suppress response code

It is possible to suppress the response code for the primaERP API by adding a query parameter.

#### Syntax

		?suppress_response_code=true

If this parameter is set, the API will always return status 200 and the response will contain the error object with more information.

This option should be used with a limited functions client e.g. Flash or JavaScript.

If it is an [JSONP](response.md#jsonp-json-with-padding), the API should always use the error object query. Rendering the JSONP without this functionality will make the API unreliable.
