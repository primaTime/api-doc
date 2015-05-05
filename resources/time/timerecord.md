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
	"id" : "b65b2430-3f89-4ef8-879b-71e174c48727",
	"createdAt" : "/Date(1430139234182)/",
	"updatedAt" : "/Date(1430189514182)/",
	"version" : 6,
	"externalSystem" : {
		"id" : "f1a0aa8b-8dfe-443a-b67b-dcd385d9a754",
		"createdAt" : "/Date(1430142174185)/",
		"updatedAt" : "/Date(1430178714185)/",
		"version" : 9,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "time-55567",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334/time/55567",
	"externalSyncedAt" : "/Date(1430142714182)/",
	"externalSynced" : true,
	"user" : {
		"id" : "ae45f68a-5ae4-45a0-95b6-d38e7da8746f",
		"createdAt" : "/Date(1430141634183)/",
		"updatedAt" : "/Date(1430196714183)/",
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
		"birthdayRemind" : "/Date(1430949600000)/",
		"workingTimeStart" : "/Date(1430114400000)/",
		"workingTimeEnd" : "/Date(1430146800000)/",
		"created" : "/Date(1430056314182)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"project" : {
		"id" : "d7a46409-1e26-4be0-90b7-cd2a7646b5ff",
		"createdAt" : "/Date(1430140614183)/",
		"updatedAt" : "/Date(1430167914183)/",
		"version" : 3,
		"externalSystem" : {
			"id" : "349fdfe0-7ead-4281-9f7b-8a3d38d986c5",
			"createdAt" : "/Date(1430139474185)/",
			"updatedAt" : "/Date(1430211114185)/",
			"version" : 1,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1430142714182)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1430056314182)/",
		"ends" : "/Date(1430229114182)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : true,
		"owner" : {
			"id" : "3bd2e578-6bb2-446e-98ea-43fe8044b1a6",
			"createdAt" : "/Date(1430139714185)/",
			"updatedAt" : "/Date(1430142714185)/",
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
			"birthdayRemind" : "/Date(1431986400000)/",
			"workingTimeStart" : "/Date(1430114400000)/",
			"workingTimeEnd" : "/Date(1430146800000)/",
			"created" : "/Date(1430056314182)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "49571314-8277-4bc1-a9c2-54396b1b9129",
			"createdAt" : "/Date(1430141334183)/",
			"updatedAt" : "/Date(1430175114183)/",
			"version" : 0,
			"externalSystem" : {
				"id" : "df664a5b-43d0-4b1e-b90c-498f3e52ff52",
				"createdAt" : "/Date(1430140674183)/",
				"updatedAt" : "/Date(1430178714184)/",
				"version" : 1,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1430142714182)/",
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
		"id" : "48ecf46e-4a47-4c11-bf16-ea291bf3405e",
		"createdAt" : "/Date(1430139834183)/",
		"updatedAt" : "/Date(1430153514183)/",
		"version" : 7,
		"externalSystem" : {
			"id" : "6e2c2d9a-34ac-4b90-9420-cb32192629d1",
			"createdAt" : "/Date(1430141274185)/",
			"updatedAt" : "/Date(1430203914185)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-334",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334",
		"externalSyncedAt" : "/Date(1430142714182)/",
		"externalSynced" : true,
		"project" : {
			"id" : "d7a46409-1e26-4be0-90b7-cd2a7646b5ff",
			"createdAt" : "/Date(1430140614183)/",
			"updatedAt" : "/Date(1430167914183)/",
			"version" : 3,
			"externalSystem" : {
				"id" : "349fdfe0-7ead-4281-9f7b-8a3d38d986c5",
				"createdAt" : "/Date(1430139474185)/",
				"updatedAt" : "/Date(1430211114185)/",
				"version" : 1,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1430142714182)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1430056314182)/",
			"ends" : "/Date(1430229114182)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : true,
			"owner" : {
				"id" : "3bd2e578-6bb2-446e-98ea-43fe8044b1a6",
				"createdAt" : "/Date(1430139714185)/",
				"updatedAt" : "/Date(1430142714185)/",
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
				"birthdayRemind" : "/Date(1431986400000)/",
				"workingTimeStart" : "/Date(1430114400000)/",
				"workingTimeEnd" : "/Date(1430146800000)/",
				"created" : "/Date(1430056314182)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "49571314-8277-4bc1-a9c2-54396b1b9129",
				"createdAt" : "/Date(1430141334183)/",
				"updatedAt" : "/Date(1430175114183)/",
				"version" : 0,
				"externalSystem" : {
					"id" : "df664a5b-43d0-4b1e-b90c-498f3e52ff52",
					"createdAt" : "/Date(1430140674183)/",
					"updatedAt" : "/Date(1430178714184)/",
					"version" : 1,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1430142714182)/",
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
			"id" : "3bd2e578-6bb2-446e-98ea-43fe8044b1a6",
			"createdAt" : "/Date(1430139714185)/",
			"updatedAt" : "/Date(1430142714185)/",
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
			"birthdayRemind" : "/Date(1431986400000)/",
			"workingTimeStart" : "/Date(1430114400000)/",
			"workingTimeEnd" : "/Date(1430146800000)/",
			"created" : "/Date(1430056314182)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "ae45f68a-5ae4-45a0-95b6-d38e7da8746f",
			"createdAt" : "/Date(1430141634183)/",
			"updatedAt" : "/Date(1430196714183)/",
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
			"birthdayRemind" : "/Date(1430949600000)/",
			"workingTimeStart" : "/Date(1430114400000)/",
			"workingTimeEnd" : "/Date(1430146800000)/",
			"created" : "/Date(1430056314182)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "f74704b2-a825-4d78-a4dd-89c008f55495",
		"createdAt" : "/Date(1430142354185)/",
		"updatedAt" : "/Date(1430175114185)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "de989676-6c47-4a66-88ea-be23f6c716fb",
			"createdAt" : "/Date(1430140794185)/",
			"updatedAt" : "/Date(1430200314185)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1430142714182)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"category" : "WORK",
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "49571314-8277-4bc1-a9c2-54396b1b9129",
		"createdAt" : "/Date(1430141334183)/",
		"updatedAt" : "/Date(1430175114183)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "df664a5b-43d0-4b1e-b90c-498f3e52ff52",
			"createdAt" : "/Date(1430140674183)/",
			"updatedAt" : "/Date(1430178714184)/",
			"version" : 1,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1430142714182)/",
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
	"start" : "/Date(1430056314182)/",
	"stop" : "/Date(1430077914182)/",
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
