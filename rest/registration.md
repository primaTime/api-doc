Registration
==

## Overview

The API described below shows the REST methods for an authenticated user.

For a successful authentication, it should be called the "sign up" and "confirm" methods.

A more detailed description is presented in each method.

## Check URL

This method checks if a URL exists using the "url" parameter.

### Syntax

/register/checkurl?url={url\_prefix}&apikey={apikey}

values:

{url\_prefix} The part of the URL before ".primaerp.com" (e.g. myaccount.primaerp.com) Check if a particular URL account exists.

### Example

GET http://api.primaerp.com/v1/register/checkurl?url=myaccount&apikey={apikey}

## Check e-mail

This method checks if an e-mail address exists using the "email" query parameter.

### Syntax

/register/checkemail?email={email}&apikey={apikey}

values:

{email} check if the particular e-mail exists

### Example

GET http://api.primaerp.com/v1/register/checkemail?email=info@example.com&apikey={apikey}

## Sign up

The "sign up" method creates a new account and returns its' ID for subsequent confirmation using the "confirm" method.

The account data is sent in the body of a request which contains information about the [Account](http://devdoc.primaerp.com/resources/detail?entity=Account)and the [User](http://devdoc.primaerp.com/resources/detail?entity=User), who is the owner of the account. The sign up object can contain a list of users who will be registered under one account.

### Syntax

register/signup

### Example

POST http://api.primaerp.com/v1/register/signup

- JSON:
- {
-  "account": { ... },
-  "owner": { ... },
-  "users": [
-   { ... },
-   { ... },
-   .
-   .
-   .
-  ]
}

## Confirm

This method confirms a new user by using the query parameter "id" obtained from the "sign up" method.

### Syntax

auth/confirm?id={id}

### Example

POST http://{tenant}.api.primaerp.com/v1/auth/confirm?id={id}

## Find URL

The following method looks for an URL address using the "email" query parameter.

### Syntax

register/findurl?email={email}&apikey={apikey}

### Example

GET http://api.primaerp.com/v1/register/findurl?email={email}&apikey={apikey}
