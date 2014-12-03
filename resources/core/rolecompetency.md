RoleCompetency
==

## URL

	https://api.primaerp.com/v1/rolecompetencies

## Properties

| Name        | Type       | Access     | Required                                                               | Description                                                                                         |
|-------------|------------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| competency  | Competency | read only  | no                                                                     | If it is set, then the role is generated automatically and cannot be edited.                        |
| createdAt   | Date       | read only  | no                                                                     | Date of creation.                                                                                   |
| displayName | String     | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| id          | String     | read write | no                                                                     | Unique object identifier.                                                                           |
| role        | Role       | read write | no                                                                     | The role of an custom user's role. Built-in roles do not have a role.                               |
| trashItem   | TrashItem  | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date       | read only  | no                                                                     | Last modified date.                                                                                 |
| version     | Long       | read only  | no                                                                     | Object version number.                                                                              |

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
			"access" : "READ_ONLY"
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
	"id" : "1a00d964-0966-453a-9228-e73b9fb8b05f",
	"createdAt" : "/Date(1417603560113)/",
	"updatedAt" : "/Date(1417651740113)/",
	"version" : 3,
	"role" : {
		"id" : "61abdc39-ce95-4f3d-b2c9-a87f636d9a40",
		"createdAt" : "/Date(1417602360113)/",
		"updatedAt" : "/Date(1417676940113)/",
		"version" : 5,
		"name" : "Admin",
		"builtInRole" : "ADMIN",
		"roleType" : "EXPLICIT",
		"product" : "CORE",
		"displayName" : "ADMIN"
	},
	"competency" : "ACCOUNT_ADMIN",
	"displayName" : "eu.abra.primaerp.api.beans.system.permissions.Role@431649ad[name=Admin,builtInRole=ADMIN,roleType=EXPLICIT,product=CORE,id=61abdc39-ce95-4f3d-b2c9-a87f636d9a40,tenantId=<null>,trashItem=<null>,createdAt=Wed Dec 03 11:26:00 CET 2014,updatedAt=Thu Dec 04 08:09:00 CET 2014,version=5][ACCOUNT_ADMIN]"
}
```
