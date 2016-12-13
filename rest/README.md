Overview
==

primaERP API is built using the [RESTful architecture](http://en.wikipedia.org/wiki/Restful) style, which provides full access to the main resources.

## Response format

primaERP API supports two [response formats](response.md), JSON and XML, where the JSON format is the default.

## Response status

The [response status](errors.md) specifies the value of the status code returned by the server. Status values are defined in the HTTP specification and can be used either to identify an error or to confirm a successful operation.

## Rate limiting

The primaERP API allows clients to make a limited number of calls in a given second.

The rate limit is applied only to authenticated requests and permits 500 requests every 10 seconds from the same IP address within the same account.

If the limit is overloaded, the limit will be reduced for some time, however it will gradually increase until the default limit is restored.

## HTTPS protocol

API is also accessible on the HTTPS protocol.

## API endpoint

The primaERP API runs in two locations, both with a specific endpoint. It counts also with a generic location-agnostic endpoint, which routes to the proper endpoint via the AWS's latency based geolocation routing. 

In most cases, the generic location handles the tenant’s routing to the proper endpoint, however on certain conditions (e.g. VPN environment, etc), this is not possible. In this case, the API returns a 301 redirect, so that the client repeats the location request to a specific endpoint. 

You can also use the specific location endpoint, as long as you know the correct location value.

#### Syntax

Using the generic location endpoint

		https://{tenant}.api.primaerp.com/v1/

Using specific location endpoint

		https://{tenant}.api.{location}.primaerp.com/v1/

Where: 
* `{tenant}` is the name of the primaERP account
* `{location}` is the specific endpoint location: *eu* or *us*
