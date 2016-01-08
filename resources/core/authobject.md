AuthObject
==

## Properties

| Name              | Type   | Access     | Required | Description                                          |
|-------------------|--------|------------|----------|------------------------------------------------------|
| expiration        | Date   | read write | no       | Expiration of the authentication token.              |
| refreshexpiration | Date   | read write | no       | Expiration of the authentication token.              |
| refreshtoken      | String | read write | no       | Refresh the token for the authetication token renew. |
| token             | String | read write | no       | Authentication token for the current user.           |

## Metadata

```JSON
{
	"type" : "AuthObject",
	"fields" : [
		{
			"type" : "Date",
			"name" : "expiration",
			"description" : "Expiration of the authentication token.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "refreshexpiration",
			"description" : "Expiration of the authentication token.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "refreshtoken",
			"description" : "Refresh the token for the authetication token renew.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "token",
			"description" : "Authentication token for the current user.",
			"access" : "READ_WRITE"
		}
	]
}
```

## Dummy data

```JSON
{
	"token" : "5bff7a36-79c5-4e45-83bd-33618287fdcc",
	"expiration" : "/Date(1452260959464)/",
	"refreshToken" : "820c26ac-568d-4853-b52b-14ca2db33a3c",
	"refreshExpiration" : "/Date(1452862159464)/"
}
```
