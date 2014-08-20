TimeRecord
==

## URL

	https://api.primaerp.com/v1/time/timerecords

## Properties

| Name                 | Type           | Access     | Description                                                                                           |
|----------------------|----------------|------------|-------------------------------------------------------------------------------------------------------|
| approved             | Boolean        | read write | Determines whether the record was approved.                                                           |
| billable             | Boolean        | read write | Determines whether the time record can be billed. A price will be stored only if the value is 'true'. |
| billed               | Boolean        | read only  | Determines whether the record was billed.                                                             |
| client               | Client         | read write | A client belongs to this object.                                                                      |
| createdAt            | Date           | read only  | Date of creation.                                                                                     |
| description          | String         | read write | Some description of the record.                                                                       |
| displayName          | String         | read only  | Describes an object in human readable form.                                                           |
| duration             | Long           | read write | Recording length (in milliseconds).                                                                   |
| effective            | Boolean        | read write | Determines whether the record is effective.                                                           |
| externalBrowsableUrl | String         | read write | Human accessible link in external system.                                                             |
| externalResourceId   | String         | read write | Unique external system identifier.                                                                    |
| externalSynced       | Boolean        | write only | Determines whether an object was synced with the external system.                                     |
| externalSyncedAt     | Date           | read only  | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.     |
| externalSystem       | ExternalSystem | read write | External system which maintains this object.                                                          |
| id                   | String         | read write | Unique object identifier.                                                                             |
| price                | Double         | read write | The price of the time record is calculated by the formula: 'unitPrice * duration'.                    |
| priceAutoCalculation | Boolean        | read write | deprecated                                                                                            |
| priceModified        | Boolean        | read write | If the value is 'true', the price won't be calculated by the price list.                              |
| project              | Project        | read write | Task belongs to this project.                                                                         |
| start                | Date           | read write | Date when recording starts.                                                                           |
| stop                 | Date           | read write | Date when recording stops.                                                                            |
| task                 | Task           | read write | A task belonging to this project.                                                                     |
| trashItem            | TrashItem      | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified.   |
| unitPrice            | Double         | read write | The unit price is the price per hour.                                                                 |
| updatedAt            | Date           | read only  | Last modified date.                                                                                   |
| user                 | User           | read write | The user for whom the time on the task is recorded.                                                   |
| version              | Long           | read write | Object version number.                                                                                |
| workType             | WorkType       | read write | User which time on task is recorded.                                                                  |

## Metadata

```JSON
{
	"type" : "TimeRecord",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "approved",
			"description" : "Determines whether the record was approved.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Boolean",
			"name" : "billable",
			"description" : "Determines whether the time record can be billed. A price will be stored only if the value is 'true'.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Boolean",
			"name" : "billed",
			"description" : "Determines whether the record was billed.",
			"access" : "READ_ONLY",
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
			"type" : "Boolean",
			"name" : "effective",
			"description" : "Determines whether the record is effective.",
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
			"type" : "Double",
			"name" : "price",
			"description" : "The price of the time record is calculated by the formula: 'unitPrice * duration'. ",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Boolean",
			"name" : "priceAutoCalculation",
			"description" : "deprecated",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Boolean",
			"name" : "priceModified",
			"description" : "If the value is 'true', the price won't be calculated by the price list.",
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
			"type" : "Double",
			"name" : "unitPrice",
			"description" : "The unit price is the price per hour.",
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
	"id" : "a29746dd-cca9-4f7b-8594-6fe629a5b0d1",
	"createdAt" : "/Date(1408463515579)/",
	"updatedAt" : "/Date(1408510315579)/",
	"version" : 5,
	"externalSystem" : {
		"id" : "17141d9a-2257-406d-9e84-d5379cb7d103",
		"createdAt" : "/Date(1408461775581)/",
		"updatedAt" : "/Date(1408492315581)/",
		"version" : 3,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "time-55567",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334/time/55567",
	"externalSyncedAt" : "/Date(1408463515579)/",
	"externalSynced" : true,
	"user" : {
		"id" : "0262e640-0be7-4573-bc0b-d6883a8408d1",
		"createdAt" : "/Date(1408461295580)/",
		"updatedAt" : "/Date(1408481515580)/",
		"version" : 3,
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
		"created" : "/Date(1408377115579)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"project" : {
		"id" : "dda0f408-7a32-41e9-bf48-bf3c4755c4ee",
		"createdAt" : "/Date(1408463035580)/",
		"updatedAt" : "/Date(1408481515580)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "3a31ce6f-82f9-44b6-ab0f-55b29e7530de",
			"createdAt" : "/Date(1408463515581)/",
			"updatedAt" : "/Date(1408463515581)/",
			"version" : 1,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1408463515579)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1408377115579)/",
		"ends" : "/Date(1408549915579)/",
		"timeBudget" : 86400000,
		"timeBudgetWarn" : 75,
		"priceBudget" : 100000.0,
		"priceBudgetWarn" : 80,
		"active" : true,
		"personal" : true,
		"owner" : {
			"id" : "8014c031-d342-4503-b8f2-f2a0a422c02b",
			"createdAt" : "/Date(1408460875581)/",
			"updatedAt" : "/Date(1408495915581)/",
			"version" : 3,
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
			"created" : "/Date(1408377115578)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "991d6469-2bad-4477-ac03-719e9ad3d6ac",
			"createdAt" : "/Date(1408460275580)/",
			"updatedAt" : "/Date(1408521115580)/",
			"version" : 4,
			"externalSystem" : {
				"id" : "52f39d18-d0b5-4f5d-9f2e-3c57fb066fdb",
				"createdAt" : "/Date(1408461535580)/",
				"updatedAt" : "/Date(1408463515581)/",
				"version" : 1,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1408463515579)/",
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
		"id" : "35a7c234-6002-40c4-b32b-4450f94ef88c",
		"createdAt" : "/Date(1408460935580)/",
		"updatedAt" : "/Date(1408521115580)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "5abba337-910a-45c3-b752-8d4a1a844943",
			"createdAt" : "/Date(1408462675581)/",
			"updatedAt" : "/Date(1408521115581)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-334",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334",
		"externalSyncedAt" : "/Date(1408463515579)/",
		"externalSynced" : true,
		"project" : {
			"id" : "dda0f408-7a32-41e9-bf48-bf3c4755c4ee",
			"createdAt" : "/Date(1408463035580)/",
			"updatedAt" : "/Date(1408481515580)/",
			"version" : 1,
			"externalSystem" : {
				"id" : "3a31ce6f-82f9-44b6-ab0f-55b29e7530de",
				"createdAt" : "/Date(1408463515581)/",
				"updatedAt" : "/Date(1408463515581)/",
				"version" : 1,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1408463515579)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1408377115579)/",
			"ends" : "/Date(1408549915579)/",
			"timeBudget" : 86400000,
			"timeBudgetWarn" : 75,
			"priceBudget" : 100000.0,
			"priceBudgetWarn" : 80,
			"active" : true,
			"personal" : true,
			"owner" : {
				"id" : "8014c031-d342-4503-b8f2-f2a0a422c02b",
				"createdAt" : "/Date(1408460875581)/",
				"updatedAt" : "/Date(1408495915581)/",
				"version" : 3,
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
				"created" : "/Date(1408377115578)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "991d6469-2bad-4477-ac03-719e9ad3d6ac",
				"createdAt" : "/Date(1408460275580)/",
				"updatedAt" : "/Date(1408521115580)/",
				"version" : 4,
				"externalSystem" : {
					"id" : "52f39d18-d0b5-4f5d-9f2e-3c57fb066fdb",
					"createdAt" : "/Date(1408461535580)/",
					"updatedAt" : "/Date(1408463515581)/",
					"version" : 1,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1408463515579)/",
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
			"id" : "8014c031-d342-4503-b8f2-f2a0a422c02b",
			"createdAt" : "/Date(1408460875581)/",
			"updatedAt" : "/Date(1408495915581)/",
			"version" : 3,
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
			"created" : "/Date(1408377115578)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "0262e640-0be7-4573-bc0b-d6883a8408d1",
			"createdAt" : "/Date(1408461295580)/",
			"updatedAt" : "/Date(1408481515580)/",
			"version" : 3,
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
			"created" : "/Date(1408377115579)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "86029fff-704a-472d-9d34-dac3c5c9e1db",
		"createdAt" : "/Date(1408461535580)/",
		"updatedAt" : "/Date(1408524715580)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "f47c64e6-c80b-427f-beed-f0087f951295",
			"createdAt" : "/Date(1408461895580)/",
			"updatedAt" : "/Date(1408513915580)/",
			"version" : 7,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1408463515579)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"active" : true,
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "991d6469-2bad-4477-ac03-719e9ad3d6ac",
		"createdAt" : "/Date(1408460275580)/",
		"updatedAt" : "/Date(1408521115580)/",
		"version" : 4,
		"externalSystem" : {
			"id" : "52f39d18-d0b5-4f5d-9f2e-3c57fb066fdb",
			"createdAt" : "/Date(1408461535580)/",
			"updatedAt" : "/Date(1408463515581)/",
			"version" : 1,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1408463515579)/",
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
	"start" : "/Date(1408377115579)/",
	"stop" : "/Date(1408398715579)/",
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
