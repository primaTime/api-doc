AccessToken
==

## URL

	https://api.primaerp.com/v1/users/@self/accesstokens

## Properties

| Name        | Type      | Access     | Description                                                                                         |
|-------------|-----------|------------|-----------------------------------------------------------------------------------------------------|
| accessToken | String    | read write | Unique access token obtained from provider.                                                         |
| accountName | String    | read write | Account name identifies the user with the provider, i.e. e-mail address.                            |
| createdAt   | Date      | read only  | Date of creation.                                                                                   |
| displayName | String    | read only  | Describes an object in human readable form.                                                         |
| id          | String    | read write | Unique object identifier.                                                                           |
| provider    | String    | read write | Access token provider.                                                                              |
| trashItem   | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | Last modified date.                                                                                 |
| user        | User      | read write | Associated user.                                                                                    |
| version     | Long      | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "AccessToken",
	"path" : "/v1/users/@self/accesstokens",
	"fields" : [
		{
			"type" : "String",
			"name" : "accessToken",
			"description" : "Unique access token obtained from provider.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "String",
			"name" : "accountName",
			"description" : "Account name identifies the user with the provider, i.e. e-mail address.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "Date",
			"name" : "createdAt",
			"description" : "Date of creation.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "String",
			"name" : "displayName",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "String",
			"name" : "id",
			"description" : "Unique object identifier.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Pattern",
					"pattern" : "[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
				},
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "String",
			"name" : "provider",
			"description" : "Access token provider.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "TrashItem",
			"path" : "/v1/trash",
			"name" : "trashItem",
			"description" : "Informs whether an object is in the trash. An object is in the trash if a trash item was specified.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "updatedAt",
			"description" : "Last modified date.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "User",
			"path" : "/v1/users",
			"name" : "user",
			"description" : "Associated user.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "Long",
			"name" : "version",
			"description" : "Object version number.",
			"access" : "READ_WRITE"
		}
	],
	"cascades" : [
		{
			"cascadeType" : "REMOVE",
			"objectTypes" : [
				"TrashItem"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "8a2efe3a-70df-4995-bdf5-beee62337ea7",
	"createdAt" : "/Date(1416913377989)/",
	"updatedAt" : "/Date(1416973917989)/",
	"version" : 5,
	"provider" : "google",
	"accessToken" : "your-google-account-authentication-id",
	"accountName" : "jsmith@gmail.com",
	"user" : {
		"id" : "b8eda06f-89b5-4cb9-bb40-7da742bd36f5",
		"createdAt" : "/Date(1416913977989)/",
		"updatedAt" : "/Date(1416941517989)/",
		"version" : 5,
		"firstName" : "John",
		"lastName" : "Smith",
		"nickName" : "Smith, J.",
		"email" : "john.smith@example.com",
		"phone" : "55 123 444 567",
		"position" : "Chief developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "dd/MM/yyyy",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "en_US",
		"password" : "",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1417734000000)/",
		"workingTimeStart" : "/Date(1416898800000)/",
		"workingTimeEnd" : "/Date(1416931200000)/",
		"created" : "/Date(1416829917989)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"displayName" : "jsmith@gmail.com"
}
```
