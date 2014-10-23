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
	"token" : "e22e96aa-938b-445a-bf82-24128b19131c",
	"expiration" : "/Date(1413990541064)/",
	"refreshToken" : "45470a4e-eae7-4452-9294-9485f57a2017",
	"refreshExpiration" : "/Date(1414595341064)/"
}
```
