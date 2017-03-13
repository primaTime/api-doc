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
	"token" : "bd66d548-b7e6-4457-b793-6c57397d0a7c",
	"expiration" : "/Date(1489391595397)/",
	"refreshToken" : "069cd7e7-c57b-40c5-8efe-94deb1710a6c",
	"refreshExpiration" : "/Date(1489992795397)/"
}
```
