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
	"id" : "ad146c90-e325-467d-a97f-0d49bc7dfae7",
	"createdAt" : "/Date(1417603079693)/",
	"updatedAt" : "/Date(1417684139693)/",
	"version" : 9,
	"externalSystem" : {
		"id" : "978b0dfd-e51f-44b4-bf45-a79f1252a831",
		"createdAt" : "/Date(1417604579694)/",
		"updatedAt" : "/Date(1417684139694)/",
		"version" : 5,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "time-55567",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334/time/55567",
	"externalSyncedAt" : "/Date(1417604939693)/",
	"externalSynced" : true,
	"user" : {
		"id" : "0c5d585d-19d2-47a3-a2b4-699a1139ab5b",
		"createdAt" : "/Date(1417604699694)/",
		"updatedAt" : "/Date(1417687739694)/",
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
		"birthdayRemind" : "/Date(1418425200000)/",
		"workingTimeStart" : "/Date(1417590000000)/",
		"workingTimeEnd" : "/Date(1417622400000)/",
		"created" : "/Date(1417518539693)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"project" : {
		"id" : "8774eb8d-6f07-4bef-b894-634c2fde0a8a",
		"createdAt" : "/Date(1417602599694)/",
		"updatedAt" : "/Date(1417684139694)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "1fba09d2-ada3-49fa-8a16-4fb2e3562fd1",
			"createdAt" : "/Date(1417604759694)/",
			"updatedAt" : "/Date(1417644539694)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1417604939693)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1417518539693)/",
		"ends" : "/Date(1417691339693)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : true,
		"owner" : {
			"id" : "fc6c20e0-b35b-4a8b-9e43-96ff924adf90",
			"createdAt" : "/Date(1417603919694)/",
			"updatedAt" : "/Date(1417608539694)/",
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
			"birthdayRemind" : "/Date(1419462000000)/",
			"workingTimeStart" : "/Date(1417590000000)/",
			"workingTimeEnd" : "/Date(1417622400000)/",
			"created" : "/Date(1417518539692)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "c168a9a9-dd87-4968-b667-5548f60f78d5",
			"createdAt" : "/Date(1417603799694)/",
			"updatedAt" : "/Date(1417622939694)/",
			"version" : 6,
			"externalSystem" : {
				"id" : "da3cd8cb-7a3a-4882-b7d6-fb2a501a1cf7",
				"createdAt" : "/Date(1417604699694)/",
				"updatedAt" : "/Date(1417687739694)/",
				"version" : 9,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1417604939693)/",
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
		"id" : "2afbb632-936a-489f-9d06-87af41392c3f",
		"createdAt" : "/Date(1417603559694)/",
		"updatedAt" : "/Date(1417644539694)/",
		"version" : 7,
		"externalSystem" : {
			"id" : "0cbfaa43-0837-4e70-8816-d7b6c24e8077",
			"createdAt" : "/Date(1417604579694)/",
			"updatedAt" : "/Date(1417615739694)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-334",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334",
		"externalSyncedAt" : "/Date(1417604939693)/",
		"externalSynced" : true,
		"project" : {
			"id" : "8774eb8d-6f07-4bef-b894-634c2fde0a8a",
			"createdAt" : "/Date(1417602599694)/",
			"updatedAt" : "/Date(1417684139694)/",
			"version" : 0,
			"externalSystem" : {
				"id" : "1fba09d2-ada3-49fa-8a16-4fb2e3562fd1",
				"createdAt" : "/Date(1417604759694)/",
				"updatedAt" : "/Date(1417644539694)/",
				"version" : 8,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1417604939693)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1417518539693)/",
			"ends" : "/Date(1417691339693)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : true,
			"owner" : {
				"id" : "fc6c20e0-b35b-4a8b-9e43-96ff924adf90",
				"createdAt" : "/Date(1417603919694)/",
				"updatedAt" : "/Date(1417608539694)/",
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
				"birthdayRemind" : "/Date(1419462000000)/",
				"workingTimeStart" : "/Date(1417590000000)/",
				"workingTimeEnd" : "/Date(1417622400000)/",
				"created" : "/Date(1417518539692)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "c168a9a9-dd87-4968-b667-5548f60f78d5",
				"createdAt" : "/Date(1417603799694)/",
				"updatedAt" : "/Date(1417622939694)/",
				"version" : 6,
				"externalSystem" : {
					"id" : "da3cd8cb-7a3a-4882-b7d6-fb2a501a1cf7",
					"createdAt" : "/Date(1417604699694)/",
					"updatedAt" : "/Date(1417687739694)/",
					"version" : 9,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1417604939693)/",
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
			"id" : "fc6c20e0-b35b-4a8b-9e43-96ff924adf90",
			"createdAt" : "/Date(1417603919694)/",
			"updatedAt" : "/Date(1417608539694)/",
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
			"birthdayRemind" : "/Date(1419462000000)/",
			"workingTimeStart" : "/Date(1417590000000)/",
			"workingTimeEnd" : "/Date(1417622400000)/",
			"created" : "/Date(1417518539692)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "0c5d585d-19d2-47a3-a2b4-699a1139ab5b",
			"createdAt" : "/Date(1417604699694)/",
			"updatedAt" : "/Date(1417687739694)/",
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
			"birthdayRemind" : "/Date(1418425200000)/",
			"workingTimeStart" : "/Date(1417590000000)/",
			"workingTimeEnd" : "/Date(1417622400000)/",
			"created" : "/Date(1417518539693)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "6bd554ba-c20a-4918-9da9-227cb3c3d22a",
		"createdAt" : "/Date(1417604519694)/",
		"updatedAt" : "/Date(1417633739694)/",
		"version" : 8,
		"externalSystem" : {
			"id" : "6fe647b3-35cd-43bb-a27b-4e63aac5e1bf",
			"createdAt" : "/Date(1417603259694)/",
			"updatedAt" : "/Date(1417615739694)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1417604939693)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "c168a9a9-dd87-4968-b667-5548f60f78d5",
		"createdAt" : "/Date(1417603799694)/",
		"updatedAt" : "/Date(1417622939694)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "da3cd8cb-7a3a-4882-b7d6-fb2a501a1cf7",
			"createdAt" : "/Date(1417604699694)/",
			"updatedAt" : "/Date(1417687739694)/",
			"version" : 9,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1417604939693)/",
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
	"start" : "/Date(1417518539693)/",
	"stop" : "/Date(1417540139693)/",
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
