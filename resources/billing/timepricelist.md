TimePriceList
==

## URL

	https://api.primaerp.com/v1/billing/pricelists/time

## Properties

| Name        | Type      | Access     | Description                                                                                         |
|-------------|-----------|------------|-----------------------------------------------------------------------------------------------------|
| client      | Client    | read write | The client for whom the work is performed.                                                          |
| createdAt   | Date      | read only  | Date of creation.                                                                                   |
| displayName | String    | read only  | Describes an object in human readable form.                                                         |
| id          | String    | read write | Unique object identifier.                                                                           |
| note        | String    | read write | Some reason why the price was set.                                                                  |
| price       | Double    | read write | Price of the performed work.                                                                        |
| project     | Project   | read write | The project where the work is performed.                                                            |
| task        | Task      | read write | The task where the work is performed.                                                               |
| trashItem   | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | Last modified date.                                                                                 |
| user        | User      | read write | The user who owns the priced work                                                                   |
| version     | Long      | read write | Object version number.                                                                              |
| workType    | WorkType  | read write | Type of the priced work.                                                                            |

## Metadata

```JSON
{
	"type" : "TimePriceList",
	"fields" : [
		{
			"type" : "Client",
			"name" : "client",
			"description" : "The client for whom the work is performed.",
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
			"name" : "displayName",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY",
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
			"type" : "String",
			"name" : "note",
			"description" : "Some reason why the price was set.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Double",
			"name" : "price",
			"description" : "Price of the performed work.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Project",
			"name" : "project",
			"description" : "The project where the work is performed.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Task",
			"name" : "task",
			"description" : "The task where the work is performed.",
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
			"type" : "Date",
			"name" : "updatedAt",
			"description" : "Last modified date.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "User",
			"name" : "user",
			"description" : "The user who owns the priced work",
			"access" : "READ_WRITE",
			"constraints" : [ ]
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
			"description" : "Type of the priced work.",
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
	"id" : "d6677da2-f0ec-4cf6-8714-09afb6406a6c",
	"createdAt" : "/Date(1413983819756)/",
	"updatedAt" : "/Date(1414066139756)/",
	"version" : 2,
	"price" : 100.0,
	"note" : "Price with a special discount for the best client.",
	"user" : {
		"id" : "b80309bc-5cc3-460a-8525-5b200054c4ca",
		"createdAt" : "/Date(1413986279757)/",
		"updatedAt" : "/Date(1414040939757)/",
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
		"birthdayRemind" : "/Date(1414796400000)/",
		"workingTimeStart" : "/Date(1413957600000)/",
		"workingTimeEnd" : "/Date(1413990000000)/",
		"created" : "/Date(1413900539756)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"workType" : {
		"id" : "fcfecc94-7e42-4e40-9e6d-bac5aa305da8",
		"createdAt" : "/Date(1413983999758)/",
		"updatedAt" : "/Date(1413990539758)/",
		"version" : 5,
		"externalSystem" : {
			"id" : "59300c1e-ffe8-4628-b10e-0b8908d22464",
			"createdAt" : "/Date(1413983819758)/",
			"updatedAt" : "/Date(1414033739758)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1413986939755)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"active" : true,
		"displayName" : "Software development"
	},
	"project" : {
		"id" : "850919e8-ca3a-47f8-8258-cc1444666100",
		"createdAt" : "/Date(1413985499758)/",
		"updatedAt" : "/Date(1414030139758)/",
		"version" : 5,
		"externalSystem" : {
			"id" : "1d265da6-874b-4aaf-97db-a47c89299831",
			"createdAt" : "/Date(1413985919758)/",
			"updatedAt" : "/Date(1414048139758)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1413986939755)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1413900539755)/",
		"ends" : "/Date(1414073339755)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"active" : true,
		"personal" : false,
		"owner" : {
			"id" : "ceb9edea-2964-4ff5-acb4-9e4dee43acc0",
			"createdAt" : "/Date(1413983639758)/",
			"updatedAt" : "/Date(1414037339758)/",
			"version" : 1,
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
			"created" : "/Date(1413900539756)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "c34a32d8-7fa6-4fb6-9b94-e3873d3e8449",
			"createdAt" : "/Date(1413984599758)/",
			"updatedAt" : "/Date(1414040939758)/",
			"version" : 9,
			"externalSystem" : {
				"id" : "467c4368-5aa4-41c9-9f36-76dc85c6f0d9",
				"createdAt" : "/Date(1413986339758)/",
				"updatedAt" : "/Date(1414004939758)/",
				"version" : 8,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1413986939755)/",
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
		"id" : "c4ba85eb-814b-4702-826e-d76aea01f597",
		"createdAt" : "/Date(1413985919757)/",
		"updatedAt" : "/Date(1414004939757)/",
		"version" : 7,
		"externalSystem" : {
			"id" : "115fbeb0-2bc3-4338-930a-3edb199b5b33",
			"createdAt" : "/Date(1413983759758)/",
			"updatedAt" : "/Date(1414033739758)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-556",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
		"externalSyncedAt" : "/Date(1413986939755)/",
		"externalSynced" : true,
		"project" : {
			"id" : "850919e8-ca3a-47f8-8258-cc1444666100",
			"createdAt" : "/Date(1413985499758)/",
			"updatedAt" : "/Date(1414030139758)/",
			"version" : 5,
			"externalSystem" : {
				"id" : "1d265da6-874b-4aaf-97db-a47c89299831",
				"createdAt" : "/Date(1413985919758)/",
				"updatedAt" : "/Date(1414048139758)/",
				"version" : 2,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1413986939755)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1413900539755)/",
			"ends" : "/Date(1414073339755)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"active" : true,
			"personal" : false,
			"owner" : {
				"id" : "ceb9edea-2964-4ff5-acb4-9e4dee43acc0",
				"createdAt" : "/Date(1413983639758)/",
				"updatedAt" : "/Date(1414037339758)/",
				"version" : 1,
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
				"created" : "/Date(1413900539756)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "c34a32d8-7fa6-4fb6-9b94-e3873d3e8449",
				"createdAt" : "/Date(1413984599758)/",
				"updatedAt" : "/Date(1414040939758)/",
				"version" : 9,
				"externalSystem" : {
					"id" : "467c4368-5aa4-41c9-9f36-76dc85c6f0d9",
					"createdAt" : "/Date(1413986339758)/",
					"updatedAt" : "/Date(1414004939758)/",
					"version" : 8,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1413986939755)/",
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
		"done" : true,
		"author" : {
			"id" : "4d9856ba-7e70-4668-9eb2-86622fb33727",
			"createdAt" : "/Date(1413983759758)/",
			"updatedAt" : "/Date(1414037339758)/",
			"version" : 2,
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
			"created" : "/Date(1413900539756)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "b80309bc-5cc3-460a-8525-5b200054c4ca",
			"createdAt" : "/Date(1413986279757)/",
			"updatedAt" : "/Date(1414040939757)/",
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
			"birthdayRemind" : "/Date(1414796400000)/",
			"workingTimeStart" : "/Date(1413957600000)/",
			"workingTimeEnd" : "/Date(1413990000000)/",
			"created" : "/Date(1413900539756)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"client" : {
		"id" : "1a043c92-d72a-411b-9d39-958f7058972a",
		"createdAt" : "/Date(1413985319757)/",
		"updatedAt" : "/Date(1413997739757)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "3c2f216a-342c-4652-a7d0-7ca4a119a41f",
			"createdAt" : "/Date(1413986639757)/",
			"updatedAt" : "/Date(1414019339757)/",
			"version" : 7,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1413986939755)/",
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
	"displayName" : "100.0"
}
```
