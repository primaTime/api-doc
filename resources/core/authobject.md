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
	"token" : "288ffa84-af16-40a8-9978-4702f9842f70",
	"expiration" : "/Date(1421144738766)/",
	"refreshToken" : "f1421bf1-8e49-4f4b-a37b-4dcd845df258",
	"refreshExpiration" : "/Date(1421745938766)/"
}
```
