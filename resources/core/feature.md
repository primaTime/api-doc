Feature
==

## URL

	https://api.primaerp.com/v1/features

## Properties

| Name        | Type      | Access     | Description                                                                                         |
|-------------|-----------|------------|-----------------------------------------------------------------------------------------------------|
| createdAt   | Date      | read only  | Date of creation.                                                                                   |
| displayName | String    | read only  | Describes an object in human readable form.                                                         |
| enabled     | Boolean   | read write | Determines whether the feature is enabled.                                                          |
| featureId   | String    | read write | Unique feature id.                                                                                  |
| id          | String    | read write | Unique object identifier.                                                                           |
| product     | Product   | read write | The feature is applied to this product.                                                             |
| trashItem   | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | Last modified date.                                                                                 |
| version     | Long      | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Feature",
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
			"type" : "Boolean",
			"name" : "enabled",
			"description" : "Determines whether the feature is enabled.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "featureId",
			"description" : "Unique feature id.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull",
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
			"type" : "Product",
			"name" : "product",
			"description" : "The feature is applied to this product.",
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
	"id" : "154a4347-7eac-417c-90ff-9fedcbefcf3c",
	"createdAt" : "/Date(1413985440451)/",
	"updatedAt" : "/Date(1414040940451)/",
	"version" : 4,
	"featureId" : "9c217672-8847-4408-8d85-031c95190274",
	"product" : "TIME",
	"enabled" : true,
	"displayName" : "9c217672-8847-4408-8d85-031c95190274"
}
```
