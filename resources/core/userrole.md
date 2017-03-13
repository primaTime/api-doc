UserRole
==

## URL

	https://api.primaerp.com/v1/userroles

## Properties

| Name        | Type      | Access     | Required | Description                                                                                         |
|-------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| createdAt   | Date      | read only  | no       | Date of creation.                                                                                   |
| displayName | String    | read only  | no       | Describes an object in human readable form.                                                         |
| id          | String    | read write | no       | Unique object identifier.                                                                           |
| role        | Role      | read write | YES      | Role which has an user.                                                                             |
| trashItem   | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | no       | Last modified date.                                                                                 |
| user        | User      | read write | YES      | User who has a role.                                                                                |
| version     | Long      | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "UserRole",
	"path" : "/v1/userroles",
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
			"type" : "Role",
			"path" : "/v1/roles",
			"name" : "role",
			"description" : "Role which has an user.",
			"access" : "READ_WRITE",
			"constraints" : [
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
			"description" : "User who has a role.",
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
	"id" : "4fd35b4d-ba8e-44cf-b348-aef50778a4e8",
	"createdAt" : "/Date(1489387333790)/",
	"updatedAt" : "/Date(1489427593790)/",
	"version" : 1,
	"user" : {
		"id" : "da8d4c71-5356-49e9-80a6-382291ef955a",
		"createdAt" : "/Date(1489387453790)/",
		"updatedAt" : "/Date(1489452793790)/",
		"version" : 3,
		"firstName" : "John",
		"lastName" : "Doe",
		"nickName" : "Johny D.",
		"email" : "john.doe@example.com",
		"phone" : "55 234 555 678",
		"position" : "Senior developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "yyyy-MM-dd",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "pt_BR",
		"password" : "",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1491256800000)/",
		"workingTimeStart" : "/Date(1489388400000)/",
		"workingTimeEnd" : "/Date(1489420800000)/",
		"created" : "/Date(1489301593789)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"role" : {
		"id" : "e49aaef0-6a78-43a2-8259-94447d5bf738",
		"createdAt" : "/Date(1489384513790)/",
		"updatedAt" : "/Date(1489445593790)/",
		"version" : 2,
		"name" : "Admin",
		"builtInRole" : "ADMIN",
		"roleType" : "EXPLICIT",
		"product" : "CORE",
		"displayName" : "ADMIN"
	},
	"displayName" : "Doe John [ADMIN]"
}
```
