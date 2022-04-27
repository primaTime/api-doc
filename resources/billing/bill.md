Bill
==

## URL

	https://api.primaerp.com/v1/billing/bills

	https://api.primaerp.com/v1/billing/bills/$getNextDocNumber

	https://api.primaerp.com/v1/billing/bills/$getNextDocNumberPart

	https://api.primaerp.com/v1/billing/bills/$setNextDocNumberPart

	https://api.primaerp.com/v1/billing/bills/{id}/billitems/relations

	https://api.primaerp.com/v1/billing/billvats/{id}/bills

	https://api.primaerp.com/v1/billing/billvats/{id}/bills/$getNextDocNumber

	https://api.primaerp.com/v1/billing/billvats/{id}/bills/$getNextDocNumberPart

	https://api.primaerp.com/v1/billing/billvats/{id}/bills/$setNextDocNumberPart

	https://api.primaerp.com/v1/billing/billvats/{id}/bills/{id}/billitems/relations

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
			"cascadeType" : "REMOVE",
			"objectTypes" : [
				"BillItem",
				"TrashItem",
				"BillVat"
			]
		},
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
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "95553428-cf1d-4cc1-910a-1c485bdf74cc",
	"createdAt" : "/Date(1651050327363)/",
	"updatedAt" : "/Date(1651068507363)/",
	"version" : 3,
	"docNumber" : "2013-01",
	"docDate" : "/Date(1651050507363)/",
	"vatDate" : "/Date(1651050507363)/",
	"dueDate" : "/Date(1652260107363)/",
	"lastPaymentDate" : "/Date(1651655307363)/",
	"description" : "CMS billing",
	"notes" : "",
	"vatText" : "All prices are without a VAT.",
	"header" : "",
	"footer" : "",
	"itemsPrice" : 2500.0,
	"totalPrice" : 3000.0,
	"client" : {
		"id" : "fc5f0172-e6d0-4e3d-b898-0a671ecad1dd",
		"createdAt" : "/Date(1651049367363)/",
		"updatedAt" : "/Date(1651126107363)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "3bcbdca2-3b22-4419-a078-ba1bd6e6b5ba",
			"createdAt" : "/Date(1651048047363)/",
			"updatedAt" : "/Date(1651097307363)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1651050507363)/",
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
		"consentTill" : "/Date(1682586507363)/",
		"displayName" : "Example Ltd."
	},
	"contactPerson" : {
		"id" : "30501f6a-bac0-4ce4-b528-b1474fed6b3a",
		"createdAt" : "/Date(1651048647363)/",
		"updatedAt" : "/Date(1651050507363)/",
		"version" : 4,
		"firstName" : "Pedro",
		"lastName" : "Examplo",
		"email" : "pedro@example.com",
		"phone" : "66 234 555 678",
		"jobTitle" : "deputy director",
		"client" : {
			"id" : "fc5f0172-e6d0-4e3d-b898-0a671ecad1dd",
			"createdAt" : "/Date(1651049367363)/",
			"updatedAt" : "/Date(1651126107363)/",
			"version" : 6,
			"externalSystem" : {
				"id" : "3bcbdca2-3b22-4419-a078-ba1bd6e6b5ba",
				"createdAt" : "/Date(1651048047363)/",
				"updatedAt" : "/Date(1651097307363)/",
				"version" : 6,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1651050507363)/",
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
			"consentTill" : "/Date(1682586507363)/",
			"displayName" : "Example Ltd."
		},
		"displayName" : "Examplo Pedro"
	},
	"approved" : true,
	"items" : [
		{
			"id" : "b06c7123-ad18-4803-a213-6b9f7d28e2d1",
			"createdAt" : "/Date(1651049727363)/",
			"updatedAt" : "/Date(1651100907363)/",
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
			"id" : "c55b73ee-b10f-4ab6-bd53-0082dd5ba39f",
			"createdAt" : "/Date(1651048887363)/",
			"updatedAt" : "/Date(1651054107363)/",
			"version" : 8,
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
		"id" : "8dbaba13-0a17-4fb0-b9b2-280be5df3614",
		"createdAt" : "/Date(1651049247363)/",
		"updatedAt" : "/Date(1651079307363)/",
		"version" : 6,
		"firstName" : "John",
		"lastName" : "Doe",
		"nickName" : "Johny D.",
		"email" : "5px6egqf9w8r6hb@testdata.com",
		"phone" : "55 234 555 678",
		"position" : "Senior developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "yyyy-MM-dd",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "pt_BR",
		"password" : "8lbo5b9wc2aj1elt86oa",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1652911200000)/",
		"workingTimeStart" : "/Date(1651039200000)/",
		"workingTimeEnd" : "/Date(1651071600000)/",
		"created" : "/Date(1650964107363)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"groupAttributes" : "[\"project\"]",
	"draft" : false,
	"vatMode" : "DECLARE_VAT",
	"vats" : [
		{
			"id" : "781797aa-bca9-4af5-a9a3-53fe695f2884",
			"createdAt" : "/Date(1651049247363)/",
			"updatedAt" : "/Date(1651072107363)/",
			"version" : 3,
			"vatRate" : 20.0,
			"vatPrice" : 500.0,
			"displayName" : "20.0"
		}
	],
	"displayName" : "2013-01"
}
```
