Registration
==

## Overview

The API described below shows the REST methods for an authenticated user.

For a successful authentication, it should be called the "sign up" and "confirm" methods.

A more detailed description is presented in each method.

## Check URL

This method checks if a URL exists using the `url` parameter.

#### Syntax

		/register/checkurl?url={url_prefix}&apikey={apikey}

Where `{url_prefix}` is the part of the URL before ".primaerp.com" (e.g. myaccount.primaerp.com) Check if a particular URL account exists.

#### Example

		GET http://api.primaerp.com/v1/register/checkurl?url=myaccount&apikey={apikey}

## Check e-mail

This method checks if an e-mail address exists using the "email" query parameter.

#### Syntax

		/register/checkemail?email={email}&apikey={apikey}

Where `{email}` is an address to check if the particular e-mail exists

#### Example

		GET http://api.primaerp.com/v1/register/checkemail?email=info@example.com&apikey={apikey}

## Sign up

The "sign up" method creates a new account and returns its ID for subsequent confirmation using the "confirm" method.

The account data is sent in the body of a request which contains information about 
the [account](../resources/core/account.md) and the [user](../resources/core/user.md), who is the owner of the account. 
The sign up object can contain a list of users (optional) who will be registered under one account.

#### Syntax

		/register/signup

#### Example

		POST http://api.primaerp.com/v1/register/signup

```JSON
{
	"account": { ... },
	"owner": { ... },
	"users": [
	 { ... },
	 { ... },
	 .
	 .
	 .
	]
}
```

## Confirm

This method confirms a new user by using the query parameter "id" obtained from the "sign up" method.

#### Syntax

		/auth/confirm/{id}

#### Example

		POST http://{tenant}.api.primaerp.com/v1/auth/confirm/{id}

## Find URL

The following method looks for an URL address using the `email` query parameter.

#### Syntax

		register/findurl?email={email}&apikey={apikey}

#### Example

		GET http://api.primaerp.com/v1/register/findurl?email={email}&apikey={apikey}
