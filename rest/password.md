Password
==

## Change password

The process of changing the password follows two steps:

- Get a confirmation ID
- The [Basic access authentication](http://en.wikipedia.org/wiki/Basic_access_authentication)

## First step:

Get a confirmation ID via an authorized or unauthorized request. Both alternatives are equivalent.

#### Syntax

Unauthorized request

		/requestconfirmation?apikey={apikey}&email={email}

Authorized request

		/users/{id}/$confirmation?token={token}

#### Example

## Unauthorized request

		POST http://api.primaerp.com/v1/users/requestconfirmation?apikey={apikey}&email={email}

## Authorized request

		POST http://{tenant}.api.primaerp.com/v1/users/{id}/$confirmation?token={token}

## Second step:

Send a confirmation ID with the "Authorization" header including 
the [Basic authentication](http://en.wikipedia.org/wiki/Basic_access_authentication) and password only (in Base64).

#### Syntax

		/auth/confirm/{confirmation_id}?apikey={apikey}

#### Example

		POST http://api.primaerp.com/v1/auth/confirm/{confirmation_id}?apikey={apikey}

Header in Base64: `Authorization: Basic :{password}`
