FileMetadata
==

## Properties

| Name        | Type      | Access     | Required | Description                                                                                         |
|-------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| contentsize | Long      | read write | no       | Content size in bytes.                                                                              |
| contenttype | String    | read write | no       | MIME content type.                                                                                  |
| createdat   | Date      | read only  | no       | Date of creation.                                                                                   |
| displayname | String    | read only  | no       | Describes an object in human readable form.                                                         |
| filename    | String    | read write | no       | Original file name.                                                                                 |
| id          | String    | read write | no       | Unique object identifier.                                                                           |
| trashitem   | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedat   | Date      | read only  | no       | Last modified date.                                                                                 |
| version     | Long      | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "FileMetadata",
	"fields" : [
		{
			"type" : "Long",
			"name" : "contentsize",
			"description" : "Content size in bytes.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "contenttype",
			"description" : "MIME content type.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "createdat",
			"description" : "Date of creation.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "String",
			"name" : "displayname",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "String",
			"name" : "filename",
			"description" : "Original file name.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "id",
			"description" : "Unique object identifier.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "TrashItem",
			"name" : "trashitem",
			"description" : "Informs whether an object is in the trash. An object is in the trash if a trash item was specified.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "updatedat",
			"description" : "Last modified date.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "Long",
			"name" : "version",
			"description" : "Object version number.",
			"access" : "READ_WRITE"
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "d8a96fd3-a194-43b0-b8c1-6cf5b72dc387",
	"createdAt" : "/Date(1481620790386)/",
	"updatedAt" : "/Date(1481632730386)/",
	"version" : 4,
	"fileName" : "mysignature.jpeg",
	"contentType" : "image/jpeg",
	"contentSize" : 13114,
	"displayName" : "mysignature.jpeg"
}
```
