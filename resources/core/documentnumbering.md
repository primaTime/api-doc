DocumentNumbering
==

## URL

	https://api.primaerp.com/v1/documentNumberings

## Properties

| Name            | Type         | Access     | Required | Description                                                                                         |
|-----------------|--------------|------------|----------|-----------------------------------------------------------------------------------------------------|
| autoNumbering   | Boolean      | read write | no       | Determines whether the document number will be generated automatically.                             |
| createdAt       | Date         | read only  | no       | Date of creation.                                                                                   |
| displayName     | String       | read only  | no       | Describes an object in human readable form.                                                         |
| docType         | DocumentType | read write | YES      | Document type.                                                                                      |
| id              | String       | read write | no       | Unique object identifier.                                                                           |
| numberingScheme | String       | read write | no       | A mask for the document number.                                                                     |
| trashItem       | TrashItem    | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt       | Date         | read only  | no       | Last modified date.                                                                                 |
| version         | Long         | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "DocumentNumbering",
	"path" : "/v1/documentNumberings",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "autoNumbering",
			"description" : "Determines whether the document number will be generated automatically.",
			"access" : "READ_WRITE"
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
			"type" : "DocumentType",
			"name" : "docType",
			"description" : "Document type.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Enum",
					"details" : "BILL"
				},
				{
					"type" : "NotNull"
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
	"id" : "5b27c726-782f-48d7-ba0b-4621c69feaee",
	"createdAt" : "/Date(1452254598667)/",
	"updatedAt" : "/Date(1452260958667)/",
	"version" : 3,
	"docType" : "BILL",
	"numberingScheme" : "BIL-{number}/{year}",
	"autoNumbering" : true,
	"displayName" : "BIL-{number}/{year}"
}
```
