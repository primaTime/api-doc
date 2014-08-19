RoleCompetency
==

## URL

	http://api.primaerp.com/v1/rolecompetencies

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
	"id" : "e569c350-a017-4891-9d39-a5369c7e83da",
	"createdAt" : "/Date(1408428064521)/",
	"updatedAt" : "/Date(1408495924521)/",
	"version" : 4,
	"role" : {
		"id" : "1a50f181-582a-497b-b26b-54bb3273dec3",
		"createdAt" : "/Date(1408429684521)/",
		"updatedAt" : "/Date(1408495924521)/",
		"version" : 6,
		"name" : "Admin",
		"builtInRole" : "ADMIN",
		"roleType" : "EXPLICIT",
		"product" : "CORE",
		"displayName" : "ADMIN"
	},
	"competency" : "ACCOUNT_ADMIN",
	"displayName" : "eu.abra.primaerp.api.beans.system.permissions.Role@7786352b[name=Admin,builtInRole=ADMIN,roleType=EXPLICIT,product=CORE,id=1a50f181-582a-497b-b26b-54bb3273dec3,tenantId=<null>,trashItem=<null>,createdAt=Tue Aug 19 08:28:04 CEST 2014,updatedAt=Wed Aug 20 02:52:04 CEST 2014,version=6][ACCOUNT_ADMIN]"
}
```
