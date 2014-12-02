ExternalSystem
==

## URL

	https://api.primaerp.com/v1/externalsystems

## Properties

| Name              | Type      | Access     | Required                                                               | Description                                                                                         |
|-------------------|-----------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| createdAt         | Date      | read only  | no                                                                     | Date of creation.                                                                                   |
| displayName       | String    | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| id                | String    | read write | no                                                                     | Unique object identifier.                                                                           |
| integrationPlugin | String    | read write | no                                                                     | The name of the third-party system integrated into primaERP.                                        |
| name              | String    | read write | no                                                                     | The name of the external system                                                                     |
| trashItem         | TrashItem | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt         | Date      | read only  | no                                                                     | Last modified date.                                                                                 |
| version           | Long      | read write | no                                                                     | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "ExternalSystem",
	"path" : "/v1/externalsystems",
	"fields" : [
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
			"name" : "integrationPlugin",
			"description" : "The name of the third-party system integrated into primaERP.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "name",
			"description" : "The name of the external system",
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
	"id" : "6fd61230-d780-41a7-859e-004ecfd6694f",
	"createdAt" : "/Date(1417521040960)/",
	"updatedAt" : "/Date(1417572100960)/",
	"version" : 6,
	"name" : "My BaseCamp account",
	"integrationPlugin" : "basecamp",
	"displayName" : "My BaseCamp account"
}
```
