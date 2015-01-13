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
	"id" : "70cd3756-6366-4ab4-9b19-400f7172aa2a",
	"createdAt" : "/Date(1421140657568)/",
	"updatedAt" : "/Date(1421148337568)/",
	"version" : 3,
	"docNumber" : "2013-01",
	"docDate" : "/Date(1421141137568)/",
	"vatDate" : "/Date(1421141137568)/",
	"dueDate" : "/Date(1421745937568)/",
	"lastPaymentDate" : "/Date(1421745937568)/",
	"description" : "CMS billing",
	"notes" : "",
	"vatText" : "All prices are without a VAT.",
	"header" : "",
	"footer" : "",
	"totalPrice" : 1500.0,
	"client" : {
		"id" : "cd04bddf-c862-46c1-b7e4-32edff5f3534",
		"createdAt" : "/Date(1421139337569)/",
		"updatedAt" : "/Date(1421180737569)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "ee564a02-f3c5-439f-b6d8-19e568c46846",
			"createdAt" : "/Date(1421138197569)/",
			"updatedAt" : "/Date(1421213137569)/",
			"version" : 5,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1421141137568)/",
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
		"id" : "45c914f9-f81a-4f5c-af22-e15d7da59e7f",
		"createdAt" : "/Date(1421137957569)/",
		"updatedAt" : "/Date(1421202337569)/",
		"version" : 9,
		"firstName" : "Pedro",
		"lastName" : "Examplo",
		"email" : "pedro@example.com",
		"phone" : "66 234 555 678",
		"jobTitle" : "deputy director",
		"client" : {
			"id" : "cd04bddf-c862-46c1-b7e4-32edff5f3534",
			"createdAt" : "/Date(1421139337569)/",
			"updatedAt" : "/Date(1421180737569)/",
			"version" : 0,
			"externalSystem" : {
				"id" : "ee564a02-f3c5-439f-b6d8-19e568c46846",
				"createdAt" : "/Date(1421138197569)/",
				"updatedAt" : "/Date(1421213137569)/",
				"version" : 5,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1421141137568)/",
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
			"id" : "19b178fd-7173-4d7d-be45-b4c96e45b329",
			"createdAt" : "/Date(1421140357568)/",
			"updatedAt" : "/Date(1421173537568)/",
			"version" : 9,
			"attributes" : "{\"project\":\"name\"}",
			"itemGroup" : "Content management system",
			"docIndex" : 0,
			"duration" : 3600000,
			"price" : 500.0,
			"displayName" : "#0"
		},
		{
			"id" : "4898c151-21eb-485b-8b9b-9313ab66d60d",
			"createdAt" : "/Date(1421141077568)/",
			"updatedAt" : "/Date(1421216737568)/",
			"version" : 5,
			"attributes" : "{\"project\":\"name\"}",
			"itemGroup" : "Content management system",
			"docIndex" : 1,
			"duration" : 7200000,
			"price" : 1000.0,
			"displayName" : "#1"
		}
	],
	"author" : {
		"id" : "b7ce3d62-6f95-4c06-8e94-12aa12dcafb7",
		"createdAt" : "/Date(1421139877568)/",
		"updatedAt" : "/Date(1421202337568)/",
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
		"birthdayRemind" : "/Date(1423004400000)/",
		"workingTimeStart" : "/Date(1421132400000)/",
		"workingTimeEnd" : "/Date(1421164800000)/",
		"created" : "/Date(1421054737568)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"groupAttributes" : "[\"project\"]",
	"displayName" : "2013-01"
}
```
