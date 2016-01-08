AccessToken
==

## URL

	https://api.primaerp.com/v1/users/@self/accesstokens

## Properties

| Name         | Type      | Access     | Required | Description                                                                                         |
|--------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| accessToken  | String    | read write | YES      | Unique access token obtained from provider.                                                         |
| accountName  | String    | read write | YES      | Account name identifies the user with the provider, i.e. e-mail address.                            |
| createdAt    | Date      | read only  | no       | Date of creation.                                                                                   |
| displayName  | String    | read only  | no       | Describes an object in human readable form.                                                         |
| id           | String    | read write | no       | Unique object identifier.                                                                           |
| provider     | String    | read write | YES      | Access token provider.                                                                              |
| refreshToken | String    | read write | no       | Refresh token obtained from the provider.                                                           |
| trashItem    | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt    | Date      | read only  | no       | Last modified date.                                                                                 |
| user         | User      | read write | YES      | Associated user.                                                                                    |
| version      | Long      | read write | no       | Object version number.                                                                              |

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
					"type" : "NotNull"
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
					"type" : "NotNull"
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
					"details" : "regexp [0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
				},
				{
					"type" : "NotNull"
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
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "String",
			"name" : "refreshToken",
			"description" : "Refresh token obtained from the provider.",
			"access" : "READ_WRITE"
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
					"type" : "NotNull"
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
	"id" : "9f74cb4b-4940-4ed2-bdbb-3c194ce6fe0c",
	"createdAt" : "/Date(1452254237508)/",
	"updatedAt" : "/Date(1452264557508)/",
	"version" : 8,
	"provider" : "google",
	"accessToken" : "8974987412978974984",
	"accountName" : "jsmith@gmail.com",
	"user" : {
		"id" : "af3971d9-5f6d-4a00-bf67-f78f827494b7",
		"createdAt" : "/Date(1452256337508)/",
		"updatedAt" : "/Date(1452282557508)/",
		"version" : 6,
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
		"birthdayRemind" : "/Date(1453071600000)/",
		"workingTimeStart" : "/Date(1452236400000)/",
		"workingTimeEnd" : "/Date(1452268800000)/",
		"created" : "/Date(1452170957508)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"refreshToken" : "blX09ao39021das92394=29384/0283na3bgcx2234",
	"displayName" : "jsmith@gmail.com"
}
```
