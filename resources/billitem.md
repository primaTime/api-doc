BillItem
==

## URL

	http://api.primaerp.com/v1/billing/bills/{billId}/items

## Properties

| Name        | Type      | Access     | Description                                                                                         |
|-------------|-----------|------------|-----------------------------------------------------------------------------------------------------|
| attributes  | String    | read write | Describes form of item aggregation.                                                                 |
| createdAt   | Date      | read only  | Date of creation.                                                                                   |
| displayName | String    | read only  | Describes an object in human readable form.                                                         |
| docIndex    | Integer   | read write | Sequence number of item in bill.                                                                    |
| duration    | Long      | read write | Duration of work (in milliseconds).                                                                 |
| id          | String    | read write | Unique object identifier.                                                                           |
| itemGroup   | String    | read write | Name of aggregating itemGroup.                                                                      |
| price       | Double    | read write | Price of item.                                                                                      |
| trashItem   | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | Last modified date.                                                                                 |
| version     | Long      | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "BillItem",
	"fields" : [
		{
			"type" : "String",
			"name" : "attributes",
			"description" : "Describes form of item aggregation.",
			"access" : "READ_WRITE",
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
			"type" : "Integer",
			"name" : "docIndex",
			"description" : "Sequence number of item in bill.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Long",
			"name" : "duration",
			"description" : "Duration of work (in milliseconds).",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Min",
					"pattern" : null
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
			"name" : "itemGroup",
			"description" : "Name of aggregating itemGroup.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Double",
			"name" : "price",
			"description" : "Price of item.",
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
	"id" : "2061177b-f040-499a-bf42-10a55c9a790f",
	"createdAt" : "/Date(1408429924069)/",
	"updatedAt" : "/Date(1408449124069)/",
	"version" : 4,
	"attributes" : "{\"project\":\"name\"}",
	"itemGroup" : "Content management system",
	"docIndex" : 0,
	"duration" : 3600000,
	"price" : 500.0,
	"displayName" : "#0"
}
```
