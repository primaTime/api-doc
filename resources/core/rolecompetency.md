RoleCompetency
==

## URL

	https://api.primaerp.com/v1/rolecompetencies

## Properties

| Name        | Type       | Access     | Description                                                                                         |
|-------------|------------|------------|-----------------------------------------------------------------------------------------------------|
| competency  | Competency | read only  | If it is set, then the role is generated automatically and cannot be edited.                        |
| createdAt   | Date       | read only  | Date of creation.                                                                                   |
| displayName | String     | read only  | Describes an object in human readable form.                                                         |
| id          | String     | read write | Unique object identifier.                                                                           |
| role        | Role       | read write | The role of an custom user's role. Built-in roles do not have a role.                               |
| trashItem   | TrashItem  | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date       | read only  | Last modified date.                                                                                 |
| version     | Long       | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "RoleCompetency",
	"fields" : [
		{
			"type" : "Competency",
			"name" : "competency",
			"description" : "If it is set, then the role is generated automatically and cannot be edited.",
			"access" : "READ_ONLY",
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
			"type" : "Role",
			"name" : "role",
			"description" : "The role of an custom user's role. Built-in roles do not have a role.",
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
	"id" : "36fcda2c-e653-4baa-8d6f-f2a305f514a0",
	"createdAt" : "/Date(1413983460411)/",
	"updatedAt" : "/Date(1414026540411)/",
	"version" : 4,
	"role" : {
		"id" : "165d385b-a902-47e9-8dd6-e2266a182a22",
		"createdAt" : "/Date(1413986460411)/",
		"updatedAt" : "/Date(1413997740411)/",
		"version" : 7,
		"name" : "Admin",
		"builtInRole" : "ADMIN",
		"roleType" : "EXPLICIT",
		"product" : "CORE",
		"displayName" : "ADMIN"
	},
	"competency" : "ACCOUNT_ADMIN",
	"displayName" : "eu.abra.primaerp.api.beans.system.permissions.Role@11013c4b[name=Admin,builtInRole=ADMIN,roleType=EXPLICIT,product=CORE,id=165d385b-a902-47e9-8dd6-e2266a182a22,tenantId=<null>,trashItem=<null>,createdAt=Wed Oct 22 16:01:00 CEST 2014,updatedAt=Wed Oct 22 19:09:00 CEST 2014,version=7][ACCOUNT_ADMIN]"
}
```
