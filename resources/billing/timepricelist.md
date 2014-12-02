TimePriceList
==

## URL

	https://api.primaerp.com/v1/billing/pricelists/time

## Properties

| Name        | Type      | Access     | Required                                                               | Description                                                                                         |
|-------------|-----------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| client      | Client    | read write | no                                                                     | The client for whom the work is performed.                                                          |
| createdAt   | Date      | read only  | no                                                                     | Date of creation.                                                                                   |
| displayName | String    | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| id          | String    | read write | no                                                                     | Unique object identifier.                                                                           |
| note        | String    | read write | no                                                                     | Some reason why the price was set.                                                                  |
| price       | Double    | read write | no                                                                     | Price of the performed work.                                                                        |
| project     | Project   | read write | no                                                                     | The project where the work is performed.                                                            |
| task        | Task      | read write | no                                                                     | The task where the work is performed.                                                               |
| trashItem   | TrashItem | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | no                                                                     | Last modified date.                                                                                 |
| user        | User      | read write | no                                                                     | The user who owns the priced work                                                                   |
| version     | Long      | read write | no                                                                     | Object version number.                                                                              |
| workType    | WorkType  | read write | no                                                                     | Type of the priced work.                                                                            |

## Metadata

```JSON
{
	"type" : "TimePriceList",
	"path" : "/v1/billing/pricelists/time",
	"fields" : [
		{
			"type" : "Client",
			"path" : "/v1/time/clients",
			"name" : "client",
			"description" : "The client for whom the work is performed.",
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
			"name" : "displayName",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY"
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
			"type" : "String",
			"name" : "note",
			"description" : "Some reason why the price was set.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Double",
			"name" : "price",
			"description" : "Price of the performed work.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Project",
			"path" : "/v1/time/projects",
			"name" : "project",
			"description" : "The project where the work is performed.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Task",
			"path" : "/v1/time/tasks",
			"name" : "task",
			"description" : "The task where the work is performed.",
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
			"description" : "The user who owns the priced work",
			"access" : "READ_WRITE"
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
			"description" : "Type of the priced work.",
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
	"id" : "02430aab-1846-4770-b87e-445566b363dd",
	"createdAt" : "/Date(1417519421030)/",
	"updatedAt" : "/Date(1417554101030)/",
	"version" : 3,
	"price" : 100.0,
	"note" : "Price with a special discount for the best client.",
	"user" : {
		"id" : "3c4b50c0-55c6-4ce0-96ab-d31174446386",
		"createdAt" : "/Date(1417519301030)/",
		"updatedAt" : "/Date(1417590101030)/",
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
		"birthdayRemind" : "/Date(1418338800000)/",
		"workingTimeStart" : "/Date(1417503600000)/",
		"workingTimeEnd" : "/Date(1417536000000)/",
		"created" : "/Date(1417435301030)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"workType" : {
		"id" : "d811e6ff-3a69-45eb-97bd-646530351e6c",
		"createdAt" : "/Date(1417521341031)/",
		"updatedAt" : "/Date(1417525301031)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "86083fdc-0a29-4e63-8c33-cc255674d812",
			"createdAt" : "/Date(1417519601031)/",
			"updatedAt" : "/Date(1417572101031)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1417521701029)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"displayName" : "Software development"
	},
	"project" : {
		"id" : "08ef1056-d90e-4bf8-8269-a71d8e5e5f5f",
		"createdAt" : "/Date(1417518941030)/",
		"updatedAt" : "/Date(1417528901030)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "55f4d7cd-14dd-43f5-8111-21f939f1786d",
			"createdAt" : "/Date(1417518281031)/",
			"updatedAt" : "/Date(1417521701031)/",
			"version" : 9,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1417521701029)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1417435301029)/",
		"ends" : "/Date(1417608101029)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "1c7cda9e-1893-44ee-96b5-01aabf9647eb",
			"createdAt" : "/Date(1417520921030)/",
			"updatedAt" : "/Date(1417539701030)/",
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
			"birthdayRemind" : "/Date(1419375600000)/",
			"workingTimeStart" : "/Date(1417503600000)/",
			"workingTimeEnd" : "/Date(1417536000000)/",
			"created" : "/Date(1417435301030)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "d66b71e1-9ec5-47e3-807f-1e5071e1f418",
			"createdAt" : "/Date(1417518641030)/",
			"updatedAt" : "/Date(1417597301030)/",
			"version" : 4,
			"externalSystem" : {
				"id" : "cbd737f9-4e1d-4b75-8f57-0bf14d93afd4",
				"createdAt" : "/Date(1417518881031)/",
				"updatedAt" : "/Date(1417525301031)/",
				"version" : 5,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1417521701029)/",
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
		"id" : "f56d04a1-4e7e-4a10-9ac2-644b1db529b0",
		"createdAt" : "/Date(1417520981030)/",
		"updatedAt" : "/Date(1417525301030)/",
		"version" : 7,
		"externalSystem" : {
			"id" : "fe9c540f-a49b-4fbb-bb8c-9b3763e11b4a",
			"createdAt" : "/Date(1417520561031)/",
			"updatedAt" : "/Date(1417539701031)/",
			"version" : 0,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-556",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
		"externalSyncedAt" : "/Date(1417521701029)/",
		"externalSynced" : true,
		"project" : {
			"id" : "08ef1056-d90e-4bf8-8269-a71d8e5e5f5f",
			"createdAt" : "/Date(1417518941030)/",
			"updatedAt" : "/Date(1417528901030)/",
			"version" : 2,
			"externalSystem" : {
				"id" : "55f4d7cd-14dd-43f5-8111-21f939f1786d",
				"createdAt" : "/Date(1417518281031)/",
				"updatedAt" : "/Date(1417521701031)/",
				"version" : 9,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1417521701029)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1417435301029)/",
			"ends" : "/Date(1417608101029)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : false,
			"owner" : {
				"id" : "1c7cda9e-1893-44ee-96b5-01aabf9647eb",
				"createdAt" : "/Date(1417520921030)/",
				"updatedAt" : "/Date(1417539701030)/",
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
				"birthdayRemind" : "/Date(1419375600000)/",
				"workingTimeStart" : "/Date(1417503600000)/",
				"workingTimeEnd" : "/Date(1417536000000)/",
				"created" : "/Date(1417435301030)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "d66b71e1-9ec5-47e3-807f-1e5071e1f418",
				"createdAt" : "/Date(1417518641030)/",
				"updatedAt" : "/Date(1417597301030)/",
				"version" : 4,
				"externalSystem" : {
					"id" : "cbd737f9-4e1d-4b75-8f57-0bf14d93afd4",
					"createdAt" : "/Date(1417518881031)/",
					"updatedAt" : "/Date(1417525301031)/",
					"version" : 5,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1417521701029)/",
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
		"done" : true,
		"author" : {
			"id" : "7b66313f-9d01-4da3-a528-09f37c85d1e3",
			"createdAt" : "/Date(1417519481031)/",
			"updatedAt" : "/Date(1417528901031)/",
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
			"birthdayRemind" : "/Date(1419375600000)/",
			"workingTimeStart" : "/Date(1417503600000)/",
			"workingTimeEnd" : "/Date(1417536000000)/",
			"created" : "/Date(1417435301030)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "3c4b50c0-55c6-4ce0-96ab-d31174446386",
			"createdAt" : "/Date(1417519301030)/",
			"updatedAt" : "/Date(1417590101030)/",
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
			"birthdayRemind" : "/Date(1418338800000)/",
			"workingTimeStart" : "/Date(1417503600000)/",
			"workingTimeEnd" : "/Date(1417536000000)/",
			"created" : "/Date(1417435301030)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"client" : {
		"id" : "64169681-7bbe-4372-9425-dff23ad38b09",
		"createdAt" : "/Date(1417518521030)/",
		"updatedAt" : "/Date(1417582901030)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "7527fa60-1cf6-4fbb-a21d-8a845eef9c5d",
			"createdAt" : "/Date(1417518281030)/",
			"updatedAt" : "/Date(1417604501030)/",
			"version" : 4,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1417521701029)/",
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
	"displayName" : "100.0"
}
```
