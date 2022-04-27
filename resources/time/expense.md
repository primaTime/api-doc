Expense
==

## URL

	https://api.primaerp.com/v1/time/expenses

## Properties

| Name        | Type        | Access     | Required | Description                                                                                         |
|-------------|-------------|------------|----------|-----------------------------------------------------------------------------------------------------|
| bill        | Bill        | read write | no       | Bill created for the expense.                                                                       |
| client      | Client      | read write | YES      | Client associated with the expense.                                                                 |
| createdAt   | Date        | read only  | no       | Date of creation.                                                                                   |
| description | String      | read write | no       | Expense description.                                                                                |
| displayName | String      | read only  | no       | Describes an object in human readable form.                                                         |
| expenseType | ExpenseType | read write | YES      | Expense type template.                                                                              |
| id          | String      | read write | no       | Unique object identifier.                                                                           |
| isApproved  | Boolean     | read write | YES      | Whether the expense was approved.                                                                   |
| isBillable  | Boolean     | read write | YES      | Whether the expense is billable.                                                                    |
| paymentDate | Date        | read write | YES      | When was the expense paid.                                                                          |
| project     | Project     | read write | no       | A project associated with this expense.                                                             |
| quantity    | Double      | read write | YES      | How many units was paid for.                                                                        |
| trashItem   | TrashItem   | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| unitPrice   | Double      | read write | YES      | Price per unit.                                                                                     |
| updatedAt   | Date        | read only  | no       | Last modified date.                                                                                 |
| user        | User        | read write | YES      | User who created the expense.                                                                       |
| version     | Long        | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Expense",
	"path" : "/v1/time/expenses",
	"fields" : [
		{
			"type" : "Bill",
			"path" : "/v1/billing/bills",
			"name" : "bill",
			"description" : "Bill created for the expense.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Client",
			"path" : "/v1/time/clients",
			"name" : "client",
			"description" : "Client associated with the expense.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "Date",
			"name" : "createdAt",
			"description" : "Date of creation.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "String",
			"name" : "description",
			"description" : "Expense description.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "displayName",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "ExpenseType",
			"path" : "/v1/time/expenseTypes",
			"name" : "expenseType",
			"description" : "Expense type template.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
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
			"type" : "Boolean",
			"name" : "isApproved",
			"description" : "Whether the expense was approved.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "Boolean",
			"name" : "isBillable",
			"description" : "Whether the expense is billable.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "Date",
			"name" : "paymentDate",
			"description" : "When was the expense paid.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "Project",
			"path" : "/v1/time/projects",
			"name" : "project",
			"description" : "A project associated with this expense.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Double",
			"name" : "quantity",
			"description" : "How many units was paid for.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "TrashItem",
			"path" : "/v1/trash",
			"name" : "trashItem",
			"description" : "Informs whether an object is in the trash. An object is in the trash if a trash item was specified.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Double",
			"name" : "unitPrice",
			"description" : "Price per unit.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
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
			"description" : "User who created the expense.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "Long",
			"name" : "version",
			"description" : "Object version number.",
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
	"id" : "27faaee8-7292-4c82-8ffe-63132dfd7894",
	"createdAt" : "/Date(1651048527072)/",
	"updatedAt" : "/Date(1651064907072)/",
	"version" : 7,
	"expenseType" : {
		"id" : "98296b5d-1165-43bf-8ea1-8f44b01726ce",
		"createdAt" : "/Date(1651049787073)/",
		"updatedAt" : "/Date(1651082907073)/",
		"version" : 7,
		"name" : "Gas",
		"unitPrice" : 125.0,
		"unitName" : "km",
		"isActive" : true,
		"isBillable" : true,
		"displayName" : "Gas"
	},
	"paymentDate" : 1651050507072,
	"client" : {
		"id" : "2be680ef-fe88-4350-9a58-fbe9b3727e17",
		"createdAt" : "/Date(1651048107072)/",
		"updatedAt" : "/Date(1651111707072)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "d7f54c1e-686c-40b2-8615-c96eab57adcb",
			"createdAt" : "/Date(1651048767072)/",
			"updatedAt" : "/Date(1651108107072)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1651050507072)/",
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
		"consentTill" : "/Date(1682586507072)/",
		"displayName" : "Example Ltd."
	},
	"bill" : {
		"id" : "4a7b5be2-e80d-4930-a567-91593f9934d3",
		"createdAt" : "/Date(1651049547073)/",
		"updatedAt" : "/Date(1651050507073)/",
		"version" : 1,
		"docNumber" : "2013-01",
		"docDate" : "/Date(1651050507072)/",
		"vatDate" : "/Date(1651050507072)/",
		"dueDate" : "/Date(1652260107072)/",
		"lastPaymentDate" : "/Date(1651655307072)/",
		"description" : "CMS billing",
		"notes" : "",
		"vatText" : "All prices are without a VAT.",
		"header" : "",
		"footer" : "",
		"itemsPrice" : 2500.0,
		"totalPrice" : 7500.0,
		"client" : {
			"id" : "7e8243e6-5707-4804-bd04-30e3ce28ba08",
			"createdAt" : "/Date(1651049367073)/",
			"updatedAt" : "/Date(1651100907073)/",
			"version" : 2,
			"externalSystem" : {
				"id" : "e2386275-670b-4457-88cb-e83278a18463",
				"createdAt" : "/Date(1651049427073)/",
				"updatedAt" : "/Date(1651079307073)/",
				"version" : 9,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1651050507072)/",
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
			"consentTill" : "/Date(1682586507072)/",
			"displayName" : "Example Ltd."
		},
		"contactPerson" : {
			"id" : "e94ff8e3-494c-4b47-a794-12cc2e393148",
			"createdAt" : "/Date(1651050147073)/",
			"updatedAt" : "/Date(1651097307073)/",
			"version" : 5,
			"firstName" : "Pedro",
			"lastName" : "Examplo",
			"email" : "pedro@example.com",
			"phone" : "66 234 555 678",
			"jobTitle" : "deputy director",
			"client" : {
				"id" : "fcd97a2f-ee67-4c56-aee0-17f5c299208d",
				"createdAt" : "/Date(1651047507073)/",
				"updatedAt" : "/Date(1651093707073)/",
				"version" : 7,
				"externalSystem" : {
					"id" : "2afd7140-2fa1-40dc-8f7c-e517318a91b8",
					"createdAt" : "/Date(1651049487073)/",
					"updatedAt" : "/Date(1651090107073)/",
					"version" : 6,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1651050507072)/",
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
				"consentTill" : "/Date(1682586507072)/",
				"displayName" : "Example Ltd."
			},
			"displayName" : "Examplo Pedro"
		},
		"approved" : true,
		"items" : [
			{
				"id" : "f0c1b38b-26f1-4183-a11d-b3964dcaea1b",
				"createdAt" : "/Date(1651049367073)/",
				"updatedAt" : "/Date(1651050507073)/",
				"version" : 1,
				"attributes" : "{\"project\":\"name\"}",
				"itemGroup" : "Content management system",
				"docIndex" : 0,
				"quantity" : 3600000.0,
				"price" : 500.0,
				"unitPrice" : 500.0,
				"unit" : "hours",
				"displayName" : "#0"
			},
			{
				"id" : "bf8f4974-b8f5-4ab4-a001-b1b9d8e7f57a",
				"createdAt" : "/Date(1651048527073)/",
				"updatedAt" : "/Date(1651079307073)/",
				"version" : 1,
				"attributes" : "{\"project\":\"name\"}",
				"itemGroup" : "Content management system",
				"docIndex" : 1,
				"quantity" : 3600000.0,
				"price" : 2000.0,
				"unitPrice" : 1000.0,
				"unit" : "hours",
				"displayName" : "#1"
			}
		],
		"author" : {
			"id" : "25300566-32be-4d5d-a1ba-fde837b34727",
			"createdAt" : "/Date(1651049067073)/",
			"updatedAt" : "/Date(1651133307073)/",
			"version" : 6,
			"firstName" : "John",
			"lastName" : "Doe",
			"nickName" : "Johny D.",
			"email" : "8lmzhqb4j5mgpvf@testdata.com",
			"phone" : "55 234 555 678",
			"position" : "Senior developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "yyyy-MM-dd",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "pt_BR",
			"password" : "i1283ahx324q9_j5k3ge",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1652911200000)/",
			"workingTimeStart" : "/Date(1651039200000)/",
			"workingTimeEnd" : "/Date(1651071600000)/",
			"created" : "/Date(1650964107072)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"groupAttributes" : "[\"project\"]",
		"draft" : false,
		"vatMode" : "DECLARE_VAT",
		"vats" : [
			{
				"id" : "c60cbb7c-1481-4c68-a774-9b27436f2e06",
				"createdAt" : "/Date(1651050387073)/",
				"updatedAt" : "/Date(1651090107073)/",
				"version" : 7,
				"vatRate" : 20.0,
				"vatPrice" : 5000.0,
				"displayName" : "20.0"
			}
		],
		"displayName" : "2013-01"
	},
	"user" : {
		"id" : "d1cdde64-4657-4395-97b1-35bc443e185c",
		"createdAt" : "/Date(1651048887072)/",
		"updatedAt" : "/Date(1651050507072)/",
		"version" : 6,
		"firstName" : "John",
		"lastName" : "Doe",
		"nickName" : "Johny D.",
		"email" : "hwvgc_l99197311@testdata.com",
		"phone" : "55 234 555 678",
		"position" : "Senior developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "yyyy-MM-dd",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "pt_BR",
		"password" : "syvy526fff_pdv0zjhvy",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1652911200000)/",
		"workingTimeStart" : "/Date(1651039200000)/",
		"workingTimeEnd" : "/Date(1651071600000)/",
		"created" : "/Date(1650964107072)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"description" : "Travel expenses",
	"quantity" : 1.0,
	"project" : {
		"id" : "036f92ff-9ec1-4048-a433-fa2185ba1950",
		"createdAt" : "/Date(1651048047072)/",
		"updatedAt" : "/Date(1651090107072)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "620ac27d-8df7-492a-b422-25f9b453f561",
			"createdAt" : "/Date(1651047207072)/",
			"updatedAt" : "/Date(1651072107072)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1651050507072)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1650964107072)/",
		"ends" : "/Date(1651136907072)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "2264ae0d-b66b-478b-948b-7d44baff84a0",
			"createdAt" : "/Date(1651048887072)/",
			"updatedAt" : "/Date(1651086507072)/",
			"version" : 7,
			"firstName" : "John",
			"lastName" : "Doe",
			"nickName" : "Johny D.",
			"email" : "_3caj1dbw9_ac80@testdata.com",
			"phone" : "55 234 555 678",
			"position" : "Senior developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "yyyy-MM-dd",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "pt_BR",
			"password" : "qjfgw4ulsr4rblavcck7",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1652911200000)/",
			"workingTimeStart" : "/Date(1651039200000)/",
			"workingTimeEnd" : "/Date(1651071600000)/",
			"created" : "/Date(1650964107072)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "410cde00-1802-4f79-a1e0-a2e18a965edb",
			"createdAt" : "/Date(1651050387072)/",
			"updatedAt" : "/Date(1651122507072)/",
			"version" : 5,
			"externalSystem" : {
				"id" : "a6165ebc-77ac-4b0d-9fbd-c1b5ac7a7298",
				"createdAt" : "/Date(1651048707072)/",
				"updatedAt" : "/Date(1651068507072)/",
				"version" : 0,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1651050507072)/",
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
			"consentTill" : "/Date(1682586507072)/",
			"displayName" : "Example Ltd."
		},
		"billable" : true,
		"autoMembership" : false,
		"membersCount" : 1,
		"tasksCount" : 3,
		"timeRecordsCount" : 2,
		"displayName" : "Content management system"
	},
	"unitPrice" : 125.0,
	"isApproved" : false,
	"isBillable" : true,
	"displayName" : "Travel expenses"
}
```
