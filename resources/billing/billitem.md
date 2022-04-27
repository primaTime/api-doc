BillItem
==

## URL

	https://api.primaerp.com/v1/billing/bills/{billId}/items

## Properties

| Name        | Type      | Access     | Required | Description                                                                                         |
|-------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| attributes  | String    | read write | no       | Describes form of item aggregation.                                                                 |
| createdAt   | Date      | read only  | no       | Date of creation.                                                                                   |
| displayName | String    | read only  | no       | Describes an object in human readable form.                                                         |
| docIndex    | Integer   | read write | no       | Sequence number of item in bill.                                                                    |
| id          | String    | read write | no       | Unique object identifier.                                                                           |
| itemGroup   | String    | read write | no       | Name of aggregating itemGroup.                                                                      |
| price       | Double    | read write | no       | The price of the item is calculated by the formula: 'unitPrice * quantity'.                         |
| quantity    | Double    | read write | no       | The amount of a specified unit.                                                                     |
| trashItem   | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| unit        | String    | read write | no       | The billed unit (e.g. hours, kilometers, pieces, ...).                                              |
| unitPrice   | Double    | read write | no       | The unit price is the price per a specified unit.                                                   |
| updatedAt   | Date      | read only  | no       | Last modified date.                                                                                 |
| version     | Long      | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "BillItem",
	"path" : "/v1/billing/bills/{billId}/items",
	"fields" : [
		{
			"type" : "String",
			"name" : "attributes",
			"description" : "Describes form of item aggregation.",
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
			"type" : "Integer",
			"name" : "docIndex",
			"description" : "Sequence number of item in bill.",
			"access" : "READ_WRITE"
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
			"name" : "itemGroup",
			"description" : "Name of aggregating itemGroup.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Double",
			"name" : "price",
			"description" : "The price of the item is calculated by the formula: 'unitPrice * quantity'. ",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Double",
			"name" : "quantity",
			"description" : "The amount of a specified unit.",
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
			"type" : "String",
			"name" : "unit",
			"description" : "The billed unit (e.g. hours, kilometers, pieces, ...).",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Double",
			"name" : "unitPrice",
			"description" : "The unit price is the price per a specified unit.",
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
	"id" : "60132bf0-da12-4511-a5d0-abddab277f97",
	"createdAt" : "/Date(1651050327282)/",
	"updatedAt" : "/Date(1651050507282)/",
	"version" : 3,
	"attributes" : "{\"project\":\"name\"}",
	"itemGroup" : "Content management system",
	"docIndex" : 0,
	"quantity" : 3600000.0,
	"price" : 500.0,
	"unitPrice" : 500.0,
	"unit" : "hours",
	"displayName" : "#0"
}
```
