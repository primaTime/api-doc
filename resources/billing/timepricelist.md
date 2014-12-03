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
	"id" : "ee9666f6-bc4a-461c-be0e-d8da97db87c9",
	"createdAt" : "/Date(1417602779468)/",
	"updatedAt" : "/Date(1417684139468)/",
	"version" : 9,
	"price" : 100.0,
	"note" : "Price with a special discount for the best client.",
	"user" : {
		"id" : "c74438bc-afae-4d11-bf87-7bf3dd133bd8",
		"createdAt" : "/Date(1417601819469)/",
		"updatedAt" : "/Date(1417655339469)/",
		"version" : 3,
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
		"birthdayRemind" : "/Date(1418425200000)/",
		"workingTimeStart" : "/Date(1417590000000)/",
		"workingTimeEnd" : "/Date(1417622400000)/",
		"created" : "/Date(1417518539468)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"workType" : {
		"id" : "91c07394-8b0b-4859-bf72-ef50df213abb",
		"createdAt" : "/Date(1417601999470)/",
		"updatedAt" : "/Date(1417630139470)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "5604765b-69e6-4c7d-aaf1-7bb6b97034b2",
			"createdAt" : "/Date(1417603319470)/",
			"updatedAt" : "/Date(1417640939470)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1417604939467)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"displayName" : "Software development"
	},
	"project" : {
		"id" : "ff33af49-7804-4f89-80f1-71c78ee97dc2",
		"createdAt" : "/Date(1417601639469)/",
		"updatedAt" : "/Date(1417676939469)/",
		"version" : 4,
		"externalSystem" : {
			"id" : "8c7080ef-5402-4047-abf5-6214b5ef703c",
			"createdAt" : "/Date(1417601639469)/",
			"updatedAt" : "/Date(1417619339469)/",
			"version" : 5,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1417604939467)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1417518539467)/",
		"ends" : "/Date(1417691339467)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "0cae9a03-79a9-41e5-adbe-bd0be47c2ef1",
			"createdAt" : "/Date(1417602359469)/",
			"updatedAt" : "/Date(1417666139469)/",
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
			"birthdayRemind" : "/Date(1419462000000)/",
			"workingTimeStart" : "/Date(1417590000000)/",
			"workingTimeEnd" : "/Date(1417622400000)/",
			"created" : "/Date(1417518539468)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "d7f00868-4721-4331-89a9-5d1de5f073c9",
			"createdAt" : "/Date(1417601879469)/",
			"updatedAt" : "/Date(1417673339469)/",
			"version" : 2,
			"externalSystem" : {
				"id" : "60aa6eab-9271-4b02-a8a4-a0dea465d07f",
				"createdAt" : "/Date(1417603379469)/",
				"updatedAt" : "/Date(1417608539469)/",
				"version" : 2,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1417604939467)/",
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
		"id" : "567d4f65-b5e9-481b-bfc4-a3570b716aab",
		"createdAt" : "/Date(1417602179469)/",
		"updatedAt" : "/Date(1417648139469)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "217ddb8c-f490-491e-993d-7f1f16eed82e",
			"createdAt" : "/Date(1417603319470)/",
			"updatedAt" : "/Date(1417651739470)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-556",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
		"externalSyncedAt" : "/Date(1417604939467)/",
		"externalSynced" : true,
		"project" : {
			"id" : "ff33af49-7804-4f89-80f1-71c78ee97dc2",
			"createdAt" : "/Date(1417601639469)/",
			"updatedAt" : "/Date(1417676939469)/",
			"version" : 4,
			"externalSystem" : {
				"id" : "8c7080ef-5402-4047-abf5-6214b5ef703c",
				"createdAt" : "/Date(1417601639469)/",
				"updatedAt" : "/Date(1417619339469)/",
				"version" : 5,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1417604939467)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1417518539467)/",
			"ends" : "/Date(1417691339467)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : false,
			"owner" : {
				"id" : "0cae9a03-79a9-41e5-adbe-bd0be47c2ef1",
				"createdAt" : "/Date(1417602359469)/",
				"updatedAt" : "/Date(1417666139469)/",
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
				"birthdayRemind" : "/Date(1419462000000)/",
				"workingTimeStart" : "/Date(1417590000000)/",
				"workingTimeEnd" : "/Date(1417622400000)/",
				"created" : "/Date(1417518539468)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "d7f00868-4721-4331-89a9-5d1de5f073c9",
				"createdAt" : "/Date(1417601879469)/",
				"updatedAt" : "/Date(1417673339469)/",
				"version" : 2,
				"externalSystem" : {
					"id" : "60aa6eab-9271-4b02-a8a4-a0dea465d07f",
					"createdAt" : "/Date(1417603379469)/",
					"updatedAt" : "/Date(1417608539469)/",
					"version" : 2,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1417604939467)/",
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
			"id" : "b1efbf25-bada-4101-897e-70677ecabbad",
			"createdAt" : "/Date(1417604339469)/",
			"updatedAt" : "/Date(1417608539470)/",
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
			"birthdayRemind" : "/Date(1419462000000)/",
			"workingTimeStart" : "/Date(1417590000000)/",
			"workingTimeEnd" : "/Date(1417622400000)/",
			"created" : "/Date(1417518539468)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "c74438bc-afae-4d11-bf87-7bf3dd133bd8",
			"createdAt" : "/Date(1417601819469)/",
			"updatedAt" : "/Date(1417655339469)/",
			"version" : 3,
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
			"birthdayRemind" : "/Date(1418425200000)/",
			"workingTimeStart" : "/Date(1417590000000)/",
			"workingTimeEnd" : "/Date(1417622400000)/",
			"created" : "/Date(1417518539468)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"client" : {
		"id" : "b9aae5d3-f06f-4ea8-bf18-add570ae4e25",
		"createdAt" : "/Date(1417602359468)/",
		"updatedAt" : "/Date(1417687739468)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "ce72830d-f40d-4f15-81cb-6273ee9dd068",
			"createdAt" : "/Date(1417601519468)/",
			"updatedAt" : "/Date(1417626539468)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1417604939467)/",
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
