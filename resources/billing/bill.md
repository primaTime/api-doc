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
| draft           | Boolean       | read write | no                                                                     | Document is in draft mode.                                                                          |
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
| version         | Long          | read write | no                                                                     | Object version number.                                                                              |

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
			"cascadeType" : "PERSIST",
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
			"cascadeType" : "MERGE",
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
	"id" : "ee351795-65f0-44c2-ae93-7a60a3b8f087",
	"createdAt" : "/Date(1424881336022)/",
	"updatedAt" : "/Date(1424894056022)/",
	"version" : 5,
	"docNumber" : "2013-01",
	"docDate" : "/Date(1424883256022)/",
	"vatDate" : "/Date(1424883256022)/",
	"dueDate" : "/Date(1426092856022)/",
	"lastPaymentDate" : "/Date(1425488056022)/",
	"description" : "CMS billing",
	"notes" : "",
	"vatText" : "All prices are without a VAT.",
	"header" : "",
	"footer" : "",
	"totalPrice" : 2000.0,
	"client" : {
		"id" : "988c1383-9ef8-4fff-8683-13d5bedf42d6",
		"createdAt" : "/Date(1424882716022)/",
		"updatedAt" : "/Date(1424919256022)/",
		"version" : 8,
		"externalSystem" : {
			"id" : "3739c634-304e-42fd-9223-c8d20ee89013",
			"createdAt" : "/Date(1424883256022)/",
			"updatedAt" : "/Date(1424937256022)/",
			"version" : 7,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1424883256022)/",
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
		"id" : "b8ea66ef-4634-4291-96f0-03d8d035021f",
		"createdAt" : "/Date(1424882836022)/",
		"updatedAt" : "/Date(1424951656022)/",
		"version" : 2,
		"firstName" : "Pedro",
		"lastName" : "Examplo",
		"email" : "pedro@example.com",
		"phone" : "66 234 555 678",
		"jobTitle" : "deputy director",
		"client" : {
			"id" : "988c1383-9ef8-4fff-8683-13d5bedf42d6",
			"createdAt" : "/Date(1424882716022)/",
			"updatedAt" : "/Date(1424919256022)/",
			"version" : 8,
			"externalSystem" : {
				"id" : "3739c634-304e-42fd-9223-c8d20ee89013",
				"createdAt" : "/Date(1424883256022)/",
				"updatedAt" : "/Date(1424937256022)/",
				"version" : 7,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1424883256022)/",
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
			"id" : "f8b7a263-1c32-4f68-b716-d7956a5c4e5b",
			"createdAt" : "/Date(1424881036022)/",
			"updatedAt" : "/Date(1424966056022)/",
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
			"id" : "aaa6c87b-c511-41bf-ac86-2c1644402ebc",
			"createdAt" : "/Date(1424881336022)/",
			"updatedAt" : "/Date(1424966056022)/",
			"version" : 0,
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
		"id" : "6fcd7547-1e48-46e8-9796-5eb08cf04fa2",
		"createdAt" : "/Date(1424882536022)/",
		"updatedAt" : "/Date(1424940856022)/",
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
		"birthdayRemind" : "/Date(1426719600000)/",
		"workingTimeStart" : "/Date(1424847600000)/",
		"workingTimeEnd" : "/Date(1424880000000)/",
		"created" : "/Date(1424796856021)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"groupAttributes" : "[\"project\"]",
	"draft" : false,
	"displayName" : "2013-01"
}
```
