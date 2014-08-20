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
	"id" : "5a6cf923-d082-4515-a48d-beab4fc2c1f2",
	"createdAt" : "/Date(1408461175730)/",
	"updatedAt" : "/Date(1408467115730)/",
	"version" : 0,
	"fileName" : "mysignature.jpeg",
	"contentType" : "image/jpeg",
	"contentSize" : 13114,
	"displayName" : "mysignature.jpeg"
}
```
