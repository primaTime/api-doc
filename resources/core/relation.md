Relation
==

## URL

	https://api.primaerp.com/v1/relations

## Properties

| Name         | Type      | Access     | Description                                                                                         |
|--------------|-----------|------------|-----------------------------------------------------------------------------------------------------|
| createdAt    | Date      | read only  | Date of creation.                                                                                   |
| displayName  | String    | read only  | Describes an object in human readable form.                                                         |
| id           | String    | read write | Unique object identifier.                                                                           |
| inboundId    | String    | read write | Unique id of inbound side object.                                                                   |
| inboundType  | String    | read write | Inbound bean type. Lowercase simple class name.                                                     |
| outboundId   | String    | read write | Unique id of outbound side object.                                                                  |
| outboundType | String    | read write | Outbound bean type. Lowercase simple class name.                                                    |
| trashItem    | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt    | Date      | read only  | Last modified date.                                                                                 |
| version      | Long      | read write | Object version number.                                                                              |

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
					"pattern" : "[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
				},
				{
					"type" : "NotNull",
					"pattern" : null
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
					"pattern" : "[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
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
					"pattern" : "[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
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
	"id" : "2b80b659-1983-4fc4-980b-6677ead0f517",
	"createdAt" : "/Date(1416914937407)/",
	"updatedAt" : "/Date(1416930717407)/",
	"version" : 2,
	"inboundId" : "3f7ce337-e9a4-4b44-9068-f7a86bef94bf",
	"inboundType" : "user",
	"outboundId" : "92c0b1ef-b105-4358-b535-0da7423fa48f",
	"outboundType" : "timerecord",
	"displayName" : "user 3f7ce337-e9a4-4b44-9068-f7a86bef94bf -> timerecord 92c0b1ef-b105-4358-b535-0da7423fa48f"
}
```
