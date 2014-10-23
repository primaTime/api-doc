SecretKey
==

## URL

	https://api.primaerp.com/v1/users/@self/secretkeys

## Properties

| Name           | Type      | Access     | Description                                                                                         |
|----------------|-----------|------------|-----------------------------------------------------------------------------------------------------|
| createdAt      | Date      | read only  | Date of creation.                                                                                   |
| displayName    | String    | read only  | Describes an object in human readable form.                                                         |
| expiration     | Date      | read write | Expiration date of the secret key. For internal usage only.                                         |
| id             | String    | read write | Unique object identifier.                                                                           |
| name           | String    | read write | Describes intended use of the secret key.                                                           |
| registrationId | String    | read write | Registration ID for Google Cloud Messaging usage.                                                   |
| secretKey      | String    | read only  | A key for user authentication.                                                                      |
| senderId       | String    | read write | Sender ID for Google Cloud Messaging usage.                                                         |
| trashItem      | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt      | Date      | read only  | Last modified date.                                                                                 |
| user           | User      | read write | Provides info about the user for whom the secret Key was generated.                                 |
| version        | Long      | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "SecretKey",
	"fields" : [
		{
			"type" : "Date",
			"name" : "createdAt",
			"description" : "Date of creation.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "displayName",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "expiration",
			"description" : "Expiration date of the secret key. For internal usage only.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
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
			"name" : "name",
			"description" : "Describes intended use of the secret key.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "registrationId",
			"description" : "Registration ID for Google Cloud Messaging usage.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "secretKey",
			"description" : "A key for user authentication.",
			"access" : "READ_ONLY",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "String",
			"name" : "senderId",
			"description" : "Sender ID for Google Cloud Messaging usage.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "TrashItem",
			"name" : "trashItem",
			"description" : "Informs whether an object is in the trash. An object is in the trash if a trash item was specified.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "updatedAt",
			"description" : "Last modified date.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "User",
			"name" : "user",
			"description" : "Provides info about the user for whom the secret Key was generated.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Long",
			"name" : "version",
			"description" : "Object version number.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
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
	"id" : "6dc2af1e-fc7b-4b8b-b0ed-c1d54b4e2dc8",
	"createdAt" : "/Date(1413986159666)/",
	"updatedAt" : "/Date(1414015739666)/",
	"version" : 7,
	"user" : {
		"id" : "4ab84bab-be4e-481a-b6bd-ef2e8d55e1a6",
		"createdAt" : "/Date(1413985679666)/",
		"updatedAt" : "/Date(1414066139666)/",
		"version" : 2,
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
		"birthdayRemind" : "/Date(1414796400000)/",
		"workingTimeStart" : "/Date(1413957600000)/",
		"workingTimeEnd" : "/Date(1413990000000)/",
		"created" : "/Date(1413900539665)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"secretKey" : "c8576c98-757f-430a-bc66-5006a0400a90",
	"name" : "Chrome plugin",
	"senderId" : "6248151342",
	"registrationId" : "HPRgkF3VZjC9KtT8OvPVGJ-hQMRKRrZuDELjzEvxwYv7hH5OFEeco8ohsN5PjL1iC2dNtk2BAokeMCg2ZXKqpc8FXKmhX94kIxQ",
	"expiration" : "/Date(1416409739666)/",
	"displayName" : "Chrome plugin (c8576c98-757f-430a-bc66-5006a0400a90)"
}
```
