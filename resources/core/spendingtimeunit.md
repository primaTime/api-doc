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
	"id" : "3b1dd458-fc20-4df6-92d2-7a0a4716a0e3",
	"createdAt" : "/Date(1650451673722)/",
	"updatedAt" : "/Date(1650528653722)/",
	"version" : 4,
	"user" : {
		"id" : "38aeef68-7491-43e8-91c1-7073f04e91b3",
		"createdAt" : "/Date(1650452513722)/",
		"updatedAt" : "/Date(1650453053722)/",
		"version" : 8,
		"firstName" : "John",
		"lastName" : "Doe",
		"nickName" : "Johny D.",
		"email" : "nlmebxgr11t2vh6@testdata.com",
		"phone" : "55 234 555 678",
		"position" : "Senior developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "yyyy-MM-dd",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "pt_BR",
		"password" : "z90yaxzkee7m8haxjj44",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1652306400000)/",
		"workingTimeStart" : "/Date(1650434400000)/",
		"workingTimeEnd" : "/Date(1650466800000)/",
		"created" : "/Date(1650366653721)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"begin" : "/Date(1650424253722)/",
	"end" : "/Date(1650450173722)/",
	"duration" : 1200000,
	"displayName" : "20m"
}
```
