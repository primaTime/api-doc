SpendingTimeUnit
==

## URL

	https://api.primaerp.com/v1/spendingtime

## Properties

| Name        | Type      | Access     | Required | Description                                                                                                                                        |
|-------------|-----------|------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| begin       | Date      | read write | no       | Time when user begins spending his time.                                                                                                           |
| createdAt   | Date      | read only  | no       | Date of creation.                                                                                                                                  |
| displayName | String    | read only  | no       | Describes an object in human readable form.                                                                                                        |
| duration    | Long      | read write | no       | Length of the activity between the beginning and the end (in milliseconds). Can also be just a part of the time between the beginning and the end. |
| end         | Date      | read write | no       | Time when user ends spending his time.                                                                                                             |
| id          | String    | read write | no       | Unique object identifier.                                                                                                                          |
| trashItem   | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified.                                                |
| updatedAt   | Date      | read only  | no       | Last modified date.                                                                                                                                |
| user        | User      | read write | YES      | User who spends time.                                                                                                                              |
| version     | Long      | read write | no       | Object version number.                                                                                                                             |

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
	"id" : "dcc41073-3795-4d15-b7fd-7806c7630b15",
	"createdAt" : "/Date(1489385294008)/",
	"updatedAt" : "/Date(1489409594008)/",
	"version" : 2,
	"user" : {
		"id" : "f62ca697-88f4-4228-88d2-6cf1d6d1fa20",
		"createdAt" : "/Date(1489387034008)/",
		"updatedAt" : "/Date(1489456394008)/",
		"version" : 8,
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
		"birthdayRemind" : "/Date(1490223600000)/",
		"workingTimeStart" : "/Date(1489388400000)/",
		"workingTimeEnd" : "/Date(1489420800000)/",
		"created" : "/Date(1489301594008)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"begin" : "/Date(1489359194008)/",
	"end" : "/Date(1489385114008)/",
	"duration" : 1200000,
	"displayName" : "20m"
}
```
