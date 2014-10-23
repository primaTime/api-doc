FileMetadata
==

## Properties

| Name        | Type   | Access     | Description            |
|-------------|--------|------------|------------------------|
| contentsize | Long   | read write | Content size in bytes. |
| contenttype | String | read write | MIME content type.     |
| filename    | String | read write | Original file name.    |
| storagepath | String | denied     | Path on file storage.  |

## Metadata

```JSON
{
	"type" : "FileMetadata",
	"fields" : [
		{
			"type" : "Long",
			"name" : "contentsize",
			"description" : "Content size in bytes.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "contenttype",
			"description" : "MIME content type.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "filename",
			"description" : "Original file name.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "storagepath",
			"description" : "Path on file storage.",
			"access" : "DENIED",
			"constraints" : [ ]
		}
	],
	"cascades" : [ ]
}
```

## Dummy data

```JSON
{
	"id" : "42a68fbc-73b8-48fc-ab05-f5332f186851",
	"createdAt" : "/Date(1413983701071)/",
	"updatedAt" : "/Date(1414051741071)/",
	"version" : 6,
	"fileName" : "mysignature.jpeg",
	"contentType" : "image/jpeg",
	"contentSize" : 13114,
	"displayName" : "mysignature.jpeg"
}
```
