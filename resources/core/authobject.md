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
	"token" : "3a710ee9-3f35-4b2c-bb21-9ae5d8345717",
	"expiration" : "/Date(1416919918979)/",
	"refreshToken" : "674ec005-4eb0-447e-8d97-4b7ea51b68d0",
	"refreshExpiration" : "/Date(1417521118979)/"
}
```
