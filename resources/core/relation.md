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
	"id" : "4b362d55-d630-44ad-9cb7-14c98234af77",
	"createdAt" : "/Date(1452256518082)/",
	"updatedAt" : "/Date(1452282558082)/",
	"version" : 7,
	"inboundId" : "ed02f9c4-909a-4582-886e-b57b709ee0fd",
	"inboundType" : "user",
	"outboundId" : "40f443e7-0781-4857-8a49-39100681d651",
	"outboundType" : "timerecord",
	"displayName" : "user ed02f9c4-909a-4582-886e-b57b709ee0fd -> timerecord 40f443e7-0781-4857-8a49-39100681d651"
}
```
