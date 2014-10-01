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
	"token" : "f7a63cfd-70ea-498a-8ffb-5e1b9c8a8897",
	"expiration" : "/Date(1412171809115)/",
	"refreshToken" : "fe2aa317-9178-4158-a8d1-40b7359473a2",
	"refreshExpiration" : "/Date(1412773009115)/"
}
```
