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
	"id" : "3aa9a57a-dd22-4ed3-ab56-dc685a4bfd82",
	"createdAt" : "/Date(1416914578989)/",
	"updatedAt" : "/Date(1416988318989)/",
	"version" : 3,
	"fileName" : "mysignature.jpeg",
	"contentType" : "image/jpeg",
	"contentSize" : 13114,
	"displayName" : "mysignature.jpeg"
}
```
