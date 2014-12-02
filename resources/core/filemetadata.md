FileMetadata
==

## Properties

| Name        | Type   | Access     | Required | Description            |
|-------------|--------|------------|----|------------------------|
| contentsize | Long   | read write | no | Content size in bytes. |
| contenttype | String | read write | no | MIME content type.     |
| filename    | String | read write | no | Original file name.    |
| storagepath | String | denied     | no | Path on file storage.  |

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
			"type" : "String",
			"name" : "filename",
			"description" : "Original file name.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "storagepath",
			"description" : "Path on file storage.",
			"access" : "DENIED"
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "67b3427e-c09d-4bd2-bbe1-781bd95b327b",
	"createdAt" : "/Date(1417520921914)/",
	"updatedAt" : "/Date(1417590101914)/",
	"version" : 8,
	"fileName" : "mysignature.jpeg",
	"contentType" : "image/jpeg",
	"contentSize" : 13114,
	"displayName" : "mysignature.jpeg"
}
```
