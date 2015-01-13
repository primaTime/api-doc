Metadata
==

## API metadata description

The primaERP API may display the metadata document where the data model for the selected resource is described.

#### Syntax

		/{resource}/$metadata

Where `{resource}` is a module resource such as: `time/projects`, `time/timerecords`, `time/tasks`, etc. Or a global resource such as `user`.

#### Example

		GET http://{tenant}.api.primaerp.com/v1/time/projects/$metadata

```JSON
{
	"type": "Project",
	"path": "/v1/time/projects",
	"fields": [
		{
			"type": "Boolean",
			"name": "active",
			"description": "Determines whether the project is currently active.",
			"defaultValue": "true",
			"access": "READ_WRITE"
		},
		{
			"type": "Date",
			"name": "begins",
			"description": "Date and time when the project begins.",
			"access": "READ_WRITE"
		},
		{
			"type": "Boolean",
			"name": "billable",
			"description": "Determines whether the project will be billed to the client.",
			"access": "READ_WRITE"
		},
		{
			"type": "Client",
			"path": "/v1/time/clients",
			"name": "client",
			"description": "Provides info about the client for whom the project is realized.",
			"access": "READ_WRITE"
		},
		{
			"type": "String",
			"name": "code",
			"description": "A code or an abbreviation of the project.",
			"access": "READ_WRITE",
			"constraints": [
				{
					"type": "Size",
					"details": "min 0, max 20"
				}
			]
		},
		{
			"type": "Date",
			"name": "createdAt",
			"description": "Date of creation.",
			"access": "READ_ONLY"
		},
		{
			"type": "String",
			"name": "displayName",
			"description": "Describes an object in human readable form.",
			"access": "READ_ONLY"
		},
		{
			"type": "Boolean",
			"name": "effective",
			"description": "Determines whether the project is effective.",
			"defaultValue": "true",
			"access": "READ_WRITE",
			"constraints": [
				{
					"type": "NotNull"
				}
			]
		},
		{
			"type": "Date",
			"name": "ends",
			"description": "Date and time of project completion.",
			"access": "READ_WRITE"
		},
		{
			"type": "String",
			"name": "externalBrowsableUrl",
			"description": "Human accessible link in external system.",
			"access": "READ_WRITE"
		},
		{
			"type": "String",
			"name": "externalResourceId",
			"description": "Unique external system identifier.",
			"access": "READ_WRITE"
		},
		{
			"type": "Boolean",
			"name": "externalSynced",
			"description": "Determines whether an object was synced with the external system.",
			"access": "WRITE_ONLY"
		},
		{
			"type": "Date",
			"name": "externalSyncedAt",
			"description": "Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.",
			"access": "READ_ONLY"
		},
		{
			"type": "ExternalSystem",
			"path": "/v1/externalsystems",
			"name": "externalSystem",
			"description": "External system which maintains this object.",
			"access": "READ_WRITE"
		},
		{
			"type": "String",
			"name": "id",
			"description": "Unique object identifier.",
			"access": "READ_WRITE",
			"constraints": [
				{
					"type": "Pattern",
					"details": "regexp [0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
				},
				{
					"type": "NotNull"
				}
			]
		},
		{
			"type": "Long",
			"name": "membersCount",
			"description": "Counts the number of members working on the project.",
			"access": "READ_ONLY"
		},
		{
			"type": "String",
			"name": "name",
			"description": "Project name.",
			"access": "READ_WRITE"
		},
		{
			"type": "String",
			"name": "note",
			"description": "Note about the project.",
			"access": "READ_WRITE"
		},
		{
			"type": "User",
			"path": "/v1/users",
			"name": "owner",
			"description": "Identifies the project owner.",
			"access": "READ_WRITE",
			"constraints": [
				{
					"type": "NotNull"
				}
			]
		},
		{
			"type": "Boolean",
			"name": "personal",
			"description": "Determines whether the project is available, only for the owner.",
			"access": "READ_WRITE"
		},
		{
			"type": "Double",
			"name": "priceBudget",
			"description": "Amount of money available for the project.",
			"access": "READ_WRITE"
		},
		{
			"type": "Long",
			"name": "tasksCount",
			"description": "Counts the number of tasks that belong to the project and which have not been done.",
			"access": "READ_ONLY"
		},
		{
			"type": "Long",
			"name": "timeBudget",
			"description": "Amount of milliseconds available for the project.",
			"access": "READ_WRITE"
		},
		{
			"type": "Long",
			"name": "timeRecordsCount",
			"description": "Counts the number of time records in the project.",
			"access": "READ_ONLY"
		},
		{
			"type": "TrashItem",
			"path": "/v1/trash",
			"name": "trashItem",
			"description": "Informs whether an object is in the trash. An object is in the trash if a trash item was specified.",
			"access": "READ_WRITE"
		},
		{
			"type": "Date",
			"name": "updatedAt",
			"description": "Last modified date.",
			"access": "READ_ONLY"
		},
		{
			"type": "Long",
			"name": "version",
			"description": "Object version number.",
			"access": "READ_ONLY"
		}
	],
	"cascades": [
		{
			"cascadeType": "REMOVE",
			"objectTypes": [
				"TrashItem",
				"ProjectMember",
				"ProjectWorkTypeLink",
				"TimeRecord",
				"Impulse",
				"Task"
			]
		}
	]
}
```