Project
==

## URL

	https://api.primaerp.com/v1/time/projects

## Properties

| Name                 | Type           | Access     | Description                                                                                         |
|----------------------|----------------|------------|-----------------------------------------------------------------------------------------------------|
| active               | Boolean        | read write | Determines whether the project is currently active.                                                 |
| begins               | Date           | read write | Date and time when the project begins.                                                              |
| billable             | Boolean        | read write | Determines whether the project will be billed to the client.                                        |
| client               | Client         | read write | Provides info about the client for whom the project is realized.                                    |
| code                 | String         | read write | A code or an abbreviation of the project.                                                           |
| createdAt            | Date           | read only  | Date of creation.                                                                                   |
| displayName          | String         | read only  | Describes an object in human readable form.                                                         |
| effective            | Boolean        | read write | Determines whether the project is effective.                                                        |
| ends                 | Date           | read write | Date and time of project completion.                                                                |
| externalBrowsableUrl | String         | read write | Human accessible link in external system.                                                           |
| externalResourceId   | String         | read write | Unique external system identifier.                                                                  |
| externalSynced       | Boolean        | write only | Determines whether an object was synced with the external system.                                   |
| externalSyncedAt     | Date           | read only  | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.   |
| externalSystem       | ExternalSystem | read write | External system which maintains this object.                                                        |
| id                   | String         | read write | Unique object identifier.                                                                           |
| membersCount         | Long           | read only  | Counts the number of members working on the project.                                                |
| name                 | String         | read write | Project name.                                                                                       |
| note                 | String         | read write | Note about the project.                                                                             |
| owner                | User           | read write | Identifies the project owner.                                                                       |
| personal             | Boolean        | read write | Determines whether the project is available, only for the owner.                                    |
| priceBudget          | Double         | read write | Amount of money available for the project.                                                          |
| priceBudgetWarn      | Byte           | read write | Value in percentage of the budgeted price. It is useful to warning the owner.                       |
| tasksCount           | Long           | read only  | Counts the number of tasks that belong to the project and which have not been done.                 |
| timeBudget           | Long           | read write | Amount of milliseconds available for the project.                                                   |
| timeBudgetWarn       | Byte           | read write | Value in percentage of the budgeted time. It is useful to warning the owner.                        |
| timeRecordsCount     | Long           | read only  | Counts the number of time records in the project.                                                   |
| trashItem            | TrashItem      | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt            | Date           | read only  | Last modified date.                                                                                 |
| version              | Long           | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Project",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "active",
			"description" : "Determines whether the project is currently active.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "begins",
			"description" : "Date and time when the project begins.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Boolean",
			"name" : "billable",
			"description" : "Determines whether the project will be billed to the client.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Client",
			"name" : "client",
			"description" : "Provides info about the client for whom the project is realized.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "code",
			"description" : "A code or an abbreviation of the project.",
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
			"description" : "Determines whether the project is effective.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "Date",
			"name" : "ends",
			"description" : "Date and time of project completion.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
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
			"type" : "Long",
			"name" : "membersCount",
			"description" : "Counts the number of members working on the project.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "name",
			"description" : "Project name.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "note",
			"description" : "Note about the project.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "User",
			"name" : "owner",
			"description" : "Identifies the project owner.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "Boolean",
			"name" : "personal",
			"description" : "Determines whether the project is available, only for the owner.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Double",
			"name" : "priceBudget",
			"description" : "Amount of money available for the project.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Byte",
			"name" : "priceBudgetWarn",
			"description" : "Value in percentage of the budgeted price. It is useful to warning the owner.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Min",
					"pattern" : null
				},
				{
					"type" : "Max",
					"pattern" : null
				}
			]
		},
		{
			"type" : "Long",
			"name" : "tasksCount",
			"description" : "Counts the number of tasks that belong to the project and which have not been done.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "Long",
			"name" : "timeBudget",
			"description" : "Amount of milliseconds available for the project.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Byte",
			"name" : "timeBudgetWarn",
			"description" : "Value in percentage of the budgeted time. It is useful to warning the owner.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Min",
					"pattern" : null
				},
				{
					"type" : "Max",
					"pattern" : null
				}
			]
		},
		{
			"type" : "Long",
			"name" : "timeRecordsCount",
			"description" : "Counts the number of time records in the project.",
			"access" : "READ_ONLY",
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
				"ProjectMember",
				"ProjectWorkTypeLink",
				"TimeRecord",
				"Task",
				"Impulse"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "b8605001-012d-452b-b223-af8fed7d8b1b",
	"createdAt" : "/Date(1408460634327)/",
	"updatedAt" : "/Date(1408481514327)/",
	"version" : 5,
	"externalSystem" : {
		"id" : "ceb03777-91a4-46ca-a633-7b4574a33212",
		"createdAt" : "/Date(1408460514328)/",
		"updatedAt" : "/Date(1408485114328)/",
		"version" : 8,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "project-221",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
	"externalSyncedAt" : "/Date(1408463514327)/",
	"externalSynced" : true,
	"name" : "Content management system",
	"code" : "CMS",
	"note" : "core feature",
	"begins" : "/Date(1408377114327)/",
	"ends" : "/Date(1408549914327)/",
	"timeBudget" : 86400000,
	"timeBudgetWarn" : 75,
	"priceBudget" : 100000.0,
	"priceBudgetWarn" : 80,
	"active" : true,
	"personal" : false,
	"owner" : {
		"id" : "ff9b45b6-fe5e-4e8a-9f82-027e6f604a2a",
		"createdAt" : "/Date(1408461954327)/",
		"updatedAt" : "/Date(1408521114327)/",
		"version" : 9,
		"firstName" : "John",
		"lastName" : "Doe",
		"nickName" : "Johny D.",
		"email" : "john.doe@example.com",
		"phone" : "55 234 555 678",
		"position" : "Senior developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "yyyy-MM-dd",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "pt_BR",
		"password" : "",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1410300000000)/",
		"workingTimeStart" : "/Date(1408428000000)/",
		"workingTimeEnd" : "/Date(1408460400000)/",
		"created" : "/Date(1408377114327)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"client" : {
		"id" : "8d0d3d3e-ffa4-44b4-a2b4-8188b03c0f89",
		"createdAt" : "/Date(1408463514328)/",
		"updatedAt" : "/Date(1408531914328)/",
		"version" : 3,
		"externalSystem" : {
			"id" : "93ed38d4-0a9b-4811-8958-e8ebd2afeb2a",
			"createdAt" : "/Date(1408462374328)/",
			"updatedAt" : "/Date(1408513914328)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1408463514327)/",
		"externalSynced" : true,
		"name" : "Example Ltd.",
		"code" : "EXL",
		"email" : "info@example.com",
		"active" : true,
		"billsCount" : 2,
		"projectsCount" : 1,
		"streetAddress" : "Rua 123 Sul Avenida Lo 15",
		"additionalAddressInfo" : "",
		"zipCode" : "89020-000",
		"city" : "Palmas",
		"state" : "Tocantins",
		"countryCode" : "BRA",
		"phone" : "+66 987 654 321",
		"vatId" : "23.456.789/0001-77",
		"website" : "http://www.example.com/",
		"displayName" : "Example Ltd."
	},
	"billable" : true,
	"membersCount" : 1,
	"tasksCount" : 3,
	"timeRecordsCount" : 2,
	"displayName" : "Content management system"
}
```
