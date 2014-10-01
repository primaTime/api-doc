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
	"id" : "afc5eae9-1673-4783-9608-853be1bb577f",
	"createdAt" : "/Date(1412167967101)/",
	"updatedAt" : "/Date(1412240207101)/",
	"version" : 9,
	"role" : {
		"id" : "72cd1c9b-1383-4f21-aeb9-7de77913c61b",
		"createdAt" : "/Date(1412167067101)/",
		"updatedAt" : "/Date(1412243807101)/",
		"version" : 3,
		"name" : "Admin",
		"builtInRole" : "ADMIN",
		"roleType" : "EXPLICIT",
		"product" : "CORE",
		"displayName" : "ADMIN"
	},
	"competency" : "ACCOUNT_ADMIN",
	"displayName" : "eu.abra.primaerp.api.beans.system.permissions.Role@5180e33d[name=Admin,builtInRole=ADMIN,roleType=EXPLICIT,product=CORE,id=72cd1c9b-1383-4f21-aeb9-7de77913c61b,tenantId=<null>,trashItem=<null>,createdAt=Wed Oct 01 14:37:47 CEST 2014,updatedAt=Thu Oct 02 11:56:47 CEST 2014,version=3][ACCOUNT_ADMIN]"
}
```
