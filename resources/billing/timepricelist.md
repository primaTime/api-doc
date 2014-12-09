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
| version     | Long      | read only  | no                                                                     | Object version number.                                                                              |
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
			"access" : "READ_ONLY"
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
	"id" : "3c8eeb45-6dc6-4397-9533-7406858de29b",
	"createdAt" : "/Date(1418063610610)/",
	"updatedAt" : "/Date(1418071890610)/",
	"version" : 2,
	"price" : 100.0,
	"note" : "Price with a special discount for the best client.",
	"user" : {
		"id" : "210acf52-c25c-4536-99e6-cb9b43827d06",
		"createdAt" : "/Date(1418063550611)/",
		"updatedAt" : "/Date(1418089890611)/",
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
		"birthdayRemind" : "/Date(1418857200000)/",
		"workingTimeStart" : "/Date(1418022000000)/",
		"workingTimeEnd" : "/Date(1418054400000)/",
		"created" : "/Date(1417978290609)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"workType" : {
		"id" : "7a590c05-42eb-4165-a703-51477b8e07b5",
		"createdAt" : "/Date(1418063790611)/",
		"updatedAt" : "/Date(1418093490611)/",
		"version" : 8,
		"externalSystem" : {
			"id" : "75d5a8d2-6904-48c1-98aa-998b405c7195",
			"createdAt" : "/Date(1418062230611)/",
			"updatedAt" : "/Date(1418086290611)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1418064690609)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"displayName" : "Software development"
	},
	"project" : {
		"id" : "6c8ba673-bf49-4879-906b-2457ff515ab9",
		"createdAt" : "/Date(1418063490610)/",
		"updatedAt" : "/Date(1418111490610)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "8046e029-929a-4485-b2ae-6b34ca5c203e",
			"createdAt" : "/Date(1418064510610)/",
			"updatedAt" : "/Date(1418100690610)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1418064690609)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1417978290609)/",
		"ends" : "/Date(1418151090609)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "559dfdcc-9154-408f-84bb-e66fee8ad30e",
			"createdAt" : "/Date(1418061210610)/",
			"updatedAt" : "/Date(1418075490610)/",
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
			"birthdayRemind" : "/Date(1419894000000)/",
			"workingTimeStart" : "/Date(1418022000000)/",
			"workingTimeEnd" : "/Date(1418054400000)/",
			"created" : "/Date(1417978290610)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "939dd7a6-355e-4824-80a7-acd4505dd846",
			"createdAt" : "/Date(1418063970610)/",
			"updatedAt" : "/Date(1418093490610)/",
			"version" : 6,
			"externalSystem" : {
				"id" : "5724608d-06c8-4d45-978c-4660169c81d8",
				"createdAt" : "/Date(1418061690610)/",
				"updatedAt" : "/Date(1418064690610)/",
				"version" : 1,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1418064690609)/",
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
		"id" : "8935a0ff-fce4-46a0-88aa-1b450c35570b",
		"createdAt" : "/Date(1418061750610)/",
		"updatedAt" : "/Date(1418133090610)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "e9d9f29a-b9d8-4b02-9c0b-701d5240bb9c",
			"createdAt" : "/Date(1418064630611)/",
			"updatedAt" : "/Date(1418118690611)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-556",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
		"externalSyncedAt" : "/Date(1418064690609)/",
		"externalSynced" : true,
		"project" : {
			"id" : "6c8ba673-bf49-4879-906b-2457ff515ab9",
			"createdAt" : "/Date(1418063490610)/",
			"updatedAt" : "/Date(1418111490610)/",
			"version" : 2,
			"externalSystem" : {
				"id" : "8046e029-929a-4485-b2ae-6b34ca5c203e",
				"createdAt" : "/Date(1418064510610)/",
				"updatedAt" : "/Date(1418100690610)/",
				"version" : 6,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1418064690609)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1417978290609)/",
			"ends" : "/Date(1418151090609)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : false,
			"owner" : {
				"id" : "559dfdcc-9154-408f-84bb-e66fee8ad30e",
				"createdAt" : "/Date(1418061210610)/",
				"updatedAt" : "/Date(1418075490610)/",
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
				"birthdayRemind" : "/Date(1419894000000)/",
				"workingTimeStart" : "/Date(1418022000000)/",
				"workingTimeEnd" : "/Date(1418054400000)/",
				"created" : "/Date(1417978290610)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "939dd7a6-355e-4824-80a7-acd4505dd846",
				"createdAt" : "/Date(1418063970610)/",
				"updatedAt" : "/Date(1418093490610)/",
				"version" : 6,
				"externalSystem" : {
					"id" : "5724608d-06c8-4d45-978c-4660169c81d8",
					"createdAt" : "/Date(1418061690610)/",
					"updatedAt" : "/Date(1418064690610)/",
					"version" : 1,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1418064690609)/",
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
			"id" : "ea2a56d0-013d-44b1-9544-e3e11ca8fca1",
			"createdAt" : "/Date(1418062290611)/",
			"updatedAt" : "/Date(1418064690611)/",
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
			"birthdayRemind" : "/Date(1419894000000)/",
			"workingTimeStart" : "/Date(1418022000000)/",
			"workingTimeEnd" : "/Date(1418054400000)/",
			"created" : "/Date(1417978290609)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "210acf52-c25c-4536-99e6-cb9b43827d06",
			"createdAt" : "/Date(1418063550611)/",
			"updatedAt" : "/Date(1418089890611)/",
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
			"birthdayRemind" : "/Date(1418857200000)/",
			"workingTimeStart" : "/Date(1418022000000)/",
			"workingTimeEnd" : "/Date(1418054400000)/",
			"created" : "/Date(1417978290609)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"client" : {
		"id" : "8d851356-788d-4cf9-9299-5f51e88009d2",
		"createdAt" : "/Date(1418061390610)/",
		"updatedAt" : "/Date(1418079090610)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "5dad27e4-16b0-4cde-a9ef-8029f2d4a8b3",
			"createdAt" : "/Date(1418061150610)/",
			"updatedAt" : "/Date(1418107890610)/",
			"version" : 9,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1418064690609)/",
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
