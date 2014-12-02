Impulse
==

## URL

	https://api.primaerp.com/v1/time/impulses

## Properties

| Name                 | Type           | Access     | Required                                                               | Description                                                                                           |
|----------------------|----------------|------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| billable             | Boolean        | read write | no                                                                     | Determines whether the time record can be billed. A price will be stored only if the value is 'true'. |
| client               | Client         | read write | no                                                                     | A client belongs to this object.                                                                      |
| createdAt            | Date           | read only  | no                                                                     | Date of creation.                                                                                     |
| description          | String         | read write | no                                                                     | Some description of the record.                                                                       |
| displayName          | String         | read only  | no                                                                     | Describes an object in human readable form.                                                           |
| duration             | Long           | read write | no                                                                     | Recording length (in milliseconds).                                                                   |
| externalBrowsableUrl | String         | read write | no                                                                     | Human accessible link in external system.                                                             |
| externalResourceId   | String         | read write | no                                                                     | Unique external system identifier.                                                                    |
| externalSynced       | Boolean        | write only | no                                                                     | Determines whether an object was synced with the external system.                                     |
| externalSyncedAt     | Date           | read only  | no                                                                     | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.     |
| externalSystem       | ExternalSystem | read write | no                                                                     | External system which maintains this object.                                                          |
| id                   | String         | read write | no                                                                     | Unique object identifier.                                                                             |
| mode                 | Mode           | read write | no                                                                     | Mode in which the impulse currently is in.                                                            |
| project              | Project        | read write | no                                                                     | Task belongs to this project.                                                                         |
| source               | String         | read write | no                                                                     | The source of the impulse.                                                                            |
| start                | Date           | read write | no                                                                     | Date when recording starts.                                                                           |
| stop                 | Date           | read write | no                                                                     | Date when recording stops.                                                                            |
| task                 | Task           | read write | no                                                                     | A task belonging to this project.                                                                     |
| trashItem            | TrashItem      | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified.   |
| updatedAt            | Date           | read only  | no                                                                     | Last modified date.                                                                                   |
| user                 | User           | read write | YES                                                                    | The user for whom the time on the task is recorded.                                                   |
| version              | Long           | read write | no                                                                     | Object version number.                                                                                |
| watchLast            | Date           | read write | no                                                                     | Date and time of the last stopwatch check. Only in STOPWATCH mode.                                    |
| watchTimeout         | Long           | read write | no                                                                     | Timeout to check the stopwatch. Only in STOPWATCH mode.                                               |
| workType             | WorkType       | read write | no                                                                     | User which time on task is recorded.                                                                  |

## Metadata

```JSON
{
	"type" : "Impulse",
	"path" : "/v1/time/impulses",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "billable",
			"description" : "Determines whether the time record can be billed. A price will be stored only if the value is 'true'.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Client",
			"path" : "/v1/time/clients",
			"name" : "client",
			"description" : "A client belongs to this object.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "createdAt",
			"description" : "Date of creation.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "String",
			"name" : "description",
			"description" : "Some description of the record.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "displayName",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "Long",
			"name" : "duration",
			"description" : "Recording length (in milliseconds).",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Min",
					"details" : "value 0"
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
			"type" : "Mode",
			"name" : "mode",
			"description" : "Mode in which the impulse currently is in.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Project",
			"path" : "/v1/time/projects",
			"name" : "project",
			"description" : "Task belongs to this project.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "source",
			"description" : "The source of the impulse.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "start",
			"description" : "Date when recording starts.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "stop",
			"description" : "Date when recording stops.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Task",
			"path" : "/v1/time/tasks",
			"name" : "task",
			"description" : "A task belonging to this project.",
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
			"type" : "User",
			"path" : "/v1/users",
			"name" : "user",
			"description" : "The user for whom the time on the task is recorded.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "Long",
			"name" : "version",
			"description" : "Object version number.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "watchLast",
			"description" : "Date and time of the last stopwatch check. Only in STOPWATCH mode.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Long",
			"name" : "watchTimeout",
			"description" : "Timeout to check the stopwatch. Only in STOPWATCH mode.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "WorkType",
			"path" : "/v1/time/worktypes",
			"name" : "workType",
			"description" : "User which time on task is recorded.",
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
	"id" : "0505860b-6f0c-4637-b71b-abf87e7943bf",
	"createdAt" : "/Date(1417519180419)/",
	"updatedAt" : "/Date(1417597300419)/",
	"version" : 4,
	"externalSystem" : {
		"id" : "b8fe903b-729e-4a2d-9854-9f6ad1e1006f",
		"createdAt" : "/Date(1417521100421)/",
		"updatedAt" : "/Date(1417525300421)/",
		"version" : 0,
		"name" : "Ticket system",
		"integrationPlugin" : "ticket",
		"displayName" : "Ticket system"
	},
	"externalResourceId" : "779",
	"externalBrowsableUrl" : "https://www.ticket-system.com/v1/779",
	"externalSyncedAt" : "/Date(1417521700419)/",
	"externalSynced" : true,
	"user" : {
		"id" : "b9b06c25-b2f7-46a2-ae03-d91b01154f80",
		"createdAt" : "/Date(1417521100420)/",
		"updatedAt" : "/Date(1417546900420)/",
		"version" : 1,
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
		"birthdayRemind" : "/Date(1418338800000)/",
		"workingTimeStart" : "/Date(1417503600000)/",
		"workingTimeEnd" : "/Date(1417536000000)/",
		"created" : "/Date(1417435300419)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"project" : {
		"id" : "7f185b5a-454a-44a9-8801-f5e052770524",
		"createdAt" : "/Date(1417519360420)/",
		"updatedAt" : "/Date(1417546900420)/",
		"version" : 5,
		"externalSystem" : {
			"id" : "bf4bdc26-3b20-4987-8b5c-36f675fe24fe",
			"createdAt" : "/Date(1417521460421)/",
			"updatedAt" : "/Date(1417557700421)/",
			"version" : 1,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1417521700419)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1417435300419)/",
		"ends" : "/Date(1417608100419)/",
		"timeBudget" : 86400000,
		"priceBudget" : 100000.0,
		"personal" : true,
		"owner" : {
			"id" : "71b046d3-f694-4b97-b8fa-584af8d30401",
			"createdAt" : "/Date(1417520800421)/",
			"updatedAt" : "/Date(1417561300421)/",
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
			"created" : "/Date(1417435300419)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "b9d4d0c6-dcbc-440e-8874-abfccc7ee449",
			"createdAt" : "/Date(1417520320420)/",
			"updatedAt" : "/Date(1417528900420)/",
			"version" : 7,
			"externalSystem" : {
				"id" : "c8ecb829-6723-4b28-a57f-2ba9c888c75b",
				"createdAt" : "/Date(1417520800421)/",
				"updatedAt" : "/Date(1417579300421)/",
				"version" : 4,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1417521700419)/",
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
	},
	"task" : {
		"id" : "2c0a0917-091b-4fe7-b912-947344272b26",
		"createdAt" : "/Date(1417518820420)/",
		"updatedAt" : "/Date(1417546900420)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "5428aa25-faa4-4828-bf3c-bc5c840eb5ad",
			"createdAt" : "/Date(1417520740421)/",
			"updatedAt" : "/Date(1417579300421)/",
			"version" : 0,
			"name" : "Ticket system",
			"integrationPlugin" : "ticket",
			"displayName" : "Ticket system"
		},
		"externalResourceId" : "779",
		"externalBrowsableUrl" : "https://www.ticket-system.com/v1/779",
		"externalSyncedAt" : "/Date(1417521700419)/",
		"externalSynced" : true,
		"project" : {
			"id" : "7f185b5a-454a-44a9-8801-f5e052770524",
			"createdAt" : "/Date(1417519360420)/",
			"updatedAt" : "/Date(1417546900420)/",
			"version" : 5,
			"externalSystem" : {
				"id" : "bf4bdc26-3b20-4987-8b5c-36f675fe24fe",
				"createdAt" : "/Date(1417521460421)/",
				"updatedAt" : "/Date(1417557700421)/",
				"version" : 1,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1417521700419)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1417435300419)/",
			"ends" : "/Date(1417608100419)/",
			"timeBudget" : 86400000,
			"priceBudget" : 100000.0,
			"personal" : true,
			"owner" : {
				"id" : "71b046d3-f694-4b97-b8fa-584af8d30401",
				"createdAt" : "/Date(1417520800421)/",
				"updatedAt" : "/Date(1417561300421)/",
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
				"created" : "/Date(1417435300419)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "b9d4d0c6-dcbc-440e-8874-abfccc7ee449",
				"createdAt" : "/Date(1417520320420)/",
				"updatedAt" : "/Date(1417528900420)/",
				"version" : 7,
				"externalSystem" : {
					"id" : "c8ecb829-6723-4b28-a57f-2ba9c888c75b",
					"createdAt" : "/Date(1417520800421)/",
					"updatedAt" : "/Date(1417579300421)/",
					"version" : 4,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1417521700419)/",
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
		},
		"name" : "Article editation",
		"code" : "ART",
		"note" : "form with validation",
		"done" : false,
		"author" : {
			"id" : "71b046d3-f694-4b97-b8fa-584af8d30401",
			"createdAt" : "/Date(1417520800421)/",
			"updatedAt" : "/Date(1417561300421)/",
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
			"created" : "/Date(1417435300419)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "b9b06c25-b2f7-46a2-ae03-d91b01154f80",
			"createdAt" : "/Date(1417521100420)/",
			"updatedAt" : "/Date(1417546900420)/",
			"version" : 1,
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
			"birthdayRemind" : "/Date(1418338800000)/",
			"workingTimeStart" : "/Date(1417503600000)/",
			"workingTimeEnd" : "/Date(1417536000000)/",
			"created" : "/Date(1417435300419)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "d7e4a548-3fad-41cc-969d-e605921d8fd1",
		"createdAt" : "/Date(1417519000421)/",
		"updatedAt" : "/Date(1417528900421)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "e3f9c9e5-299f-4a44-b93b-04c0f0286fd2",
			"createdAt" : "/Date(1417519600421)/",
			"updatedAt" : "/Date(1417557700421)/",
			"version" : 9,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1417521700419)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "b9d4d0c6-dcbc-440e-8874-abfccc7ee449",
		"createdAt" : "/Date(1417520320420)/",
		"updatedAt" : "/Date(1417528900420)/",
		"version" : 7,
		"externalSystem" : {
			"id" : "c8ecb829-6723-4b28-a57f-2ba9c888c75b",
			"createdAt" : "/Date(1417520800421)/",
			"updatedAt" : "/Date(1417579300421)/",
			"version" : 4,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1417521700419)/",
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
	"start" : "/Date(1417435300419)/",
	"stop" : "/Date(1417456900419)/",
	"duration" : 21600000,
	"description" : "Form validations and CRUD.",
	"billable" : true,
	"source" : "googleCalendar",
	"mode" : "STOPWATCH",
	"watchTimeout" : 3600000,
	"watchLast" : "/Date(1417435300419)/",
	"displayName" : "Smith John"
}
```
