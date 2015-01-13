TimeRecord
==

## URL

	https://api.primaerp.com/v1/time/timerecords

## Properties

| Name                 | Type           | Access     | Required                                                               | Description                                                                                           |
|----------------------|----------------|------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| approved             | Boolean        | read write | no                                                                     | Determines whether the record was approved.                                                           |
| billable             | Boolean        | read write | no                                                                     | Determines whether the time record can be billed. A price will be stored only if the value is 'true'. |
| billed               | Boolean        | read only  | no                                                                     | Determines whether the record was billed.                                                             |
| client               | Client         | read write | no                                                                     | A client belongs to this object.                                                                      |
| createdAt            | Date           | read only  | no                                                                     | Date of creation.                                                                                     |
| description          | String         | read write | no                                                                     | Some description of the record.                                                                       |
| displayName          | String         | read only  | no                                                                     | Describes an object in human readable form.                                                           |
| duration             | Long           | read write | no                                                                     | Recording length (in milliseconds).                                                                   |
| effective            | Boolean        | read write | YES                                                                    | Determines whether the record is effective. Default value is true.                                    |
| externalBrowsableUrl | String         | read write | no                                                                     | Human accessible link in external system.                                                             |
| externalResourceId   | String         | read write | no                                                                     | Unique external system identifier.                                                                    |
| externalSynced       | Boolean        | write only | no                                                                     | Determines whether an object was synced with the external system.                                     |
| externalSyncedAt     | Date           | read only  | no                                                                     | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.     |
| externalSystem       | ExternalSystem | read write | no                                                                     | External system which maintains this object.                                                          |
| id                   | String         | read write | no                                                                     | Unique object identifier.                                                                             |
| price                | Double         | read write | no                                                                     | The price of the time record is calculated by the formula: 'unitPrice * duration'.                    |
| priceAutoCalculation | Boolean        | read write | no                                                                     | deprecated                                                                                            |
| priceModified        | Boolean        | read write | no                                                                     | If the value is 'true', the price won't be calculated by the price list.                              |
| project              | Project        | read write | no                                                                     | Task belongs to this project.                                                                         |
| start                | Date           | read write | no                                                                     | Date when recording starts.                                                                           |
| stop                 | Date           | read write | no                                                                     | Date when recording stops.                                                                            |
| task                 | Task           | read write | no                                                                     | A task belonging to this project.                                                                     |
| trashItem            | TrashItem      | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified.   |
| unitPrice            | Double         | read write | no                                                                     | The unit price is the price per hour.                                                                 |
| updatedAt            | Date           | read only  | no                                                                     | Last modified date.                                                                                   |
| user                 | User           | read write | YES                                                                    | The user for whom the time on the task is recorded.                                                   |
| version              | Long           | read only  | no                                                                     | Object version number.                                                                                |
| workType             | WorkType       | read write | no                                                                     | User which time on task is recorded.                                                                  |

## Metadata

```JSON
{
	"type" : "TimeRecord",
	"path" : "/v1/time/timerecords",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "approved",
			"description" : "Determines whether the record was approved.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "billable",
			"description" : "Determines whether the time record can be billed. A price will be stored only if the value is 'true'.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "billed",
			"description" : "Determines whether the record was billed.",
			"access" : "READ_ONLY"
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
			"type" : "Boolean",
			"name" : "effective",
			"description" : "Determines whether the record is effective.",
			"defaultValue" : "true",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
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
			"type" : "Double",
			"name" : "price",
			"description" : "The price of the time record is calculated by the formula: 'unitPrice * duration'. ",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "priceAutoCalculation",
			"description" : "deprecated",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "priceModified",
			"description" : "If the value is 'true', the price won't be calculated by the price list.",
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
			"type" : "Double",
			"name" : "unitPrice",
			"description" : "The unit price is the price per hour.",
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
	"id" : "1873fd5c-9be5-45f1-8c1f-5239b1503efe",
	"createdAt" : "/Date(1421140296878)/",
	"updatedAt" : "/Date(1421205936878)/",
	"version" : 7,
	"externalSystem" : {
		"id" : "e3951abd-f51f-4a3b-a1e0-e2d9b3a4585d",
		"createdAt" : "/Date(1421140656880)/",
		"updatedAt" : "/Date(1421216736880)/",
		"version" : 1,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "time-55567",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334/time/55567",
	"externalSyncedAt" : "/Date(1421141136878)/",
	"externalSynced" : true,
	"user" : {
		"id" : "f305c9f6-8aa4-44b1-bb62-a906f75df4f1",
		"createdAt" : "/Date(1421138256879)/",
		"updatedAt" : "/Date(1421151936879)/",
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
		"birthdayRemind" : "/Date(1421967600000)/",
		"workingTimeStart" : "/Date(1421132400000)/",
		"workingTimeEnd" : "/Date(1421164800000)/",
		"created" : "/Date(1421054736878)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"project" : {
		"id" : "333c93d7-15d9-4e6b-a4da-e85910c33e97",
		"createdAt" : "/Date(1421138316879)/",
		"updatedAt" : "/Date(1421205936879)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "cd6df211-5946-4513-b33a-3340b6091a43",
			"createdAt" : "/Date(1421139636880)/",
			"updatedAt" : "/Date(1421148336880)/",
			"version" : 1,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1421141136878)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1421054736878)/",
		"ends" : "/Date(1421227536878)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : true,
		"owner" : {
			"id" : "44a537cd-cc4f-4e97-9d76-9ab747a5b65f",
			"createdAt" : "/Date(1421139216879)/",
			"updatedAt" : "/Date(1421198736879)/",
			"version" : 4,
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
			"created" : "/Date(1421054736878)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "5c640e52-1174-4b53-80a8-e2ca22a83618",
			"createdAt" : "/Date(1421139276880)/",
			"updatedAt" : "/Date(1421141136880)/",
			"version" : 5,
			"externalSystem" : {
				"id" : "3b298c9b-2bde-4a51-8d97-f6cd1ad8c16b",
				"createdAt" : "/Date(1421139996880)/",
				"updatedAt" : "/Date(1421166336880)/",
				"version" : 5,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1421141136878)/",
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
		"id" : "ef9aabbf-af1d-4bce-a1ce-dfe4def506a2",
		"createdAt" : "/Date(1421139996879)/",
		"updatedAt" : "/Date(1421162736879)/",
		"version" : 3,
		"externalSystem" : {
			"id" : "051c54cc-a8ae-4e89-b0b5-3ad77777bcec",
			"createdAt" : "/Date(1421138496880)/",
			"updatedAt" : "/Date(1421213136880)/",
			"version" : 1,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-334",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334",
		"externalSyncedAt" : "/Date(1421141136878)/",
		"externalSynced" : true,
		"project" : {
			"id" : "333c93d7-15d9-4e6b-a4da-e85910c33e97",
			"createdAt" : "/Date(1421138316879)/",
			"updatedAt" : "/Date(1421205936879)/",
			"version" : 1,
			"externalSystem" : {
				"id" : "cd6df211-5946-4513-b33a-3340b6091a43",
				"createdAt" : "/Date(1421139636880)/",
				"updatedAt" : "/Date(1421148336880)/",
				"version" : 1,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1421141136878)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1421054736878)/",
			"ends" : "/Date(1421227536878)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : true,
			"owner" : {
				"id" : "44a537cd-cc4f-4e97-9d76-9ab747a5b65f",
				"createdAt" : "/Date(1421139216879)/",
				"updatedAt" : "/Date(1421198736879)/",
				"version" : 4,
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
				"created" : "/Date(1421054736878)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "5c640e52-1174-4b53-80a8-e2ca22a83618",
				"createdAt" : "/Date(1421139276880)/",
				"updatedAt" : "/Date(1421141136880)/",
				"version" : 5,
				"externalSystem" : {
					"id" : "3b298c9b-2bde-4a51-8d97-f6cd1ad8c16b",
					"createdAt" : "/Date(1421139996880)/",
					"updatedAt" : "/Date(1421166336880)/",
					"version" : 5,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1421141136878)/",
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
			"id" : "44a537cd-cc4f-4e97-9d76-9ab747a5b65f",
			"createdAt" : "/Date(1421139216879)/",
			"updatedAt" : "/Date(1421198736879)/",
			"version" : 4,
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
			"created" : "/Date(1421054736878)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "f305c9f6-8aa4-44b1-bb62-a906f75df4f1",
			"createdAt" : "/Date(1421138256879)/",
			"updatedAt" : "/Date(1421151936879)/",
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
			"birthdayRemind" : "/Date(1421967600000)/",
			"workingTimeStart" : "/Date(1421132400000)/",
			"workingTimeEnd" : "/Date(1421164800000)/",
			"created" : "/Date(1421054736878)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "67b3b528-b1a4-4d8e-a003-13416d6fcb29",
		"createdAt" : "/Date(1421140896880)/",
		"updatedAt" : "/Date(1421177136880)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "a05d780e-117a-42ab-a6cb-6118243b5bec",
			"createdAt" : "/Date(1421139156880)/",
			"updatedAt" : "/Date(1421162736880)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1421141136878)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "5c640e52-1174-4b53-80a8-e2ca22a83618",
		"createdAt" : "/Date(1421139276880)/",
		"updatedAt" : "/Date(1421141136880)/",
		"version" : 5,
		"externalSystem" : {
			"id" : "3b298c9b-2bde-4a51-8d97-f6cd1ad8c16b",
			"createdAt" : "/Date(1421139996880)/",
			"updatedAt" : "/Date(1421166336880)/",
			"version" : 5,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1421141136878)/",
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
	"start" : "/Date(1421054736878)/",
	"stop" : "/Date(1421076336878)/",
	"duration" : 21600000,
	"description" : "Form validations and CRUD.",
	"billable" : true,
	"price" : 648.5,
	"unitPrice" : 3.0023E-5,
	"priceAutoCalculation" : true,
	"priceModified" : false,
	"approved" : true,
	"billed" : false,
	"displayName" : "Smith John"
}
```
