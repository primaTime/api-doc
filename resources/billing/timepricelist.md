TimePriceList
==

## URL

	https://api.primaerp.com/v1/billing/pricelists/time

	https://api.primaerp.com/v1/billing/pricelists/time/$findpricelist

	https://api.primaerp.com/v1/time/worktypes/{id}/pricelists

	https://api.primaerp.com/v1/time/worktypes/{id}/pricelists/$findpricelist

	https://api.primaerp.com/v1/time/users/{id}/pricelists

	https://api.primaerp.com/v1/time/users/{id}/pricelists/$findpricelist

	https://api.primaerp.com/v1/time/projects/{id}/pricelists

	https://api.primaerp.com/v1/time/projects/{id}/pricelists/$findpricelist

## Properties

| Name        | Type      | Access     | Required | Description                                                                                         |
|-------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| client      | Client    | read write | no       | The client for whom the work is performed.                                                          |
| createdAt   | Date      | read only  | no       | Date of creation.                                                                                   |
| displayName | String    | read only  | no       | Describes an object in human readable form.                                                         |
| id          | String    | read write | no       | Unique object identifier.                                                                           |
| note        | String    | read write | no       | Some reason why the price was set.                                                                  |
| price       | Double    | read write | no       | Price of the performed work.                                                                        |
| project     | Project   | read write | no       | The project where the work is performed.                                                            |
| task        | Task      | read write | no       | The task where the work is performed.                                                               |
| trashItem   | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | no       | Last modified date.                                                                                 |
| user        | User      | read write | no       | The user who owns the priced work                                                                   |
| version     | Long      | read write | no       | Object version number.                                                                              |
| workType    | WorkType  | read write | no       | Type of the priced work.                                                                            |

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
	"id" : "32eafa0d-d98d-4ed8-9b45-07c5fd8f2b59",
	"createdAt" : "/Date(1430142233754)/",
	"updatedAt" : "/Date(1430182313754)/",
	"version" : 2,
	"price" : 100.0,
	"note" : "Price with a special discount for the best client.",
	"user" : {
		"id" : "550b49e0-a615-4649-845f-52a737de6e9e",
		"createdAt" : "/Date(1430140193755)/",
		"updatedAt" : "/Date(1430185913755)/",
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
		"created" : "/Date(1430056313754)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"workType" : {
		"id" : "87f77f14-103c-4331-a11b-0232774a4956",
		"createdAt" : "/Date(1430139293755)/",
		"updatedAt" : "/Date(1430203913755)/",
		"version" : 4,
		"externalSystem" : {
			"id" : "3db6f73d-1985-4692-b6db-c1e51eb39f6a",
			"createdAt" : "/Date(1430140913755)/",
			"updatedAt" : "/Date(1430142713755)/",
			"version" : 4,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1430142713753)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"category" : "WORK",
		"displayName" : "Software development"
	},
	"project" : {
		"id" : "09df544c-118f-4a6d-85bf-0a0ef4469ed9",
		"createdAt" : "/Date(1430139893755)/",
		"updatedAt" : "/Date(1430182313755)/",
		"version" : 7,
		"externalSystem" : {
			"id" : "f2392f86-c641-4d2a-8736-17bb03475e8e",
			"createdAt" : "/Date(1430140733755)/",
			"updatedAt" : "/Date(1430157113755)/",
			"version" : 0,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1430142713753)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1430056313753)/",
		"ends" : "/Date(1430229113753)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "ed9abe66-238b-42d4-b335-dd325e781851",
			"createdAt" : "/Date(1430139953755)/",
			"updatedAt" : "/Date(1430211113755)/",
			"version" : 6,
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
			"created" : "/Date(1430056313754)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "4cc8c5a5-803f-49c9-b51a-ea24a1d54486",
			"createdAt" : "/Date(1430142653755)/",
			"updatedAt" : "/Date(1430200313755)/",
			"version" : 5,
			"externalSystem" : {
				"id" : "2ab498e2-9e46-4383-bbf1-d577a0034b2a",
				"createdAt" : "/Date(1430140613755)/",
				"updatedAt" : "/Date(1430185913755)/",
				"version" : 6,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1430142713753)/",
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
		"id" : "7f776dcb-305c-479a-8624-b521859a91ea",
		"createdAt" : "/Date(1430141273755)/",
		"updatedAt" : "/Date(1430211113755)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "b6b434e1-561a-433c-a1ae-ab395d47f83c",
			"createdAt" : "/Date(1430141033755)/",
			"updatedAt" : "/Date(1430193113755)/",
			"version" : 7,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-556",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
		"externalSyncedAt" : "/Date(1430142713753)/",
		"externalSynced" : true,
		"project" : {
			"id" : "09df544c-118f-4a6d-85bf-0a0ef4469ed9",
			"createdAt" : "/Date(1430139893755)/",
			"updatedAt" : "/Date(1430182313755)/",
			"version" : 7,
			"externalSystem" : {
				"id" : "f2392f86-c641-4d2a-8736-17bb03475e8e",
				"createdAt" : "/Date(1430140733755)/",
				"updatedAt" : "/Date(1430157113755)/",
				"version" : 0,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1430142713753)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1430056313753)/",
			"ends" : "/Date(1430229113753)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : false,
			"owner" : {
				"id" : "ed9abe66-238b-42d4-b335-dd325e781851",
				"createdAt" : "/Date(1430139953755)/",
				"updatedAt" : "/Date(1430211113755)/",
				"version" : 6,
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
				"created" : "/Date(1430056313754)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "4cc8c5a5-803f-49c9-b51a-ea24a1d54486",
				"createdAt" : "/Date(1430142653755)/",
				"updatedAt" : "/Date(1430200313755)/",
				"version" : 5,
				"externalSystem" : {
					"id" : "2ab498e2-9e46-4383-bbf1-d577a0034b2a",
					"createdAt" : "/Date(1430140613755)/",
					"updatedAt" : "/Date(1430185913755)/",
					"version" : 6,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1430142713753)/",
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
		"done" : true,
		"author" : {
			"id" : "23f3f70f-2ae1-4ef7-aef2-d8b01b9d3bf9",
			"createdAt" : "/Date(1430140253755)/",
			"updatedAt" : "/Date(1430225513755)/",
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
			"birthdayRemind" : "/Date(1431986400000)/",
			"workingTimeStart" : "/Date(1430114400000)/",
			"workingTimeEnd" : "/Date(1430146800000)/",
			"created" : "/Date(1430056313754)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "550b49e0-a615-4649-845f-52a737de6e9e",
			"createdAt" : "/Date(1430140193755)/",
			"updatedAt" : "/Date(1430185913755)/",
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
			"created" : "/Date(1430056313754)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"client" : {
		"id" : "f52333dd-bc72-4a6f-8643-f3c517b65e2a",
		"createdAt" : "/Date(1430140313754)/",
		"updatedAt" : "/Date(1430189513754)/",
		"version" : 3,
		"externalSystem" : {
			"id" : "bb57a9dc-1cda-41b9-b6e3-6b0de19b6e24",
			"createdAt" : "/Date(1430140073754)/",
			"updatedAt" : "/Date(1430185913754)/",
			"version" : 7,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1430142713753)/",
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
