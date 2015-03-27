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
| recordType           | TimeRecordType | read write | no                                                                     | A record type.                                                                                        |
| start                | Date           | read write | no                                                                     | Date when recording starts.                                                                           |
| stop                 | Date           | read write | no                                                                     | Date when recording stops.                                                                            |
| task                 | Task           | read write | no                                                                     | A task belonging to this project.                                                                     |
| trashItem            | TrashItem      | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified.   |
| unitPrice            | Double         | read write | no                                                                     | The unit price is the price per hour.                                                                 |
| updatedAt            | Date           | read only  | no                                                                     | Last modified date.                                                                                   |
| user                 | User           | read write | YES                                                                    | The user for whom the time on the task is recorded.                                                   |
| version              | Long           | read write | no                                                                     | Object version number.                                                                                |
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
			"type" : "TimeRecordType",
			"name" : "recordType",
			"description" : "A record type.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Enum",
					"details" : "ATTENDANCE"
				}
			]
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
	"id" : "4e339844-258c-4947-b04e-b759af6aead5",
	"createdAt" : "/Date(1424881573630)/",
	"updatedAt" : "/Date(1424886853630)/",
	"version" : 3,
	"externalSystem" : {
		"id" : "a175642b-a4c1-47b3-b7ca-9ce639c59f88",
		"createdAt" : "/Date(1424880733632)/",
		"updatedAt" : "/Date(1424930053632)/",
		"version" : 3,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "time-55567",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334/time/55567",
	"externalSyncedAt" : "/Date(1424883253630)/",
	"externalSynced" : true,
	"user" : {
		"id" : "511270a6-7dfa-4c9e-a8c1-114794fef9ce",
		"createdAt" : "/Date(1424880013631)/",
		"updatedAt" : "/Date(1424937253631)/",
		"version" : 9,
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
		"birthdayRemind" : "/Date(1425682800000)/",
		"workingTimeStart" : "/Date(1424847600000)/",
		"workingTimeEnd" : "/Date(1424880000000)/",
		"created" : "/Date(1424796853630)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"project" : {
		"id" : "88d36127-3bea-4163-a6d2-40567d2067b5",
		"createdAt" : "/Date(1424881393631)/",
		"updatedAt" : "/Date(1424915653631)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "b7873e1a-3a49-48fc-96a3-6f93f07f65f1",
			"createdAt" : "/Date(1424879953632)/",
			"updatedAt" : "/Date(1424890453632)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1424883253630)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1424796853630)/",
		"ends" : "/Date(1424969653630)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : true,
		"owner" : {
			"id" : "dc30ff3e-fe85-4a28-96c1-59dbc3afc236",
			"createdAt" : "/Date(1424880253632)/",
			"updatedAt" : "/Date(1424951653632)/",
			"version" : 9,
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
			"birthdayRemind" : "/Date(1426719600000)/",
			"workingTimeStart" : "/Date(1424847600000)/",
			"workingTimeEnd" : "/Date(1424880000000)/",
			"created" : "/Date(1424796853630)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "f504f74d-830d-4fef-b23a-3ec7e4c825cc",
			"createdAt" : "/Date(1424880013632)/",
			"updatedAt" : "/Date(1424948053632)/",
			"version" : 6,
			"externalSystem" : {
				"id" : "cac0f8f1-2557-4dd1-89ef-516cf0578643",
				"createdAt" : "/Date(1424882233632)/",
				"updatedAt" : "/Date(1424955253632)/",
				"version" : 3,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1424883253630)/",
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
		"id" : "1ca64fc9-3410-4bff-befb-12eb245a7558",
		"createdAt" : "/Date(1424880193631)/",
		"updatedAt" : "/Date(1424922853631)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "8b11f3e0-8a3d-487d-8453-845d4db58aa0",
			"createdAt" : "/Date(1424883193632)/",
			"updatedAt" : "/Date(1424883253632)/",
			"version" : 5,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-334",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334",
		"externalSyncedAt" : "/Date(1424883253630)/",
		"externalSynced" : true,
		"project" : {
			"id" : "88d36127-3bea-4163-a6d2-40567d2067b5",
			"createdAt" : "/Date(1424881393631)/",
			"updatedAt" : "/Date(1424915653631)/",
			"version" : 6,
			"externalSystem" : {
				"id" : "b7873e1a-3a49-48fc-96a3-6f93f07f65f1",
				"createdAt" : "/Date(1424879953632)/",
				"updatedAt" : "/Date(1424890453632)/",
				"version" : 6,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1424883253630)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1424796853630)/",
			"ends" : "/Date(1424969653630)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : true,
			"owner" : {
				"id" : "dc30ff3e-fe85-4a28-96c1-59dbc3afc236",
				"createdAt" : "/Date(1424880253632)/",
				"updatedAt" : "/Date(1424951653632)/",
				"version" : 9,
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
				"birthdayRemind" : "/Date(1426719600000)/",
				"workingTimeStart" : "/Date(1424847600000)/",
				"workingTimeEnd" : "/Date(1424880000000)/",
				"created" : "/Date(1424796853630)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "f504f74d-830d-4fef-b23a-3ec7e4c825cc",
				"createdAt" : "/Date(1424880013632)/",
				"updatedAt" : "/Date(1424948053632)/",
				"version" : 6,
				"externalSystem" : {
					"id" : "cac0f8f1-2557-4dd1-89ef-516cf0578643",
					"createdAt" : "/Date(1424882233632)/",
					"updatedAt" : "/Date(1424955253632)/",
					"version" : 3,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1424883253630)/",
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
			"id" : "dc30ff3e-fe85-4a28-96c1-59dbc3afc236",
			"createdAt" : "/Date(1424880253632)/",
			"updatedAt" : "/Date(1424951653632)/",
			"version" : 9,
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
			"birthdayRemind" : "/Date(1426719600000)/",
			"workingTimeStart" : "/Date(1424847600000)/",
			"workingTimeEnd" : "/Date(1424880000000)/",
			"created" : "/Date(1424796853630)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "511270a6-7dfa-4c9e-a8c1-114794fef9ce",
			"createdAt" : "/Date(1424880013631)/",
			"updatedAt" : "/Date(1424937253631)/",
			"version" : 9,
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
			"birthdayRemind" : "/Date(1425682800000)/",
			"workingTimeStart" : "/Date(1424847600000)/",
			"workingTimeEnd" : "/Date(1424880000000)/",
			"created" : "/Date(1424796853630)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "677bd220-8b55-485b-81a0-31a8d2551515",
		"createdAt" : "/Date(1424882533632)/",
		"updatedAt" : "/Date(1424883253632)/",
		"version" : 8,
		"externalSystem" : {
			"id" : "60d416f5-1d03-4f54-a011-20e13461e719",
			"createdAt" : "/Date(1424880913632)/",
			"updatedAt" : "/Date(1424958853632)/",
			"version" : 5,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1424883253630)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"category" : "WORK",
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "f504f74d-830d-4fef-b23a-3ec7e4c825cc",
		"createdAt" : "/Date(1424880013632)/",
		"updatedAt" : "/Date(1424948053632)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "cac0f8f1-2557-4dd1-89ef-516cf0578643",
			"createdAt" : "/Date(1424882233632)/",
			"updatedAt" : "/Date(1424955253632)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1424883253630)/",
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
	"start" : "/Date(1424796853630)/",
	"stop" : "/Date(1424818453630)/",
	"duration" : 21600000,
	"description" : "Form validations and CRUD.",
	"billable" : true,
	"price" : 648.5,
	"unitPrice" : 3.0023E-5,
	"priceAutoCalculation" : true,
	"priceModified" : false,
	"approved" : true,
	"billed" : false,
	"recordType" : "ATTENDANCE",
	"displayName" : "Smith John"
}
```
