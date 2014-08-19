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
	"fields" : [
		{
			"type" : "Date",
			"name" : "createdAt",
			"description" : "Date of creation.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "displayName",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
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
			"access" : "READ_WRITE",
			"constraints" : [ ]
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
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "TrashItem",
			"name" : "trashItem",
			"description" : "Informs whether an object is in the trash. An object is in the trash if a trash item was specified.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "updatedAt",
			"description" : "Last modified date.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "Long",
			"name" : "version",
			"description" : "Object version number.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
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
	"id" : "ee2fb418-de89-427c-90f3-061266a855b4",
	"createdAt" : "/Date(1408462495214)/",
	"updatedAt" : "/Date(1408542715214)/",
	"version" : 6,
	"inboundId" : "dc7e94e9-619f-47b0-ae31-9e1c3ba0492f",
	"inboundType" : "user",
	"outboundId" : "2d09c4c9-cbc0-4688-a720-2826b2ec1cf5",
	"outboundType" : "timerecord",
	"displayName" : "user dc7e94e9-619f-47b0-ae31-9e1c3ba0492f -> timerecord 2d09c4c9-cbc0-4688-a720-2826b2ec1cf5"
}
```
