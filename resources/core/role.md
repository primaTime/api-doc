Role
==

## URL

	https://api.primaerp.com/v1/roles

## Properties

| Name        | Type        | Access     | Description                                                                                         |
|-------------|-------------|------------|-----------------------------------------------------------------------------------------------------|
| builtInRole | BuiltInRole | read only  | If it is set, then the role is generated automatically and cannot be edited.                        |
| createdAt   | Date        | read only  | Date of creation.                                                                                   |
| displayName | String      | read only  | Describes an object in human readable form.                                                         |
| id          | String      | read write | Unique object identifier.                                                                           |
| name        | String      | read write | The name of an custom user's role. Built-in roles do not have a name.                               |
| product     | Product     | read write | Product, only custom roles can be edited.                                                           |
| roleType    | RoleType    | read write | Role type, only custom roles can be edited.                                                         |
| trashItem   | TrashItem   | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date        | read only  | Last modified date.                                                                                 |
| version     | Long        | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Role",
	"fields" : [
		{
			"type" : "BuiltInRole",
			"name" : "builtInRole",
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
			"type" : "String",
			"name" : "name",
			"description" : "The name of an custom user's role. Built-in roles do not have a name.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Product",
			"name" : "product",
			"description" : "Product, only custom roles can be edited.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "RoleType",
			"name" : "roleType",
			"description" : "Role type, only custom roles can be edited.",
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
	"id" : "96ddfdd9-eb57-46fb-8cc8-b62fe40c3d9e",
	"createdAt" : "/Date(1412167128342)/",
	"updatedAt" : "/Date(1412207808342)/",
	"version" : 8,
	"name" : "Admin",
	"builtInRole" : "ADMIN",
	"roleType" : "EXPLICIT",
	"product" : "CORE",
	"displayName" : "ADMIN"
}
```
