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
	"id" : "44a83b6a-15e5-4a55-88a9-f5768d2d8685",
	"createdAt" : "/Date(1650450293960)/",
	"updatedAt" : "/Date(1650517853960)/",
	"version" : 2,
	"inboundId" : "f59d42d3-3111-4970-8643-f36c9f281395",
	"inboundType" : "user",
	"outboundId" : "782d1f11-4940-49ae-9872-c73a75fcbc0a",
	"outboundType" : "timerecord",
	"displayName" : "user f59d42d3-3111-4970-8643-f36c9f281395 -> timerecord 782d1f11-4940-49ae-9872-c73a75fcbc0a"
}
```
