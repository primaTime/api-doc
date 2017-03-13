Impulse
==

## URL

	https://api.primaerp.com/v1/time/impulses

	https://api.primaerp.com/v1/time/impulses/{id}/$stop

	https://api.primaerp.com/v1/time/impulses/@stopwatch

	https://api.primaerp.com/v1/time/impulses/{id}/$watchnotify

	https://api.primaerp.com/v1/time/impulses/@default

## Properties

| Name                 | Type           | Access     | Required | Description                                                                                           |
|----------------------|----------------|------------|----------|-------------------------------------------------------------------------------------------------------|
| billable             | Boolean        | read write | no       | Determines whether the time record can be billed. A price will be stored only if the value is 'true'. |
| client               | Client         | read write | no       | A client belongs to this object.                                                                      |
| createdAt            | Date           | read only  | no       | Date of creation.                                                                                     |
| description          | String         | read write | no       | Some description of the record.                                                                       |
| displayName          | String         | read only  | no       | Describes an object in human readable form.                                                           |
| duration             | Long           | read write | no       | Recording length (in milliseconds).                                                                   |
| externalBrowsableUrl | String         | read write | no       | Human accessible link in external system.                                                             |
| externalResourceId   | String         | read write | no       | Unique external system identifier.                                                                    |
| externalSynced       | Boolean        | write only | no       | Determines whether an object was synced with the external system.                                     |
| externalSyncedAt     | Date           | read only  | no       | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.     |
| externalSystem       | ExternalSystem | read write | no       | External system which maintains this object.                                                          |
| id                   | String         | read write | no       | Unique object identifier.                                                                             |
| mode                 | Mode           | read write | no       | Mode in which the impulse currently is in.                                                            |
| project              | Project        | read write | no       | Task belongs to this project.                                                                         |
| source               | String         | read write | no       | The source of the impulse.                                                                            |
| start                | Date           | read write | no       | Date when recording starts.                                                                           |
| stop                 | Date           | read write | no       | Date when recording stops.                                                                            |
| task                 | Task           | read write | no       | A task belonging to this project.                                                                     |
| trashItem            | TrashItem      | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified.   |
| updatedAt            | Date           | read only  | no       | Last modified date.                                                                                   |
| user                 | User           | read write | YES      | The user for whom the time on the task is recorded.                                                   |
| version              | Long           | read write | no       | Object version number.                                                                                |
| watchLast            | Date           | read write | no       | Date and time of the last stopwatch check. Only in STOPWATCH mode.                                    |
| watchTimeout         | Long           | read write | no       | Timeout to check the stopwatch. Only in STOPWATCH mode.                                               |
| workType             | WorkType       | read write | no       | User which time on task is recorded.                                                                  |

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
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Enum",
					"details" : "STOPWATCH, PAUSE"
				}
			]
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
	"id" : "2f456ebc-eb98-4717-b4eb-c6a94c1706f3",
	"createdAt" : "/Date(1489387274304)/",
	"updatedAt" : "/Date(1489402394304)/",
	"version" : 7,
	"externalSystem" : {
		"id" : "9b683277-ebd0-47e9-ab74-3e5cd727f57a",
		"createdAt" : "/Date(1489386434305)/",
		"updatedAt" : "/Date(1489463594305)/",
		"version" : 8,
		"name" : "Ticket system",
		"integrationPlugin" : "ticket",
		"displayName" : "Ticket system"
	},
	"externalResourceId" : "779",
	"externalBrowsableUrl" : "https://www.ticket-system.com/v1/779",
	"externalSyncedAt" : "/Date(1489387994304)/",
	"externalSynced" : true,
	"user" : {
		"id" : "54ba04d7-bfa6-4adc-b8f4-70cab4889e02",
		"createdAt" : "/Date(1489385114304)/",
		"updatedAt" : "/Date(1489452794304)/",
		"version" : 8,
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
		"birthdayRemind" : "/Date(1490223600000)/",
		"workingTimeStart" : "/Date(1489388400000)/",
		"workingTimeEnd" : "/Date(1489420800000)/",
		"created" : "/Date(1489301594304)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"project" : {
		"id" : "92b47493-da04-4122-9318-75b5b939ef5e",
		"createdAt" : "/Date(1489385654305)/",
		"updatedAt" : "/Date(1489449194305)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "d3cb8e17-85a6-4753-9c8a-9f148488278c",
			"createdAt" : "/Date(1489387934305)/",
			"updatedAt" : "/Date(1489438394305)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1489387994304)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1489301594304)/",
		"ends" : "/Date(1489474394304)/",
		"timeBudget" : 86400000,
		"priceBudget" : 100000.0,
		"personal" : true,
		"owner" : {
			"id" : "f25ed03f-0982-4fcf-b61b-b71186c4b0ec",
			"createdAt" : "/Date(1489386494305)/",
			"updatedAt" : "/Date(1489441994305)/",
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
			"birthdayRemind" : "/Date(1491256800000)/",
			"workingTimeStart" : "/Date(1489388400000)/",
			"workingTimeEnd" : "/Date(1489420800000)/",
			"created" : "/Date(1489301594303)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "cb580f52-2160-4fe9-945f-73d8cf94b55d",
			"createdAt" : "/Date(1489384994305)/",
			"updatedAt" : "/Date(1489391594305)/",
			"version" : 9,
			"externalSystem" : {
				"id" : "8a6b126f-edc7-4b49-98f8-df6a141cc3fc",
				"createdAt" : "/Date(1489387094305)/",
				"updatedAt" : "/Date(1489409594305)/",
				"version" : 2,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1489387994304)/",
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
		"autoMembership" : false,
		"membersCount" : 1,
		"tasksCount" : 3,
		"timeRecordsCount" : 2,
		"displayName" : "Content management system"
	},
	"task" : {
		"id" : "7ddc2fdd-bcef-4434-9df2-f44d49cc0542",
		"createdAt" : "/Date(1489386854304)/",
		"updatedAt" : "/Date(1489387994304)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "f5a6177b-08f6-49cb-9979-ca1d3c6c07da",
			"createdAt" : "/Date(1489387994305)/",
			"updatedAt" : "/Date(1489405994305)/",
			"version" : 2,
			"name" : "Ticket system",
			"integrationPlugin" : "ticket",
			"displayName" : "Ticket system"
		},
		"externalResourceId" : "779",
		"externalBrowsableUrl" : "https://www.ticket-system.com/v1/779",
		"externalSyncedAt" : "/Date(1489387994304)/",
		"externalSynced" : true,
		"project" : {
			"id" : "92b47493-da04-4122-9318-75b5b939ef5e",
			"createdAt" : "/Date(1489385654305)/",
			"updatedAt" : "/Date(1489449194305)/",
			"version" : 9,
			"externalSystem" : {
				"id" : "d3cb8e17-85a6-4753-9c8a-9f148488278c",
				"createdAt" : "/Date(1489387934305)/",
				"updatedAt" : "/Date(1489438394305)/",
				"version" : 8,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1489387994304)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1489301594304)/",
			"ends" : "/Date(1489474394304)/",
			"timeBudget" : 86400000,
			"priceBudget" : 100000.0,
			"personal" : true,
			"owner" : {
				"id" : "f25ed03f-0982-4fcf-b61b-b71186c4b0ec",
				"createdAt" : "/Date(1489386494305)/",
				"updatedAt" : "/Date(1489441994305)/",
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
				"birthdayRemind" : "/Date(1491256800000)/",
				"workingTimeStart" : "/Date(1489388400000)/",
				"workingTimeEnd" : "/Date(1489420800000)/",
				"created" : "/Date(1489301594303)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "cb580f52-2160-4fe9-945f-73d8cf94b55d",
				"createdAt" : "/Date(1489384994305)/",
				"updatedAt" : "/Date(1489391594305)/",
				"version" : 9,
				"externalSystem" : {
					"id" : "8a6b126f-edc7-4b49-98f8-df6a141cc3fc",
					"createdAt" : "/Date(1489387094305)/",
					"updatedAt" : "/Date(1489409594305)/",
					"version" : 2,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1489387994304)/",
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
			"autoMembership" : false,
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
			"id" : "f25ed03f-0982-4fcf-b61b-b71186c4b0ec",
			"createdAt" : "/Date(1489386494305)/",
			"updatedAt" : "/Date(1489441994305)/",
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
			"birthdayRemind" : "/Date(1491256800000)/",
			"workingTimeStart" : "/Date(1489388400000)/",
			"workingTimeEnd" : "/Date(1489420800000)/",
			"created" : "/Date(1489301594303)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "54ba04d7-bfa6-4adc-b8f4-70cab4889e02",
			"createdAt" : "/Date(1489385114304)/",
			"updatedAt" : "/Date(1489452794304)/",
			"version" : 8,
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
			"birthdayRemind" : "/Date(1490223600000)/",
			"workingTimeStart" : "/Date(1489388400000)/",
			"workingTimeEnd" : "/Date(1489420800000)/",
			"created" : "/Date(1489301594304)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "4ab74518-c77b-4724-8485-31415365d320",
		"createdAt" : "/Date(1489384454305)/",
		"updatedAt" : "/Date(1489438394305)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "26bec058-9ba8-4baa-a602-37d268da3b39",
			"createdAt" : "/Date(1489384874305)/",
			"updatedAt" : "/Date(1489467194305)/",
			"version" : 0,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1489387994304)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"category" : "WORK",
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "cb580f52-2160-4fe9-945f-73d8cf94b55d",
		"createdAt" : "/Date(1489384994305)/",
		"updatedAt" : "/Date(1489391594305)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "8a6b126f-edc7-4b49-98f8-df6a141cc3fc",
			"createdAt" : "/Date(1489387094305)/",
			"updatedAt" : "/Date(1489409594305)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1489387994304)/",
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
	"start" : "/Date(1489301594304)/",
	"stop" : "/Date(1489323194304)/",
	"duration" : 21600000,
	"description" : "Form validations and CRUD.",
	"billable" : true,
	"source" : "googleCalendar",
	"mode" : "STOPWATCH",
	"watchTimeout" : 3600000,
	"watchLast" : "/Date(1489301594304)/",
	"displayName" : "Smith John"
}
```
