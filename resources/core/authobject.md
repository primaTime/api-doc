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
	"token" : "12522799-3f62-442e-bfaf-11378c5982ee",
	"expiration" : "/Date(1651054107480)/",
	"refreshToken" : "bf4f9ca9-f311-4b9e-8a13-36104a5745f1",
	"refreshExpiration" : "/Date(1651655307480)/"
}
```
