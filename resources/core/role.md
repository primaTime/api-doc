Role
==

## URL

	https://api.primaerp.com/v1/roles

## Properties

| Name        | Type        | Access     | Required                                                               | Description                                                                                         |
|-------------|-------------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| builtInRole | BuiltInRole | read only  | no                                                                     | If it is set, then the role is generated automatically and cannot be edited.                        |
| createdAt   | Date        | read only  | no                                                                     | Date of creation.                                                                                   |
| displayName | String      | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| id          | String      | read write | no                                                                     | Unique object identifier.                                                                           |
| name        | String      | read write | no                                                                     | The name of an custom user's role. Built-in roles do not have a name.                               |
| product     | Product     | read write | no                                                                     | Product, only custom roles can be edited.                                                           |
| roleType    | RoleType    | read write | no                                                                     | Role type, only custom roles can be edited.                                                         |
| trashItem   | TrashItem   | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date        | read only  | no                                                                     | Last modified date.                                                                                 |
| version     | Long        | read write | no                                                                     | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Role",
	"path" : "/v1/roles",
	"fields" : [
		{
			"type" : "BuiltInRole",
			"name" : "builtInRole",
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
			"type" : "String",
			"name" : "name",
			"description" : "The name of an custom user's role. Built-in roles do not have a name.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Product",
			"name" : "product",
			"description" : "Product, only custom roles can be edited.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "RoleType",
			"name" : "roleType",
			"description" : "Role type, only custom roles can be edited.",
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
	"id" : "b1130582-aa4a-470c-8cc9-d5c8dbb17b8d",
	"createdAt" : "/Date(1417520441652)/",
	"updatedAt" : "/Date(1417543301652)/",
	"version" : 1,
	"name" : "Admin",
	"builtInRole" : "ADMIN",
	"roleType" : "EXPLICIT",
	"product" : "CORE",
	"displayName" : "ADMIN"
}
```
