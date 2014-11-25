SpendingTimeUnit
==

## URL

	https://api.primaerp.com/v1/spendingtime

## Properties

| Name        | Type      | Access     | Description                                                                                                                                        |
|-------------|-----------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| begin       | Date      | read write | Time when user begins spending his time.                                                                                                           |
| createdAt   | Date      | read only  | Date of creation.                                                                                                                                  |
| displayName | String    | read only  | Describes an object in human readable form.                                                                                                        |
| duration    | Long      | read write | Length of the activity between the beginning and the end (in milliseconds). Can also be just a part of the time between the beginning and the end. |
| end         | Date      | read write | Time when user ends spending his time.                                                                                                             |
| id          | String    | read write | Unique object identifier.                                                                                                                          |
| trashItem   | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified.                                                |
| updatedAt   | Date      | read only  | Last modified date.                                                                                                                                |
| user        | User      | read write | User who spends time.                                                                                                                              |
| version     | Long      | read write | Object version number.                                                                                                                             |

## Metadata

```JSON
{
	"type" : "SpendingTimeUnit",
	"path" : "/v1/spendingtime",
	"fields" : [
		{
			"type" : "Date",
			"name" : "begin",
			"description" : "Time when user begins spending his time.",
			"access" : "READ_WRITE"
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
			"type" : "Long",
			"name" : "duration",
			"description" : "Length of the activity between the beginning and the end (in milliseconds). Can also be just a part of the time between the beginning and the end.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "end",
			"description" : "Time when user ends spending his time.",
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
					"pattern" : "[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
				},
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
			"description" : "User who spends time.",
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
	"id" : "f6696b2a-4afa-4a9c-a50c-c9099889774f",
	"createdAt" : "/Date(1416914157718)/",
	"updatedAt" : "/Date(1416966717718)/",
	"version" : 6,
	"user" : {
		"id" : "33f66ab7-853d-4887-a282-cc3c06199211",
		"createdAt" : "/Date(1416914337718)/",
		"updatedAt" : "/Date(1416973917718)/",
		"version" : 1,
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
		"created" : "/Date(1416829917718)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"begin" : "/Date(1416887517718)/",
	"end" : "/Date(1416913437718)/",
	"duration" : 1200000,
	"displayName" : "20m"
}
```
