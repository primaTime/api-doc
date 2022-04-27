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
	"id" : "1dba2c2a-e5c7-46eb-bd91-ff013eec2e5d",
	"createdAt" : "/Date(1651049127466)/",
	"updatedAt" : "/Date(1651129707466)/",
	"version" : 6,
	"price" : 100.0,
	"note" : "Price with a special discount for the best client.",
	"user" : {
		"id" : "b90cb860-8f80-4398-a139-bd3f888ccc03",
		"createdAt" : "/Date(1651047207466)/",
		"updatedAt" : "/Date(1651122507466)/",
		"version" : 8,
		"firstName" : "John",
		"lastName" : "Doe",
		"nickName" : "Johny D.",
		"email" : "igcwb80_qt1tz_e@testdata.com",
		"phone" : "55 234 555 678",
		"position" : "Senior developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "yyyy-MM-dd",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "pt_BR",
		"password" : "gi3t4_qb085t1m7c_urb",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1652911200000)/",
		"workingTimeStart" : "/Date(1651039200000)/",
		"workingTimeEnd" : "/Date(1651071600000)/",
		"created" : "/Date(1650964107466)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"workType" : {
		"id" : "7bcfadd9-a31f-4b9c-b071-12616f68b2fe",
		"createdAt" : "/Date(1651049067466)/",
		"updatedAt" : "/Date(1651097307466)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "622d0f6f-2816-4fde-9ce9-23cf27db5cfe",
			"createdAt" : "/Date(1651048047466)/",
			"updatedAt" : "/Date(1651100907466)/",
			"version" : 4,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1651050507466)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"category" : "WORK",
		"displayName" : "Software development"
	},
	"project" : {
		"id" : "bd30f0a8-4963-4504-9164-5f9f013b87d3",
		"createdAt" : "/Date(1651050267466)/",
		"updatedAt" : "/Date(1651057707466)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "c4568137-cadf-46bc-934a-87b06ee18203",
			"createdAt" : "/Date(1651048287466)/",
			"updatedAt" : "/Date(1651054107466)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1651050507466)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1650964107466)/",
		"ends" : "/Date(1651136907466)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "5266bcb3-9604-4a7d-911f-509765634b9e",
			"createdAt" : "/Date(1651049847466)/",
			"updatedAt" : "/Date(1651064907466)/",
			"version" : 0,
			"firstName" : "John",
			"lastName" : "Doe",
			"nickName" : "Johny D.",
			"email" : "_qp3rb5kx__xs5d@testdata.com",
			"phone" : "55 234 555 678",
			"position" : "Senior developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "yyyy-MM-dd",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "pt_BR",
			"password" : "p2rm4llqt_98vw7wyf2k",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1652911200000)/",
			"workingTimeStart" : "/Date(1651039200000)/",
			"workingTimeEnd" : "/Date(1651071600000)/",
			"created" : "/Date(1650964107466)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "6f843650-ea38-4d81-9ea6-54aaaad374b9",
			"createdAt" : "/Date(1651047507466)/",
			"updatedAt" : "/Date(1651090107466)/",
			"version" : 4,
			"externalSystem" : {
				"id" : "e8b0826d-6435-40b9-8949-115b48289cc8",
				"createdAt" : "/Date(1651049667466)/",
				"updatedAt" : "/Date(1651129707466)/",
				"version" : 8,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1651050507466)/",
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
			"consentTill" : "/Date(1682586507466)/",
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
		"id" : "2bb093cc-7c9d-4b55-a340-4e14f9f52d3b",
		"createdAt" : "/Date(1651049667466)/",
		"updatedAt" : "/Date(1651050507466)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "2aa37a88-c1ac-43ec-bf48-e33b6870e621",
			"createdAt" : "/Date(1651049907466)/",
			"updatedAt" : "/Date(1651126107466)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-556",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
		"externalSyncedAt" : "/Date(1651050507466)/",
		"externalSynced" : true,
		"project" : {
			"id" : "bd30f0a8-4963-4504-9164-5f9f013b87d3",
			"createdAt" : "/Date(1651050267466)/",
			"updatedAt" : "/Date(1651057707466)/",
			"version" : 1,
			"externalSystem" : {
				"id" : "c4568137-cadf-46bc-934a-87b06ee18203",
				"createdAt" : "/Date(1651048287466)/",
				"updatedAt" : "/Date(1651054107466)/",
				"version" : 2,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1651050507466)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1650964107466)/",
			"ends" : "/Date(1651136907466)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : false,
			"owner" : {
				"id" : "5266bcb3-9604-4a7d-911f-509765634b9e",
				"createdAt" : "/Date(1651049847466)/",
				"updatedAt" : "/Date(1651064907466)/",
				"version" : 0,
				"firstName" : "John",
				"lastName" : "Doe",
				"nickName" : "Johny D.",
				"email" : "_qp3rb5kx__xs5d@testdata.com",
				"phone" : "55 234 555 678",
				"position" : "Senior developer",
				"timeZone" : "America/Sao_Paulo",
				"dateFormat" : "yyyy-MM-dd",
				"timeFormat" : "K:mm a",
				"weekStart" : 7,
				"language" : "pt_BR",
				"password" : "p2rm4llqt_98vw7wyf2k",
				"secretKey" : "userSecretKey",
				"confirmed" : false,
				"confirmedEmail" : false,
				"active" : false,
				"birthdayRemind" : "/Date(1652911200000)/",
				"workingTimeStart" : "/Date(1651039200000)/",
				"workingTimeEnd" : "/Date(1651071600000)/",
				"created" : "/Date(1650964107466)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "6f843650-ea38-4d81-9ea6-54aaaad374b9",
				"createdAt" : "/Date(1651047507466)/",
				"updatedAt" : "/Date(1651090107466)/",
				"version" : 4,
				"externalSystem" : {
					"id" : "e8b0826d-6435-40b9-8949-115b48289cc8",
					"createdAt" : "/Date(1651049667466)/",
					"updatedAt" : "/Date(1651129707466)/",
					"version" : 8,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1651050507466)/",
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
				"consentTill" : "/Date(1682586507466)/",
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
			"id" : "e0ce586e-c8be-443b-af24-c3b958440d1c",
			"createdAt" : "/Date(1651048827466)/",
			"updatedAt" : "/Date(1651050507466)/",
			"version" : 0,
			"firstName" : "John",
			"lastName" : "Doe",
			"nickName" : "Johny D.",
			"email" : "vf93qnpb9q9wdl3@testdata.com",
			"phone" : "55 234 555 678",
			"position" : "Senior developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "yyyy-MM-dd",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "pt_BR",
			"password" : "oe59u_dtyex1y_qs_6hs",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1652911200000)/",
			"workingTimeStart" : "/Date(1651039200000)/",
			"workingTimeEnd" : "/Date(1651071600000)/",
			"created" : "/Date(1650964107466)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "b90cb860-8f80-4398-a139-bd3f888ccc03",
			"createdAt" : "/Date(1651047207466)/",
			"updatedAt" : "/Date(1651122507466)/",
			"version" : 8,
			"firstName" : "John",
			"lastName" : "Doe",
			"nickName" : "Johny D.",
			"email" : "igcwb80_qt1tz_e@testdata.com",
			"phone" : "55 234 555 678",
			"position" : "Senior developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "yyyy-MM-dd",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "pt_BR",
			"password" : "gi3t4_qb085t1m7c_urb",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1652911200000)/",
			"workingTimeStart" : "/Date(1651039200000)/",
			"workingTimeEnd" : "/Date(1651071600000)/",
			"created" : "/Date(1650964107466)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"client" : {
		"id" : "8bece3a2-c76c-4415-95e2-b0b7481383f8",
		"createdAt" : "/Date(1651050507466)/",
		"updatedAt" : "/Date(1651093707466)/",
		"version" : 8,
		"externalSystem" : {
			"id" : "ccf80651-1f9f-49d6-bafd-794ffc05ab6a",
			"createdAt" : "/Date(1651047087466)/",
			"updatedAt" : "/Date(1651057707466)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1651050507466)/",
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
		"consentTill" : "/Date(1682586507466)/",
		"displayName" : "Example Ltd."
	},
	"displayName" : "100.0"
}
```
