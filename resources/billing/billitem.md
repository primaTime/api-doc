BillItem
==

## URL

	https://api.primaerp.com/v1/billing/bills/{billId}/items

## Properties

| Name        | Type      | Access     | Required                                                               | Description                                                                                         |
|-------------|-----------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| attributes  | String    | read write | no                                                                     | Describes form of item aggregation.                                                                 |
| createdAt   | Date      | read only  | no                                                                     | Date of creation.                                                                                   |
| displayName | String    | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| docIndex    | Integer   | read write | no                                                                     | Sequence number of item in bill.                                                                    |
| duration    | Long      | read write | no                                                                     | Duration of work (in milliseconds).                                                                 |
| id          | String    | read write | no                                                                     | Unique object identifier.                                                                           |
| itemGroup   | String    | read write | no                                                                     | Name of aggregating itemGroup.                                                                      |
| price       | Double    | read write | no                                                                     | Price of item.                                                                                      |
| trashItem   | TrashItem | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | no                                                                     | Last modified date.                                                                                 |
| version     | Long      | read only  | no                                                                     | Object version number.                                                                              |

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
			"type" : "Long",
			"name" : "duration",
			"description" : "Duration of work (in milliseconds).",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Min",
					"details" : "value 0"
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
			"name" : "itemGroup",
			"description" : "Name of aggregating itemGroup.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Double",
			"name" : "price",
			"description" : "Price of item.",
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
			"access" : "READ_ONLY"
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
	"id" : "cc59f4f1-f839-4aa5-ac13-d05c80b514a1",
	"createdAt" : "/Date(1421138017655)/",
	"updatedAt" : "/Date(1421187937655)/",
	"version" : 6,
	"attributes" : "{\"project\":\"name\"}",
	"itemGroup" : "Content management system",
	"docIndex" : 0,
	"duration" : 3600000,
	"price" : 500.0,
	"displayName" : "#0"
}
```
