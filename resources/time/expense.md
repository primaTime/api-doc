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
	"id" : "f5547735-e1c2-4bc6-915e-51ac46dab495",
	"createdAt" : "/Date(1650450534221)/",
	"updatedAt" : "/Date(1650532254221)/",
	"version" : 0,
	"expenseType" : {
		"id" : "e889a5ba-c500-485e-9852-61fe01f16b74",
		"createdAt" : "/Date(1650451134221)/",
		"updatedAt" : "/Date(1650517854221)/",
		"version" : 3,
		"name" : "Gas",
		"hasQuantity" : true,
		"unitPrice" : 125.0,
		"unitName" : "km",
		"isActive" : true,
		"isBillable" : true,
		"displayName" : "Gas"
	},
	"paymentDate" : 1650453054220,
	"client" : {
		"id" : "3070f55c-628a-453c-9484-fe17a3888279",
		"createdAt" : "/Date(1650449694221)/",
		"updatedAt" : "/Date(1650499854221)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "18d8c9fa-bfc2-45fe-8b50-ca590a649016",
			"createdAt" : "/Date(1650452274221)/",
			"updatedAt" : "/Date(1650467454221)/",
			"version" : 5,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1650453054221)/",
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
		"consentTill" : "/Date(1681989054220)/",
		"displayName" : "Example Ltd."
	},
	"bill" : {
		"id" : "fe387e6c-cca4-4e09-94e3-90e8fb8cb416",
		"createdAt" : "/Date(1650450534221)/",
		"updatedAt" : "/Date(1650489054221)/",
		"version" : 7,
		"docNumber" : "2013-01",
		"docDate" : "/Date(1650453054221)/",
		"vatDate" : "/Date(1650453054221)/",
		"dueDate" : "/Date(1651662654221)/",
		"lastPaymentDate" : "/Date(1651057854221)/",
		"description" : "CMS billing",
		"notes" : "",
		"vatText" : "All prices are without a VAT.",
		"header" : "",
		"footer" : "",
		"itemsPrice" : 2500.0,
		"totalPrice" : 7500.0,
		"client" : {
			"id" : "f7cdf0e7-8770-4f05-9049-5ffa37d6e2e9",
			"createdAt" : "/Date(1650449874221)/",
			"updatedAt" : "/Date(1650503454221)/",
			"version" : 6,
			"externalSystem" : {
				"id" : "1e9f229d-4ae9-4d52-b52a-c8da1000558a",
				"createdAt" : "/Date(1650450174221)/",
				"updatedAt" : "/Date(1650510654221)/",
				"version" : 5,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1650453054221)/",
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
			"consentTill" : "/Date(1681989054221)/",
			"displayName" : "Example Ltd."
		},
		"contactPerson" : {
			"id" : "4b3284f6-b363-4ff1-80a8-637ee3665992",
			"createdAt" : "/Date(1650451014221)/",
			"updatedAt" : "/Date(1650478254221)/",
			"version" : 7,
			"firstName" : "Pedro",
			"lastName" : "Examplo",
			"email" : "pedro@example.com",
			"phone" : "66 234 555 678",
			"jobTitle" : "deputy director",
			"client" : {
				"id" : "0e4ff76f-d78b-44b6-b898-cbf3452b9784",
				"createdAt" : "/Date(1650452334221)/",
				"updatedAt" : "/Date(1650478254221)/",
				"version" : 2,
				"externalSystem" : {
					"id" : "61be7ecc-b1e3-43df-95fa-15d75974978d",
					"createdAt" : "/Date(1650452454221)/",
					"updatedAt" : "/Date(1650521454221)/",
					"version" : 4,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1650453054221)/",
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
				"consentTill" : "/Date(1681989054221)/",
				"displayName" : "Example Ltd."
			},
			"displayName" : "Examplo Pedro"
		},
		"approved" : true,
		"items" : [
			{
				"id" : "e89d7ea3-8fd4-4c36-a0f2-6b741cfc6526",
				"createdAt" : "/Date(1650452814221)/",
				"updatedAt" : "/Date(1650474654221)/",
				"version" : 3,
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
				"id" : "968bbd57-5e0c-41b9-9987-9021a3046eae",
				"createdAt" : "/Date(1650453054221)/",
				"updatedAt" : "/Date(1650489054221)/",
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
			"id" : "7fd714f2-2944-4eb2-a371-1766d4da31a9",
			"createdAt" : "/Date(1650449994221)/",
			"updatedAt" : "/Date(1650532254221)/",
			"version" : 4,
			"firstName" : "John",
			"lastName" : "Doe",
			"nickName" : "Johny D.",
			"email" : "oywz3tomomivzzr@testdata.com",
			"phone" : "55 234 555 678",
			"position" : "Senior developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "yyyy-MM-dd",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "pt_BR",
			"password" : "csf1_bvyiqjeudg91n7k",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1652306400000)/",
			"workingTimeStart" : "/Date(1650434400000)/",
			"workingTimeEnd" : "/Date(1650466800000)/",
			"created" : "/Date(1650366654221)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"groupAttributes" : "[\"project\"]",
		"draft" : false,
		"vatMode" : "DECLARE_VAT",
		"vats" : [
			{
				"id" : "b507ca29-c49d-43d1-a2e5-4984a82d3dbd",
				"createdAt" : "/Date(1650450174221)/",
				"updatedAt" : "/Date(1650456654221)/",
				"version" : 2,
				"vatRate" : 20.0,
				"vatPrice" : 5000.0,
				"displayName" : "20.0"
			}
		],
		"displayName" : "2013-01"
	},
	"user" : {
		"id" : "06821b47-7da1-490b-8d73-d29eb38b3b1f",
		"createdAt" : "/Date(1650450714221)/",
		"updatedAt" : "/Date(1650485454221)/",
		"version" : 2,
		"firstName" : "John",
		"lastName" : "Doe",
		"nickName" : "Johny D.",
		"email" : "pfvlt5lye03v34d@testdata.com",
		"phone" : "55 234 555 678",
		"position" : "Senior developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "yyyy-MM-dd",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "pt_BR",
		"password" : "ba9cchurquk70lsphgpq",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1652306400000)/",
		"workingTimeStart" : "/Date(1650434400000)/",
		"workingTimeEnd" : "/Date(1650466800000)/",
		"created" : "/Date(1650366654221)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"description" : "Travel expenses",
	"quantity" : 1.0,
	"project" : {
		"id" : "a2ed0793-501d-4869-a7ef-cc70c29d1621",
		"createdAt" : "/Date(1650451434221)/",
		"updatedAt" : "/Date(1650485454221)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "ecffdbc2-554d-4423-85b8-5e65c87d599f",
			"createdAt" : "/Date(1650449874221)/",
			"updatedAt" : "/Date(1650503454221)/",
			"version" : 7,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1650453054221)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1650366654221)/",
		"ends" : "/Date(1650539454221)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "f4223e27-7e62-4cca-9c2c-f538e46e2497",
			"createdAt" : "/Date(1650452934221)/",
			"updatedAt" : "/Date(1650517854221)/",
			"version" : 1,
			"firstName" : "John",
			"lastName" : "Doe",
			"nickName" : "Johny D.",
			"email" : "mrvym4v13xk6x6i@testdata.com",
			"phone" : "55 234 555 678",
			"position" : "Senior developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "yyyy-MM-dd",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "pt_BR",
			"password" : "rtki52lhted45t4pggd4",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1652306400000)/",
			"workingTimeStart" : "/Date(1650434400000)/",
			"workingTimeEnd" : "/Date(1650466800000)/",
			"created" : "/Date(1650366654221)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "a7ded58c-ac25-40ca-b981-386cc6e1d73b",
			"createdAt" : "/Date(1650451014221)/",
			"updatedAt" : "/Date(1650456654221)/",
			"version" : 7,
			"externalSystem" : {
				"id" : "84f27ddd-43a6-4119-b9b5-cc7a05b2c992",
				"createdAt" : "/Date(1650451014221)/",
				"updatedAt" : "/Date(1650460254221)/",
				"version" : 5,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1650453054221)/",
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
			"consentTill" : "/Date(1681989054221)/",
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
