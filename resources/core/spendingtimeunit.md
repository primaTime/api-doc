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
	"fields" : [
		{
			"type" : "Date",
			"name" : "begin",
			"description" : "Time when user begins spending his time.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
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
			"type" : "Long",
			"name" : "duration",
			"description" : "Length of the activity between the beginning and the end (in milliseconds). Can also be just a part of the time between the beginning and the end.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "end",
			"description" : "Time when user ends spending his time.",
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
	"id" : "67274330-3b8d-457a-97dc-af2ffb658506",
	"createdAt" : "/Date(1413986100159)/",
	"updatedAt" : "/Date(1414040940159)/",
	"version" : 3,
	"user" : {
		"id" : "aab0c532-aafb-4563-85d8-7b239adf09f5",
		"createdAt" : "/Date(1413986160159)/",
		"updatedAt" : "/Date(1414012140159)/",
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
		"birthdayRemind" : "/Date(1414796400000)/",
		"workingTimeStart" : "/Date(1413957600000)/",
		"workingTimeEnd" : "/Date(1413990000000)/",
		"created" : "/Date(1413900540158)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"begin" : "/Date(1413958140159)/",
	"end" : "/Date(1413984060159)/",
	"duration" : 1200000,
	"displayName" : "20m"
}
```
