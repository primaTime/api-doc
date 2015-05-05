DocumentSeries
==

## URL

	https://api.primaerp.com/v1/documentSeries

## Properties

| Name            | Type         | Access     | Required | Description                                                                                         |
|-----------------|--------------|------------|----------|-----------------------------------------------------------------------------------------------------|
| createdAt       | Date         | read only  | no       | Date of creation.                                                                                   |
| displayName     | String       | read only  | no       | Describes an object in human readable form.                                                         |
| docType         | DocumentType | read write | no       | Document type.                                                                                      |
| id              | String       | read write | no       | Unique object identifier.                                                                           |
| nextNumber      | Integer      | read write | no       | A number of the next document.                                                                      |
| numberingScheme | String       | read write | no       | A mask for the document number.                                                                     |
| trashItem       | TrashItem    | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt       | Date         | read only  | no       | Last modified date.                                                                                 |
| version         | Long         | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "DocumentSeries",
	"path" : "/v1/documentSeries",
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
			"type" : "DocumentType",
			"name" : "docType",
			"description" : "Document type.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Enum",
					"details" : "BILL"
				}
			]
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
			"type" : "Integer",
			"name" : "nextNumber",
			"description" : "A number of the next document.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "numberingScheme",
			"description" : "A mask for the document number.",
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
	"id" : "7e9ec7ba-6031-4896-ab27-d590125b4a06",
	"createdAt" : "/Date(1430142294297)/",
	"updatedAt" : "/Date(1430160714297)/",
	"version" : 1,
	"docType" : "BILL",
	"numberingScheme" : "${number}/2015",
	"nextNumber" : 604,
	"displayName" : "${number}/2015"
}
```
