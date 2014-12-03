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
	"token" : "05cdeb9b-614d-4755-8d1d-b652da0214ec",
	"expiration" : "/Date(1417608541362)/",
	"refreshToken" : "6d6f442a-fbc9-4fc4-a9f7-6ae6e120ff4f",
	"refreshExpiration" : "/Date(1418209741362)/"
}
```
