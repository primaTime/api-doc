TimePriceList
==

## URL

	https://api.primaerp.com/v1/billing/pricelists/time

	https://api.primaerp.com/v1/time/projects/{id}/pricelists

	https://api.primaerp.com/v1/time/users/{id}/pricelists

	https://api.primaerp.com/v1/time/worktypes/{id}/pricelists

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
	"id" : "4ece0e52-3c18-4260-83fa-5088a2d523f4",
	"createdAt" : "/Date(1427900879862)/",
	"updatedAt" : "/Date(1427967059862)/",
	"version" : 9,
	"price" : 100.0,
	"note" : "Price with a special discount for the best client.",
	"user" : {
		"id" : "902574bc-9f27-4c23-a0d2-be4916c1281f",
		"createdAt" : "/Date(1427901119862)/",
		"updatedAt" : "/Date(1427905859862)/",
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
		"birthdayRemind" : "/Date(1428703200000)/",
		"workingTimeStart" : "/Date(1427868000000)/",
		"workingTimeEnd" : "/Date(1427900400000)/",
		"created" : "/Date(1427815859861)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"workType" : {
		"id" : "cacdc554-b200-4b22-bfa9-632628a944fe",
		"createdAt" : "/Date(1427902079863)/",
		"updatedAt" : "/Date(1427952659863)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "500a60e7-617e-4ae4-ada4-0f3f2ed6eb1f",
			"createdAt" : "/Date(1427900399863)/",
			"updatedAt" : "/Date(1427974259863)/",
			"version" : 9,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1427902259861)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"category" : "WORK",
		"displayName" : "Software development"
	},
	"project" : {
		"id" : "14cf3c5c-616c-4556-9844-4689cb997445",
		"createdAt" : "/Date(1427901359862)/",
		"updatedAt" : "/Date(1427952659862)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "79e061b4-7187-4ce6-a33b-915bc02a281a",
			"createdAt" : "/Date(1427901899862)/",
			"updatedAt" : "/Date(1427905859862)/",
			"version" : 4,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1427902259861)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1427815859861)/",
		"ends" : "/Date(1427988659861)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "c5cd0551-973f-4ef4-b10f-8609907aaaf6",
			"createdAt" : "/Date(1427901659862)/",
			"updatedAt" : "/Date(1427934659862)/",
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
			"birthdayRemind" : "/Date(1429740000000)/",
			"workingTimeStart" : "/Date(1427868000000)/",
			"workingTimeEnd" : "/Date(1427900400000)/",
			"created" : "/Date(1427815859862)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "0668e52c-addf-44fb-a890-de85054abd14",
			"createdAt" : "/Date(1427900039862)/",
			"updatedAt" : "/Date(1427945459862)/",
			"version" : 3,
			"externalSystem" : {
				"id" : "a8fbca03-ae32-4a0e-ae9a-37e0c8f7d4e0",
				"createdAt" : "/Date(1427900459862)/",
				"updatedAt" : "/Date(1427985059862)/",
				"version" : 2,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1427902259861)/",
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
		"id" : "336af737-93ed-424b-8cfa-80515a215068",
		"createdAt" : "/Date(1427898959862)/",
		"updatedAt" : "/Date(1427959859862)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "7aa1fb04-3f02-46c3-8123-533bb3af0542",
			"createdAt" : "/Date(1427902259862)/",
			"updatedAt" : "/Date(1427927459862)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-556",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
		"externalSyncedAt" : "/Date(1427902259861)/",
		"externalSynced" : true,
		"project" : {
			"id" : "14cf3c5c-616c-4556-9844-4689cb997445",
			"createdAt" : "/Date(1427901359862)/",
			"updatedAt" : "/Date(1427952659862)/",
			"version" : 6,
			"externalSystem" : {
				"id" : "79e061b4-7187-4ce6-a33b-915bc02a281a",
				"createdAt" : "/Date(1427901899862)/",
				"updatedAt" : "/Date(1427905859862)/",
				"version" : 4,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1427902259861)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1427815859861)/",
			"ends" : "/Date(1427988659861)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : false,
			"owner" : {
				"id" : "c5cd0551-973f-4ef4-b10f-8609907aaaf6",
				"createdAt" : "/Date(1427901659862)/",
				"updatedAt" : "/Date(1427934659862)/",
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
				"birthdayRemind" : "/Date(1429740000000)/",
				"workingTimeStart" : "/Date(1427868000000)/",
				"workingTimeEnd" : "/Date(1427900400000)/",
				"created" : "/Date(1427815859862)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "0668e52c-addf-44fb-a890-de85054abd14",
				"createdAt" : "/Date(1427900039862)/",
				"updatedAt" : "/Date(1427945459862)/",
				"version" : 3,
				"externalSystem" : {
					"id" : "a8fbca03-ae32-4a0e-ae9a-37e0c8f7d4e0",
					"createdAt" : "/Date(1427900459862)/",
					"updatedAt" : "/Date(1427985059862)/",
					"version" : 2,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1427902259861)/",
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
			"id" : "46f6c2ad-829b-4a17-9a18-f6fffc1f0201",
			"createdAt" : "/Date(1427900279862)/",
			"updatedAt" : "/Date(1427927459862)/",
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
			"birthdayRemind" : "/Date(1429740000000)/",
			"workingTimeStart" : "/Date(1427868000000)/",
			"workingTimeEnd" : "/Date(1427900400000)/",
			"created" : "/Date(1427815859861)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "902574bc-9f27-4c23-a0d2-be4916c1281f",
			"createdAt" : "/Date(1427901119862)/",
			"updatedAt" : "/Date(1427905859862)/",
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
			"birthdayRemind" : "/Date(1428703200000)/",
			"workingTimeStart" : "/Date(1427868000000)/",
			"workingTimeEnd" : "/Date(1427900400000)/",
			"created" : "/Date(1427815859861)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"client" : {
		"id" : "11222004-f9ca-46c6-b2c5-f3b9dcb984f3",
		"createdAt" : "/Date(1427900759862)/",
		"updatedAt" : "/Date(1427905859862)/",
		"version" : 4,
		"externalSystem" : {
			"id" : "23519fe7-f8c4-4bd0-b7be-fc511dc8170b",
			"createdAt" : "/Date(1427901779862)/",
			"updatedAt" : "/Date(1427902259862)/",
			"version" : 9,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1427902259861)/",
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
