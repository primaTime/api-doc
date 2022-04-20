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
	"id" : "39228bd5-91b4-42a8-9b37-8d38d9e7ea08",
	"createdAt" : "/Date(1650452754053)/",
	"updatedAt" : "/Date(1650510654053)/",
	"version" : 2,
	"price" : 100.0,
	"note" : "Price with a special discount for the best client.",
	"user" : {
		"id" : "ccca2870-7215-4a16-8016-288b8e54adce",
		"createdAt" : "/Date(1650451914054)/",
		"updatedAt" : "/Date(1650492654054)/",
		"version" : 2,
		"firstName" : "John",
		"lastName" : "Doe",
		"nickName" : "Johny D.",
		"email" : "m7r4uu9pnr6_bhw@testdata.com",
		"phone" : "55 234 555 678",
		"position" : "Senior developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "yyyy-MM-dd",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "pt_BR",
		"password" : "nivj7bf754nfd6npw41_",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1652306400000)/",
		"workingTimeStart" : "/Date(1650434400000)/",
		"workingTimeEnd" : "/Date(1650466800000)/",
		"created" : "/Date(1650366654053)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"workType" : {
		"id" : "89a2e15e-7877-4cbe-8c9b-b11ae0218ef5",
		"createdAt" : "/Date(1650452694054)/",
		"updatedAt" : "/Date(1650478254054)/",
		"version" : 4,
		"externalSystem" : {
			"id" : "42c1a656-e0db-4fd8-8a6a-40821e646090",
			"createdAt" : "/Date(1650451434054)/",
			"updatedAt" : "/Date(1650453054054)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1650453054053)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"category" : "WORK",
		"displayName" : "Software development"
	},
	"project" : {
		"id" : "ddac524d-533b-4a6e-9938-b84e1248a46c",
		"createdAt" : "/Date(1650451794053)/",
		"updatedAt" : "/Date(1650535854053)/",
		"version" : 5,
		"externalSystem" : {
			"id" : "0bbbee87-63d2-4dba-9257-64d41a38c3ca",
			"createdAt" : "/Date(1650452514054)/",
			"updatedAt" : "/Date(1650463854054)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1650453054053)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1650366654053)/",
		"ends" : "/Date(1650539454053)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "cc586965-8558-40a2-a0bb-2c7660c32d8a",
			"createdAt" : "/Date(1650450354054)/",
			"updatedAt" : "/Date(1650517854054)/",
			"version" : 6,
			"firstName" : "John",
			"lastName" : "Doe",
			"nickName" : "Johny D.",
			"email" : "lva1cxu5keixltf@testdata.com",
			"phone" : "55 234 555 678",
			"position" : "Senior developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "yyyy-MM-dd",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "pt_BR",
			"password" : "s8czdymmi59c3psts1rf",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1652306400000)/",
			"workingTimeStart" : "/Date(1650434400000)/",
			"workingTimeEnd" : "/Date(1650466800000)/",
			"created" : "/Date(1650366654053)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "0a59d84a-240e-4661-b8a9-648944af037c",
			"createdAt" : "/Date(1650452334053)/",
			"updatedAt" : "/Date(1650492654053)/",
			"version" : 8,
			"externalSystem" : {
				"id" : "1bbebffd-99b5-4be1-9a4c-0ec5729ce26d",
				"createdAt" : "/Date(1650451854053)/",
				"updatedAt" : "/Date(1650478254053)/",
				"version" : 1,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1650453054053)/",
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
			"consentTill" : "/Date(1681989054053)/",
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
		"id" : "a125e4d2-cff6-4955-83bd-b6a8175916be",
		"createdAt" : "/Date(1650451914053)/",
		"updatedAt" : "/Date(1650456654053)/",
		"version" : 8,
		"externalSystem" : {
			"id" : "d063af70-1e48-42bc-b51f-2d34d2977a9c",
			"createdAt" : "/Date(1650450594054)/",
			"updatedAt" : "/Date(1650489054054)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-556",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
		"externalSyncedAt" : "/Date(1650453054053)/",
		"externalSynced" : true,
		"project" : {
			"id" : "ddac524d-533b-4a6e-9938-b84e1248a46c",
			"createdAt" : "/Date(1650451794053)/",
			"updatedAt" : "/Date(1650535854053)/",
			"version" : 5,
			"externalSystem" : {
				"id" : "0bbbee87-63d2-4dba-9257-64d41a38c3ca",
				"createdAt" : "/Date(1650452514054)/",
				"updatedAt" : "/Date(1650463854054)/",
				"version" : 3,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1650453054053)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1650366654053)/",
			"ends" : "/Date(1650539454053)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : false,
			"owner" : {
				"id" : "cc586965-8558-40a2-a0bb-2c7660c32d8a",
				"createdAt" : "/Date(1650450354054)/",
				"updatedAt" : "/Date(1650517854054)/",
				"version" : 6,
				"firstName" : "John",
				"lastName" : "Doe",
				"nickName" : "Johny D.",
				"email" : "lva1cxu5keixltf@testdata.com",
				"phone" : "55 234 555 678",
				"position" : "Senior developer",
				"timeZone" : "America/Sao_Paulo",
				"dateFormat" : "yyyy-MM-dd",
				"timeFormat" : "K:mm a",
				"weekStart" : 7,
				"language" : "pt_BR",
				"password" : "s8czdymmi59c3psts1rf",
				"secretKey" : "userSecretKey",
				"confirmed" : false,
				"confirmedEmail" : false,
				"active" : false,
				"birthdayRemind" : "/Date(1652306400000)/",
				"workingTimeStart" : "/Date(1650434400000)/",
				"workingTimeEnd" : "/Date(1650466800000)/",
				"created" : "/Date(1650366654053)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "0a59d84a-240e-4661-b8a9-648944af037c",
				"createdAt" : "/Date(1650452334053)/",
				"updatedAt" : "/Date(1650492654053)/",
				"version" : 8,
				"externalSystem" : {
					"id" : "1bbebffd-99b5-4be1-9a4c-0ec5729ce26d",
					"createdAt" : "/Date(1650451854053)/",
					"updatedAt" : "/Date(1650478254053)/",
					"version" : 1,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1650453054053)/",
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
				"consentTill" : "/Date(1681989054053)/",
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
			"id" : "f12d114d-25ea-4e18-b7d3-dc931b66cb4d",
			"createdAt" : "/Date(1650449694054)/",
			"updatedAt" : "/Date(1650535854054)/",
			"version" : 6,
			"firstName" : "John",
			"lastName" : "Doe",
			"nickName" : "Johny D.",
			"email" : "2riepvg8ety95fp@testdata.com",
			"phone" : "55 234 555 678",
			"position" : "Senior developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "yyyy-MM-dd",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "pt_BR",
			"password" : "p_wrx9bdmqdmkcuu6hjd",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1652306400000)/",
			"workingTimeStart" : "/Date(1650434400000)/",
			"workingTimeEnd" : "/Date(1650466800000)/",
			"created" : "/Date(1650366654053)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "ccca2870-7215-4a16-8016-288b8e54adce",
			"createdAt" : "/Date(1650451914054)/",
			"updatedAt" : "/Date(1650492654054)/",
			"version" : 2,
			"firstName" : "John",
			"lastName" : "Doe",
			"nickName" : "Johny D.",
			"email" : "m7r4uu9pnr6_bhw@testdata.com",
			"phone" : "55 234 555 678",
			"position" : "Senior developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "yyyy-MM-dd",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "pt_BR",
			"password" : "nivj7bf754nfd6npw41_",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1652306400000)/",
			"workingTimeStart" : "/Date(1650434400000)/",
			"workingTimeEnd" : "/Date(1650466800000)/",
			"created" : "/Date(1650366654053)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"client" : {
		"id" : "cec4f2fe-e7c5-4230-88ec-b75aec9918ab",
		"createdAt" : "/Date(1650450894053)/",
		"updatedAt" : "/Date(1650525054053)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "46d1fea8-9d1d-41ff-ba8e-2493d68f4f28",
			"createdAt" : "/Date(1650452574053)/",
			"updatedAt" : "/Date(1650532254053)/",
			"version" : 1,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1650453054053)/",
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
		"consentTill" : "/Date(1681989054053)/",
		"displayName" : "Example Ltd."
	},
	"displayName" : "100.0"
}
```
