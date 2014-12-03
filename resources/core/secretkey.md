SecretKey
==

## URL

	https://api.primaerp.com/v1/users/@self/secretkeys

## Properties

| Name           | Type      | Access     | Required                                                               | Description                                                                                         |
|----------------|-----------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| createdAt      | Date      | read only  | no                                                                     | Date of creation.                                                                                   |
| displayName    | String    | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| expiration     | Date      | read write | no                                                                     | Expiration date of the secret key. For internal usage only.                                         |
| id             | String    | read write | no                                                                     | Unique object identifier.                                                                           |
| name           | String    | read write | no                                                                     | Describes intended use of the secret key.                                                           |
| registrationId | String    | read write | no                                                                     | Registration ID for Google Cloud Messaging usage.                                                   |
| secretKey      | String    | read only  | no                                                                     | A key for user authentication.                                                                      |
| senderId       | String    | read write | no                                                                     | Sender ID for Google Cloud Messaging usage.                                                         |
| trashItem      | TrashItem | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt      | Date      | read only  | no                                                                     | Last modified date.                                                                                 |
| user           | User      | read write | no                                                                     | Provides info about the user for whom the secret Key was generated.                                 |
| version        | Long      | read only  | no                                                                     | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "SecretKey",
	"path" : "/v1/users/@self/secretkeys",
	"fields" : [
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
			"type" : "Date",
			"name" : "expiration",
			"description" : "Expiration date of the secret key. For internal usage only.",
			"access" : "READ_WRITE"
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
			"name" : "name",
			"description" : "Describes intended use of the secret key.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "registrationId",
			"description" : "Registration ID for Google Cloud Messaging usage.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "secretKey",
			"description" : "A key for user authentication.",
			"access" : "READ_ONLY",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "String",
			"name" : "senderId",
			"description" : "Sender ID for Google Cloud Messaging usage.",
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
			"description" : "Provides info about the user for whom the secret Key was generated.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Long",
			"name" : "version",
			"description" : "Object version number.",
			"access" : "READ_ONLY"
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
	"id" : "24e55ee4-33ae-49ac-bb3f-b100662ef1e3",
	"createdAt" : "/Date(1417602119819)/",
	"updatedAt" : "/Date(1417673339819)/",
	"version" : 5,
	"user" : {
		"id" : "1e1342d7-0572-47a0-878a-d01e14a3f837",
		"createdAt" : "/Date(1417602959819)/",
		"updatedAt" : "/Date(1417633739819)/",
		"version" : 3,
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
		"birthdayRemind" : "/Date(1418425200000)/",
		"workingTimeStart" : "/Date(1417590000000)/",
		"workingTimeEnd" : "/Date(1417622400000)/",
		"created" : "/Date(1417518539818)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"secretKey" : "77e32c59-1b86-4a71-9ed2-2acef2a1d222",
	"name" : "Chrome plugin",
	"senderId" : "6248151342",
	"registrationId" : "HPRgkF3VZjC9KtT8OvPVGJ-hQMRKRrZuDELjzEvxwYv7hH5OFEeco8ohsN5PjL1iC2dNtk2BAokeMCg2ZXKqpc8FXKmhX94kIxQ",
	"expiration" : "/Date(1420024139818)/",
	"displayName" : "Chrome plugin (77e32c59-1b86-4a71-9ed2-2acef2a1d222)"
}
```
