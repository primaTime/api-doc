WorkType
==

## URL

	https://api.primaerp.com/v1/time/worktypes

	https://api.primaerp.com/v1/time/worktypes/@linked

## Properties

| Name                 | Type           | Access     | Required | Description                                                                                         |
|----------------------|----------------|------------|----------|-----------------------------------------------------------------------------------------------------|
| active               | Boolean        | read write | no       | Determines whether the work type is currently active. Default value is true.                        |
| category             | Category       | read write | no       | A work type category.                                                                               |
| code                 | String         | read write | no       | A code or an abbreviation of the work type.                                                         |
| createdAt            | Date           | read only  | no       | Date of creation.                                                                                   |
| displayName          | String         | read only  | no       | Describes an object in human readable form.                                                         |
| effective            | Boolean        | read write | YES      | Determines whether the work type is effective. Default value is true.                               |
| externalBrowsableUrl | String         | read write | no       | Human accessible link in external system.                                                           |
| externalResourceId   | String         | read write | no       | Unique external system identifier.                                                                  |
| externalSynced       | Boolean        | write only | no       | Determines whether an object was synced with the external system.                                   |
| externalSyncedAt     | Date           | read only  | no       | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.   |
| externalSystem       | ExternalSystem | read write | no       | External system which maintains this object.                                                        |
| id                   | String         | read write | no       | Unique object identifier.                                                                           |
| name                 | String         | read write | no       | Name of the work type.                                                                              |
| trashItem            | TrashItem      | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt            | Date           | read only  | no       | Last modified date.                                                                                 |
| version              | Long           | read write | no       | Object version number.                                                                              |

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
			"type" : "Category",
			"name" : "category",
			"description" : "A work type category.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Enum",
					"details" : "WORK, BREAK"
				}
			]
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
			"access" : "READ_WRITE"
		}
	],
	"cascades" : [
		{
			"cascadeType" : "REMOVE",
			"objectTypes" : [
				"ProjectWorkTypeLink",
				"TrashItem"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "9b897c05-8210-40d6-bfaa-12ea8a7c6382",
	"createdAt" : "/Date(1650450294149)/",
	"updatedAt" : "/Date(1650460254149)/",
	"version" : 6,
	"externalSystem" : {
		"id" : "43349c56-4695-47cb-983f-837ce83c4b6e",
		"createdAt" : "/Date(1650449634149)/",
		"updatedAt" : "/Date(1650532254149)/",
		"version" : 6,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "wt-058",
	"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
	"externalSyncedAt" : "/Date(1650453054149)/",
	"externalSynced" : true,
	"name" : "Software development",
	"code" : "SW",
	"category" : "WORK",
	"displayName" : "Software development"
}
```
