Authentication
==

## Overview

You have to be authenticated to access our API resources in following steps:
1. Login with a [User credentials](#authentication-with-user-credentials) or a [Secret key](#authentication-with-a-secret-key).
1. [Use a token](#token-example) for one hour.
1. [Refresh a token](#token-expiration).
1. Go to the step 2.

## Authentication with user credentials

This is an authentication method which requires the user's credentials by the [Basic access authentication](http://en.wikipedia.org/wiki/Basic_access_authentication)

#### Syntax

To receive the token you have to use the login resource. Please, do not forget to include the standard HTTP Basic access authentication request header, you can follow instructions [how to create the request header.](https://en.wikipedia.org/wiki/Basic_access_authentication#Client_side)

		/auth/login?apikey={yourApiKey}

#### Login example

		GET http://{tenant}.api.primaerp.com/v1/auth/login?apikey={yourApiKey}

for example if you are using ```curl``` HTTP comannd line client:

```bash
	$ curl http://tenant.api.primaerp.com/v1/auth/login?apikey=1af7a44b-81f1-4de1-11e7-1e675acb1221 \
	       -H "Authorization: Basic dXNlckBkb21haW4uY29tOnBhc3N3b3Jk"
```

the response will look like:

```JSON
{
	"token" : "c0e0c951-40d5-4e4a-9789-6524c1d2f80d",
	"expiration" : "/Date(1393858439151)/",
	"refreshToken" : "5d01a310-0e68-4733-9faf-8efdb1b367f7",
	"refreshExpiration" : "/Date(1394459639151)/"
}
```

Once you have been authenticated you don't need the API key until your token expires. You can use the token to access any API resources you are planning to use.

#### Token example

		GET http://{tenant}.api.primaerp.com/v1/time/projects?token=c0e0c951-40d5-4e4a-9789-6524c1d2f80d

## Authentication with a Secret key

The secret key is an alternative authentication solution which does not require the user's credentials. It is sent by the basic authentication where is replaced the username with a Secret key. You have to use the same login resource as in the example above. A password is not needed.

The secret key is created by the [secretkey resource](../resources/core/secretkey.md)

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
