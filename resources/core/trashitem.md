TrashItem
==

## URL

	https://api.primaerp.com/v1/trash

## Properties

| Name               | Type      | Access     | Required | Description                                                                                         |
|--------------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| createdAt          | Date      | read only  | no       | Date of creation.                                                                                   |
| deletedObjectClass | Class     | read write | YES      | Identifies the type of deleted entity.                                                              |
| deletedObjectId    | String    | read write | YES      | Identifies a deleted object.                                                                        |
| displayName        | String    | read only  | no       | Describes an object in human readable form.                                                         |
| groupId            | String    | read write | no       | Groups all the objects which were deleted together.                                                 |
| id                 | String    | read write | no       | Unique object identifier.                                                                           |
| trashItem          | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt          | Date      | read only  | no       | Last modified date.                                                                                 |
| version            | Long      | read write | no       | Object version number.                                                                              |

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
					"type" : "NotNull"
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
					"type" : "NotNull"
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
	"id" : "d1dc939f-44bf-4131-af65-1cea862522de",
	"createdAt" : "/Date(1650452153889)/",
	"updatedAt" : "/Date(1650489053889)/",
	"version" : 2,
	"deletedObjectClass" : "eu.abra.primaerp.api.beans.core.User",
	"deletedObjectId" : "0165e7d3-c99f-41b5-bf8c-03222edcf681",
	"groupId" : "ffaf67e7-051d-4a58-a71a-8e39353a93b4",
	"displayName" : "class eu.abra.primaerp.api.beans.core.User (0165e7d3-c99f-41b5-bf8c-03222edcf681)"
}
```
