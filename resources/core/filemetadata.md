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
	"id" : "64e57d18-dd46-45b3-a4ef-171faeea6eb9",
	"createdAt" : "/Date(1417604401356)/",
	"updatedAt" : "/Date(1417651741356)/",
	"version" : 4,
	"fileName" : "mysignature.jpeg",
	"contentType" : "image/jpeg",
	"contentSize" : 13114,
	"displayName" : "mysignature.jpeg"
}
```
