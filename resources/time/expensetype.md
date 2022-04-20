ExpenseType
==

## URL

	https://api.primaerp.com/v1/time/expenseTypes

## Properties

| Name        | Type      | Access     | Required | Description                                                                                         |
|-------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| createdAt   | Date      | read only  | no       | Date of creation.                                                                                   |
| displayName | String    | read only  | no       | Describes an object in human readable form.                                                         |
| hasQuantity | Boolean   | read write | YES      | Expense is priced per unit.                                                                         |
| id          | String    | read write | no       | Unique object identifier.                                                                           |
| isActive    | Boolean   | read write | YES      | Whether the expense is active.                                                                      |
| isBillable  | Boolean   | read write | YES      | Whether the expense is billable.                                                                    |
| name        | String    | read write | YES      | String that describes the expense type.                                                             |
| trashItem   | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| unitName    | String    | read write | no       | Unit name.                                                                                          |
| unitPrice   | Double    | read write | YES      | Price per unit.                                                                                     |
| updatedAt   | Date      | read only  | no       | Last modified date.                                                                                 |
| version     | Long      | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "ExpenseType",
	"path" : "/v1/time/expenseTypes",
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
			"type" : "Boolean",
			"name" : "hasQuantity",
			"description" : "Expense is priced per unit.",
			"access" : "READ_WRITE",
			"constraints" : [
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
			"type" : "Boolean",
			"name" : "isActive",
			"description" : "Whether the expense is active.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "Boolean",
			"name" : "isBillable",
			"description" : "Whether the expense is billable.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "String",
			"name" : "name",
			"description" : "String that describes the expense type.",
			"access" : "READ_WRITE",
			"constraints" : [
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
			"type" : "String",
			"name" : "unitName",
			"description" : "Unit name.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Double",
			"name" : "unitPrice",
			"description" : "Price per unit.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
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
	"id" : "3f49056c-312b-46cd-b4f4-8207bd6499c5",
	"createdAt" : "/Date(1650449994196)/",
	"updatedAt" : "/Date(1650503454196)/",
	"version" : 6,
	"name" : "Gas",
	"hasQuantity" : true,
	"unitPrice" : 125.0,
	"unitName" : "km",
	"isActive" : true,
	"isBillable" : true,
	"displayName" : "Gas"
}
```
