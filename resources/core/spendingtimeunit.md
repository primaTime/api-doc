SpendingTimeUnit
==

## URL

	https://api.primaerp.com/v1/spendingtime

## Properties

| Name        | Type      | Access     | Required                                                               | Description                                                                                                                                        |
|-------------|-----------|------------|------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| begin       | Date      | read write | no                                                                     | Time when user begins spending his time.                                                                                                           |
| createdAt   | Date      | read only  | no                                                                     | Date of creation.                                                                                                                                  |
| displayName | String    | read only  | no                                                                     | Describes an object in human readable form.                                                                                                        |
| duration    | Long      | read write | no                                                                     | Length of the activity between the beginning and the end (in milliseconds). Can also be just a part of the time between the beginning and the end. |
| end         | Date      | read write | no                                                                     | Time when user ends spending his time.                                                                                                             |
| id          | String    | read write | no                                                                     | Unique object identifier.                                                                                                                          |
| trashItem   | TrashItem | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified.                                                |
| updatedAt   | Date      | read only  | no                                                                     | Last modified date.                                                                                                                                |
| user        | User      | read write | YES                                                                    | User who spends time.                                                                                                                              |
| version     | Long      | read write | no                                                                     | Object version number.                                                                                                                             |

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
					"details" : "regexp [0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
				},
				{
					"type" : "NotNull"
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
	"id" : "e5656cac-6976-4eeb-bfe0-7c5c8e0ac98d",
	"createdAt" : "/Date(1417520441883)/",
	"updatedAt" : "/Date(1417557701883)/",
	"version" : 9,
	"user" : {
		"id" : "75a1c7c5-04b5-4d11-90e4-9fde449abd1c",
		"createdAt" : "/Date(1417519781883)/",
		"updatedAt" : "/Date(1417561301883)/",
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
		"birthdayRemind" : "/Date(1418338800000)/",
		"workingTimeStart" : "/Date(1417503600000)/",
		"workingTimeEnd" : "/Date(1417536000000)/",
		"created" : "/Date(1417435301883)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"begin" : "/Date(1417492901883)/",
	"end" : "/Date(1417518821883)/",
	"duration" : 1200000,
	"displayName" : "20m"
}
```
