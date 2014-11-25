TrashItem
==

## URL

	https://api.primaerp.com/v1/trash

## Properties

| Name               | Type      | Access     | Description                                                                                         |
|--------------------|-----------|------------|-----------------------------------------------------------------------------------------------------|
| createdAt          | Date      | read only  | Date of creation.                                                                                   |
| deletedObjectClass | Class     | read write | Identifies the type of deleted entity.                                                              |
| deletedObjectId    | String    | read write | Identifies a deleted object.                                                                        |
| displayName        | String    | read only  | Describes an object in human readable form.                                                         |
| groupId            | String    | read write | Groups all the objects which were deleted together.                                                 |
| id                 | String    | read write | Unique object identifier.                                                                           |
| trashItem          | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt          | Date      | read only  | Last modified date.                                                                                 |
| version            | Long      | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "TrashItem",
	"path" : "/v1/trash",
	"fields" : [
		{
			"type" : "Date",
			"name" : "createdAt",
			"description" : "Date of creation.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "Class",
			"name" : "deletedObjectClass",
			"description" : "Identifies the type of deleted entity.",
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
			"name" : "deletedObjectId",
			"description" : "Identifies a deleted object.",
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
			"name" : "displayName",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "String",
			"name" : "groupId",
			"description" : "Groups all the objects which were deleted together.",
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
					"pattern" : "[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
				},
				{
					"type" : "NotNull",
					"pattern" : null
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
	"id" : "2c783b0d-6b9c-4a9c-8d6c-62ea461ab0be",
	"createdAt" : "/Date(1416914638693)/",
	"updatedAt" : "/Date(1416930718693)/",
	"version" : 9,
	"deletedObjectClass" : "eu.abra.primaerp.api.beans.core.User",
	"deletedObjectId" : "0165e7d3-c99f-41b5-bf8c-03222edcf681",
	"groupId" : "ffaf67e7-051d-4a58-a71a-8e39353a93b4",
	"displayName" : "class eu.abra.primaerp.api.beans.core.User (0165e7d3-c99f-41b5-bf8c-03222edcf681)"
}
```