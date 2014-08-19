Bill
==

## URL

	http://api.primaerp.com/v1/billing/billitems/{id}/bills

## Properties

| Name            | Type          | Access     | Description                                                                                         |
|-----------------|---------------|------------|-----------------------------------------------------------------------------------------------------|
| approved        | Boolean       | read write | Approval status by client.                                                                          |
| author          | User          | read write | Issuer of the bill.                                                                                 |
| client          | Client        | read write | Provides info about client for which is bill created.                                               |
| contactPerson   | ContactPerson | read write | Person for whom is the bill created.                                                                |
| createdAt       | Date          | read only  | Date of creation.                                                                                   |
| description     | String        | read write | Description of document.                                                                            |
| displayName     | String        | read only  | Describes an object in human readable form.                                                         |
| docDate         | Date          | read write | Date of document issuance.                                                                          |
| docNumber       | String        | read only  | Document number. Generated automatically.                                                           |
| footer          | String        | read write | Footer of document.                                                                                 |
| groupAttributes | String        | read write | Group attributes.                                                                                   |
| header          | String        | read write | Header of document.                                                                                 |
| id              | String        | read write | Unique object identifier.                                                                           |
| items           | List          | read write | List of bill items.                                                                                 |
| notes           | String        | read write | Additional notes.                                                                                   |
| totalPrice      | Double        | read write | Summary of item prices. Generated automatically.                                                    |
| trashItem       | TrashItem     | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt       | Date          | read only  | Last modified date.                                                                                 |
| vatDate         | Date          | read write | Date of taxable supply.                                                                             |
| version         | Long          | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Bill",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "approved",
			"description" : "Approval status by client.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "User",
			"name" : "author",
			"description" : "Issuer of the bill.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Client",
			"name" : "client",
			"description" : "Provides info about client for which is bill created.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "ContactPerson",
			"name" : "contactPerson",
			"description" : "Person for whom is the bill created.",
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
			"name" : "description",
			"description" : "Description of document.",
			"access" : "READ_WRITE",
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
			"type" : "Date",
			"name" : "docDate",
			"description" : "Date of document issuance.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "docNumber",
			"description" : "Document number. Generated automatically.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "footer",
			"description" : "Footer of document.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "groupAttributes",
			"description" : "Group attributes.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "header",
			"description" : "Header of document.",
			"access" : "READ_WRITE",
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
			"type" : "List",
			"name" : "items",
			"description" : "List of bill items.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "notes",
			"description" : "Additional notes.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Double",
			"name" : "totalPrice",
			"description" : "Summary of item prices. Generated automatically.",
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
			"type" : "Date",
			"name" : "vatDate",
			"description" : "Date of taxable supply.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Long",
			"name" : "version",
			"description" : "Object version number.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		}
	],
	"cascades" : [
		{
			"cascadeType" : "PERSIST",
			"objectTypes" : [
				"BillItem"
			]
		},
		{
			"cascadeType" : "MERGE",
			"objectTypes" : [
				"BillItem"
			]
		},
		{
			"cascadeType" : "REMOVE",
			"objectTypes" : [
				"TrashItem",
				"BillItem"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "abc17671-e7dc-4d56-81f8-24ee6eaebc76",
	"createdAt" : "/Date(1408430525852)/",
	"updatedAt" : "/Date(1408481525852)/",
	"version" : 2,
	"docNumber" : "2013-01",
	"docDate" : "/Date(1408431125851)/",
	"vatDate" : "/Date(1408431125851)/",
	"description" : "CMS billing",
	"notes" : "",
	"header" : "",
	"footer" : "",
	"totalPrice" : 1500.0,
	"client" : {
		"id" : "e8c98e04-15a3-4368-a93e-fddc2cf03cc6",
		"createdAt" : "/Date(1408427705853)/",
		"updatedAt" : "/Date(1408441925853)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "697d8260-b0b7-4967-a540-247972eaa1d1",
			"createdAt" : "/Date(1408430765853)/",
			"updatedAt" : "/Date(1408510325853)/",
			"version" : 0,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1408431125851)/",
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
	"contactPerson" : {
		"id" : "a81786ba-db9f-4607-9158-8b701feb7e23",
		"createdAt" : "/Date(1408429385853)/",
		"updatedAt" : "/Date(1408485125853)/",
		"version" : 2,
		"firstName" : "Pedro",
		"lastName" : "Examplo",
		"email" : "pedro@example.com",
		"phone" : "66 234 555 678",
		"jobTitle" : "deputy director",
		"client" : {
			"id" : "e8c98e04-15a3-4368-a93e-fddc2cf03cc6",
			"createdAt" : "/Date(1408427705853)/",
			"updatedAt" : "/Date(1408441925853)/",
			"version" : 0,
			"externalSystem" : {
				"id" : "697d8260-b0b7-4967-a540-247972eaa1d1",
				"createdAt" : "/Date(1408430765853)/",
				"updatedAt" : "/Date(1408510325853)/",
				"version" : 0,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1408431125851)/",
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
		"displayName" : "Examplo Pedro"
	},
	"approved" : true,
	"items" : [
		{
			"id" : "e20ed728-8cb1-4f69-9cff-799f44b81dd1",
			"createdAt" : "/Date(1408429265852)/",
			"updatedAt" : "/Date(1408474325852)/",
			"version" : 6,
			"attributes" : "{\"project\":\"name\"}",
			"itemGroup" : "Content management system",
			"docIndex" : 0,
			"duration" : 3600000,
			"price" : 500.0,
			"displayName" : "#0"
		},
		{
			"id" : "3fd1c1f4-be43-4536-870b-5504faff86f6",
			"createdAt" : "/Date(1408427825853)/",
			"updatedAt" : "/Date(1408495925853)/",
			"version" : 2,
			"attributes" : "{\"project\":\"name\"}",
			"itemGroup" : "Content management system",
			"docIndex" : 1,
			"duration" : 7200000,
			"price" : 1000.0,
			"displayName" : "#1"
		}
	],
	"author" : {
		"id" : "1f198984-cacc-4757-913e-efb4a39df37a",
		"createdAt" : "/Date(1408429025852)/",
		"updatedAt" : "/Date(1408481525852)/",
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
		"birthdayRemind" : "/Date(1410300000000)/",
		"workingTimeStart" : "/Date(1408428000000)/",
		"workingTimeEnd" : "/Date(1408460400000)/",
		"created" : "/Date(1408344725851)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"groupAttributes" : "[\"project\"]",
	"displayName" : "2013-01"
}
```
