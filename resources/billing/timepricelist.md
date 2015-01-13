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
	"id" : "04f3d5e8-958d-4557-8317-04195420f59a",
	"createdAt" : "/Date(1421140297086)/",
	"updatedAt" : "/Date(1421202337086)/",
	"version" : 9,
	"price" : 100.0,
	"note" : "Price with a special discount for the best client.",
	"user" : {
		"id" : "e86e8261-437c-47f5-8dd7-5816e2f3747a",
		"createdAt" : "/Date(1421137957086)/",
		"updatedAt" : "/Date(1421180737086)/",
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
		"birthdayRemind" : "/Date(1421967600000)/",
		"workingTimeStart" : "/Date(1421132400000)/",
		"workingTimeEnd" : "/Date(1421164800000)/",
		"created" : "/Date(1421054737086)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"workType" : {
		"id" : "71b735d5-2d07-4b28-ab94-52caf6f603de",
		"createdAt" : "/Date(1421138677087)/",
		"updatedAt" : "/Date(1421141137087)/",
		"version" : 8,
		"externalSystem" : {
			"id" : "3152c2f5-866a-4a1c-9f73-8835e1b303c3",
			"createdAt" : "/Date(1421139697087)/",
			"updatedAt" : "/Date(1421213137087)/",
			"version" : 0,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1421141137085)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"displayName" : "Software development"
	},
	"project" : {
		"id" : "4de16687-3b84-4245-808d-29ea551c2a75",
		"createdAt" : "/Date(1421140177087)/",
		"updatedAt" : "/Date(1421209537087)/",
		"version" : 4,
		"externalSystem" : {
			"id" : "1bb4110c-8630-4598-bd6d-d4e9bdd0bc09",
			"createdAt" : "/Date(1421137957087)/",
			"updatedAt" : "/Date(1421198737087)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1421141137085)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1421054737085)/",
		"ends" : "/Date(1421227537085)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "43690151-3e53-435b-8429-6d6f9ed03c6e",
			"createdAt" : "/Date(1421138917087)/",
			"updatedAt" : "/Date(1421148337087)/",
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
			"birthdayRemind" : "/Date(1423004400000)/",
			"workingTimeStart" : "/Date(1421132400000)/",
			"workingTimeEnd" : "/Date(1421164800000)/",
			"created" : "/Date(1421054737086)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "87a396ac-2fa3-4c5e-a5f5-5588fd2f5f73",
			"createdAt" : "/Date(1421140477087)/",
			"updatedAt" : "/Date(1421177137087)/",
			"version" : 8,
			"externalSystem" : {
				"id" : "408bff2f-0219-4e79-87cc-575adb8f5220",
				"createdAt" : "/Date(1421138077087)/",
				"updatedAt" : "/Date(1421205937087)/",
				"version" : 2,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1421141137085)/",
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
		"id" : "beb57005-24c0-4ea4-a258-a488f278afc1",
		"createdAt" : "/Date(1421139457086)/",
		"updatedAt" : "/Date(1421184337086)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "95281987-45fa-4a7b-b523-b97fb69b1596",
			"createdAt" : "/Date(1421137597087)/",
			"updatedAt" : "/Date(1421198737087)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-556",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
		"externalSyncedAt" : "/Date(1421141137085)/",
		"externalSynced" : true,
		"project" : {
			"id" : "4de16687-3b84-4245-808d-29ea551c2a75",
			"createdAt" : "/Date(1421140177087)/",
			"updatedAt" : "/Date(1421209537087)/",
			"version" : 4,
			"externalSystem" : {
				"id" : "1bb4110c-8630-4598-bd6d-d4e9bdd0bc09",
				"createdAt" : "/Date(1421137957087)/",
				"updatedAt" : "/Date(1421198737087)/",
				"version" : 8,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1421141137085)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1421054737085)/",
			"ends" : "/Date(1421227537085)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : false,
			"owner" : {
				"id" : "43690151-3e53-435b-8429-6d6f9ed03c6e",
				"createdAt" : "/Date(1421138917087)/",
				"updatedAt" : "/Date(1421148337087)/",
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
				"birthdayRemind" : "/Date(1423004400000)/",
				"workingTimeStart" : "/Date(1421132400000)/",
				"workingTimeEnd" : "/Date(1421164800000)/",
				"created" : "/Date(1421054737086)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "87a396ac-2fa3-4c5e-a5f5-5588fd2f5f73",
				"createdAt" : "/Date(1421140477087)/",
				"updatedAt" : "/Date(1421177137087)/",
				"version" : 8,
				"externalSystem" : {
					"id" : "408bff2f-0219-4e79-87cc-575adb8f5220",
					"createdAt" : "/Date(1421138077087)/",
					"updatedAt" : "/Date(1421205937087)/",
					"version" : 2,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1421141137085)/",
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
			"id" : "a7e7e266-9dff-462d-9347-22bf66492398",
			"createdAt" : "/Date(1421140177087)/",
			"updatedAt" : "/Date(1421209537087)/",
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
			"birthdayRemind" : "/Date(1423004400000)/",
			"workingTimeStart" : "/Date(1421132400000)/",
			"workingTimeEnd" : "/Date(1421164800000)/",
			"created" : "/Date(1421054737085)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "e86e8261-437c-47f5-8dd7-5816e2f3747a",
			"createdAt" : "/Date(1421137957086)/",
			"updatedAt" : "/Date(1421180737086)/",
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
			"birthdayRemind" : "/Date(1421967600000)/",
			"workingTimeStart" : "/Date(1421132400000)/",
			"workingTimeEnd" : "/Date(1421164800000)/",
			"created" : "/Date(1421054737086)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"client" : {
		"id" : "950984a2-bd4b-4ef0-8041-fd4a2426e9e6",
		"createdAt" : "/Date(1421138557086)/",
		"updatedAt" : "/Date(1421141137086)/",
		"version" : 5,
		"externalSystem" : {
			"id" : "81c7caf1-69bd-4d99-839b-1b46289aad78",
			"createdAt" : "/Date(1421138377086)/",
			"updatedAt" : "/Date(1421169937086)/",
			"version" : 5,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1421141137085)/",
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
