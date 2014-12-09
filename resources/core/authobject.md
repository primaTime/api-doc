AuthObject
==

## Properties

| Name              | Type   | Access     | Required | Description                                          |
|-------------------|--------|------------|----|------------------------------------------------------|
| expiration        | Date   | read write | no | Expiration of the authentication token.              |
| refreshexpiration | Date   | read write | no | Expiration of the authentication token.              |
| refreshtoken      | String | read write | no | Refresh the token for the authetication token renew. |
| token             | String | read write | no | Authentication token for the current user.           |

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
	"token" : "cb6a2c40-4a4f-40e9-b621-03f7dec93c52",
	"expiration" : "/Date(1418068291679)/",
	"refreshToken" : "1286aaf1-da93-49d3-89dc-7ffe40ffeea5",
	"refreshExpiration" : "/Date(1418669491679)/"
}
```
