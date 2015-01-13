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
| version              | Long           | read only  | no                                                                     | Object version number.                                                                                |
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
			"access" : "READ_ONLY"
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
	"id" : "57e4a73c-a875-4b29-94c6-72dad50023de",
	"createdAt" : "/Date(1421139637961)/",
	"updatedAt" : "/Date(1421155537961)/",
	"version" : 6,
	"externalSystem" : {
		"id" : "493568e8-e10a-4409-b168-1a05be513b53",
		"createdAt" : "/Date(1421140597962)/",
		"updatedAt" : "/Date(1421169937962)/",
		"version" : 5,
		"name" : "Ticket system",
		"integrationPlugin" : "ticket",
		"displayName" : "Ticket system"
	},
	"externalResourceId" : "779",
	"externalBrowsableUrl" : "https://www.ticket-system.com/v1/779",
	"externalSyncedAt" : "/Date(1421141137960)/",
	"externalSynced" : true,
	"user" : {
		"id" : "b730a6f8-8194-4ab8-ad6b-ad2af37045fb",
		"createdAt" : "/Date(1421139097961)/",
		"updatedAt" : "/Date(1421169937961)/",
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
		"birthdayRemind" : "/Date(1421967600000)/",
		"workingTimeStart" : "/Date(1421132400000)/",
		"workingTimeEnd" : "/Date(1421164800000)/",
		"created" : "/Date(1421054737960)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"project" : {
		"id" : "20832bed-0a5f-46a3-96ad-8bcf33084722",
		"createdAt" : "/Date(1421139217961)/",
		"updatedAt" : "/Date(1421151937961)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "543005ca-1f30-4824-b139-0fc740ceabf4",
			"createdAt" : "/Date(1421139037962)/",
			"updatedAt" : "/Date(1421195137962)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1421141137960)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1421054737960)/",
		"ends" : "/Date(1421227537960)/",
		"timeBudget" : 86400000,
		"priceBudget" : 100000.0,
		"personal" : true,
		"owner" : {
			"id" : "c6764112-aa05-46fd-8b53-5cf85941e93c",
			"createdAt" : "/Date(1421138377961)/",
			"updatedAt" : "/Date(1421159137962)/",
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
			"birthdayRemind" : "/Date(1423004400000)/",
			"workingTimeStart" : "/Date(1421132400000)/",
			"workingTimeEnd" : "/Date(1421164800000)/",
			"created" : "/Date(1421054737960)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "0481ce06-c7cb-40a1-ac40-7641414cc549",
			"createdAt" : "/Date(1421139337962)/",
			"updatedAt" : "/Date(1421213137962)/",
			"version" : 6,
			"externalSystem" : {
				"id" : "2d5466b9-24c7-484b-80a7-038eec72c43f",
				"createdAt" : "/Date(1421140897962)/",
				"updatedAt" : "/Date(1421155537962)/",
				"version" : 7,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1421141137960)/",
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
		"id" : "ce633885-2667-43a1-a7e1-4f4401c92c3e",
		"createdAt" : "/Date(1421137957961)/",
		"updatedAt" : "/Date(1421184337961)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "1485f839-2c41-4aa0-936e-0f0a3a9cfdac",
			"createdAt" : "/Date(1421138557962)/",
			"updatedAt" : "/Date(1421198737962)/",
			"version" : 9,
			"name" : "Ticket system",
			"integrationPlugin" : "ticket",
			"displayName" : "Ticket system"
		},
		"externalResourceId" : "779",
		"externalBrowsableUrl" : "https://www.ticket-system.com/v1/779",
		"externalSyncedAt" : "/Date(1421141137960)/",
		"externalSynced" : true,
		"project" : {
			"id" : "20832bed-0a5f-46a3-96ad-8bcf33084722",
			"createdAt" : "/Date(1421139217961)/",
			"updatedAt" : "/Date(1421151937961)/",
			"version" : 6,
			"externalSystem" : {
				"id" : "543005ca-1f30-4824-b139-0fc740ceabf4",
				"createdAt" : "/Date(1421139037962)/",
				"updatedAt" : "/Date(1421195137962)/",
				"version" : 8,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1421141137960)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1421054737960)/",
			"ends" : "/Date(1421227537960)/",
			"timeBudget" : 86400000,
			"priceBudget" : 100000.0,
			"personal" : true,
			"owner" : {
				"id" : "c6764112-aa05-46fd-8b53-5cf85941e93c",
				"createdAt" : "/Date(1421138377961)/",
				"updatedAt" : "/Date(1421159137962)/",
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
				"birthdayRemind" : "/Date(1423004400000)/",
				"workingTimeStart" : "/Date(1421132400000)/",
				"workingTimeEnd" : "/Date(1421164800000)/",
				"created" : "/Date(1421054737960)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "0481ce06-c7cb-40a1-ac40-7641414cc549",
				"createdAt" : "/Date(1421139337962)/",
				"updatedAt" : "/Date(1421213137962)/",
				"version" : 6,
				"externalSystem" : {
					"id" : "2d5466b9-24c7-484b-80a7-038eec72c43f",
					"createdAt" : "/Date(1421140897962)/",
					"updatedAt" : "/Date(1421155537962)/",
					"version" : 7,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1421141137960)/",
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
			"id" : "c6764112-aa05-46fd-8b53-5cf85941e93c",
			"createdAt" : "/Date(1421138377961)/",
			"updatedAt" : "/Date(1421159137962)/",
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
			"birthdayRemind" : "/Date(1423004400000)/",
			"workingTimeStart" : "/Date(1421132400000)/",
			"workingTimeEnd" : "/Date(1421164800000)/",
			"created" : "/Date(1421054737960)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "b730a6f8-8194-4ab8-ad6b-ad2af37045fb",
			"createdAt" : "/Date(1421139097961)/",
			"updatedAt" : "/Date(1421169937961)/",
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
			"birthdayRemind" : "/Date(1421967600000)/",
			"workingTimeStart" : "/Date(1421132400000)/",
			"workingTimeEnd" : "/Date(1421164800000)/",
			"created" : "/Date(1421054737960)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "da0fc01f-e9f3-4137-80a5-dc96db7dd2d3",
		"createdAt" : "/Date(1421138317962)/",
		"updatedAt" : "/Date(1421216737962)/",
		"version" : 5,
		"externalSystem" : {
			"id" : "b40c1bff-f3e6-4eb0-8a82-868a55e26971",
			"createdAt" : "/Date(1421140477962)/",
			"updatedAt" : "/Date(1421213137962)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1421141137960)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "0481ce06-c7cb-40a1-ac40-7641414cc549",
		"createdAt" : "/Date(1421139337962)/",
		"updatedAt" : "/Date(1421213137962)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "2d5466b9-24c7-484b-80a7-038eec72c43f",
			"createdAt" : "/Date(1421140897962)/",
			"updatedAt" : "/Date(1421155537962)/",
			"version" : 7,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1421141137960)/",
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
	"start" : "/Date(1421054737960)/",
	"stop" : "/Date(1421076337960)/",
	"duration" : 21600000,
	"description" : "Form validations and CRUD.",
	"billable" : true,
	"source" : "googleCalendar",
	"mode" : "STOPWATCH",
	"watchTimeout" : 3600000,
	"watchLast" : "/Date(1421054737960)/",
	"displayName" : "Smith John"
}
```
