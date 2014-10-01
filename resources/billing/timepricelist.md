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
	"id" : "27fa39d9-3097-464b-a421-70722f00854a",
	"createdAt" : "/Date(1412168208056)/",
	"updatedAt" : "/Date(1412204208056)/",
	"version" : 8,
	"price" : 100.0,
	"note" : "Price with a special discount for the best client.",
	"user" : {
		"id" : "5ca31085-8b16-4327-bf0b-2a1dcde6427b",
		"createdAt" : "/Date(1412164788056)/",
		"updatedAt" : "/Date(1412197008056)/",
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
		"birthdayRemind" : "/Date(1412978400000)/",
		"workingTimeStart" : "/Date(1412143200000)/",
		"workingTimeEnd" : "/Date(1412175600000)/",
		"created" : "/Date(1412081808056)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"workType" : {
		"id" : "af2294a4-156a-452c-a4b9-e9c55b745d17",
		"createdAt" : "/Date(1412164908057)/",
		"updatedAt" : "/Date(1412247408057)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "6fa419b3-98e2-4ac6-bdc4-239ceb7bebfc",
			"createdAt" : "/Date(1412166648057)/",
			"updatedAt" : "/Date(1412225808057)/",
			"version" : 5,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1412168208056)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"active" : true,
		"displayName" : "Software development"
	},
	"project" : {
		"id" : "11ff85af-64a9-4c63-9732-a5399318a5f5",
		"createdAt" : "/Date(1412168028057)/",
		"updatedAt" : "/Date(1412175408057)/",
		"version" : 7,
		"externalSystem" : {
			"id" : "05909339-c995-43a5-a32b-9b0398220679",
			"createdAt" : "/Date(1412167728057)/",
			"updatedAt" : "/Date(1412229408057)/",
			"version" : 9,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1412168208056)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1412081808056)/",
		"ends" : "/Date(1412254608056)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"active" : true,
		"personal" : false,
		"owner" : {
			"id" : "1fea3193-9f0f-4f7c-9053-d4106de31169",
			"createdAt" : "/Date(1412166108057)/",
			"updatedAt" : "/Date(1412215008057)/",
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
			"birthdayRemind" : "/Date(1414015200000)/",
			"workingTimeStart" : "/Date(1412143200000)/",
			"workingTimeEnd" : "/Date(1412175600000)/",
			"created" : "/Date(1412081808056)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "d480881a-7bac-4b86-bf0a-4b5779e958c8",
			"createdAt" : "/Date(1412165088057)/",
			"updatedAt" : "/Date(1412171808057)/",
			"version" : 2,
			"externalSystem" : {
				"id" : "ee522e25-72bd-44d9-8e97-fc822f5ac960",
				"createdAt" : "/Date(1412166288057)/",
				"updatedAt" : "/Date(1412200608057)/",
				"version" : 4,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1412168208056)/",
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
		"id" : "274c868f-2e82-4812-952f-f4b16acd4499",
		"createdAt" : "/Date(1412166228056)/",
		"updatedAt" : "/Date(1412211408056)/",
		"version" : 7,
		"externalSystem" : {
			"id" : "57ec1f98-a00b-484f-902a-7db3f17eae8d",
			"createdAt" : "/Date(1412166588057)/",
			"updatedAt" : "/Date(1412240208057)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-556",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
		"externalSyncedAt" : "/Date(1412168208056)/",
		"externalSynced" : true,
		"project" : {
			"id" : "11ff85af-64a9-4c63-9732-a5399318a5f5",
			"createdAt" : "/Date(1412168028057)/",
			"updatedAt" : "/Date(1412175408057)/",
			"version" : 7,
			"externalSystem" : {
				"id" : "05909339-c995-43a5-a32b-9b0398220679",
				"createdAt" : "/Date(1412167728057)/",
				"updatedAt" : "/Date(1412229408057)/",
				"version" : 9,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1412168208056)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1412081808056)/",
			"ends" : "/Date(1412254608056)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"active" : true,
			"personal" : false,
			"owner" : {
				"id" : "1fea3193-9f0f-4f7c-9053-d4106de31169",
				"createdAt" : "/Date(1412166108057)/",
				"updatedAt" : "/Date(1412215008057)/",
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
				"birthdayRemind" : "/Date(1414015200000)/",
				"workingTimeStart" : "/Date(1412143200000)/",
				"workingTimeEnd" : "/Date(1412175600000)/",
				"created" : "/Date(1412081808056)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "d480881a-7bac-4b86-bf0a-4b5779e958c8",
				"createdAt" : "/Date(1412165088057)/",
				"updatedAt" : "/Date(1412171808057)/",
				"version" : 2,
				"externalSystem" : {
					"id" : "ee522e25-72bd-44d9-8e97-fc822f5ac960",
					"createdAt" : "/Date(1412166288057)/",
					"updatedAt" : "/Date(1412200608057)/",
					"version" : 4,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1412168208056)/",
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
			"id" : "2dbc68fb-ac44-448d-b4f7-8ffd923b8ce5",
			"createdAt" : "/Date(1412166708057)/",
			"updatedAt" : "/Date(1412175408057)/",
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
			"birthdayRemind" : "/Date(1414015200000)/",
			"workingTimeStart" : "/Date(1412143200000)/",
			"workingTimeEnd" : "/Date(1412175600000)/",
			"created" : "/Date(1412081808056)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "5ca31085-8b16-4327-bf0b-2a1dcde6427b",
			"createdAt" : "/Date(1412164788056)/",
			"updatedAt" : "/Date(1412197008056)/",
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
			"birthdayRemind" : "/Date(1412978400000)/",
			"workingTimeStart" : "/Date(1412143200000)/",
			"workingTimeEnd" : "/Date(1412175600000)/",
			"created" : "/Date(1412081808056)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"client" : {
		"id" : "b865f4e1-14d1-4b14-949c-b663bd04dae1",
		"createdAt" : "/Date(1412166828056)/",
		"updatedAt" : "/Date(1412243808056)/",
		"version" : 3,
		"externalSystem" : {
			"id" : "237432e9-7883-4dfa-9319-7d1aa842af95",
			"createdAt" : "/Date(1412165328056)/",
			"updatedAt" : "/Date(1412233008056)/",
			"version" : 9,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1412168208056)/",
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
