ExternalSystem
==

## URL

	https://api.primaerp.com/v1/externalsystems

## Properties

| Name              | Type      | Access     | Description                                                                                         |
|-------------------|-----------|------------|-----------------------------------------------------------------------------------------------------|
| createdAt         | Date      | read only  | Date of creation.                                                                                   |
| displayName       | String    | read only  | Describes an object in human readable form.                                                         |
| id                | String    | read write | Unique object identifier.                                                                           |
| integrationPlugin | String    | read write | The name of the third-party system integrated into primaERP.                                        |
| name              | String    | read write | The name of the external system                                                                     |
| trashItem         | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt         | Date      | read only  | Last modified date.                                                                                 |
| version           | Long      | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "ExternalSystem",
	"fields" : [
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
			"name" : "integrationPlugin",
			"description" : "The name of the third-party system integrated into primaERP.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "name",
			"description" : "The name of the external system",
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
	"id" : "78e043f8-e7bf-4acf-a502-f6bb5c6d8f25",
	"createdAt" : "/Date(1408461475396)/",
	"updatedAt" : "/Date(1408539115396)/",
	"version" : 5,
	"name" : "My BaseCamp account",
	"integrationPlugin" : "basecamp",
	"displayName" : "My BaseCamp account"
}
```
