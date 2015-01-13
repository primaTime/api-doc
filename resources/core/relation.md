Relation
==

## URL

	https://api.primaerp.com/v1/relations

## Properties

| Name         | Type      | Access     | Required                                                               | Description                                                                                         |
|--------------|-----------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| createdAt    | Date      | read only  | no                                                                     | Date of creation.                                                                                   |
| displayName  | String    | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| id           | String    | read write | no                                                                     | Unique object identifier.                                                                           |
| inboundId    | String    | read write | no                                                                     | Unique id of inbound side object.                                                                   |
| inboundType  | String    | read write | no                                                                     | Inbound bean type. Lowercase simple class name.                                                     |
| outboundId   | String    | read write | no                                                                     | Unique id of outbound side object.                                                                  |
| outboundType | String    | read write | no                                                                     | Outbound bean type. Lowercase simple class name.                                                    |
| trashItem    | TrashItem | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt    | Date      | read only  | no                                                                     | Last modified date.                                                                                 |
| version      | Long      | read only  | no                                                                     | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Relation",
	"path" : "/v1/relations",
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
			"name" : "inboundId",
			"description" : "Unique id of inbound side object.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Pattern",
					"details" : "regexp [0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
				}
			]
		},
		{
			"type" : "String",
			"name" : "inboundType",
			"description" : "Inbound bean type. Lowercase simple class name.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "outboundId",
			"description" : "Unique id of outbound side object.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Pattern",
					"details" : "regexp [0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
				}
			]
		},
		{
			"type" : "String",
			"name" : "outboundType",
			"description" : "Outbound bean type. Lowercase simple class name.",
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
			"access" : "READ_ONLY"
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
	"id" : "24021a40-b421-4bf6-9590-0cfcb3b32d13",
	"createdAt" : "/Date(1421137598403)/",
	"updatedAt" : "/Date(1421148338403)/",
	"version" : 0,
	"inboundId" : "e1b11d03-eb8f-4453-bb11-0f54ecb58ba4",
	"inboundType" : "user",
	"outboundId" : "eb0e63ca-f89d-460e-9eea-cb5b23a81725",
	"outboundType" : "timerecord",
	"displayName" : "user e1b11d03-eb8f-4453-bb11-0f54ecb58ba4 -> timerecord eb0e63ca-f89d-460e-9eea-cb5b23a81725"
}
```
