Relation
==

## URL

	https://api.primaerp.com/v1/relations

	https://api.primaerp.com/v1/time/timerecords/{id}/relations

	https://api.primaerp.com/v1/time/timerecords/{id}/relations/@inbound

	https://api.primaerp.com/v1/time/timerecords/{id}/relations/@outbound

	https://api.primaerp.com/v1/billing/bills/{billId}/items/{id}/relations

	https://api.primaerp.com/v1/billing/bills/{billId}/items/{id}/relations/@inbound

	https://api.primaerp.com/v1/billing/bills/{billId}/items/{id}/relations/@outbound

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
	"id" : "be9cccfa-ab02-4bf5-b0bf-4c7fadec7a05",
	"createdAt" : "/Date(1651047447241)/",
	"updatedAt" : "/Date(1651097307242)/",
	"version" : 5,
	"inboundId" : "c9d586da-e6c7-4d20-acb1-e38d7b354435",
	"inboundType" : "user",
	"outboundId" : "114595ea-6948-42fa-b581-093d64c21c01",
	"outboundType" : "timerecord",
	"displayName" : "user c9d586da-e6c7-4d20-acb1-e38d7b354435 -> timerecord 114595ea-6948-42fa-b581-093d64c21c01"
}
```
