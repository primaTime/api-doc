WorkType
==

## URL

	https://api.primaerp.com/v1/time/worktypes

## Properties

| Name                 | Type           | Access     | Description                                                                                         |
|----------------------|----------------|------------|-----------------------------------------------------------------------------------------------------|
| active               | Boolean        | read write | Determines whether the work type is currently active.                                               |
| code                 | String         | read write | A code or an abbreviation of the work type.                                                         |
| createdAt            | Date           | read only  | Date of creation.                                                                                   |
| displayName          | String         | read only  | Describes an object in human readable form.                                                         |
| effective            | Boolean        | read write | Determines whether the work type is effective.                                                      |
| externalBrowsableUrl | String         | read write | Human accessible link in external system.                                                           |
| externalResourceId   | String         | read write | Unique external system identifier.                                                                  |
| externalSynced       | Boolean        | write only | Determines whether an object was synced with the external system.                                   |
| externalSyncedAt     | Date           | read only  | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.   |
| externalSystem       | ExternalSystem | read write | External system which maintains this object.                                                        |
| id                   | String         | read write | Unique object identifier.                                                                           |
| name                 | String         | read write | Name of the work type.                                                                              |
| trashItem            | TrashItem      | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt            | Date           | read only  | Last modified date.                                                                                 |
| version              | Long           | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "WorkType",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "active",
			"description" : "Determines whether the work type is currently active.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "code",
			"description" : "A code or an abbreviation of the work type.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Size",
					"pattern" : null
				}
			]
		},
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
			"type" : "Boolean",
			"name" : "effective",
			"description" : "Determines whether the work type is effective.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "String",
			"name" : "externalBrowsableUrl",
			"description" : "Human accessible link in external system.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "externalResourceId",
			"description" : "Unique external system identifier.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Boolean",
			"name" : "externalSynced",
			"description" : "Determines whether an object was synced with the external system.",
			"access" : "WRITE_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "externalSyncedAt",
			"description" : "Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "ExternalSystem",
			"name" : "externalSystem",
			"description" : "External system which maintains this object.",
			"access" : "READ_WRITE",
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
			"name" : "name",
			"description" : "Name of the work type.",
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
				"TrashItem",
				"ProjectWorkTypeLink"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "ff5d8a5e-31ce-406d-b428-e73dcc09c40e",
	"createdAt" : "/Date(1412166708642)/",
	"updatedAt" : "/Date(1412243808642)/",
	"version" : 8,
	"externalSystem" : {
		"id" : "e62ab2bd-aedb-4cd0-96aa-efb6dbc86df6",
		"createdAt" : "/Date(1412166108642)/",
		"updatedAt" : "/Date(1412211408642)/",
		"version" : 6,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "wt-058",
	"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
	"externalSyncedAt" : "/Date(1412168208642)/",
	"externalSynced" : true,
	"name" : "Software development",
	"code" : "SW",
	"active" : true,
	"displayName" : "Software development"
}
```
