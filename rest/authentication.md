Authentication
==

## Overview

You must be authorized to access our API resources so primaERP API will provide you with a [Basic access authentication](http://en.wikipedia.org/wiki/Basic_access_authentication).

Take into consideration that all of the API requests must be followed by the query parameter "token"

## Authentication with user credentials

This is an authentication method which requires the user's credentials via the Basic access authentication

#### Syntax

To receive the token you should use the API method

		/auth/login?apikey={yourApiKey}

#### Example

		GET http://{tenant}.api.primaerp.com/v1/auth/login?apikey={yourApiKey}
		
```JSON
{
	"token" : "c0e0c951-40d5-4e4a-9789-6524c1d2f80d",
	"expiration" : "/Date(1393858439151)/",
	"refreshToken" : "5d01a310-0e68-4733-9faf-8efdb1b367f7",
	"refreshExpiration" : "/Date(1394459639151)/"
}
```

Once you have been authorized via the Basic access authentication, you should use the token in any API resource you are planning to use.

#### Example

		GET http://{tenant}.api.primaerp.com/v1/time/projects?token=c0e0c951-40d5-4e4a-9789-6524c1d2f80d

## Authentication with a Secret key

The secret key is an alternative authentication solution which does not require the user's credentials. It is sent via the basic authentication where it replaces the username. A password is not needed.

The secret key is created via the [secretkey resource](../resources/core/secretkey.md)

#### Syntax

		/users/@self/secretkeys

#### Example

		POST http://{tenant}.api.primaerp.com/v1/users/@self/secretkeys

## Token expiration

The token generated has a limited lifetime, so it expires when it's past the time specified by the "expiration" field

After it expires, the token becomes invalid and a new token has to be acquired. By default the access token has a 60 minute lifetime. The access token can be refreshed using the refresh token code.

## Refresh token

To refresh the token you have to use the refresh token resource

#### Syntax

		/auth/refreshtoken

with a `refresh_token` parameter.

#### Example

		GET http://{tenant}.api.primaerp.com/v1/auth/refreshtoken?apikey={yourApiKey}&refresh_token=5d01a310-0e68-4733-9faf-8efdb1b367f7

You will receive a new authentication and refresh token in the same format as for the "login" resource. The refresh token can be used only once. The refreshed token expires after 7 days.
