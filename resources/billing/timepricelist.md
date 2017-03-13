TimePriceList
==

## URL

	https://api.primaerp.com/v1/billing/pricelists/time

	https://api.primaerp.com/v1/billing/pricelists/time/$findpricelist

	https://api.primaerp.com/v1/time/users/{id}/pricelists

	https://api.primaerp.com/v1/time/users/{id}/pricelists/$findpricelist

	https://api.primaerp.com/v1/time/worktypes/{id}/pricelists

	https://api.primaerp.com/v1/time/worktypes/{id}/pricelists/$findpricelist

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
	"id" : "f2a8d3c2-b808-457e-ad13-d8c4e3d7ba47",
	"createdAt" : "/Date(1489387153625)/",
	"updatedAt" : "/Date(1489413193625)/",
	"version" : 5,
	"price" : 100.0,
	"note" : "Price with a special discount for the best client.",
	"user" : {
		"id" : "80261a7f-11ca-4350-969d-b04c1714aa22",
		"createdAt" : "/Date(1489386913625)/",
		"updatedAt" : "/Date(1489449193625)/",
		"version" : 0,
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
		"birthdayRemind" : "/Date(1490223600000)/",
		"workingTimeStart" : "/Date(1489388400000)/",
		"workingTimeEnd" : "/Date(1489420800000)/",
		"created" : "/Date(1489301593624)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"workType" : {
		"id" : "ecae44eb-054a-438f-a93f-c8a9c3d64298",
		"createdAt" : "/Date(1489386013625)/",
		"updatedAt" : "/Date(1489456393625)/",
		"version" : 3,
		"externalSystem" : {
			"id" : "b00f0a18-4321-4139-ae97-18a370a39877",
			"createdAt" : "/Date(1489387513625)/",
			"updatedAt" : "/Date(1489405993625)/",
			"version" : 5,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1489387993624)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"category" : "WORK",
		"displayName" : "Software development"
	},
	"project" : {
		"id" : "f31c5aab-4071-4cd8-a964-7a43f7400e49",
		"createdAt" : "/Date(1489386673625)/",
		"updatedAt" : "/Date(1489420393625)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "117b9837-596f-4ac4-a7d6-ba9692d95a88",
			"createdAt" : "/Date(1489385713625)/",
			"updatedAt" : "/Date(1489431193625)/",
			"version" : 9,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1489387993624)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1489301593624)/",
		"ends" : "/Date(1489474393624)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "c10ec920-c600-4191-b0d6-c18de9acd69a",
			"createdAt" : "/Date(1489387093625)/",
			"updatedAt" : "/Date(1489463593625)/",
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
			"birthdayRemind" : "/Date(1491256800000)/",
			"workingTimeStart" : "/Date(1489388400000)/",
			"workingTimeEnd" : "/Date(1489420800000)/",
			"created" : "/Date(1489301593624)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "a25b5ee1-a34b-4cc6-93a1-153441ed77c5",
			"createdAt" : "/Date(1489387273625)/",
			"updatedAt" : "/Date(1489438393625)/",
			"version" : 9,
			"externalSystem" : {
				"id" : "d2396f66-efb7-4dd6-b4c2-fba39245d8c1",
				"createdAt" : "/Date(1489386853625)/",
				"updatedAt" : "/Date(1489402393625)/",
				"version" : 7,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1489387993624)/",
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
		"id" : "74d7af01-7ae2-4957-8ef5-833177424ab8",
		"createdAt" : "/Date(1489387693625)/",
		"updatedAt" : "/Date(1489456393625)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "cf411b8e-cb84-4e9f-9fae-6d20c48ba7f8",
			"createdAt" : "/Date(1489387273625)/",
			"updatedAt" : "/Date(1489467193625)/",
			"version" : 0,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-556",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
		"externalSyncedAt" : "/Date(1489387993624)/",
		"externalSynced" : true,
		"project" : {
			"id" : "f31c5aab-4071-4cd8-a964-7a43f7400e49",
			"createdAt" : "/Date(1489386673625)/",
			"updatedAt" : "/Date(1489420393625)/",
			"version" : 6,
			"externalSystem" : {
				"id" : "117b9837-596f-4ac4-a7d6-ba9692d95a88",
				"createdAt" : "/Date(1489385713625)/",
				"updatedAt" : "/Date(1489431193625)/",
				"version" : 9,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1489387993624)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1489301593624)/",
			"ends" : "/Date(1489474393624)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : false,
			"owner" : {
				"id" : "c10ec920-c600-4191-b0d6-c18de9acd69a",
				"createdAt" : "/Date(1489387093625)/",
				"updatedAt" : "/Date(1489463593625)/",
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
				"birthdayRemind" : "/Date(1491256800000)/",
				"workingTimeStart" : "/Date(1489388400000)/",
				"workingTimeEnd" : "/Date(1489420800000)/",
				"created" : "/Date(1489301593624)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "a25b5ee1-a34b-4cc6-93a1-153441ed77c5",
				"createdAt" : "/Date(1489387273625)/",
				"updatedAt" : "/Date(1489438393625)/",
				"version" : 9,
				"externalSystem" : {
					"id" : "d2396f66-efb7-4dd6-b4c2-fba39245d8c1",
					"createdAt" : "/Date(1489386853625)/",
					"updatedAt" : "/Date(1489402393625)/",
					"version" : 7,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1489387993624)/",
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
			"id" : "5cfcebbf-c3eb-445f-8c57-f69e8bfd0e41",
			"createdAt" : "/Date(1489386133625)/",
			"updatedAt" : "/Date(1489391593625)/",
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
			"birthdayRemind" : "/Date(1491256800000)/",
			"workingTimeStart" : "/Date(1489388400000)/",
			"workingTimeEnd" : "/Date(1489420800000)/",
			"created" : "/Date(1489301593624)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "80261a7f-11ca-4350-969d-b04c1714aa22",
			"createdAt" : "/Date(1489386913625)/",
			"updatedAt" : "/Date(1489449193625)/",
			"version" : 0,
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
			"birthdayRemind" : "/Date(1490223600000)/",
			"workingTimeStart" : "/Date(1489388400000)/",
			"workingTimeEnd" : "/Date(1489420800000)/",
			"created" : "/Date(1489301593624)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"client" : {
		"id" : "d41853d9-302f-49b8-9a44-607a60338456",
		"createdAt" : "/Date(1489386913625)/",
		"updatedAt" : "/Date(1489395193625)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "80d7e327-ba7d-4066-9d7a-28bad8d6fe30",
			"createdAt" : "/Date(1489386853625)/",
			"updatedAt" : "/Date(1489449193625)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1489387993624)/",
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
