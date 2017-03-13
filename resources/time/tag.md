Tag
==

## URL

	https://api.primaerp.com/v1/time/tags

## Properties

| Name        | Type      | Access     | Required | Description                                                                                         |
|-------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| createdAt   | Date      | read only  | no       | Date of creation.                                                                                   |
| displayName | String    | read only  | no       | Describes an object in human readable form.                                                         |
| id          | String    | read write | no       | Unique object identifier.                                                                           |
| name        | String    | read write | no       | Name of tag                                                                                         |
| trashItem   | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | no       | Last modified date.                                                                                 |
| version     | Long      | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Tag",
	"path" : "/v1/time/tags",
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
			"type" : "String",
			"name" : "name",
			"description" : "Name of tag",
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
	"id" : "af32ced5-5930-411a-a08a-28f381ce01a6",
	"createdAt" : "/Date(1489386134089)/",
	"updatedAt" : "/Date(1489467194089)/",
	"version" : 8,
	"name" : "SW",
	"displayName" : "SW"
}
```
