Bill
==

## URL

	https://api.primaerp.com/v1/billing/bills

	https://api.primaerp.com/v1/billing/bills/$getNextDocNumber

	https://api.primaerp.com/v1/billing/bills/$getNextDocNumberPart

	https://api.primaerp.com/v1/billing/bills/$setNextDocNumberPart

	https://api.primaerp.com/v1/billing/bills/{id}/billitems/relations

	https://api.primaerp.com/v1/time/clients/{id}/bills

	https://api.primaerp.com/v1/time/clients/{id}/bills/$getNextDocNumber

	https://api.primaerp.com/v1/time/clients/{id}/bills/$getNextDocNumberPart

	https://api.primaerp.com/v1/time/clients/{id}/bills/$setNextDocNumberPart

	https://api.primaerp.com/v1/time/clients/{id}/bills/{id}/billitems/relations

	https://api.primaerp.com/v1/billing/billvats/{id}/bills

	https://api.primaerp.com/v1/billing/billvats/{id}/bills/$getNextDocNumber

	https://api.primaerp.com/v1/billing/billvats/{id}/bills/$getNextDocNumberPart

	https://api.primaerp.com/v1/billing/billvats/{id}/bills/$setNextDocNumberPart

	https://api.primaerp.com/v1/billing/billvats/{id}/bills/{id}/billitems/relations

	https://api.primaerp.com/v1/billing/billitems/{id}/bills

	https://api.primaerp.com/v1/billing/billitems/{id}/bills/$getNextDocNumber

	https://api.primaerp.com/v1/billing/billitems/{id}/bills/$getNextDocNumberPart

	https://api.primaerp.com/v1/billing/billitems/{id}/bills/$setNextDocNumberPart

	https://api.primaerp.com/v1/billing/billitems/{id}/bills/{id}/billitems/relations

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
| itemsPrice      | Double        | read write | no       | Summary of item prices. Without VAT. Generated automatically.                                       |
| lastPaymentDate | Date          | read write | no       | Date of the last payment.                                                                           |
| notes           | String        | read write | no       | Additional notes.                                                                                   |
| totalPrice      | Double        | read write | no       | Summary of item prices. VAT included. Generated automatically.                                      |
| trashItem       | TrashItem     | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt       | Date          | read only  | no       | Last modified date.                                                                                 |
| vatDate         | Date          | read write | no       | Date of taxable supply.                                                                             |
| vatMode         | VatMode       | read write | no       | VAT mode.                                                                                           |
| vatText         | String        | read write | no       | Info about a VAT. E.g. 'All prices are without a VAT.'                                              |
| vats            | List          | read write | no       | List of bill VATs.                                                                                  |
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
			"type" : "Double",
			"name" : "itemsPrice",
			"description" : "Summary of item prices. Without VAT. Generated automatically.",
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
			"description" : "Summary of item prices. VAT included. Generated automatically.",
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
			"type" : "VatMode",
			"name" : "vatMode",
			"description" : "VAT mode.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Enum",
					"details" : "DECLARE_VAT, NO_VAT"
				}
			]
		},
		{
			"type" : "String",
			"name" : "vatText",
			"description" : "Info about a VAT. E.g. 'All prices are without a VAT.'",
			"access" : "READ_WRITE"
		},
		{
			"type" : "List",
			"name" : "vats",
			"description" : "List of bill VATs.",
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
				"BillItem",
				"BillVat"
			]
		},
		{
			"cascadeType" : "MERGE",
			"objectTypes" : [
				"BillItem",
				"BillVat"
			]
		},
		{
			"cascadeType" : "REMOVE",
			"objectTypes" : [
				"TrashItem",
				"BillItem",
				"BillVat"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "41da91ea-74a7-4da6-aad8-03ac30eccc35",
	"createdAt" : "/Date(1489385114449)/",
	"updatedAt" : "/Date(1489391594449)/",
	"version" : 1,
	"docNumber" : "2013-01",
	"docDate" : "/Date(1489387994448)/",
	"vatDate" : "/Date(1489387994448)/",
	"dueDate" : "/Date(1490593994448)/",
	"lastPaymentDate" : "/Date(1489992794448)/",
	"description" : "CMS billing",
	"notes" : "",
	"vatText" : "All prices are without a VAT.",
	"header" : "",
	"footer" : "",
	"itemsPrice" : 2500.0,
	"totalPrice" : 3000.0,
	"client" : {
		"id" : "e8bf5e26-95a3-49fc-af1d-7b2d37382e62",
		"createdAt" : "/Date(1489386854449)/",
		"updatedAt" : "/Date(1489456394449)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "474345f4-92d7-48d8-b587-22f6e64f3c9e",
			"createdAt" : "/Date(1489387214449)/",
			"updatedAt" : "/Date(1489441994449)/",
			"version" : 5,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1489387994448)/",
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
		"id" : "12680956-1b16-40c1-8c55-468449e261c3",
		"createdAt" : "/Date(1489386494449)/",
		"updatedAt" : "/Date(1489441994449)/",
		"version" : 1,
		"firstName" : "Pedro",
		"lastName" : "Examplo",
		"email" : "pedro@example.com",
		"phone" : "66 234 555 678",
		"jobTitle" : "deputy director",
		"client" : {
			"id" : "e8bf5e26-95a3-49fc-af1d-7b2d37382e62",
			"createdAt" : "/Date(1489386854449)/",
			"updatedAt" : "/Date(1489456394449)/",
			"version" : 2,
			"externalSystem" : {
				"id" : "474345f4-92d7-48d8-b587-22f6e64f3c9e",
				"createdAt" : "/Date(1489387214449)/",
				"updatedAt" : "/Date(1489441994449)/",
				"version" : 5,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1489387994448)/",
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
			"id" : "692e6cad-1605-4b5b-90ef-668beec12223",
			"createdAt" : "/Date(1489387874449)/",
			"updatedAt" : "/Date(1489470794449)/",
			"version" : 7,
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
			"id" : "1700574e-d43f-4c02-9b9d-3c15e5c4c2db",
			"createdAt" : "/Date(1489385294449)/",
			"updatedAt" : "/Date(1489431194449)/",
			"version" : 1,
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
		"id" : "5c2848da-2e0a-4fca-9720-8ba73e6dd80f",
		"createdAt" : "/Date(1489386374449)/",
		"updatedAt" : "/Date(1489438394449)/",
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
		"birthdayRemind" : "/Date(1491256800000)/",
		"workingTimeStart" : "/Date(1489388400000)/",
		"workingTimeEnd" : "/Date(1489420800000)/",
		"created" : "/Date(1489301594448)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"groupAttributes" : "[\"project\"]",
	"draft" : false,
	"vatMode" : "DECLARE_VAT",
	"vats" : [
		{
			"id" : "6d127af8-32f7-431a-8165-fb3b10206799",
			"createdAt" : "/Date(1489386314449)/",
			"updatedAt" : "/Date(1489431194449)/",
			"version" : 7,
			"vatRate" : 20.0,
			"vatPrice" : 500.0,
			"displayName" : "20.0"
		}
	],
	"displayName" : "2013-01"
}
```
