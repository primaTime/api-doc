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
	"path" : "/v1/time/timerecords/{id}/relations",
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
					"type" : "NotNull",
					"pattern" : null
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
	"id" : "ccc0094b-ec0a-49e7-82ca-b4141cb6d89f",
	"createdAt" : "/Date(1416914098262)/",
	"updatedAt" : "/Date(1416923518262)/",
	"version" : 5,
	"externalSystem" : {
		"id" : "d622ff92-b07b-4bc7-8795-c0f8969e286b",
		"createdAt" : "/Date(1416913798263)/",
		"updatedAt" : "/Date(1416984718263)/",
		"version" : 4,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "time-55567",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334/time/55567",
	"externalSyncedAt" : "/Date(1416916318262)/",
	"externalSynced" : true,
	"user" : {
		"id" : "d77868ca-e7d1-4c30-8eb9-2bf3e6918464",
		"createdAt" : "/Date(1416913558263)/",
		"updatedAt" : "/Date(1416934318263)/",
		"version" : 8,
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
		"birthdayRemind" : "/Date(1417734000000)/",
		"workingTimeStart" : "/Date(1416898800000)/",
		"workingTimeEnd" : "/Date(1416931200000)/",
		"created" : "/Date(1416829918262)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"project" : {
		"id" : "a4a26fd6-ccb7-40c2-b61d-fceeee66d31b",
		"createdAt" : "/Date(1416915058263)/",
		"updatedAt" : "/Date(1416988318263)/",
		"version" : 5,
		"externalSystem" : {
			"id" : "bbc95230-42f8-4dcb-ba6f-246095d344d7",
			"createdAt" : "/Date(1416914158263)/",
			"updatedAt" : "/Date(1416973918263)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1416916318262)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1416829918262)/",
		"ends" : "/Date(1417002718262)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"active" : true,
		"personal" : true,
		"owner" : {
			"id" : "7e0bf9f1-7c1c-44ea-ba78-627b3ae7a971",
			"createdAt" : "/Date(1416913078263)/",
			"updatedAt" : "/Date(1416916318263)/",
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
			"birthdayRemind" : "/Date(1418770800000)/",
			"workingTimeStart" : "/Date(1416898800000)/",
			"workingTimeEnd" : "/Date(1416931200000)/",
			"created" : "/Date(1416829918262)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "84fd56ea-d04b-482f-8df5-47980b399eb8",
			"createdAt" : "/Date(1416916018263)/",
			"updatedAt" : "/Date(1416937918263)/",
			"version" : 6,
			"externalSystem" : {
				"id" : "fcfab220-5105-4ac9-9700-4e6a6ad90a1a",
				"createdAt" : "/Date(1416916258263)/",
				"updatedAt" : "/Date(1416952318263)/",
				"version" : 9,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1416916318262)/",
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
		"id" : "8ac73931-b777-49c5-a542-446716b891c9",
		"createdAt" : "/Date(1416915958263)/",
		"updatedAt" : "/Date(1416973918263)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "81df9a7e-88c3-4269-83c4-5e123a5d636d",
			"createdAt" : "/Date(1416914278263)/",
			"updatedAt" : "/Date(1416948718263)/",
			"version" : 0,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-334",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334",
		"externalSyncedAt" : "/Date(1416916318262)/",
		"externalSynced" : true,
		"project" : {
			"id" : "a4a26fd6-ccb7-40c2-b61d-fceeee66d31b",
			"createdAt" : "/Date(1416915058263)/",
			"updatedAt" : "/Date(1416988318263)/",
			"version" : 5,
			"externalSystem" : {
				"id" : "bbc95230-42f8-4dcb-ba6f-246095d344d7",
				"createdAt" : "/Date(1416914158263)/",
				"updatedAt" : "/Date(1416973918263)/",
				"version" : 3,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1416916318262)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1416829918262)/",
			"ends" : "/Date(1417002718262)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"active" : true,
			"personal" : true,
			"owner" : {
				"id" : "7e0bf9f1-7c1c-44ea-ba78-627b3ae7a971",
				"createdAt" : "/Date(1416913078263)/",
				"updatedAt" : "/Date(1416916318263)/",
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
				"birthdayRemind" : "/Date(1418770800000)/",
				"workingTimeStart" : "/Date(1416898800000)/",
				"workingTimeEnd" : "/Date(1416931200000)/",
				"created" : "/Date(1416829918262)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "84fd56ea-d04b-482f-8df5-47980b399eb8",
				"createdAt" : "/Date(1416916018263)/",
				"updatedAt" : "/Date(1416937918263)/",
				"version" : 6,
				"externalSystem" : {
					"id" : "fcfab220-5105-4ac9-9700-4e6a6ad90a1a",
					"createdAt" : "/Date(1416916258263)/",
					"updatedAt" : "/Date(1416952318263)/",
					"version" : 9,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1416916318262)/",
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
		"code" : "ART",
		"note" : "form with validation",
		"done" : false,
		"author" : {
			"id" : "7e0bf9f1-7c1c-44ea-ba78-627b3ae7a971",
			"createdAt" : "/Date(1416913078263)/",
			"updatedAt" : "/Date(1416916318263)/",
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
			"birthdayRemind" : "/Date(1418770800000)/",
			"workingTimeStart" : "/Date(1416898800000)/",
			"workingTimeEnd" : "/Date(1416931200000)/",
			"created" : "/Date(1416829918262)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "d77868ca-e7d1-4c30-8eb9-2bf3e6918464",
			"createdAt" : "/Date(1416913558263)/",
			"updatedAt" : "/Date(1416934318263)/",
			"version" : 8,
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
			"birthdayRemind" : "/Date(1417734000000)/",
			"workingTimeStart" : "/Date(1416898800000)/",
			"workingTimeEnd" : "/Date(1416931200000)/",
			"created" : "/Date(1416829918262)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "54ce5859-d7db-4b2c-b4db-f15304b26366",
		"createdAt" : "/Date(1416913018263)/",
		"updatedAt" : "/Date(1416930718263)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "5f10ac12-7be5-48bf-9a6e-d30aa3b0a01b",
			"createdAt" : "/Date(1416915478263)/",
			"updatedAt" : "/Date(1416999118263)/",
			"version" : 7,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1416916318262)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"active" : true,
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "84fd56ea-d04b-482f-8df5-47980b399eb8",
		"createdAt" : "/Date(1416916018263)/",
		"updatedAt" : "/Date(1416937918263)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "fcfab220-5105-4ac9-9700-4e6a6ad90a1a",
			"createdAt" : "/Date(1416916258263)/",
			"updatedAt" : "/Date(1416952318263)/",
			"version" : 9,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1416916318262)/",
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
	"start" : "/Date(1416829918262)/",
	"stop" : "/Date(1416851518262)/",
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
