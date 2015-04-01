Impulse
==

## URL

	https://api.primaerp.com/v1/time/impulses

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
					"details" : "STOPWATCH"
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
	"id" : "442e19c2-1d2f-4b9d-9d96-917124ecb19b",
	"createdAt" : "/Date(1427902200653)/",
	"updatedAt" : "/Date(1427923860653)/",
	"version" : 7,
	"externalSystem" : {
		"id" : "989022e4-d0c4-4f62-b988-50479134cc29",
		"createdAt" : "/Date(1427899800654)/",
		"updatedAt" : "/Date(1427985060654)/",
		"version" : 9,
		"name" : "Ticket system",
		"integrationPlugin" : "ticket",
		"displayName" : "Ticket system"
	},
	"externalResourceId" : "779",
	"externalBrowsableUrl" : "https://www.ticket-system.com/v1/779",
	"externalSyncedAt" : "/Date(1427902260652)/",
	"externalSynced" : true,
	"user" : {
		"id" : "bbfbb86e-6b78-4d81-8b03-f74f61005334",
		"createdAt" : "/Date(1427902140654)/",
		"updatedAt" : "/Date(1427959860654)/",
		"version" : 2,
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
		"birthdayRemind" : "/Date(1428703200000)/",
		"workingTimeStart" : "/Date(1427868000000)/",
		"workingTimeEnd" : "/Date(1427900400000)/",
		"created" : "/Date(1427815860652)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"project" : {
		"id" : "a840cfcc-2db9-4b3c-9ee2-bf6052e6aaaa",
		"createdAt" : "/Date(1427899440654)/",
		"updatedAt" : "/Date(1427941860654)/",
		"version" : 3,
		"externalSystem" : {
			"id" : "8c81241c-9be1-4441-8169-4a345221f66b",
			"createdAt" : "/Date(1427899020654)/",
			"updatedAt" : "/Date(1427920260654)/",
			"version" : 7,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1427902260652)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1427815860652)/",
		"ends" : "/Date(1427988660652)/",
		"timeBudget" : 86400000,
		"priceBudget" : 100000.0,
		"personal" : true,
		"owner" : {
			"id" : "e3d26180-b054-4d9a-a682-c87e4b085bf1",
			"createdAt" : "/Date(1427899860654)/",
			"updatedAt" : "/Date(1427927460654)/",
			"version" : 8,
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
			"birthdayRemind" : "/Date(1429740000000)/",
			"workingTimeStart" : "/Date(1427868000000)/",
			"workingTimeEnd" : "/Date(1427900400000)/",
			"created" : "/Date(1427815860652)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "99392881-ee6c-4153-9812-9a7fbe38d3cc",
			"createdAt" : "/Date(1427899140654)/",
			"updatedAt" : "/Date(1427963460654)/",
			"version" : 2,
			"externalSystem" : {
				"id" : "9edc110d-625a-42b1-b609-20b7a9ce39d7",
				"createdAt" : "/Date(1427899320654)/",
				"updatedAt" : "/Date(1427974260654)/",
				"version" : 9,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1427902260652)/",
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
		"id" : "b09de6e5-9255-4847-88d3-f807d1e6809f",
		"createdAt" : "/Date(1427899500654)/",
		"updatedAt" : "/Date(1427923860654)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "c83ec40b-dc6b-4b33-b99c-add5cadae05e",
			"createdAt" : "/Date(1427900700654)/",
			"updatedAt" : "/Date(1427977860654)/",
			"version" : 7,
			"name" : "Ticket system",
			"integrationPlugin" : "ticket",
			"displayName" : "Ticket system"
		},
		"externalResourceId" : "779",
		"externalBrowsableUrl" : "https://www.ticket-system.com/v1/779",
		"externalSyncedAt" : "/Date(1427902260652)/",
		"externalSynced" : true,
		"project" : {
			"id" : "a840cfcc-2db9-4b3c-9ee2-bf6052e6aaaa",
			"createdAt" : "/Date(1427899440654)/",
			"updatedAt" : "/Date(1427941860654)/",
			"version" : 3,
			"externalSystem" : {
				"id" : "8c81241c-9be1-4441-8169-4a345221f66b",
				"createdAt" : "/Date(1427899020654)/",
				"updatedAt" : "/Date(1427920260654)/",
				"version" : 7,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1427902260652)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1427815860652)/",
			"ends" : "/Date(1427988660652)/",
			"timeBudget" : 86400000,
			"priceBudget" : 100000.0,
			"personal" : true,
			"owner" : {
				"id" : "e3d26180-b054-4d9a-a682-c87e4b085bf1",
				"createdAt" : "/Date(1427899860654)/",
				"updatedAt" : "/Date(1427927460654)/",
				"version" : 8,
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
				"birthdayRemind" : "/Date(1429740000000)/",
				"workingTimeStart" : "/Date(1427868000000)/",
				"workingTimeEnd" : "/Date(1427900400000)/",
				"created" : "/Date(1427815860652)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "99392881-ee6c-4153-9812-9a7fbe38d3cc",
				"createdAt" : "/Date(1427899140654)/",
				"updatedAt" : "/Date(1427963460654)/",
				"version" : 2,
				"externalSystem" : {
					"id" : "9edc110d-625a-42b1-b609-20b7a9ce39d7",
					"createdAt" : "/Date(1427899320654)/",
					"updatedAt" : "/Date(1427974260654)/",
					"version" : 9,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1427902260652)/",
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
			"id" : "e3d26180-b054-4d9a-a682-c87e4b085bf1",
			"createdAt" : "/Date(1427899860654)/",
			"updatedAt" : "/Date(1427927460654)/",
			"version" : 8,
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
			"birthdayRemind" : "/Date(1429740000000)/",
			"workingTimeStart" : "/Date(1427868000000)/",
			"workingTimeEnd" : "/Date(1427900400000)/",
			"created" : "/Date(1427815860652)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "bbfbb86e-6b78-4d81-8b03-f74f61005334",
			"createdAt" : "/Date(1427902140654)/",
			"updatedAt" : "/Date(1427959860654)/",
			"version" : 2,
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
			"birthdayRemind" : "/Date(1428703200000)/",
			"workingTimeStart" : "/Date(1427868000000)/",
			"workingTimeEnd" : "/Date(1427900400000)/",
			"created" : "/Date(1427815860652)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "2449fce6-8769-478f-b739-28cafed51f78",
		"createdAt" : "/Date(1427900460654)/",
		"updatedAt" : "/Date(1427913060654)/",
		"version" : 5,
		"externalSystem" : {
			"id" : "0c09efb6-fe07-4e23-9b29-5d87e4a58406",
			"createdAt" : "/Date(1427902020654)/",
			"updatedAt" : "/Date(1427952660654)/",
			"version" : 9,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1427902260652)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"category" : "WORK",
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "99392881-ee6c-4153-9812-9a7fbe38d3cc",
		"createdAt" : "/Date(1427899140654)/",
		"updatedAt" : "/Date(1427963460654)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "9edc110d-625a-42b1-b609-20b7a9ce39d7",
			"createdAt" : "/Date(1427899320654)/",
			"updatedAt" : "/Date(1427974260654)/",
			"version" : 9,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1427902260652)/",
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
	"start" : "/Date(1427815860652)/",
	"stop" : "/Date(1427837460652)/",
	"duration" : 21600000,
	"description" : "Form validations and CRUD.",
	"billable" : true,
	"source" : "googleCalendar",
	"mode" : "STOPWATCH",
	"watchTimeout" : 3600000,
	"watchLast" : "/Date(1427815860652)/",
	"displayName" : "Smith John"
}
```
