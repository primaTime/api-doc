Bill
==

## URL

	https://api.primaerp.com/v1/billing/bills

	https://api.primaerp.com/v1/billing/billitems/{id}/bills

	https://api.primaerp.com/v1/time/clients/{id}/bills

## Properties

| Name            | Type          | Access     | Required | Description                                                                                         |
|-----------------|---------------|------------|----------|-----------------------------------------------------------------------------------------------------|
| approved        | Boolean       | read write | no       | Approval status by client.                                                                          |
| author          | User          | read write | no       | Issuer of the bill.                                                                                 |
| client          | Client        | read write | no       | Provides info about client for which is bill created.                                               |
| contactPerson   | ContactPerson | read write | no       | Person for whom is the bill created.                                                                |
| createdAt       | Date          | read only  | no       | Date of creation.                                                                                   |
| description     | String        | read write | no       | Description of document.                                                                            |
| displayName     | String        | read only  | no       | Describes an object in human readable form.                                                         |
| docDate         | Date          | read write | no       | Date of document issuance.                                                                          |
| docNumber       | String        | read only  | no       | Document number. Generated automatically.                                                           |
| draft           | Boolean       | read write | no       | Document is in draft mode.                                                                          |
| dueDate         | Date          | read write | no       | Date of maturity.                                                                                   |
| footer          | String        | read write | no       | Footer of document.                                                                                 |
| groupAttributes | String        | read write | no       | Group attributes.                                                                                   |
| header          | String        | read write | no       | Header of document.                                                                                 |
| id              | String        | read write | no       | Unique object identifier.                                                                           |
| items           | List          | read write | no       | List of bill items.                                                                                 |
| lastPaymentDate | Date          | read write | no       | Date of the last payment.                                                                           |
| notes           | String        | read write | no       | Additional notes.                                                                                   |
| totalPrice      | Double        | read write | no       | Summary of item prices. Generated automatically.                                                    |
| trashItem       | TrashItem     | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt       | Date          | read only  | no       | Last modified date.                                                                                 |
| vatDate         | Date          | read write | no       | Date of taxable supply.                                                                             |
| vatText         | String        | read write | no       | Info about a VAT. E.g. 'All prices are without a VAT.'                                              |
| version         | Long          | read write | no       | Object version number.                                                                              |

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
			"type" : "Boolean",
			"name" : "draft",
			"description" : "Document is in draft mode.",
			"access" : "READ_WRITE"
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
	"id" : "6aeedfb0-e235-422a-9ade-a2b621916c88",
	"createdAt" : "/Date(1427901600814)/",
	"updatedAt" : "/Date(1427909460814)/",
	"version" : 1,
	"docNumber" : "2013-01",
	"docDate" : "/Date(1427902260814)/",
	"vatDate" : "/Date(1427902260814)/",
	"dueDate" : "/Date(1429111860814)/",
	"lastPaymentDate" : "/Date(1428507060814)/",
	"description" : "CMS billing",
	"notes" : "",
	"vatText" : "All prices are without a VAT.",
	"header" : "",
	"footer" : "",
	"totalPrice" : 2000.0,
	"client" : {
		"id" : "623a7732-6af4-4789-a54a-4c261478912f",
		"createdAt" : "/Date(1427898840815)/",
		"updatedAt" : "/Date(1427945460815)/",
		"version" : 7,
		"externalSystem" : {
			"id" : "6298f3df-a37c-4b0e-9731-8986b0e31688",
			"createdAt" : "/Date(1427900700815)/",
			"updatedAt" : "/Date(1427949060815)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1427902260814)/",
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
		"id" : "e6363d02-bf6f-4019-a43b-cffeb7fbf499",
		"createdAt" : "/Date(1427901180814)/",
		"updatedAt" : "/Date(1427931060814)/",
		"version" : 9,
		"firstName" : "Pedro",
		"lastName" : "Examplo",
		"email" : "pedro@example.com",
		"phone" : "66 234 555 678",
		"jobTitle" : "deputy director",
		"client" : {
			"id" : "623a7732-6af4-4789-a54a-4c261478912f",
			"createdAt" : "/Date(1427898840815)/",
			"updatedAt" : "/Date(1427945460815)/",
			"version" : 7,
			"externalSystem" : {
				"id" : "6298f3df-a37c-4b0e-9731-8986b0e31688",
				"createdAt" : "/Date(1427900700815)/",
				"updatedAt" : "/Date(1427949060815)/",
				"version" : 8,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1427902260814)/",
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
			"id" : "7254d9fe-b437-4051-9860-1d1376e20a14",
			"createdAt" : "/Date(1427902200815)/",
			"updatedAt" : "/Date(1427949060815)/",
			"version" : 6,
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
			"id" : "4ab38ad2-6959-422e-b552-e4d6f9023340",
			"createdAt" : "/Date(1427900340815)/",
			"updatedAt" : "/Date(1427974260815)/",
			"version" : 6,
			"attributes" : "{\"project\":\"name\"}",
			"itemGroup" : "Content management system",
			"docIndex" : 1,
			"quantity" : 7200000.0,
			"price" : 2000.0,
			"unitPrice" : 1000.0,
			"unit" : "hours",
			"displayName" : "#1"
		}
	],
	"author" : {
		"id" : "2148f471-386d-4af1-a9f9-5ccdf26bb643",
		"createdAt" : "/Date(1427902140815)/",
		"updatedAt" : "/Date(1427985060815)/",
		"version" : 4,
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
		"birthdayRemind" : "/Date(1429740000000)/",
		"workingTimeStart" : "/Date(1427868000000)/",
		"workingTimeEnd" : "/Date(1427900400000)/",
		"created" : "/Date(1427815860814)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"groupAttributes" : "[\"project\"]",
	"draft" : false,
	"displayName" : "2013-01"
}
```
