AuthObject
==

## Properties

| Name              | Type   | Access     | Description                                          |
|-------------------|--------|------------|------------------------------------------------------|
| expiration        | Date   | read write | Expiration of the authentication token.              |
| refreshexpiration | Date   | read write | Expiration of the authentication token.              |
| refreshtoken      | String | read write | Refresh the token for the authetication token renew. |
| token             | String | read write | Authentication token for the current user.           |

## Metadata

```JSON
{
	"type" : "AuthObject",
	"fields" : [
		{
			"type" : "Date",
			"name" : "expiration",
			"description" : "Expiration of the authentication token.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "refreshexpiration",
			"description" : "Expiration of the authentication token.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "refreshtoken",
			"description" : "Refresh the token for the authetication token renew.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "token",
			"description" : "Authentication token for the current user.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		}
	],
	"cascades" : [ ]
}
```

## Dummy data

```JSON
{
	"token" : "d401e2cf-b445-4990-be65-df07c12224a7",
	"expiration" : "/Date(1408467115718)/",
	"refreshToken" : "7eea2f9d-2751-4892-8db0-7e8301b90dca",
	"refreshExpiration" : "/Date(1409068315718)/"
}
```
