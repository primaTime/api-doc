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
	"id" : "14ba163d-6716-4bb4-9d92-0f105b8e980f",
	"createdAt" : "/Date(1452254297846)/",
	"updatedAt" : "/Date(1452296957846)/",
	"version" : 9,
	"price" : 100.0,
	"note" : "Price with a special discount for the best client.",
	"user" : {
		"id" : "90892de9-a15a-4d51-9a34-892056d208dc",
		"createdAt" : "/Date(1452253937847)/",
		"updatedAt" : "/Date(1452296957847)/",
		"version" : 4,
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
		"created" : "/Date(1452170957846)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"workType" : {
		"id" : "700ee4e6-004b-4b7b-9e8e-6fb6c0d60dea",
		"createdAt" : "/Date(1452254657847)/",
		"updatedAt" : "/Date(1452329357847)/",
		"version" : 7,
		"externalSystem" : {
			"id" : "7f0649bd-f6e9-4dd7-a799-50c84b10f059",
			"createdAt" : "/Date(1452255797847)/",
			"updatedAt" : "/Date(1452304157847)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1452257357845)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"category" : "WORK",
		"displayName" : "Software development"
	},
	"project" : {
		"id" : "4a9b6719-0715-428a-9537-88236fef1e08",
		"createdAt" : "/Date(1452255377846)/",
		"updatedAt" : "/Date(1452336557846)/",
		"version" : 4,
		"externalSystem" : {
			"id" : "a97cabda-7d4a-42c8-9254-f47a4643b05a",
			"createdAt" : "/Date(1452255077846)/",
			"updatedAt" : "/Date(1452278957846)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1452257357845)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1452170957845)/",
		"ends" : "/Date(1452343757845)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "05a749a7-883b-4bbe-aae8-1e291144e20b",
			"createdAt" : "/Date(1452256037846)/",
			"updatedAt" : "/Date(1452275357846)/",
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
			"birthdayRemind" : "/Date(1454108400000)/",
			"workingTimeStart" : "/Date(1452236400000)/",
			"workingTimeEnd" : "/Date(1452268800000)/",
			"created" : "/Date(1452170957846)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "a08f63dd-8381-44e6-abf6-4e51dcc5d1b1",
			"createdAt" : "/Date(1452255977846)/",
			"updatedAt" : "/Date(1452293357846)/",
			"version" : 8,
			"externalSystem" : {
				"id" : "abafae88-f810-49a7-8d27-2e09e7079deb",
				"createdAt" : "/Date(1452253817846)/",
				"updatedAt" : "/Date(1452296957846)/",
				"version" : 3,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1452257357845)/",
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
		"id" : "fe5c7702-18d0-47ec-a720-d7ae4c5986c9",
		"createdAt" : "/Date(1452256517846)/",
		"updatedAt" : "/Date(1452304157846)/",
		"version" : 5,
		"externalSystem" : {
			"id" : "77a1b663-da1a-49b4-b032-9b9f185fe37a",
			"createdAt" : "/Date(1452254597847)/",
			"updatedAt" : "/Date(1452278957847)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-556",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
		"externalSyncedAt" : "/Date(1452257357845)/",
		"externalSynced" : true,
		"project" : {
			"id" : "4a9b6719-0715-428a-9537-88236fef1e08",
			"createdAt" : "/Date(1452255377846)/",
			"updatedAt" : "/Date(1452336557846)/",
			"version" : 4,
			"externalSystem" : {
				"id" : "a97cabda-7d4a-42c8-9254-f47a4643b05a",
				"createdAt" : "/Date(1452255077846)/",
				"updatedAt" : "/Date(1452278957846)/",
				"version" : 6,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1452257357845)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1452170957845)/",
			"ends" : "/Date(1452343757845)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : false,
			"owner" : {
				"id" : "05a749a7-883b-4bbe-aae8-1e291144e20b",
				"createdAt" : "/Date(1452256037846)/",
				"updatedAt" : "/Date(1452275357846)/",
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
				"birthdayRemind" : "/Date(1454108400000)/",
				"workingTimeStart" : "/Date(1452236400000)/",
				"workingTimeEnd" : "/Date(1452268800000)/",
				"created" : "/Date(1452170957846)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "a08f63dd-8381-44e6-abf6-4e51dcc5d1b1",
				"createdAt" : "/Date(1452255977846)/",
				"updatedAt" : "/Date(1452293357846)/",
				"version" : 8,
				"externalSystem" : {
					"id" : "abafae88-f810-49a7-8d27-2e09e7079deb",
					"createdAt" : "/Date(1452253817846)/",
					"updatedAt" : "/Date(1452296957846)/",
					"version" : 3,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1452257357845)/",
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
			"id" : "256d8a35-d341-44b0-8d7e-d3f18400aa5a",
			"createdAt" : "/Date(1452255617846)/",
			"updatedAt" : "/Date(1452340157846)/",
			"version" : 5,
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
			"created" : "/Date(1452170957846)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "90892de9-a15a-4d51-9a34-892056d208dc",
			"createdAt" : "/Date(1452253937847)/",
			"updatedAt" : "/Date(1452296957847)/",
			"version" : 4,
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
			"created" : "/Date(1452170957846)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"client" : {
		"id" : "a5fa9923-ba8f-4409-be0d-bf8bf721c25c",
		"createdAt" : "/Date(1452254657846)/",
		"updatedAt" : "/Date(1452311357846)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "c22a878a-792b-4475-a174-60caef0434e5",
			"createdAt" : "/Date(1452256817846)/",
			"updatedAt" : "/Date(1452336557846)/",
			"version" : 0,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1452257357845)/",
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
