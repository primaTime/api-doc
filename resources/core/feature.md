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
	"path" : "/v1/features",
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
			"name" : "enabled",
			"description" : "Determines whether the feature is enabled.",
			"access" : "READ_WRITE"
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
	"id" : "0f4f2a20-9c61-4a70-a37b-c2d5fba8754f",
	"createdAt" : "/Date(1416915418965)/",
	"updatedAt" : "/Date(1416945118965)/",
	"version" : 1,
	"featureId" : "9c217672-8847-4408-8d85-031c95190274",
	"product" : "TIME",
	"enabled" : true,
	"displayName" : "9c217672-8847-4408-8d85-031c95190274"
}
```
