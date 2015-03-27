Feature
==

## URL

	https://api.primaerp.com/v1/features

## Properties

| Name        | Type      | Access     | Required                                                               | Description                                                                                         |
|-------------|-----------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| createdAt   | Date      | read only  | no                                                                     | Date of creation.                                                                                   |
| displayName | String    | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| enabled     | Boolean   | read write | no                                                                     | Determines whether the feature is enabled.                                                          |
| featureId   | String    | read write | YES                                                                    | Unique feature id.                                                                                  |
| id          | String    | read write | no                                                                     | Unique object identifier.                                                                           |
| product     | Product   | read write | no                                                                     | The feature is applied to this product.                                                             |
| trashItem   | TrashItem | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | no                                                                     | Last modified date.                                                                                 |
| version     | Long      | read write | no                                                                     | Object version number.                                                                              |

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
			"type" : "Product",
			"name" : "product",
			"description" : "The feature is applied to this product.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Enum",
					"details" : "CORE, TIME, BILLING, ATTENDANCE"
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
	"id" : "704fd49e-da7f-4636-9b0e-6b7ae53675fa",
	"createdAt" : "/Date(1424882775364)/",
	"updatedAt" : "/Date(1424901255364)/",
	"version" : 8,
	"featureId" : "9c217672-8847-4408-8d85-031c95190274",
	"product" : "TIME",
	"enabled" : true,
	"displayName" : "9c217672-8847-4408-8d85-031c95190274"
}
```
