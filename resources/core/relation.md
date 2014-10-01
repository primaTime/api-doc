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
	"id" : "535f5590-fa9d-4931-b70c-02d9a483547e",
	"createdAt" : "/Date(1412165388706)/",
	"updatedAt" : "/Date(1412179008706)/",
	"version" : 5,
	"inboundId" : "02a0e2fa-3222-4d6e-a5b0-281fd7f01b5f",
	"inboundType" : "user",
	"outboundId" : "a2aa723d-f3ea-4ece-891d-4dbc36296095",
	"outboundType" : "timerecord",
	"displayName" : "user 02a0e2fa-3222-4d6e-a5b0-281fd7f01b5f -> timerecord a2aa723d-f3ea-4ece-891d-4dbc36296095"
}
```
