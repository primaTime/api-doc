BillVat
==

## URL

	https://api.primaerp.com/v1/billing/bills/{billId}/vats

## Properties

| Name        | Type      | Access     | Required | Description                                                                                         |
|-------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| createdAt   | Date      | read only  | no       | Date of creation.                                                                                   |
| displayName | String    | read only  | no       | Describes an object in human readable form.                                                         |
| id          | String    | read write | no       | Unique object identifier.                                                                           |
| trashItem   | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | no       | Last modified date.                                                                                 |
| vatPrice    | Double    | read write | no       | VAT calculated from related bill.                                                                   |
| vatRate     | Double    | read write | no       | VAT rate in percent.                                                                                |
| version     | Long      | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "BillVat",
	"path" : "/v1/billing/bills/{billId}/vats",
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
			"type" : "Double",
			"name" : "vatPrice",
			"description" : "VAT calculated from related bill.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Double",
			"name" : "vatRate",
			"description" : "VAT rate in percent.",
			"access" : "READ_WRITE"
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
	"id" : "e469bac9-f9dc-4c72-a928-43bbeaa4b668",
	"createdAt" : "/Date(1489384454186)/",
	"updatedAt" : "/Date(1489387994186)/",
	"version" : 6,
	"vatRate" : 20.0,
	"vatPrice" : 500.0,
	"displayName" : "20.0"
}
```
