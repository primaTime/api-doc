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
	"id" : "1da4d845-1e8b-4dc1-a78a-fd6d13a10645",
	"createdAt" : "/Date(1411998368196)/",
	"updatedAt" : "/Date(1412083688196)/",
	"version" : 1,
	"price" : 100.0,
	"note" : "Price with a special discount for the best client.",
	"user" : {
		"id" : "1dc4e4fe-f636-4ab5-a624-6fa36258698d",
		"createdAt" : "/Date(1411997828197)/",
		"updatedAt" : "/Date(1412047688197)/",
		"version" : 9,
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
		"birthdayRemind" : "/Date(1412805600000)/",
		"workingTimeStart" : "/Date(1411970400000)/",
		"workingTimeEnd" : "/Date(1412002800000)/",
		"created" : "/Date(1411914488196)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"workType" : {
		"id" : "e92f3e96-24a3-4e09-92cb-df2ec076b68a",
		"createdAt" : "/Date(1412000168197)/",
		"updatedAt" : "/Date(1412040488197)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "5ec4c24d-c4ea-4315-9f31-a62a89e3f4ff",
			"createdAt" : "/Date(1411998128197)/",
			"updatedAt" : "/Date(1412051288197)/",
			"version" : 7,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1412000888196)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"active" : true,
		"displayName" : "Software development"
	},
	"project" : {
		"id" : "ba5c0707-f153-4159-9b7a-b49b022f130e",
		"createdAt" : "/Date(1411997888197)/",
		"updatedAt" : "/Date(1412072888197)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "b5aeaa1e-ef91-4ac2-ac8a-9ecfe9070bb4",
			"createdAt" : "/Date(1411998668197)/",
			"updatedAt" : "/Date(1412018888197)/",
			"version" : 0,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1412000888196)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1411914488196)/",
		"ends" : "/Date(1412087288196)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"active" : true,
		"personal" : false,
		"owner" : {
			"id" : "96038899-fc7d-4e0c-9937-8eb19946fe85",
			"createdAt" : "/Date(1412000348197)/",
			"updatedAt" : "/Date(1412008088197)/",
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
			"birthdayRemind" : "/Date(1413842400000)/",
			"workingTimeStart" : "/Date(1411970400000)/",
			"workingTimeEnd" : "/Date(1412002800000)/",
			"created" : "/Date(1411914488196)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "eb4a4a89-85b6-4d93-b277-5a292aa6f033",
			"createdAt" : "/Date(1411997708197)/",
			"updatedAt" : "/Date(1412040488197)/",
			"version" : 9,
			"externalSystem" : {
				"id" : "2ac6013d-b940-4374-b8ba-8438f90feb47",
				"createdAt" : "/Date(1411998728197)/",
				"updatedAt" : "/Date(1412047688197)/",
				"version" : 1,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1412000888196)/",
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
		"id" : "9f37c77f-49a7-4441-bf4c-bbc576082882",
		"createdAt" : "/Date(1411997648197)/",
		"updatedAt" : "/Date(1412069288197)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "a87a8568-2917-4d88-878f-6d0285b32ad4",
			"createdAt" : "/Date(1412000108197)/",
			"updatedAt" : "/Date(1412018888197)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-556",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
		"externalSyncedAt" : "/Date(1412000888196)/",
		"externalSynced" : true,
		"project" : {
			"id" : "ba5c0707-f153-4159-9b7a-b49b022f130e",
			"createdAt" : "/Date(1411997888197)/",
			"updatedAt" : "/Date(1412072888197)/",
			"version" : 0,
			"externalSystem" : {
				"id" : "b5aeaa1e-ef91-4ac2-ac8a-9ecfe9070bb4",
				"createdAt" : "/Date(1411998668197)/",
				"updatedAt" : "/Date(1412018888197)/",
				"version" : 0,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1412000888196)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1411914488196)/",
			"ends" : "/Date(1412087288196)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"active" : true,
			"personal" : false,
			"owner" : {
				"id" : "96038899-fc7d-4e0c-9937-8eb19946fe85",
				"createdAt" : "/Date(1412000348197)/",
				"updatedAt" : "/Date(1412008088197)/",
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
				"birthdayRemind" : "/Date(1413842400000)/",
				"workingTimeStart" : "/Date(1411970400000)/",
				"workingTimeEnd" : "/Date(1412002800000)/",
				"created" : "/Date(1411914488196)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "eb4a4a89-85b6-4d93-b277-5a292aa6f033",
				"createdAt" : "/Date(1411997708197)/",
				"updatedAt" : "/Date(1412040488197)/",
				"version" : 9,
				"externalSystem" : {
					"id" : "2ac6013d-b940-4374-b8ba-8438f90feb47",
					"createdAt" : "/Date(1411998728197)/",
					"updatedAt" : "/Date(1412047688197)/",
					"version" : 1,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1412000888196)/",
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
			"id" : "a32a7c97-13e7-461e-a49f-7d312f672c77",
			"createdAt" : "/Date(1412000108197)/",
			"updatedAt" : "/Date(1412008088197)/",
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
			"birthdayRemind" : "/Date(1413842400000)/",
			"workingTimeStart" : "/Date(1411970400000)/",
			"workingTimeEnd" : "/Date(1412002800000)/",
			"created" : "/Date(1411914488196)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "1dc4e4fe-f636-4ab5-a624-6fa36258698d",
			"createdAt" : "/Date(1411997828197)/",
			"updatedAt" : "/Date(1412047688197)/",
			"version" : 9,
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
			"birthdayRemind" : "/Date(1412805600000)/",
			"workingTimeStart" : "/Date(1411970400000)/",
			"workingTimeEnd" : "/Date(1412002800000)/",
			"created" : "/Date(1411914488196)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"client" : {
		"id" : "404e7f35-abe2-426d-ba02-e3975c549373",
		"createdAt" : "/Date(1411998248196)/",
		"updatedAt" : "/Date(1412072888196)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "2b8a62fa-d28f-4a0b-9034-7c6e97b26d80",
			"createdAt" : "/Date(1411998608196)/",
			"updatedAt" : "/Date(1412054888196)/",
			"version" : 0,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1412000888196)/",
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
