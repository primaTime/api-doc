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
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "billable",
			"description" : "Determines whether the time record can be billed. A price will be stored only if the value is 'true'.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Client",
			"name" : "client",
			"description" : "A client belongs to this object.",
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
			"name" : "description",
			"description" : "Some description of the record.",
			"access" : "READ_WRITE",
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
			"type" : "Mode",
			"name" : "mode",
			"description" : "Mode in which the impulse currently is in.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Project",
			"name" : "project",
			"description" : "Task belongs to this project.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "source",
			"description" : "The source of the impulse.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "start",
			"description" : "Date when recording starts.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "stop",
			"description" : "Date when recording stops.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Task",
			"name" : "task",
			"description" : "A task belonging to this project.",
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
			"type" : "User",
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
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "watchLast",
			"description" : "Date and time of the last stopwatch check. Only in STOPWATCH mode.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Long",
			"name" : "watchTimeout",
			"description" : "Timeout to check the stopwatch. Only in STOPWATCH mode.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "WorkType",
			"name" : "workType",
			"description" : "User which time on task is recorded.",
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
	"id" : "b389cce4-07d7-41d6-b950-f98370754cda",
	"createdAt" : "/Date(1412165928195)/",
	"updatedAt" : "/Date(1412197008195)/",
	"version" : 3,
	"externalSystem" : {
		"id" : "bbba30cb-fe3a-400d-9593-f9ea51510f77",
		"createdAt" : "/Date(1412168088195)/",
		"updatedAt" : "/Date(1412179008196)/",
		"version" : 5,
		"name" : "Ticket system",
		"integrationPlugin" : "ticket",
		"displayName" : "Ticket system"
	},
	"externalResourceId" : "779",
	"externalBrowsableUrl" : "https://www.ticket-system.com/v1/779",
	"externalSyncedAt" : "/Date(1412168208195)/",
	"externalSynced" : true,
	"user" : {
		"id" : "0c677d86-29bf-4934-a557-1cb8b9dd2fc5",
		"createdAt" : "/Date(1412166048195)/",
		"updatedAt" : "/Date(1412218608195)/",
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
		"birthdayRemind" : "/Date(1412978400000)/",
		"workingTimeStart" : "/Date(1412143200000)/",
		"workingTimeEnd" : "/Date(1412175600000)/",
		"created" : "/Date(1412081808195)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"project" : {
		"id" : "69cb0bcf-d95a-4e6e-b6b5-80d8caf0f61a",
		"createdAt" : "/Date(1412166768195)/",
		"updatedAt" : "/Date(1412240208195)/",
		"version" : 7,
		"externalSystem" : {
			"id" : "59548ab3-68fa-4519-8eb4-32edc0aee43e",
			"createdAt" : "/Date(1412167128195)/",
			"updatedAt" : "/Date(1412171808195)/",
			"version" : 7,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1412168208195)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1412081808195)/",
		"ends" : "/Date(1412254608195)/",
		"timeBudget" : 86400000,
		"priceBudget" : 100000.0,
		"active" : true,
		"personal" : true,
		"owner" : {
			"id" : "ed5d593f-61e5-47d0-948c-eefaee0daffc",
			"createdAt" : "/Date(1412166708195)/",
			"updatedAt" : "/Date(1412207808195)/",
			"version" : 0,
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
			"birthdayRemind" : "/Date(1414015200000)/",
			"workingTimeStart" : "/Date(1412143200000)/",
			"workingTimeEnd" : "/Date(1412175600000)/",
			"created" : "/Date(1412081808195)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "e2c7dc64-ef01-4a21-ac3f-a8f8c6600ad1",
			"createdAt" : "/Date(1412166108195)/",
			"updatedAt" : "/Date(1412182608195)/",
			"version" : 4,
			"externalSystem" : {
				"id" : "24950349-d2ae-4145-80f0-f1f3cc578064",
				"createdAt" : "/Date(1412167068195)/",
				"updatedAt" : "/Date(1412218608195)/",
				"version" : 2,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1412168208195)/",
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
		"id" : "cb248d83-625e-48b4-8e48-1dbae0787788",
		"createdAt" : "/Date(1412166168195)/",
		"updatedAt" : "/Date(1412243808195)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "a2f37298-1d27-4379-941f-f42b7ba6da4c",
			"createdAt" : "/Date(1412165268195)/",
			"updatedAt" : "/Date(1412243808195)/",
			"version" : 8,
			"name" : "Ticket system",
			"integrationPlugin" : "ticket",
			"displayName" : "Ticket system"
		},
		"externalResourceId" : "779",
		"externalBrowsableUrl" : "https://www.ticket-system.com/v1/779",
		"externalSyncedAt" : "/Date(1412168208195)/",
		"externalSynced" : true,
		"project" : {
			"id" : "69cb0bcf-d95a-4e6e-b6b5-80d8caf0f61a",
			"createdAt" : "/Date(1412166768195)/",
			"updatedAt" : "/Date(1412240208195)/",
			"version" : 7,
			"externalSystem" : {
				"id" : "59548ab3-68fa-4519-8eb4-32edc0aee43e",
				"createdAt" : "/Date(1412167128195)/",
				"updatedAt" : "/Date(1412171808195)/",
				"version" : 7,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1412168208195)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1412081808195)/",
			"ends" : "/Date(1412254608195)/",
			"timeBudget" : 86400000,
			"priceBudget" : 100000.0,
			"active" : true,
			"personal" : true,
			"owner" : {
				"id" : "ed5d593f-61e5-47d0-948c-eefaee0daffc",
				"createdAt" : "/Date(1412166708195)/",
				"updatedAt" : "/Date(1412207808195)/",
				"version" : 0,
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
				"birthdayRemind" : "/Date(1414015200000)/",
				"workingTimeStart" : "/Date(1412143200000)/",
				"workingTimeEnd" : "/Date(1412175600000)/",
				"created" : "/Date(1412081808195)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "e2c7dc64-ef01-4a21-ac3f-a8f8c6600ad1",
				"createdAt" : "/Date(1412166108195)/",
				"updatedAt" : "/Date(1412182608195)/",
				"version" : 4,
				"externalSystem" : {
					"id" : "24950349-d2ae-4145-80f0-f1f3cc578064",
					"createdAt" : "/Date(1412167068195)/",
					"updatedAt" : "/Date(1412218608195)/",
					"version" : 2,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1412168208195)/",
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
		"done" : false,
		"author" : {
			"id" : "ed5d593f-61e5-47d0-948c-eefaee0daffc",
			"createdAt" : "/Date(1412166708195)/",
			"updatedAt" : "/Date(1412207808195)/",
			"version" : 0,
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
			"birthdayRemind" : "/Date(1414015200000)/",
			"workingTimeStart" : "/Date(1412143200000)/",
			"workingTimeEnd" : "/Date(1412175600000)/",
			"created" : "/Date(1412081808195)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "0c677d86-29bf-4934-a557-1cb8b9dd2fc5",
			"createdAt" : "/Date(1412166048195)/",
			"updatedAt" : "/Date(1412218608195)/",
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
			"birthdayRemind" : "/Date(1412978400000)/",
			"workingTimeStart" : "/Date(1412143200000)/",
			"workingTimeEnd" : "/Date(1412175600000)/",
			"created" : "/Date(1412081808195)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "b8acc2a0-6beb-40de-b163-6dd504d7b51e",
		"createdAt" : "/Date(1412165868195)/",
		"updatedAt" : "/Date(1412218608195)/",
		"version" : 8,
		"externalSystem" : {
			"id" : "c3472077-b260-4bcf-80c9-7cf191905729",
			"createdAt" : "/Date(1412167968195)/",
			"updatedAt" : "/Date(1412229408195)/",
			"version" : 4,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1412168208195)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"active" : true,
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "e2c7dc64-ef01-4a21-ac3f-a8f8c6600ad1",
		"createdAt" : "/Date(1412166108195)/",
		"updatedAt" : "/Date(1412182608195)/",
		"version" : 4,
		"externalSystem" : {
			"id" : "24950349-d2ae-4145-80f0-f1f3cc578064",
			"createdAt" : "/Date(1412167068195)/",
			"updatedAt" : "/Date(1412218608195)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1412168208195)/",
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
	"start" : "/Date(1412081808195)/",
	"stop" : "/Date(1412103408195)/",
	"duration" : 21600000,
	"description" : "Form validations and CRUD.",
	"billable" : true,
	"source" : "googleCalendar",
	"mode" : "STOPWATCH",
	"watchTimeout" : 3600000,
	"watchLast" : "/Date(1412081808195)/",
	"displayName" : "Smith John"
}
```
