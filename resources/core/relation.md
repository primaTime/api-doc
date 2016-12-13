Relation
==

## URL

	https://api.primaerp.com/v1/relations

	https://api.primaerp.com/v1/billing/bills/{billId}/items/{id}/relations

	https://api.primaerp.com/v1/billing/bills/{billId}/items/{id}/relations/@inbound

	https://api.primaerp.com/v1/billing/bills/{billId}/items/{id}/relations/@outbound

	https://api.primaerp.com/v1/time/timerecords/{id}/relations

	https://api.primaerp.com/v1/time/timerecords/{id}/relations/@inbound

	https://api.primaerp.com/v1/time/timerecords/{id}/relations/@outbound

## Properties

| Name         | Type      | Access     | Required | Description                                                                                         |
|--------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| createdAt    | Date      | read only  | no       | Date of creation.                                                                                   |
| displayName  | String    | read only  | no       | Describes an object in human readable form.                                                         |
| id           | String    | read write | no       | Unique object identifier.                                                                           |
| inboundId    | String    | read write | no       | Unique id of inbound side object.                                                                   |
| inboundType  | String    | read write | no       | Inbound bean type. Lowercase simple class name.                                                     |
| outboundId   | String    | read write | no       | Unique id of outbound side object.                                                                  |
| outboundType | String    | read write | no       | Outbound bean type. Lowercase simple class name.                                                    |
| trashItem    | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt    | Date      | read only  | no       | Last modified date.                                                                                 |
| version      | Long      | read write | no       | Object version number.                                                                              |

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
	"id" : "9c7b5a96-1f5d-4ec0-bc20-d250639c753d",
	"createdAt" : "/Date(1481621030097)/",
	"updatedAt" : "/Date(1481668730097)/",
	"version" : 1,
	"inboundId" : "2295e8f8-f29f-4d69-b257-2d7efdd02622",
	"inboundType" : "user",
	"outboundId" : "6a56655d-26be-4f8c-a35e-dde6dc113bef",
	"outboundType" : "timerecord",
	"displayName" : "user 2295e8f8-f29f-4d69-b257-2d7efdd02622 -> timerecord 6a56655d-26be-4f8c-a35e-dde6dc113bef"
}
```
