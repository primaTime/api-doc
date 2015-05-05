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
	"token" : "a0e59247-9a89-4237-bcb2-cac0bb6b824e",
	"expiration" : "/Date(1430146315016)/",
	"refreshToken" : "bdde42f1-0af4-466e-ba94-143777d1cc2b",
	"refreshExpiration" : "/Date(1430747515016)/"
}
```
