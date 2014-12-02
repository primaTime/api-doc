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
| version     | Long       | read write | no                                                                     | Object version number.                                                                              |

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
	"id" : "3cd7a11c-0a59-4b01-ae02-fb08fce87e0d",
	"createdAt" : "/Date(1417521580870)/",
	"updatedAt" : "/Date(1417564900870)/",
	"version" : 0,
	"role" : {
		"id" : "40e488fb-15fc-4f38-88d2-2f8eec93bb93",
		"createdAt" : "/Date(1417521340870)/",
		"updatedAt" : "/Date(1417550500870)/",
		"version" : 6,
		"name" : "Admin",
		"builtInRole" : "ADMIN",
		"roleType" : "EXPLICIT",
		"product" : "CORE",
		"displayName" : "ADMIN"
	},
	"competency" : "ACCOUNT_ADMIN",
	"displayName" : "eu.abra.primaerp.api.beans.system.permissions.Role@292ed8e1[name=Admin,builtInRole=ADMIN,roleType=EXPLICIT,product=CORE,id=40e488fb-15fc-4f38-88d2-2f8eec93bb93,tenantId=<null>,trashItem=<null>,createdAt=Tue Dec 02 12:55:40 CET 2014,updatedAt=Tue Dec 02 21:01:40 CET 2014,version=6][ACCOUNT_ADMIN]"
}
```
