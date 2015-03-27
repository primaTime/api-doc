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
	"token" : "f2a72e3c-41c1-464e-b851-1bd0b740460b",
	"expiration" : "/Date(1424886856134)/",
	"refreshToken" : "4306ba9f-253b-446f-939c-261bf9dfd6b3",
	"refreshExpiration" : "/Date(1425488056134)/"
}
```
