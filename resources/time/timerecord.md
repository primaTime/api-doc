TimeRecord
==

## URL

	https://api.primaerp.com/v1/time/timerecords

	https://api.primaerp.com/v1/time/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/timerecords/$unbilled

	https://api.primaerp.com/v1/time/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/timerecords/{id}/$updateprice

	https://api.primaerp.com/v1/time/tasks/{id}/timerecords

	https://api.primaerp.com/v1/time/tasks/{id}/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/tasks/{id}/timerecords/$unbilled

	https://api.primaerp.com/v1/time/tasks/{id}/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/tasks/{id}/timerecords/{id}/$updateprice

	https://api.primaerp.com/v1/time/tags/{id}/timerecords

	https://api.primaerp.com/v1/time/tags/{id}/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/tags/{id}/timerecords/$unbilled

	https://api.primaerp.com/v1/time/tags/{id}/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/tags/{id}/timerecords/{id}/$updateprice

	https://api.primaerp.com/v1/time/projects/{id}/timerecords

	https://api.primaerp.com/v1/time/projects/{id}/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/projects/{id}/timerecords/$unbilled

	https://api.primaerp.com/v1/time/projects/{id}/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/projects/{id}/timerecords/{id}/$updateprice

	https://api.primaerp.com/v1/time/users/{id}/timerecords

	https://api.primaerp.com/v1/time/users/{id}/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/users/{id}/timerecords/$unbilled

	https://api.primaerp.com/v1/time/users/{id}/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/users/{id}/timerecords/{id}/$updateprice

	https://api.primaerp.com/v1/time/worktypes/{id}/timerecords

	https://api.primaerp.com/v1/time/worktypes/{id}/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/worktypes/{id}/timerecords/$unbilled

	https://api.primaerp.com/v1/time/worktypes/{id}/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/worktypes/{id}/timerecords/{id}/$updateprice

## Properties

| Name                 | Type           | Access     | Required | Description                                                                                           |
|----------------------|----------------|------------|----------|-------------------------------------------------------------------------------------------------------|
| approved             | Boolean        | read write | no       | Determines whether the record was approved.                                                           |
| billable             | Boolean        | read write | no       | Determines whether the time record can be billed. A price will be stored only if the value is 'true'. |
| billed               | Boolean        | read only  | no       | Determines whether the record was billed.                                                             |
| client               | Client         | read write | no       | A client belongs to this object.                                                                      |
| createdAt            | Date           | read only  | no       | Date of creation.                                                                                     |
| description          | String         | read write | no       | Some description of the record.                                                                       |
| displayName          | String         | read only  | no       | Describes an object in human readable form.                                                           |
| duration             | Long           | read write | no       | Recording length (in milliseconds).                                                                   |
| effective            | Boolean        | read write | YES      | Determines whether the record is effective. Default value is true.                                    |
| externalBrowsableUrl | String         | read write | no       | Human accessible link in external system.                                                             |
| externalResourceId   | String         | read write | no       | Unique external system identifier.                                                                    |
| externalSynced       | Boolean        | write only | no       | Determines whether an object was synced with the external system.                                     |
| externalSyncedAt     | Date           | read only  | no       | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.     |
| externalSystem       | ExternalSystem | read write | no       | External system which maintains this object.                                                          |
| id                   | String         | read write | no       | Unique object identifier.                                                                             |
| price                | Double         | read write | no       | The price of the time record is calculated by the formula: 'unitPrice * duration'.                    |
| priceAutoCalculation | Boolean        | read write | no       | deprecated                                                                                            |
| priceModified        | Boolean        | read write | no       | If the value is 'true', the price won't be calculated by the price list.                              |
| project              | Project        | read write | no       | Task belongs to this project.                                                                         |
| recordType           | TimeRecordType | read only  | no       | A record type.                                                                                        |
| start                | Date           | read write | no       | Date when recording starts.                                                                           |
| stop                 | Date           | read write | no       | Date when recording stops.                                                                            |
| task                 | Task           | read write | no       | A task belonging to this project.                                                                     |
| trashItem            | TrashItem      | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified.   |
| unitPrice            | Double         | read write | no       | The unit price is the price per hour.                                                                 |
| updatedAt            | Date           | read only  | no       | Last modified date.                                                                                   |
| user                 | User           | read write | YES      | The user for whom the time on the task is recorded.                                                   |
| version              | Long           | read write | no       | Object version number.                                                                                |
| workType             | WorkType       | read write | no       | User which time on task is recorded.                                                                  |

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
			"access" : "READ_ONLY",
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
	"id" : "8968ca2a-0772-43b4-844b-7985d3cea9a0",
	"createdAt" : "/Date(1452257177358)/",
	"updatedAt" : "/Date(1452286157358)/",
	"version" : 6,
	"externalSystem" : {
		"id" : "b2521b1e-6211-4629-950b-bccade2ae819",
		"createdAt" : "/Date(1452255557360)/",
		"updatedAt" : "/Date(1452329357360)/",
		"version" : 1,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "time-55567",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334/time/55567",
	"externalSyncedAt" : "/Date(1452257357358)/",
	"externalSynced" : true,
	"user" : {
		"id" : "faea8c92-c723-4560-9eed-5407d25bfbef",
		"createdAt" : "/Date(1452255557360)/",
		"updatedAt" : "/Date(1452300557360)/",
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
		"birthdayRemind" : "/Date(1453071600000)/",
		"workingTimeStart" : "/Date(1452236400000)/",
		"workingTimeEnd" : "/Date(1452268800000)/",
		"created" : "/Date(1452170957358)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"project" : {
		"id" : "f14ad7a0-77c4-40d4-8a5a-d09925e5380e",
		"createdAt" : "/Date(1452255677359)/",
		"updatedAt" : "/Date(1452318557359)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "27eb16af-61cd-4479-8197-7a7aad9d446f",
			"createdAt" : "/Date(1452256637359)/",
			"updatedAt" : "/Date(1452293357359)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1452257357358)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1452170957358)/",
		"ends" : "/Date(1452343757358)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : true,
		"owner" : {
			"id" : "0ef4df24-0b44-428e-922c-d8498fab915a",
			"createdAt" : "/Date(1452254237360)/",
			"updatedAt" : "/Date(1452264557360)/",
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
			"birthdayRemind" : "/Date(1454108400000)/",
			"workingTimeStart" : "/Date(1452236400000)/",
			"workingTimeEnd" : "/Date(1452268800000)/",
			"created" : "/Date(1452170957358)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "84705510-ed87-4307-88a1-49a11c7f4f75",
			"createdAt" : "/Date(1452253937359)/",
			"updatedAt" : "/Date(1452314957359)/",
			"version" : 8,
			"externalSystem" : {
				"id" : "59af87e5-52fc-495d-9230-fe9537e16cdf",
				"createdAt" : "/Date(1452257237359)/",
				"updatedAt" : "/Date(1452264557359)/",
				"version" : 7,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1452257357358)/",
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
		"id" : "ff954eaa-341e-4d80-bf89-02a407f950e7",
		"createdAt" : "/Date(1452254657359)/",
		"updatedAt" : "/Date(1452307757359)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "5e7e5cda-9266-4cd9-864c-3c044ec9c8b7",
			"createdAt" : "/Date(1452254837360)/",
			"updatedAt" : "/Date(1452329357360)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-334",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334",
		"externalSyncedAt" : "/Date(1452257357358)/",
		"externalSynced" : true,
		"project" : {
			"id" : "f14ad7a0-77c4-40d4-8a5a-d09925e5380e",
			"createdAt" : "/Date(1452255677359)/",
			"updatedAt" : "/Date(1452318557359)/",
			"version" : 0,
			"externalSystem" : {
				"id" : "27eb16af-61cd-4479-8197-7a7aad9d446f",
				"createdAt" : "/Date(1452256637359)/",
				"updatedAt" : "/Date(1452293357359)/",
				"version" : 2,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1452257357358)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1452170957358)/",
			"ends" : "/Date(1452343757358)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : true,
			"owner" : {
				"id" : "0ef4df24-0b44-428e-922c-d8498fab915a",
				"createdAt" : "/Date(1452254237360)/",
				"updatedAt" : "/Date(1452264557360)/",
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
				"birthdayRemind" : "/Date(1454108400000)/",
				"workingTimeStart" : "/Date(1452236400000)/",
				"workingTimeEnd" : "/Date(1452268800000)/",
				"created" : "/Date(1452170957358)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "84705510-ed87-4307-88a1-49a11c7f4f75",
				"createdAt" : "/Date(1452253937359)/",
				"updatedAt" : "/Date(1452314957359)/",
				"version" : 8,
				"externalSystem" : {
					"id" : "59af87e5-52fc-495d-9230-fe9537e16cdf",
					"createdAt" : "/Date(1452257237359)/",
					"updatedAt" : "/Date(1452264557359)/",
					"version" : 7,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1452257357358)/",
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
			"id" : "0ef4df24-0b44-428e-922c-d8498fab915a",
			"createdAt" : "/Date(1452254237360)/",
			"updatedAt" : "/Date(1452264557360)/",
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
			"birthdayRemind" : "/Date(1454108400000)/",
			"workingTimeStart" : "/Date(1452236400000)/",
			"workingTimeEnd" : "/Date(1452268800000)/",
			"created" : "/Date(1452170957358)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "faea8c92-c723-4560-9eed-5407d25bfbef",
			"createdAt" : "/Date(1452255557360)/",
			"updatedAt" : "/Date(1452300557360)/",
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
			"birthdayRemind" : "/Date(1453071600000)/",
			"workingTimeStart" : "/Date(1452236400000)/",
			"workingTimeEnd" : "/Date(1452268800000)/",
			"created" : "/Date(1452170957358)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "a886ec9d-5070-42aa-902a-f0346de0ecc8",
		"createdAt" : "/Date(1452254777360)/",
		"updatedAt" : "/Date(1452293357360)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "0c990f78-7017-4d70-a2c1-a80b20252683",
			"createdAt" : "/Date(1452256457360)/",
			"updatedAt" : "/Date(1452329357360)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1452257357358)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"category" : "WORK",
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "84705510-ed87-4307-88a1-49a11c7f4f75",
		"createdAt" : "/Date(1452253937359)/",
		"updatedAt" : "/Date(1452314957359)/",
		"version" : 8,
		"externalSystem" : {
			"id" : "59af87e5-52fc-495d-9230-fe9537e16cdf",
			"createdAt" : "/Date(1452257237359)/",
			"updatedAt" : "/Date(1452264557359)/",
			"version" : 7,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1452257357358)/",
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
	"start" : "/Date(1452170957358)/",
	"stop" : "/Date(1452192557358)/",
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
