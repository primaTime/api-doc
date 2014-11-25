Bill
==

## URL

	https://api.primaerp.com/v1/billing/bills

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
| dueDate         | Date          | read write | Date of maturity.                                                                                   |
| footer          | String        | read write | Footer of document.                                                                                 |
| groupAttributes | String        | read write | Group attributes.                                                                                   |
| header          | String        | read write | Header of document.                                                                                 |
| id              | String        | read write | Unique object identifier.                                                                           |
| items           | List          | read write | List of bill items.                                                                                 |
| lastPaymentDate | Date          | read write | Date of the last payment.                                                                           |
| notes           | String        | read write | Additional notes.                                                                                   |
| totalPrice      | Double        | read write | Summary of item prices. Generated automatically.                                                    |
| trashItem       | TrashItem     | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt       | Date          | read only  | Last modified date.                                                                                 |
| vatDate         | Date          | read write | Date of taxable supply.                                                                             |
| vatText         | String        | read write | Info about a VAT. E.g. 'All prices are without a VAT.'                                              |
| version         | Long          | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Bill",
	"path" : "/v1/billing/bills",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "approved",
			"description" : "Approval status by client.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "User",
			"path" : "/v1/users",
			"name" : "author",
			"description" : "Issuer of the bill.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Client",
			"path" : "/v1/time/clients",
			"name" : "client",
			"description" : "Provides info about client for which is bill created.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "ContactPerson",
			"path" : "/v1/time/clients/{id}/contacts",
			"name" : "contactPerson",
			"description" : "Person for whom is the bill created.",
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
			"name" : "description",
			"description" : "Description of document.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "displayName",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "Date",
			"name" : "docDate",
			"description" : "Date of document issuance.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "docNumber",
			"description" : "Document number. Generated automatically.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "Date",
			"name" : "dueDate",
			"description" : "Date of maturity.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "footer",
			"description" : "Footer of document.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "groupAttributes",
			"description" : "Group attributes.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "header",
			"description" : "Header of document.",
			"access" : "READ_WRITE"
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
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "lastPaymentDate",
			"description" : "Date of the last payment.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "notes",
			"description" : "Additional notes.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Double",
			"name" : "totalPrice",
			"description" : "Summary of item prices. Generated automatically.",
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
			"type" : "Date",
			"name" : "vatDate",
			"description" : "Date of taxable supply.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "vatText",
			"description" : "Info about a VAT. E.g. 'All prices are without a VAT.'",
			"access" : "READ_WRITE"
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
				"TrashItem",
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
			"cascadeType" : "PERSIST",
			"objectTypes" : [
				"BillItem"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "72ef6767-3b79-4b4e-b3da-47d77914e309",
	"createdAt" : "/Date(1416915477217)/",
	"updatedAt" : "/Date(1416981117217)/",
	"version" : 6,
	"docNumber" : "2013-01",
	"docDate" : "/Date(1416916317216)/",
	"vatDate" : "/Date(1416916317216)/",
	"dueDate" : "/Date(1417521117216)/",
	"lastPaymentDate" : "/Date(1417521117216)/",
	"description" : "CMS billing",
	"notes" : "",
	"vatText" : "All prices are without a VAT.",
	"header" : "",
	"footer" : "",
	"totalPrice" : 1500.0,
	"client" : {
		"id" : "3a80b997-c174-4483-9846-2332e751eaee",
		"createdAt" : "/Date(1416914877217)/",
		"updatedAt" : "/Date(1416927117217)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "f93f50f4-38af-4e5a-a40f-412c371f3ee2",
			"createdAt" : "/Date(1416915837217)/",
			"updatedAt" : "/Date(1416955917217)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1416916317216)/",
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
		"id" : "176249f2-777a-4063-81aa-82075c0b00a7",
		"createdAt" : "/Date(1416913137217)/",
		"updatedAt" : "/Date(1416919917217)/",
		"version" : 0,
		"firstName" : "Pedro",
		"lastName" : "Examplo",
		"email" : "pedro@example.com",
		"phone" : "66 234 555 678",
		"jobTitle" : "deputy director",
		"client" : {
			"id" : "3a80b997-c174-4483-9846-2332e751eaee",
			"createdAt" : "/Date(1416914877217)/",
			"updatedAt" : "/Date(1416927117217)/",
			"version" : 1,
			"externalSystem" : {
				"id" : "f93f50f4-38af-4e5a-a40f-412c371f3ee2",
				"createdAt" : "/Date(1416915837217)/",
				"updatedAt" : "/Date(1416955917217)/",
				"version" : 6,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1416916317216)/",
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
			"id" : "9899f24a-2acc-4b93-9d9a-d151020f53e2",
			"createdAt" : "/Date(1416915117217)/",
			"updatedAt" : "/Date(1416981117217)/",
			"version" : 7,
			"attributes" : "{\"project\":\"name\"}",
			"itemGroup" : "Content management system",
			"docIndex" : 0,
			"duration" : 3600000,
			"price" : 500.0,
			"displayName" : "#0"
		},
		{
			"id" : "6f54403e-ced0-45fe-8615-a3de2c224f08",
			"createdAt" : "/Date(1416914217217)/",
			"updatedAt" : "/Date(1416930717217)/",
			"version" : 1,
			"attributes" : "{\"project\":\"name\"}",
			"itemGroup" : "Content management system",
			"docIndex" : 1,
			"duration" : 7200000,
			"price" : 1000.0,
			"displayName" : "#1"
		}
	],
	"author" : {
		"id" : "c79ca863-e60f-46d7-b187-9c333fab013b",
		"createdAt" : "/Date(1416913497217)/",
		"updatedAt" : "/Date(1416923517217)/",
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
		"birthdayRemind" : "/Date(1418770800000)/",
		"workingTimeStart" : "/Date(1416898800000)/",
		"workingTimeEnd" : "/Date(1416931200000)/",
		"created" : "/Date(1416829917216)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"groupAttributes" : "[\"project\"]",
	"displayName" : "2013-01"
}
```
