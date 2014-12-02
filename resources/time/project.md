Project
==

## URL

	https://api.primaerp.com/v1/time/projects

## Properties

| Name                 | Type           | Access     | Required                                                               | Description                                                                                         |
|----------------------|----------------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| active               | Boolean        | read write | no                                                                     | Determines whether the project is currently active.                                                 |
| begins               | Date           | read write | no                                                                     | Date and time when the project begins.                                                              |
| billable             | Boolean        | read write | no                                                                     | Determines whether the project will be billed to the client.                                        |
| client               | Client         | read write | no                                                                     | Provides info about the client for whom the project is realized.                                    |
| code                 | String         | read write | no                                                                     | A code or an abbreviation of the project.                                                           |
| createdAt            | Date           | read only  | no                                                                     | Date of creation.                                                                                   |
| displayName          | String         | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| effective            | Boolean        | read write | YES                                                                    | Determines whether the project is effective.                                                        |
| ends                 | Date           | read write | no                                                                     | Date and time of project completion.                                                                |
| externalBrowsableUrl | String         | read write | no                                                                     | Human accessible link in external system.                                                           |
| externalResourceId   | String         | read write | no                                                                     | Unique external system identifier.                                                                  |
| externalSynced       | Boolean        | write only | no                                                                     | Determines whether an object was synced with the external system.                                   |
| externalSyncedAt     | Date           | read only  | no                                                                     | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.   |
| externalSystem       | ExternalSystem | read write | no                                                                     | External system which maintains this object.                                                        |
| id                   | String         | read write | no                                                                     | Unique object identifier.                                                                           |
| membersCount         | Long           | read only  | no                                                                     | Counts the number of members working on the project.                                                |
| name                 | String         | read write | no                                                                     | Project name.                                                                                       |
| note                 | String         | read write | no                                                                     | Note about the project.                                                                             |
| owner                | User           | read write | YES                                                                    | Identifies the project owner.                                                                       |
| personal             | Boolean        | read write | no                                                                     | Determines whether the project is available, only for the owner.                                    |
| priceBudget          | Double         | read write | no                                                                     | Amount of money available for the project.                                                          |
| tasksCount           | Long           | read only  | no                                                                     | Counts the number of tasks that belong to the project and which have not been done.                 |
| timeBudget           | Long           | read write | no                                                                     | Amount of milliseconds available for the project.                                                   |
| timeRecordsCount     | Long           | read only  | no                                                                     | Counts the number of time records in the project.                                                   |
| trashItem            | TrashItem      | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt            | Date           | read only  | no                                                                     | Last modified date.                                                                                 |
| version              | Long           | read write | no                                                                     | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Project",
	"path" : "/v1/time/projects",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "active",
			"description" : "Determines whether the project is currently active.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "begins",
			"description" : "Date and time when the project begins.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "billable",
			"description" : "Determines whether the project will be billed to the client.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Client",
			"path" : "/v1/time/clients",
			"name" : "client",
			"description" : "Provides info about the client for whom the project is realized.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "code",
			"description" : "A code or an abbreviation of the project.",
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
			"description" : "Determines whether the project is effective.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "Date",
			"name" : "ends",
			"description" : "Date and time of project completion.",
			"access" : "READ_WRITE"
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
			"type" : "Long",
			"name" : "membersCount",
			"description" : "Counts the number of members working on the project.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "String",
			"name" : "name",
			"description" : "Project name.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "note",
			"description" : "Note about the project.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "User",
			"path" : "/v1/users",
			"name" : "owner",
			"description" : "Identifies the project owner.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "Boolean",
			"name" : "personal",
			"description" : "Determines whether the project is available, only for the owner.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Double",
			"name" : "priceBudget",
			"description" : "Amount of money available for the project.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Long",
			"name" : "tasksCount",
			"description" : "Counts the number of tasks that belong to the project and which have not been done.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "Long",
			"name" : "timeBudget",
			"description" : "Amount of milliseconds available for the project.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Long",
			"name" : "timeRecordsCount",
			"description" : "Counts the number of time records in the project.",
			"access" : "READ_ONLY"
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

## Dummy data

```JSON
{
	"id" : "7b6cb0bb-fb70-49d6-8c26-7c33c5b090d4",
	"createdAt" : "/Date(1417519361603)/",
	"updatedAt" : "/Date(1417590101603)/",
	"version" : 5,
	"externalSystem" : {
		"id" : "2cdc115a-cbfe-41e0-8bb0-1aefc7c30087",
		"createdAt" : "/Date(1417521641604)/",
		"updatedAt" : "/Date(1417550501604)/",
		"version" : 2,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "project-221",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
	"externalSyncedAt" : "/Date(1417521701603)/",
	"externalSynced" : true,
	"name" : "Content management system",
	"code" : "CMS",
	"note" : "core feature",
	"begins" : "/Date(1417435301603)/",
	"ends" : "/Date(1417608101603)/",
	"timeBudget" : 604800000,
	"priceBudget" : 100000.0,
	"personal" : false,
	"owner" : {
		"id" : "3ba066de-7ad6-489f-8356-2ab48e7380bf",
		"createdAt" : "/Date(1417519061604)/",
		"updatedAt" : "/Date(1417521701604)/",
		"version" : 5,
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
		"birthdayRemind" : "/Date(1419375600000)/",
		"workingTimeStart" : "/Date(1417503600000)/",
		"workingTimeEnd" : "/Date(1417536000000)/",
		"created" : "/Date(1417435301603)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"client" : {
		"id" : "b72b6ddc-5929-4c62-a86c-219e20c10fb4",
		"createdAt" : "/Date(1417521701604)/",
		"updatedAt" : "/Date(1417521701604)/",
		"version" : 8,
		"externalSystem" : {
			"id" : "98517cf8-3f98-4623-8919-6a44e9428758",
			"createdAt" : "/Date(1417518641604)/",
			"updatedAt" : "/Date(1417561301604)/",
			"version" : 0,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1417521701603)/",
		"externalSynced" : true,
		"name" : "Example Ltd.",
		"code" : "EXL",
		"email" : "info@example.com",
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
