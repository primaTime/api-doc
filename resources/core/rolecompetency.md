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
	"path" : "/v1/rolecompetencies",
	"fields" : [
		{
			"type" : "Competency",
			"name" : "competency",
			"description" : "If it is set, then the role is generated automatically and cannot be edited.",
			"access" : "READ_ONLY"
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
			"path" : "/v1/roles",
			"name" : "role",
			"description" : "The role of an custom user's role. Built-in roles do not have a role.",
			"access" : "READ_WRITE"
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
	"id" : "0d000b03-9abf-46ef-8abc-c7c60f86e338",
	"createdAt" : "/Date(1416912837363)/",
	"updatedAt" : "/Date(1416959517363)/",
	"version" : 9,
	"role" : {
		"id" : "029b77ad-1cdd-4030-a5ab-bf246e87690c",
		"createdAt" : "/Date(1416914697363)/",
		"updatedAt" : "/Date(1416930717363)/",
		"version" : 1,
		"name" : "Admin",
		"builtInRole" : "ADMIN",
		"roleType" : "EXPLICIT",
		"product" : "CORE",
		"displayName" : "ADMIN"
	},
	"competency" : "ACCOUNT_ADMIN",
	"displayName" : "eu.abra.primaerp.api.beans.system.permissions.Role@406b7c3a[name=Admin,builtInRole=ADMIN,roleType=EXPLICIT,product=CORE,id=029b77ad-1cdd-4030-a5ab-bf246e87690c,tenantId=<null>,trashItem=<null>,createdAt=Tue Nov 25 12:24:57 CET 2014,updatedAt=Tue Nov 25 16:51:57 CET 2014,version=1][ACCOUNT_ADMIN]"
}
```
