Task
==

## URL

	https://api.primaerp.com/v1/time/tasks

## Properties

| Name                 | Type           | Access     | Description                                                                                         |
|----------------------|----------------|------------|-----------------------------------------------------------------------------------------------------|
| author               | User           | read write | User who created the task.                                                                          |
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
	"fields" : [
		{
			"type" : "User",
			"name" : "author",
			"description" : "User who created the task.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
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
			"name" : "done",
			"description" : "Determines whether the task is currently done.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
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
			"description" : "Task name.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "note",
			"description" : "Additional note.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "User",
			"name" : "owner",
			"description" : "User who is responsible for the task.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Double",
			"name" : "priceBudget",
			"description" : "Amount of money available for the task.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Project",
			"name" : "project",
			"description" : "Tasks belonging to this project.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Long",
			"name" : "timeBudget",
			"description" : "Amount of milliseconds available for the task.",
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
				"TrashItem"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "e085e960-dd4a-44e2-835d-18378a0f6933",
	"createdAt" : "/Date(1413986219206)/",
	"updatedAt" : "/Date(1414001339206)/",
	"version" : 6,
	"externalSystem" : {
		"id" : "172b44bc-9972-422d-b563-adae5d347c43",
		"createdAt" : "/Date(1413984839207)/",
		"updatedAt" : "/Date(1414026539207)/",
		"version" : 2,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "task-556",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
	"externalSyncedAt" : "/Date(1413986939206)/",
	"externalSynced" : true,
	"project" : {
		"id" : "83e3271d-46c5-4643-ba20-46b052babe13",
		"createdAt" : "/Date(1413984599207)/",
		"updatedAt" : "/Date(1413994139207)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "ecb756f7-3f0e-4b34-a9cf-aa705af9f796",
			"createdAt" : "/Date(1413986339207)/",
			"updatedAt" : "/Date(1414058939207)/",
			"version" : 5,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1413986939206)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1413900539206)/",
		"ends" : "/Date(1414073339206)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"active" : true,
		"personal" : false,
		"owner" : {
			"id" : "7b13ea5d-37d6-48d0-a038-4fe9dd438dc7",
			"createdAt" : "/Date(1413983819207)/",
			"updatedAt" : "/Date(1414004939207)/",
			"version" : 2,
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
			"birthdayRemind" : "/Date(1415833200000)/",
			"workingTimeStart" : "/Date(1413957600000)/",
			"workingTimeEnd" : "/Date(1413990000000)/",
			"created" : "/Date(1413900539206)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "e2b84ef9-e550-4b6b-af61-64e6883d43ae",
			"createdAt" : "/Date(1413983459207)/",
			"updatedAt" : "/Date(1414051739207)/",
			"version" : 7,
			"externalSystem" : {
				"id" : "9686c387-306b-43c2-b7e0-3f2adb30bc9e",
				"createdAt" : "/Date(1413984599207)/",
				"updatedAt" : "/Date(1414066139207)/",
				"version" : 1,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1413986939206)/",
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
	"note" : "form with validation",
	"done" : true,
	"author" : {
		"id" : "7b13ea5d-37d6-48d0-a038-4fe9dd438dc7",
		"createdAt" : "/Date(1413983819207)/",
		"updatedAt" : "/Date(1414004939207)/",
		"version" : 2,
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
		"birthdayRemind" : "/Date(1415833200000)/",
		"workingTimeStart" : "/Date(1413957600000)/",
		"workingTimeEnd" : "/Date(1413990000000)/",
		"created" : "/Date(1413900539206)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"owner" : {
		"id" : "7441698e-428f-4917-86b2-f3c00598ea16",
		"createdAt" : "/Date(1413984239206)/",
		"updatedAt" : "/Date(1414051739206)/",
		"version" : 0,
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
		"birthdayRemind" : "/Date(1414796400000)/",
		"workingTimeStart" : "/Date(1413957600000)/",
		"workingTimeEnd" : "/Date(1413990000000)/",
		"created" : "/Date(1413900539206)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"timeBudget" : 86400000,
	"priceBudget" : 1000.0,
	"displayName" : "Article editation"
}
```
