Task
==

## URL

	https://api.primaerp.com/v1/time/tasks

## Properties

| Name                 | Type           | Access     | Description                                                                                         |
|----------------------|----------------|------------|-----------------------------------------------------------------------------------------------------|
| author               | User           | read write | User who created the task.                                                                          |
| code                 | String         | read write | A code or an abbreviation of the task.                                                              |
| createdAt            | Date           | read only  | Date of creation.                                                                                   |
| displayName          | String         | read only  | Describes an object in human readable form.                                                         |
| done                 | Boolean        | read write | Determines whether the task is currently done.                                                      |
| effective            | Boolean        | read write | Determines whether the task is effective.                                                           |
| externalBrowsableUrl | String         | read write | Human accessible link in external system.                                                           |
| externalResourceId   | String         | read write | Unique external system identifier.                                                                  |
| externalSynced       | Boolean        | write only | Determines whether an object was synced with the external system.                                   |
| externalSyncedAt     | Date           | read only  | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.   |
| externalSystem       | ExternalSystem | read write | External system which maintains this object.                                                        |
| id                   | String         | read write | Unique object identifier.                                                                           |
| name                 | String         | read write | Task name.                                                                                          |
| note                 | String         | read write | Additional note.                                                                                    |
| owner                | User           | read write | User who is responsible for the task.                                                               |
| priceBudget          | Double         | read write | Amount of money available for the task.                                                             |
| project              | Project        | read write | Tasks belonging to this project.                                                                    |
| timeBudget           | Long           | read write | Amount of milliseconds available for the task.                                                      |
| trashItem            | TrashItem      | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt            | Date           | read only  | Last modified date.                                                                                 |
| version              | Long           | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Task",
	"path" : "/v1/time/tasks",
	"fields" : [
		{
			"type" : "User",
			"path" : "/v1/users",
			"name" : "author",
			"description" : "User who created the task.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "code",
			"description" : "A code or an abbreviation of the task.",
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
			"name" : "done",
			"description" : "Determines whether the task is currently done.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "effective",
			"description" : "Determines whether the task is effective.",
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
			"description" : "Task name.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "note",
			"description" : "Additional note.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "User",
			"path" : "/v1/users",
			"name" : "owner",
			"description" : "User who is responsible for the task.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Double",
			"name" : "priceBudget",
			"description" : "Amount of money available for the task.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Project",
			"path" : "/v1/time/projects",
			"name" : "project",
			"description" : "Tasks belonging to this project.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Long",
			"name" : "timeBudget",
			"description" : "Amount of milliseconds available for the task.",
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
	"id" : "28ab27d3-2d04-48f4-aca1-ce695c1df97c",
	"createdAt" : "/Date(1416913318774)/",
	"updatedAt" : "/Date(1416959518774)/",
	"version" : 8,
	"externalSystem" : {
		"id" : "821d753d-1f8c-4c9a-8b18-df0f05e68a7f",
		"createdAt" : "/Date(1416914878778)/",
		"updatedAt" : "/Date(1416988318778)/",
		"version" : 0,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "task-556",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
	"externalSyncedAt" : "/Date(1416916318773)/",
	"externalSynced" : true,
	"project" : {
		"id" : "cc7c0dcd-fc7a-436c-af30-91109a921ca2",
		"createdAt" : "/Date(1416915358774)/",
		"updatedAt" : "/Date(1416930718774)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "394e355e-a578-4e2b-9184-456b8e7576c3",
			"createdAt" : "/Date(1416915778778)/",
			"updatedAt" : "/Date(1416927118778)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1416916318773)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1416829918773)/",
		"ends" : "/Date(1417002718773)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"active" : true,
		"personal" : false,
		"owner" : {
			"id" : "0d6c0dab-2a6c-4f82-aa4c-278ac408bd90",
			"createdAt" : "/Date(1416915718778)/",
			"updatedAt" : "/Date(1416966718778)/",
			"version" : 1,
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
			"birthdayRemind" : "/Date(1418770800000)/",
			"workingTimeStart" : "/Date(1416898800000)/",
			"workingTimeEnd" : "/Date(1416931200000)/",
			"created" : "/Date(1416829918774)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "7a5824c4-3a71-4555-8798-f25858a86b6e",
			"createdAt" : "/Date(1416913138775)/",
			"updatedAt" : "/Date(1416963118775)/",
			"version" : 0,
			"externalSystem" : {
				"id" : "01d0c266-e1e3-4f2a-87e9-5ac807154a5c",
				"createdAt" : "/Date(1416913138775)/",
				"updatedAt" : "/Date(1416981118775)/",
				"version" : 0,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1416916318773)/",
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
	},
	"name" : "Article editation",
	"code" : "ART",
	"note" : "form with validation",
	"done" : true,
	"author" : {
		"id" : "0d6c0dab-2a6c-4f82-aa4c-278ac408bd90",
		"createdAt" : "/Date(1416915718778)/",
		"updatedAt" : "/Date(1416966718778)/",
		"version" : 1,
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
		"birthdayRemind" : "/Date(1418770800000)/",
		"workingTimeStart" : "/Date(1416898800000)/",
		"workingTimeEnd" : "/Date(1416931200000)/",
		"created" : "/Date(1416829918774)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"owner" : {
		"id" : "29a2fa29-c747-4590-81c1-be7fa950bda9",
		"createdAt" : "/Date(1416915118778)/",
		"updatedAt" : "/Date(1416955918778)/",
		"version" : 6,
		"firstName" : "John",
		"lastName" : "Smith",
		"nickName" : "Smith, J.",
		"email" : "john.smith@example.com",
		"phone" : "55 123 444 567",
		"position" : "Chief developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "dd/MM/yyyy",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "en_US",
		"password" : "",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1417734000000)/",
		"workingTimeStart" : "/Date(1416898800000)/",
		"workingTimeEnd" : "/Date(1416931200000)/",
		"created" : "/Date(1416829918774)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"timeBudget" : 86400000,
	"priceBudget" : 1000.0,
	"displayName" : "Article editation"
}
```
