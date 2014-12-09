Bill
==

## URL

	https://api.primaerp.com/v1/billing/bills

## Properties

| Name            | Type          | Access     | Required                                                               | Description                                                                                         |
|-----------------|---------------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| approved        | Boolean       | read write | no                                                                     | Approval status by client.                                                                          |
| author          | User          | read write | no                                                                     | Issuer of the bill.                                                                                 |
| client          | Client        | read write | no                                                                     | Provides info about client for which is bill created.                                               |
| contactPerson   | ContactPerson | read write | no                                                                     | Person for whom is the bill created.                                                                |
| createdAt       | Date          | read only  | no                                                                     | Date of creation.                                                                                   |
| description     | String        | read write | no                                                                     | Description of document.                                                                            |
| displayName     | String        | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| docDate         | Date          | read write | no                                                                     | Date of document issuance.                                                                          |
| docNumber       | String        | read only  | no                                                                     | Document number. Generated automatically.                                                           |
| dueDate         | Date          | read write | no                                                                     | Date of maturity.                                                                                   |
| footer          | String        | read write | no                                                                     | Footer of document.                                                                                 |
| groupAttributes | String        | read write | no                                                                     | Group attributes.                                                                                   |
| header          | String        | read write | no                                                                     | Header of document.                                                                                 |
| id              | String        | read write | no                                                                     | Unique object identifier.                                                                           |
| items           | List          | read write | no                                                                     | List of bill items.                                                                                 |
| lastPaymentDate | Date          | read write | no                                                                     | Date of the last payment.                                                                           |
| notes           | String        | read write | no                                                                     | Additional notes.                                                                                   |
| totalPrice      | Double        | read write | no                                                                     | Summary of item prices. Generated automatically.                                                    |
| trashItem       | TrashItem     | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt       | Date          | read only  | no                                                                     | Last modified date.                                                                                 |
| vatDate         | Date          | read write | no                                                                     | Date of taxable supply.                                                                             |
| vatText         | String        | read write | no                                                                     | Info about a VAT. E.g. 'All prices are without a VAT.'                                              |
| version         | Long          | read only  | no                                                                     | Object version number.                                                                              |

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
					"details" : "regexp [0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
				},
				{
					"type" : "NotNull"
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
			"access" : "READ_ONLY"
		}
	],
	"cascades" : [
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
	"id" : "57fd450e-e192-4fa0-99ee-ef28ee51935c",
	"createdAt" : "/Date(1418063430323)/",
	"updatedAt" : "/Date(1418075490323)/",
	"version" : 8,
	"docNumber" : "2013-01",
	"docDate" : "/Date(1418064690323)/",
	"vatDate" : "/Date(1418064690323)/",
	"dueDate" : "/Date(1418669490323)/",
	"lastPaymentDate" : "/Date(1418669490323)/",
	"description" : "CMS billing",
	"notes" : "",
	"vatText" : "All prices are without a VAT.",
	"header" : "",
	"footer" : "",
	"totalPrice" : 1500.0,
	"client" : {
		"id" : "55a2ca10-d8d5-476f-aaf4-1d1ee18bfa88",
		"createdAt" : "/Date(1418063850323)/",
		"updatedAt" : "/Date(1418125890323)/",
		"version" : 8,
		"externalSystem" : {
			"id" : "756b69d2-b655-4c8c-9749-c37ff00127a3",
			"createdAt" : "/Date(1418061510323)/",
			"updatedAt" : "/Date(1418140290323)/",
			"version" : 7,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1418064690323)/",
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
	"contactPerson" : {
		"id" : "25f4b88b-2b8e-41c1-9e5d-3477cd23d7fe",
		"createdAt" : "/Date(1418061990323)/",
		"updatedAt" : "/Date(1418104290323)/",
		"version" : 4,
		"firstName" : "Pedro",
		"lastName" : "Examplo",
		"email" : "pedro@example.com",
		"phone" : "66 234 555 678",
		"jobTitle" : "deputy director",
		"client" : {
			"id" : "55a2ca10-d8d5-476f-aaf4-1d1ee18bfa88",
			"createdAt" : "/Date(1418063850323)/",
			"updatedAt" : "/Date(1418125890323)/",
			"version" : 8,
			"externalSystem" : {
				"id" : "756b69d2-b655-4c8c-9749-c37ff00127a3",
				"createdAt" : "/Date(1418061510323)/",
				"updatedAt" : "/Date(1418140290323)/",
				"version" : 7,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1418064690323)/",
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
		"displayName" : "Examplo Pedro"
	},
	"approved" : true,
	"items" : [
		{
			"id" : "1457986a-2dfd-47dd-9783-5f20a15459f1",
			"createdAt" : "/Date(1418063850323)/",
			"updatedAt" : "/Date(1418082690323)/",
			"version" : 3,
			"attributes" : "{\"project\":\"name\"}",
			"itemGroup" : "Content management system",
			"docIndex" : 0,
			"duration" : 3600000,
			"price" : 500.0,
			"displayName" : "#0"
		},
		{
			"id" : "8b7a5c9a-cad2-4023-97b4-d633a3ad565b",
			"createdAt" : "/Date(1418064690323)/",
			"updatedAt" : "/Date(1418118690323)/",
			"version" : 0,
			"attributes" : "{\"project\":\"name\"}",
			"itemGroup" : "Content management system",
			"docIndex" : 1,
			"duration" : 7200000,
			"price" : 1000.0,
			"displayName" : "#1"
		}
	],
	"author" : {
		"id" : "0eb1d985-8e6b-4f0f-916a-3eb668af790b",
		"createdAt" : "/Date(1418061990323)/",
		"updatedAt" : "/Date(1418082690323)/",
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
		"birthdayRemind" : "/Date(1419894000000)/",
		"workingTimeStart" : "/Date(1418022000000)/",
		"workingTimeEnd" : "/Date(1418054400000)/",
		"created" : "/Date(1417978290323)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"groupAttributes" : "[\"project\"]",
	"displayName" : "2013-01"
}
```
