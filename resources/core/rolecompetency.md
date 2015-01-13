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
	"id" : "d4be3d83-efe1-4828-827c-19d1913f7aa3",
	"createdAt" : "/Date(1421139756681)/",
	"updatedAt" : "/Date(1421223936681)/",
	"version" : 3,
	"role" : {
		"id" : "a662a0ec-b549-4ab9-b759-3a283730241c",
		"createdAt" : "/Date(1421137836681)/",
		"updatedAt" : "/Date(1421159136681)/",
		"version" : 2,
		"name" : "Admin",
		"builtInRole" : "ADMIN",
		"roleType" : "EXPLICIT",
		"product" : "CORE",
		"displayName" : "ADMIN"
	},
	"competency" : "ACCOUNT_ADMIN",
	"displayName" : "eu.abra.primaerp.api.beans.system.permissions.Role@4e88cda1[name=Admin,builtInRole=ADMIN,roleType=EXPLICIT,product=CORE,id=a662a0ec-b549-4ab9-b759-3a283730241c,tenantId=<null>,trashItem=<null>,createdAt=Tue Jan 13 09:30:36 CET 2015,updatedAt=Tue Jan 13 15:25:36 CET 2015,version=2][ACCOUNT_ADMIN]"
}
```
