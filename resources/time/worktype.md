WorkType
==

## URL

	https://api.primaerp.com/v1/time/worktypes

## Properties

| Name                 | Type           | Access     | Required                                                               | Description                                                                                         |
|----------------------|----------------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| active               | Boolean        | read write | no                                                                     | Determines whether the work type is currently active. Default value is true.                        |
| code                 | String         | read write | no                                                                     | A code or an abbreviation of the work type.                                                         |
| createdAt            | Date           | read only  | no                                                                     | Date of creation.                                                                                   |
| displayName          | String         | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| effective            | Boolean        | read write | YES                                                                    | Determines whether the work type is effective. Default value is true.                               |
| externalBrowsableUrl | String         | read write | no                                                                     | Human accessible link in external system.                                                           |
| externalResourceId   | String         | read write | no                                                                     | Unique external system identifier.                                                                  |
| externalSynced       | Boolean        | write only | no                                                                     | Determines whether an object was synced with the external system.                                   |
| externalSyncedAt     | Date           | read only  | no                                                                     | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.   |
| externalSystem       | ExternalSystem | read write | no                                                                     | External system which maintains this object.                                                        |
| id                   | String         | read write | no                                                                     | Unique object identifier.                                                                           |
| name                 | String         | read write | no                                                                     | Name of the work type.                                                                              |
| trashItem            | TrashItem      | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt            | Date           | read only  | no                                                                     | Last modified date.                                                                                 |
| version              | Long           | read only  | no                                                                     | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "WorkType",
	"path" : "/v1/time/worktypes",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "active",
			"description" : "Determines whether the work type is currently active.",
			"defaultValue" : "true",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "code",
			"description" : "A code or an abbreviation of the work type.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Size",
					"details" : "min 0, max 20"
				}
			]
		},
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
			"type" : "Boolean",
			"name" : "effective",
			"description" : "Determines whether the work type is effective.",
			"defaultValue" : "true",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "String",
			"name" : "externalBrowsableUrl",
			"description" : "Human accessible link in external system.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "externalResourceId",
			"description" : "Unique external system identifier.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "externalSynced",
			"description" : "Determines whether an object was synced with the external system.",
			"access" : "WRITE_ONLY"
		},
		{
			"type" : "Date",
			"name" : "externalSyncedAt",
			"description" : "Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "ExternalSystem",
			"path" : "/v1/externalsystems",
			"name" : "externalSystem",
			"description" : "External system which maintains this object.",
			"access" : "READ_WRITE"
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
			"name" : "name",
			"description" : "Name of the work type.",
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
			"access" : "READ_ONLY"
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
	"id" : "fb71d1f2-7fc4-4c5a-b879-108b3e3a38a3",
	"createdAt" : "/Date(1421140178291)/",
	"updatedAt" : "/Date(1421166338291)/",
	"version" : 1,
	"externalSystem" : {
		"id" : "f00d9f9a-5928-4695-8bf2-366c3dd1bc4b",
		"createdAt" : "/Date(1421138258291)/",
		"updatedAt" : "/Date(1421166338291)/",
		"version" : 3,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "wt-058",
	"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
	"externalSyncedAt" : "/Date(1421141138291)/",
	"externalSynced" : true,
	"name" : "Software development",
	"code" : "SW",
	"displayName" : "Software development"
}
```