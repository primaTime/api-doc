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
	"id" : "62fcbc1b-9d52-4e1b-a612-e924e191d42e",
	"createdAt" : "/Date(1417604760797)/",
	"updatedAt" : "/Date(1417669740797)/",
	"version" : 0,
	"inboundId" : "e1318772-06a2-4dff-99ee-d1ac363bed5c",
	"inboundType" : "user",
	"outboundId" : "35dbc341-6487-423f-8793-8b067a6636a9",
	"outboundType" : "timerecord",
	"displayName" : "user e1318772-06a2-4dff-99ee-d1ac363bed5c -> timerecord 35dbc341-6487-423f-8793-8b067a6636a9"
}
```
