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

	https://api.primaerp.com/v1/billing/billitems/{id}/bills

	https://api.primaerp.com/v1/billing/billitems/{id}/bills/$getNextDocNumber

	https://api.primaerp.com/v1/billing/billitems/{id}/bills/$getNextDocNumberPart

	https://api.primaerp.com/v1/billing/billitems/{id}/bills/$setNextDocNumberPart

	https://api.primaerp.com/v1/billing/billitems/{id}/bills/{id}/billitems/relations

	https://api.primaerp.com/v1/billing/billvats/{id}/bills

	https://api.primaerp.com/v1/billing/billvats/{id}/bills/$getNextDocNumber

	https://api.primaerp.com/v1/billing/billvats/{id}/bills/$getNextDocNumberPart

	https://api.primaerp.com/v1/billing/billvats/{id}/bills/$setNextDocNumberPart

	https://api.primaerp.com/v1/billing/billvats/{id}/bills/{id}/billitems/relations

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
			"cascadeType" : "REMOVE",
			"objectTypes" : [
				"BillItem",
				"TrashItem",
				"BillVat"
			]
		},
		{
			"cascadeType" : "MERGE",
			"objectTypes" : [
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
	"id" : "e51c28a9-428e-44f6-83f8-098e8e332940",
	"createdAt" : "/Date(1650451433687)/",
	"updatedAt" : "/Date(1650528653687)/",
	"version" : 7,
	"docNumber" : "2013-01",
	"docDate" : "/Date(1650453053687)/",
	"vatDate" : "/Date(1650453053687)/",
	"dueDate" : "/Date(1651662653687)/",
	"lastPaymentDate" : "/Date(1651057853687)/",
	"description" : "CMS billing",
	"notes" : "",
	"vatText" : "All prices are without a VAT.",
	"header" : "",
	"footer" : "",
	"itemsPrice" : 2500.0,
	"totalPrice" : 3000.0,
	"client" : {
		"id" : "a05b9707-75bc-4ce6-b28d-f09c395befde",
		"createdAt" : "/Date(1650449573687)/",
		"updatedAt" : "/Date(1650456653687)/",
		"version" : 7,
		"externalSystem" : {
			"id" : "278473d2-7c2a-4b6c-b8ed-951f17d91509",
			"createdAt" : "/Date(1650450773687)/",
			"updatedAt" : "/Date(1650489053687)/",
			"version" : 5,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1650453053687)/",
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
		"consentTill" : "/Date(1681989053686)/",
		"displayName" : "Example Ltd."
	},
	"contactPerson" : {
		"id" : "0468670c-48a3-4946-9e04-1ed31b8b777a",
		"createdAt" : "/Date(1650452813687)/",
		"updatedAt" : "/Date(1650492653687)/",
		"version" : 8,
		"firstName" : "Pedro",
		"lastName" : "Examplo",
		"email" : "pedro@example.com",
		"phone" : "66 234 555 678",
		"jobTitle" : "deputy director",
		"client" : {
			"id" : "a05b9707-75bc-4ce6-b28d-f09c395befde",
			"createdAt" : "/Date(1650449573687)/",
			"updatedAt" : "/Date(1650456653687)/",
			"version" : 7,
			"externalSystem" : {
				"id" : "278473d2-7c2a-4b6c-b8ed-951f17d91509",
				"createdAt" : "/Date(1650450773687)/",
				"updatedAt" : "/Date(1650489053687)/",
				"version" : 5,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1650453053687)/",
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
			"consentTill" : "/Date(1681989053686)/",
			"displayName" : "Example Ltd."
		},
		"displayName" : "Examplo Pedro"
	},
	"approved" : true,
	"items" : [
		{
			"id" : "2f53e232-434b-4e59-ad88-599994c53255",
			"createdAt" : "/Date(1650451133687)/",
			"updatedAt" : "/Date(1650478253687)/",
			"version" : 9,
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
			"id" : "8e2224bc-e022-484c-aab7-cb63d99409cf",
			"createdAt" : "/Date(1650452933687)/",
			"updatedAt" : "/Date(1650481853687)/",
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
		"id" : "6e0dcb58-78bd-4722-a3b5-7ef6ef469c0e",
		"createdAt" : "/Date(1650451673687)/",
		"updatedAt" : "/Date(1650478253687)/",
		"version" : 9,
		"firstName" : "John",
		"lastName" : "Doe",
		"nickName" : "Johny D.",
		"email" : "iraenfr4wcxs29a@testdata.com",
		"phone" : "55 234 555 678",
		"position" : "Senior developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "yyyy-MM-dd",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "pt_BR",
		"password" : "e1dznc1uxdgmjhxkt4jc",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1652306400000)/",
		"workingTimeStart" : "/Date(1650434400000)/",
		"workingTimeEnd" : "/Date(1650466800000)/",
		"created" : "/Date(1650366653687)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"groupAttributes" : "[\"project\"]",
	"draft" : false,
	"vatMode" : "DECLARE_VAT",
	"vats" : [
		{
			"id" : "4bcb1260-47e7-49c2-b95b-0e237dff004e",
			"createdAt" : "/Date(1650450293687)/",
			"updatedAt" : "/Date(1650499853687)/",
			"version" : 8,
			"vatRate" : 20.0,
			"vatPrice" : 500.0,
			"displayName" : "20.0"
		}
	],
	"displayName" : "2013-01"
}
```
