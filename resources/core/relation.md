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
| version      | Long      | read write | no                                                                     | Object version number.                                                                              |

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
	"id" : "e8d1d5fe-0480-4d28-a6b5-968793db54ae",
	"createdAt" : "/Date(1424883194336)/",
	"updatedAt" : "/Date(1424908454336)/",
	"version" : 3,
	"inboundId" : "4945cbfa-f3be-44c8-9ced-76130546ff0a",
	"inboundType" : "user",
	"outboundId" : "53237194-ecc5-4c5a-ae15-f31498559851",
	"outboundType" : "timerecord",
	"displayName" : "user 4945cbfa-f3be-44c8-9ced-76130546ff0a -> timerecord 53237194-ecc5-4c5a-ae15-f31498559851"
}
```
