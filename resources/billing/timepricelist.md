TimePriceList
==

## URL

	http://api.primaerp.com/v1/time/users/{id}/pricelists

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
	"id" : "ce0b4156-090b-4704-bf59-8feace83cff6",
	"createdAt" : "/Date(1408429084670)/",
	"updatedAt" : "/Date(1408506724670)/",
	"version" : 8,
	"price" : 100.0,
	"note" : "Price with a special discount for the best client.",
	"user" : {
		"id" : "8ef718c2-6eac-4ee0-afab-5cd24d538849",
		"createdAt" : "/Date(1408429864671)/",
		"updatedAt" : "/Date(1408492324671)/",
		"version" : 5,
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
		"birthdayRemind" : "/Date(1409263200000)/",
		"workingTimeStart" : "/Date(1408428000000)/",
		"workingTimeEnd" : "/Date(1408460400000)/",
		"created" : "/Date(1408344724669)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"workType" : {
		"id" : "3d97423b-eaae-4c92-bfd1-9206391f54b1",
		"createdAt" : "/Date(1408429924670)/",
		"updatedAt" : "/Date(1408481524670)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "3dd9837a-558c-43ee-ad8e-dbb9c256f5f2",
			"createdAt" : "/Date(1408428724670)/",
			"updatedAt" : "/Date(1408467124670)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1408431124669)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"active" : true,
		"displayName" : "Software development"
	},
	"project" : {
		"id" : "2e4b021c-82a0-4d60-8189-a68505a404cf",
		"createdAt" : "/Date(1408430404671)/",
		"updatedAt" : "/Date(1408434724671)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "f2199a46-b27a-4ee2-aa9a-a214ea4647f4",
			"createdAt" : "/Date(1408427704671)/",
			"updatedAt" : "/Date(1408485124671)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1408431124669)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1408344724669)/",
		"ends" : "/Date(1408517524669)/",
		"timeBudget" : 86400000,
		"timeBudgetWarn" : 75,
		"priceBudget" : 100000.0,
		"priceBudgetWarn" : 80,
		"active" : true,
		"personal" : false,
		"owner" : {
			"id" : "4d0b87e1-2b20-45b5-9c3f-ad55991f30a4",
			"createdAt" : "/Date(1408429384671)/",
			"updatedAt" : "/Date(1408452724671)/",
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
			"birthdayRemind" : "/Date(1410300000000)/",
			"workingTimeStart" : "/Date(1408428000000)/",
			"workingTimeEnd" : "/Date(1408460400000)/",
			"created" : "/Date(1408344724670)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "c78b8c69-104f-4c8f-b36a-f54ed1470a6a",
			"createdAt" : "/Date(1408430344671)/",
			"updatedAt" : "/Date(1408495924671)/",
			"version" : 3,
			"externalSystem" : {
				"id" : "978a2e98-788b-410f-a1a1-d86c1d00a0b7",
				"createdAt" : "/Date(1408428124671)/",
				"updatedAt" : "/Date(1408510324671)/",
				"version" : 0,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1408431124669)/",
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
		"id" : "8d29df4d-3ea9-4d76-b0a7-d7e88a84c852",
		"createdAt" : "/Date(1408430764671)/",
		"updatedAt" : "/Date(1408485124671)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "18977fa0-5176-475e-a40e-90dacd2e9daf",
			"createdAt" : "/Date(1408429684671)/",
			"updatedAt" : "/Date(1408459924671)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-556",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
		"externalSyncedAt" : "/Date(1408431124669)/",
		"externalSynced" : true,
		"project" : {
			"id" : "2e4b021c-82a0-4d60-8189-a68505a404cf",
			"createdAt" : "/Date(1408430404671)/",
			"updatedAt" : "/Date(1408434724671)/",
			"version" : 2,
			"externalSystem" : {
				"id" : "f2199a46-b27a-4ee2-aa9a-a214ea4647f4",
				"createdAt" : "/Date(1408427704671)/",
				"updatedAt" : "/Date(1408485124671)/",
				"version" : 2,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1408431124669)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1408344724669)/",
			"ends" : "/Date(1408517524669)/",
			"timeBudget" : 86400000,
			"timeBudgetWarn" : 75,
			"priceBudget" : 100000.0,
			"priceBudgetWarn" : 80,
			"active" : true,
			"personal" : false,
			"owner" : {
				"id" : "4d0b87e1-2b20-45b5-9c3f-ad55991f30a4",
				"createdAt" : "/Date(1408429384671)/",
				"updatedAt" : "/Date(1408452724671)/",
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
				"birthdayRemind" : "/Date(1410300000000)/",
				"workingTimeStart" : "/Date(1408428000000)/",
				"workingTimeEnd" : "/Date(1408460400000)/",
				"created" : "/Date(1408344724670)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "c78b8c69-104f-4c8f-b36a-f54ed1470a6a",
				"createdAt" : "/Date(1408430344671)/",
				"updatedAt" : "/Date(1408495924671)/",
				"version" : 3,
				"externalSystem" : {
					"id" : "978a2e98-788b-410f-a1a1-d86c1d00a0b7",
					"createdAt" : "/Date(1408428124671)/",
					"updatedAt" : "/Date(1408510324671)/",
					"version" : 0,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1408431124669)/",
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
			"id" : "c1e36b41-3c07-4196-bc6e-387ecc681381",
			"createdAt" : "/Date(1408429864671)/",
			"updatedAt" : "/Date(1408452724671)/",
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
			"birthdayRemind" : "/Date(1410300000000)/",
			"workingTimeStart" : "/Date(1408428000000)/",
			"workingTimeEnd" : "/Date(1408460400000)/",
			"created" : "/Date(1408344724669)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "8ef718c2-6eac-4ee0-afab-5cd24d538849",
			"createdAt" : "/Date(1408429864671)/",
			"updatedAt" : "/Date(1408492324671)/",
			"version" : 5,
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
			"birthdayRemind" : "/Date(1409263200000)/",
			"workingTimeStart" : "/Date(1408428000000)/",
			"workingTimeEnd" : "/Date(1408460400000)/",
			"created" : "/Date(1408344724669)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"displayName" : "Article editation"
	},
	"client" : {
		"id" : "dfe3b50b-21e9-4bbb-8bbb-6f3ae9e08045",
		"createdAt" : "/Date(1408427884670)/",
		"updatedAt" : "/Date(1408474324670)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "c8b84433-f2e0-437a-a299-b032334aa273",
			"createdAt" : "/Date(1408430944670)/",
			"updatedAt" : "/Date(1408459924670)/",
			"version" : 4,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1408431124669)/",
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
