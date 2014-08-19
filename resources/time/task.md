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
| project              | Project        | read write | Tasks belonging to this project.                                                                    |
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
			"type" : "Project",
			"name" : "project",
			"description" : "Tasks belonging to this project.",
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
	"id" : "2efcaef4-b0a0-4392-9298-979fa1cd3966",
	"createdAt" : "/Date(1408461354823)/",
	"updatedAt" : "/Date(1408499514823)/",
	"version" : 7,
	"externalSystem" : {
		"id" : "c06d0b6a-efd3-4117-a198-5b4b2e71517c",
		"createdAt" : "/Date(1408460094823)/",
		"updatedAt" : "/Date(1408463514823)/",
		"version" : 7,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "task-556",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
	"externalSyncedAt" : "/Date(1408463514822)/",
	"externalSynced" : true,
	"project" : {
		"id" : "4498d6f0-5c78-4485-8bcb-02a532c5f5a6",
		"createdAt" : "/Date(1408460214823)/",
		"updatedAt" : "/Date(1408495914823)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "1a1fb407-cd2b-490c-9f4a-ede68cec51a2",
			"createdAt" : "/Date(1408460454823)/",
			"updatedAt" : "/Date(1408506714823)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1408463514822)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1408377114822)/",
		"ends" : "/Date(1408549914822)/",
		"timeBudget" : 86400000,
		"timeBudgetWarn" : 75,
		"priceBudget" : 100000.0,
		"priceBudgetWarn" : 80,
		"active" : true,
		"personal" : false,
		"owner" : {
			"id" : "ec8faf82-e64e-415b-b3e7-6f4e1e3e3f68",
			"createdAt" : "/Date(1408461594823)/",
			"updatedAt" : "/Date(1408485114823)/",
			"version" : 6,
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
			"created" : "/Date(1408377114822)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "11cb6fd9-b419-4b4b-b42d-514352ba2165",
			"createdAt" : "/Date(1408463454823)/",
			"updatedAt" : "/Date(1408531914823)/",
			"version" : 3,
			"externalSystem" : {
				"id" : "c1375e4f-07dc-4cc5-bcbb-d135b5526888",
				"createdAt" : "/Date(1408462914823)/",
				"updatedAt" : "/Date(1408531914823)/",
				"version" : 8,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1408463514822)/",
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
		"id" : "ec8faf82-e64e-415b-b3e7-6f4e1e3e3f68",
		"createdAt" : "/Date(1408461594823)/",
		"updatedAt" : "/Date(1408485114823)/",
		"version" : 6,
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
		"created" : "/Date(1408377114822)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"owner" : {
		"id" : "bfe333c4-ff62-4316-8f97-10bad121f400",
		"createdAt" : "/Date(1408460574823)/",
		"updatedAt" : "/Date(1408463514823)/",
		"version" : 5,
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
		"birthdayRemind" : "/Date(1409263200000)/",
		"workingTimeStart" : "/Date(1408428000000)/",
		"workingTimeEnd" : "/Date(1408460400000)/",
		"created" : "/Date(1408377114823)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"displayName" : "Article editation"
}
```
