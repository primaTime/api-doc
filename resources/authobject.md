AuthObject
==

## URL

	http://api.primaerp.com/v1/authobjects

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
	"token" : "2d219518-66c8-4c3f-a0b3-fafbd24a2128",
	"expiration" : "/Date(1408434726672)/",
	"refreshToken" : "46cac76b-8f53-4937-818f-e586d1e49912",
	"refreshExpiration" : "/Date(1409035926672)/"
}
```
