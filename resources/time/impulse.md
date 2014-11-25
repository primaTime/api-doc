Impulse
==

## URL

	https://api.primaerp.com/v1/time/impulses

## Properties

| Name                 | Type           | Access     | Description                                                                                           |
|----------------------|----------------|------------|-------------------------------------------------------------------------------------------------------|
| billable             | Boolean        | read write | Determines whether the time record can be billed. A price will be stored only if the value is 'true'. |
| client               | Client         | read write | A client belongs to this object.                                                                      |
| createdAt            | Date           | read only  | Date of creation.                                                                                     |
| description          | String         | read write | Some description of the record.                                                                       |
| displayName          | String         | read only  | Describes an object in human readable form.                                                           |
| duration             | Long           | read write | Recording length (in milliseconds).                                                                   |
| externalBrowsableUrl | String         | read write | Human accessible link in external system.                                                             |
| externalResourceId   | String         | read write | Unique external system identifier.                                                                    |
| externalSynced       | Boolean        | write only | Determines whether an object was synced with the external system.                                     |
| externalSyncedAt     | Date           | read only  | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.     |
| externalSystem       | ExternalSystem | read write | External system which maintains this object.                                                          |
| id                   | String         | read write | Unique object identifier.                                                                             |
| mode                 | Mode           | read write | Mode in which the impulse currently is in.                                                            |
| project              | Project        | read write | Task belongs to this project.                                                                         |
| source               | String         | read write | The source of the impulse.                                                                            |
| start                | Date           | read write | Date when recording starts.                                                                           |
| stop                 | Date           | read write | Date when recording stops.                                                                            |
| task                 | Task           | read write | A task belonging to this project.                                                                     |
| trashItem            | TrashItem      | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified.   |
| updatedAt            | Date           | read only  | Last modified date.                                                                                   |
| user                 | User           | read write | The user for whom the time on the task is recorded.                                                   |
| version              | Long           | read write | Object version number.                                                                                |
| watchLast            | Date           | read write | Date and time of the last stopwatch check. Only in STOPWATCH mode.                                    |
| watchTimeout         | Long           | read write | Timeout to check the stopwatch. Only in STOPWATCH mode.                                               |
| workType             | WorkType       | read write | User which time on task is recorded.                                                                  |

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
					"type" : "NotNull",
					"pattern" : null
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
	"id" : "3069cf86-cac5-49f1-847f-3c2e59bf2e26",
	"createdAt" : "/Date(1416912778125)/",
	"updatedAt" : "/Date(1416981118125)/",
	"version" : 0,
	"externalSystem" : {
		"id" : "553390b4-daaa-4c40-a551-35037b5d3acf",
		"createdAt" : "/Date(1416915838127)/",
		"updatedAt" : "/Date(1416916318127)/",
		"version" : 9,
		"name" : "Ticket system",
		"integrationPlugin" : "ticket",
		"displayName" : "Ticket system"
	},
	"externalResourceId" : "779",
	"externalBrowsableUrl" : "https://www.ticket-system.com/v1/779",
	"externalSyncedAt" : "/Date(1416916318124)/",
	"externalSynced" : true,
	"user" : {
		"id" : "11da7fda-4311-49b3-b24a-1fea1c7c4721",
		"createdAt" : "/Date(1416915118127)/",
		"updatedAt" : "/Date(1416973918127)/",
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
		"birthdayRemind" : "/Date(1417734000000)/",
		"workingTimeStart" : "/Date(1416898800000)/",
		"workingTimeEnd" : "/Date(1416931200000)/",
		"created" : "/Date(1416829918124)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"project" : {
		"id" : "5311ec77-f91e-4d33-910c-f596d02b925a",
		"createdAt" : "/Date(1416914338126)/",
		"updatedAt" : "/Date(1416984718126)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "501b2bf6-d832-4b1c-8c66-c4a73438a8f4",
			"createdAt" : "/Date(1416915658126)/",
			"updatedAt" : "/Date(1416995518126)/",
			"version" : 1,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1416916318124)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1416829918124)/",
		"ends" : "/Date(1417002718124)/",
		"timeBudget" : 86400000,
		"priceBudget" : 100000.0,
		"active" : true,
		"personal" : true,
		"owner" : {
			"id" : "9f757043-d80f-4f04-b430-1c332dd58822",
			"createdAt" : "/Date(1416913078127)/",
			"updatedAt" : "/Date(1416927118127)/",
			"version" : 7,
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
			"created" : "/Date(1416829918124)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "340adce2-7f7e-4d3c-932e-821287aea7e0",
			"createdAt" : "/Date(1416913618126)/",
			"updatedAt" : "/Date(1416970318126)/",
			"version" : 4,
			"externalSystem" : {
				"id" : "f7ab988d-6713-4d30-b29d-e6fefb92018a",
				"createdAt" : "/Date(1416914638126)/",
				"updatedAt" : "/Date(1416955918126)/",
				"version" : 2,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1416916318124)/",
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
	"task" : {
		"id" : "b91c12a3-57ab-490e-bd17-f1ffef3770e5",
		"createdAt" : "/Date(1416914878126)/",
		"updatedAt" : "/Date(1416955918126)/",
		"version" : 3,
		"externalSystem" : {
			"id" : "8cb6e91f-6f0a-4729-a41c-c9924f8d1332",
			"createdAt" : "/Date(1416913558127)/",
			"updatedAt" : "/Date(1416959518127)/",
			"version" : 7,
			"name" : "Ticket system",
			"integrationPlugin" : "ticket",
			"displayName" : "Ticket system"
		},
		"externalResourceId" : "779",
		"externalBrowsableUrl" : "https://www.ticket-system.com/v1/779",
		"externalSyncedAt" : "/Date(1416916318124)/",
		"externalSynced" : true,
		"project" : {
			"id" : "5311ec77-f91e-4d33-910c-f596d02b925a",
			"createdAt" : "/Date(1416914338126)/",
			"updatedAt" : "/Date(1416984718126)/",
			"version" : 9,
			"externalSystem" : {
				"id" : "501b2bf6-d832-4b1c-8c66-c4a73438a8f4",
				"createdAt" : "/Date(1416915658126)/",
				"updatedAt" : "/Date(1416995518126)/",
				"version" : 1,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1416916318124)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1416829918124)/",
			"ends" : "/Date(1417002718124)/",
			"timeBudget" : 86400000,
			"priceBudget" : 100000.0,
			"active" : true,
			"personal" : true,
			"owner" : {
				"id" : "9f757043-d80f-4f04-b430-1c332dd58822",
				"createdAt" : "/Date(1416913078127)/",
				"updatedAt" : "/Date(1416927118127)/",
				"version" : 7,
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
				"created" : "/Date(1416829918124)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "340adce2-7f7e-4d3c-932e-821287aea7e0",
				"createdAt" : "/Date(1416913618126)/",
				"updatedAt" : "/Date(1416970318126)/",
				"version" : 4,
				"externalSystem" : {
					"id" : "f7ab988d-6713-4d30-b29d-e6fefb92018a",
					"createdAt" : "/Date(1416914638126)/",
					"updatedAt" : "/Date(1416955918126)/",
					"version" : 2,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1416916318124)/",
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
		"done" : false,
		"author" : {
			"id" : "9f757043-d80f-4f04-b430-1c332dd58822",
			"createdAt" : "/Date(1416913078127)/",
			"updatedAt" : "/Date(1416927118127)/",
			"version" : 7,
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
			"created" : "/Date(1416829918124)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "11da7fda-4311-49b3-b24a-1fea1c7c4721",
			"createdAt" : "/Date(1416915118127)/",
			"updatedAt" : "/Date(1416973918127)/",
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
			"birthdayRemind" : "/Date(1417734000000)/",
			"workingTimeStart" : "/Date(1416898800000)/",
			"workingTimeEnd" : "/Date(1416931200000)/",
			"created" : "/Date(1416829918124)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "48745819-3ae1-4822-a5dd-e194adb65338",
		"createdAt" : "/Date(1416915478126)/",
		"updatedAt" : "/Date(1416955918126)/",
		"version" : 8,
		"externalSystem" : {
			"id" : "079447d7-3d34-4765-8ac8-6f023d630e06",
			"createdAt" : "/Date(1416912838126)/",
			"updatedAt" : "/Date(1416919918126)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1416916318124)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"active" : true,
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "340adce2-7f7e-4d3c-932e-821287aea7e0",
		"createdAt" : "/Date(1416913618126)/",
		"updatedAt" : "/Date(1416970318126)/",
		"version" : 4,
		"externalSystem" : {
			"id" : "f7ab988d-6713-4d30-b29d-e6fefb92018a",
			"createdAt" : "/Date(1416914638126)/",
			"updatedAt" : "/Date(1416955918126)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1416916318124)/",
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
	"start" : "/Date(1416829918124)/",
	"stop" : "/Date(1416851518124)/",
	"duration" : 21600000,
	"description" : "Form validations and CRUD.",
	"billable" : true,
	"source" : "googleCalendar",
	"mode" : "STOPWATCH",
	"watchTimeout" : 3600000,
	"watchLast" : "/Date(1416829918124)/",
	"displayName" : "Smith John"
}
```
