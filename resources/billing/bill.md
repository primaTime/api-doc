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
	"id" : "825cedb7-7d6e-40a7-9e4d-c6ee2a4c50b6",
	"createdAt" : "/Date(1408462615129)/",
	"updatedAt" : "/Date(1408463515129)/",
	"version" : 8,
	"docNumber" : "2013-01",
	"docDate" : "/Date(1408463515129)/",
	"vatDate" : "/Date(1408463515129)/",
	"description" : "CMS billing",
	"notes" : "",
	"header" : "",
	"footer" : "",
	"totalPrice" : 1500.0,
	"client" : {
		"id" : "a09390bf-8f45-469e-90dc-746e46cb7065",
		"createdAt" : "/Date(1408461235130)/",
		"updatedAt" : "/Date(1408477915130)/",
		"version" : 4,
		"externalSystem" : {
			"id" : "287ccf13-ea44-48d9-91b0-68bf87e8bbc8",
			"createdAt" : "/Date(1408462075130)/",
			"updatedAt" : "/Date(1408524715130)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1408463515129)/",
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
		"id" : "60fd6661-94cd-42cd-b016-90be55a56177",
		"createdAt" : "/Date(1408462075130)/",
		"updatedAt" : "/Date(1408524715130)/",
		"version" : 8,
		"firstName" : "Pedro",
		"lastName" : "Examplo",
		"email" : "pedro@example.com",
		"phone" : "66 234 555 678",
		"jobTitle" : "deputy director",
		"client" : {
			"id" : "a09390bf-8f45-469e-90dc-746e46cb7065",
			"createdAt" : "/Date(1408461235130)/",
			"updatedAt" : "/Date(1408477915130)/",
			"version" : 4,
			"externalSystem" : {
				"id" : "287ccf13-ea44-48d9-91b0-68bf87e8bbc8",
				"createdAt" : "/Date(1408462075130)/",
				"updatedAt" : "/Date(1408524715130)/",
				"version" : 2,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1408463515129)/",
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
			"id" : "45c60607-ff81-4685-afda-415b20e440cf",
			"createdAt" : "/Date(1408462495130)/",
			"updatedAt" : "/Date(1408513915130)/",
			"version" : 9,
			"attributes" : "{\"project\":\"name\"}",
			"itemGroup" : "Content management system",
			"docIndex" : 0,
			"duration" : 3600000,
			"price" : 500.0,
			"displayName" : "#0"
		},
		{
			"id" : "9f282131-216c-496a-9346-ff9d1237e283",
			"createdAt" : "/Date(1408461175130)/",
			"updatedAt" : "/Date(1408495915130)/",
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
		"id" : "681c998e-78aa-4df4-abd7-79a5c3c27a39",
		"createdAt" : "/Date(1408460215130)/",
		"updatedAt" : "/Date(1408488715130)/",
		"version" : 7,
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
		"created" : "/Date(1408377115129)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"groupAttributes" : "[\"project\"]",
	"displayName" : "2013-01"
}
```
