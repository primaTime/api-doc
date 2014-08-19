Relation
==

## URL

	http://api.primaerp.com/v1/billing/bills/{billId}/items/{id}/relations

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
	"id" : "908c2ed6-5fa0-4acc-afc2-87600d11746b",
	"createdAt" : "/Date(1408427764985)/",
	"updatedAt" : "/Date(1408459924985)/",
	"version" : 6,
	"inboundId" : "2fb6d561-45ec-4b39-9332-8e89b9065077",
	"inboundType" : "user",
	"outboundId" : "205cf154-9d94-4e2e-8397-fbb5b036903f",
	"outboundType" : "timerecord",
	"displayName" : "user 2fb6d561-45ec-4b39-9332-8e89b9065077 -> timerecord 205cf154-9d94-4e2e-8397-fbb5b036903f"
}
```
