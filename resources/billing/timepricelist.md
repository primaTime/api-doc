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
	"id" : "a458f13e-87ed-4273-b7ed-36468424fc55",
	"createdAt" : "/Date(1416916138399)/",
	"updatedAt" : "/Date(1416963118399)/",
	"version" : 8,
	"price" : 100.0,
	"note" : "Price with a special discount for the best client.",
	"user" : {
		"id" : "360a8dce-764c-4f6d-9efa-5289af86f78a",
		"createdAt" : "/Date(1416916018399)/",
		"updatedAt" : "/Date(1416977518399)/",
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
		"birthdayRemind" : "/Date(1417734000000)/",
		"workingTimeStart" : "/Date(1416898800000)/",
		"workingTimeEnd" : "/Date(1416931200000)/",
		"created" : "/Date(1416829918398)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"workType" : {
		"id" : "eaec4ddd-84e7-46e9-9946-9005d9ae8aad",
		"createdAt" : "/Date(1416916078399)/",
		"updatedAt" : "/Date(1416937918399)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "7da39fad-c43b-4caf-94b2-ae0a3dc75f55",
			"createdAt" : "/Date(1416915178399)/",
			"updatedAt" : "/Date(1416984718399)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1416916318398)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"active" : true,
		"displayName" : "Software development"
	},
	"project" : {
		"id" : "9523f5e0-2cba-40ae-8d95-0ad2c9613490",
		"createdAt" : "/Date(1416912838399)/",
		"updatedAt" : "/Date(1416981118399)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "c38c6a06-b4a6-44ad-9a79-0aec6397326d",
			"createdAt" : "/Date(1416913138399)/",
			"updatedAt" : "/Date(1416916318399)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1416916318398)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1416829918398)/",
		"ends" : "/Date(1417002718398)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"active" : true,
		"personal" : false,
		"owner" : {
			"id" : "619839e0-02ce-41ac-917c-d672ccfcc334",
			"createdAt" : "/Date(1416913798399)/",
			"updatedAt" : "/Date(1416945118399)/",
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
			"birthdayRemind" : "/Date(1418770800000)/",
			"workingTimeStart" : "/Date(1416898800000)/",
			"workingTimeEnd" : "/Date(1416931200000)/",
			"created" : "/Date(1416829918398)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "e5b5fb97-deb6-441c-93d7-1c8398117788",
			"createdAt" : "/Date(1416914578399)/",
			"updatedAt" : "/Date(1416981118399)/",
			"version" : 0,
			"externalSystem" : {
				"id" : "ba55521d-b3f5-4431-8be5-31eb1f06b22e",
				"createdAt" : "/Date(1416914938399)/",
				"updatedAt" : "/Date(1416981118399)/",
				"version" : 9,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1416916318398)/",
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
		"id" : "8039b5dc-12dc-442c-be09-5fd69491bea7",
		"createdAt" : "/Date(1416916198399)/",
		"updatedAt" : "/Date(1416963118399)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "43dc1b56-a76d-47a4-9b98-6b906294ac9d",
			"createdAt" : "/Date(1416915178399)/",
			"updatedAt" : "/Date(1416927118399)/",
			"version" : 0,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-556",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
		"externalSyncedAt" : "/Date(1416916318398)/",
		"externalSynced" : true,
		"project" : {
			"id" : "9523f5e0-2cba-40ae-8d95-0ad2c9613490",
			"createdAt" : "/Date(1416912838399)/",
			"updatedAt" : "/Date(1416981118399)/",
			"version" : 6,
			"externalSystem" : {
				"id" : "c38c6a06-b4a6-44ad-9a79-0aec6397326d",
				"createdAt" : "/Date(1416913138399)/",
				"updatedAt" : "/Date(1416916318399)/",
				"version" : 2,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1416916318398)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1416829918398)/",
			"ends" : "/Date(1417002718398)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"active" : true,
			"personal" : false,
			"owner" : {
				"id" : "619839e0-02ce-41ac-917c-d672ccfcc334",
				"createdAt" : "/Date(1416913798399)/",
				"updatedAt" : "/Date(1416945118399)/",
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
				"birthdayRemind" : "/Date(1418770800000)/",
				"workingTimeStart" : "/Date(1416898800000)/",
				"workingTimeEnd" : "/Date(1416931200000)/",
				"created" : "/Date(1416829918398)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "e5b5fb97-deb6-441c-93d7-1c8398117788",
				"createdAt" : "/Date(1416914578399)/",
				"updatedAt" : "/Date(1416981118399)/",
				"version" : 0,
				"externalSystem" : {
					"id" : "ba55521d-b3f5-4431-8be5-31eb1f06b22e",
					"createdAt" : "/Date(1416914938399)/",
					"updatedAt" : "/Date(1416981118399)/",
					"version" : 9,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1416916318398)/",
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
		"done" : true,
		"author" : {
			"id" : "4aa141d9-7baa-42a0-b674-cdf2dd024e59",
			"createdAt" : "/Date(1416915658399)/",
			"updatedAt" : "/Date(1416977518399)/",
			"version" : 9,
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
			"created" : "/Date(1416829918398)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "360a8dce-764c-4f6d-9efa-5289af86f78a",
			"createdAt" : "/Date(1416916018399)/",
			"updatedAt" : "/Date(1416977518399)/",
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
			"birthdayRemind" : "/Date(1417734000000)/",
			"workingTimeStart" : "/Date(1416898800000)/",
			"workingTimeEnd" : "/Date(1416931200000)/",
			"created" : "/Date(1416829918398)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"client" : {
		"id" : "0a9a350e-4799-4b18-b2f1-ac4660270fe2",
		"createdAt" : "/Date(1416914278399)/",
		"updatedAt" : "/Date(1416941518399)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "d01f4ebf-8242-4c8b-96d9-242c7802b557",
			"createdAt" : "/Date(1416915118399)/",
			"updatedAt" : "/Date(1416955918399)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1416916318398)/",
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
