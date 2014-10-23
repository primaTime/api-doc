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
	"id" : "565c06d6-3812-4f24-9513-1f9afef75a8f",
	"createdAt" : "/Date(1413984540618)/",
	"updatedAt" : "/Date(1414048140618)/",
	"version" : 9,
	"externalSystem" : {
		"id" : "a87dd6d7-aeb8-427b-8d49-061c6e139885",
		"createdAt" : "/Date(1413986400619)/",
		"updatedAt" : "/Date(1414058940619)/",
		"version" : 2,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "time-55567",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334/time/55567",
	"externalSyncedAt" : "/Date(1413986940618)/",
	"externalSynced" : true,
	"user" : {
		"id" : "7dff5853-a4a4-4eee-b77e-a2c0b81fe2e8",
		"createdAt" : "/Date(1413986220618)/",
		"updatedAt" : "/Date(1414033740618)/",
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
		"birthdayRemind" : "/Date(1414796400000)/",
		"workingTimeStart" : "/Date(1413957600000)/",
		"workingTimeEnd" : "/Date(1413990000000)/",
		"created" : "/Date(1413900540617)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"project" : {
		"id" : "a72dd302-e2ff-43a7-8dd4-d1c1d5141f65",
		"createdAt" : "/Date(1413984540619)/",
		"updatedAt" : "/Date(1414012140619)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "697ef5f6-d94a-44b8-a252-d39ff78e26a5",
			"createdAt" : "/Date(1413985740619)/",
			"updatedAt" : "/Date(1414048140619)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1413986940618)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1413900540618)/",
		"ends" : "/Date(1414073340618)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"active" : true,
		"personal" : true,
		"owner" : {
			"id" : "1dc7173d-2e51-4a26-9d9f-3fd951bd4bbd",
			"createdAt" : "/Date(1413983460619)/",
			"updatedAt" : "/Date(1414012140619)/",
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
			"birthdayRemind" : "/Date(1415833200000)/",
			"workingTimeStart" : "/Date(1413957600000)/",
			"workingTimeEnd" : "/Date(1413990000000)/",
			"created" : "/Date(1413900540617)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "da7fd5ca-c004-4b81-a511-258ae867b90b",
			"createdAt" : "/Date(1413984180619)/",
			"updatedAt" : "/Date(1414055340619)/",
			"version" : 0,
			"externalSystem" : {
				"id" : "1437c831-5984-4810-8f71-9060fef4331e",
				"createdAt" : "/Date(1413985860619)/",
				"updatedAt" : "/Date(1414055340619)/",
				"version" : 8,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1413986940618)/",
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
		"id" : "85f77c9f-1a8c-4c3b-888e-278d8d00a162",
		"createdAt" : "/Date(1413986820618)/",
		"updatedAt" : "/Date(1414051740618)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "051fa1d8-e9bf-491b-bd96-d2b60fff0de1",
			"createdAt" : "/Date(1413986640618)/",
			"updatedAt" : "/Date(1413994140619)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-334",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334",
		"externalSyncedAt" : "/Date(1413986940618)/",
		"externalSynced" : true,
		"project" : {
			"id" : "a72dd302-e2ff-43a7-8dd4-d1c1d5141f65",
			"createdAt" : "/Date(1413984540619)/",
			"updatedAt" : "/Date(1414012140619)/",
			"version" : 2,
			"externalSystem" : {
				"id" : "697ef5f6-d94a-44b8-a252-d39ff78e26a5",
				"createdAt" : "/Date(1413985740619)/",
				"updatedAt" : "/Date(1414048140619)/",
				"version" : 3,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1413986940618)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1413900540618)/",
			"ends" : "/Date(1414073340618)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"active" : true,
			"personal" : true,
			"owner" : {
				"id" : "1dc7173d-2e51-4a26-9d9f-3fd951bd4bbd",
				"createdAt" : "/Date(1413983460619)/",
				"updatedAt" : "/Date(1414012140619)/",
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
				"birthdayRemind" : "/Date(1415833200000)/",
				"workingTimeStart" : "/Date(1413957600000)/",
				"workingTimeEnd" : "/Date(1413990000000)/",
				"created" : "/Date(1413900540617)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "da7fd5ca-c004-4b81-a511-258ae867b90b",
				"createdAt" : "/Date(1413984180619)/",
				"updatedAt" : "/Date(1414055340619)/",
				"version" : 0,
				"externalSystem" : {
					"id" : "1437c831-5984-4810-8f71-9060fef4331e",
					"createdAt" : "/Date(1413985860619)/",
					"updatedAt" : "/Date(1414055340619)/",
					"version" : 8,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1413986940618)/",
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
			"id" : "1dc7173d-2e51-4a26-9d9f-3fd951bd4bbd",
			"createdAt" : "/Date(1413983460619)/",
			"updatedAt" : "/Date(1414012140619)/",
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
			"birthdayRemind" : "/Date(1415833200000)/",
			"workingTimeStart" : "/Date(1413957600000)/",
			"workingTimeEnd" : "/Date(1413990000000)/",
			"created" : "/Date(1413900540617)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "7dff5853-a4a4-4eee-b77e-a2c0b81fe2e8",
			"createdAt" : "/Date(1413986220618)/",
			"updatedAt" : "/Date(1414033740618)/",
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
			"birthdayRemind" : "/Date(1414796400000)/",
			"workingTimeStart" : "/Date(1413957600000)/",
			"workingTimeEnd" : "/Date(1413990000000)/",
			"created" : "/Date(1413900540617)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "bf9e2c61-a0ec-436f-8579-6b50fe594f1c",
		"createdAt" : "/Date(1413986640619)/",
		"updatedAt" : "/Date(1414022940619)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "2045a5a2-50c1-4d30-8379-03a9d58fd360",
			"createdAt" : "/Date(1413986520619)/",
			"updatedAt" : "/Date(1413990540619)/",
			"version" : 1,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1413986940618)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"active" : true,
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "da7fd5ca-c004-4b81-a511-258ae867b90b",
		"createdAt" : "/Date(1413984180619)/",
		"updatedAt" : "/Date(1414055340619)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "1437c831-5984-4810-8f71-9060fef4331e",
			"createdAt" : "/Date(1413985860619)/",
			"updatedAt" : "/Date(1414055340619)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1413986940618)/",
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
	"start" : "/Date(1413900540618)/",
	"stop" : "/Date(1413922140618)/",
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
