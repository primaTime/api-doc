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
	"token" : "42090cbd-dd24-4de4-9c65-14a22989ea6c",
	"expiration" : "/Date(1417525301906)/",
	"refreshToken" : "6e47daf5-6046-4ffb-a463-18675123417f",
	"refreshExpiration" : "/Date(1418126501906)/"
}
```
