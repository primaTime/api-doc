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
	"token" : "32e53771-4b56-46e7-8d62-9353678fa53e",
	"expiration" : "/Date(1481625530392)/",
	"refreshToken" : "0f978668-5d40-4ba3-977a-8d8f8444a202",
	"refreshExpiration" : "/Date(1482226730392)/"
}
```
