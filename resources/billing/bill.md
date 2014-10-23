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
	"id" : "c01414d3-d764-4ef0-b288-aef9f84c8423",
	"createdAt" : "/Date(1413984359561)/",
	"updatedAt" : "/Date(1414044539561)/",
	"version" : 6,
	"docNumber" : "2013-01",
	"docDate" : "/Date(1413986939561)/",
	"vatDate" : "/Date(1413986939561)/",
	"description" : "CMS billing",
	"notes" : "",
	"header" : "",
	"footer" : "",
	"totalPrice" : 1500.0,
	"client" : {
		"id" : "26e17764-0db9-4e89-b52b-09bf455992d5",
		"createdAt" : "/Date(1413984059562)/",
		"updatedAt" : "/Date(1414015739562)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "0e2b49b7-9c88-4c34-a25e-0c6a1a363404",
			"createdAt" : "/Date(1413985199562)/",
			"updatedAt" : "/Date(1414044539562)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1413986939561)/",
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
		"id" : "bb3ee788-7be8-47b9-8955-04187409c63b",
		"createdAt" : "/Date(1413986579562)/",
		"updatedAt" : "/Date(1413990539562)/",
		"version" : 4,
		"firstName" : "Pedro",
		"lastName" : "Examplo",
		"email" : "pedro@example.com",
		"phone" : "66 234 555 678",
		"jobTitle" : "deputy director",
		"client" : {
			"id" : "26e17764-0db9-4e89-b52b-09bf455992d5",
			"createdAt" : "/Date(1413984059562)/",
			"updatedAt" : "/Date(1414015739562)/",
			"version" : 2,
			"externalSystem" : {
				"id" : "0e2b49b7-9c88-4c34-a25e-0c6a1a363404",
				"createdAt" : "/Date(1413985199562)/",
				"updatedAt" : "/Date(1414044539562)/",
				"version" : 6,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1413986939561)/",
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
			"id" : "92182acf-545c-43ca-aa8c-1c959a6336c7",
			"createdAt" : "/Date(1413986219561)/",
			"updatedAt" : "/Date(1414015739561)/",
			"version" : 4,
			"attributes" : "{\"project\":\"name\"}",
			"itemGroup" : "Content management system",
			"docIndex" : 0,
			"duration" : 3600000,
			"price" : 500.0,
			"displayName" : "#0"
		},
		{
			"id" : "d06ffa34-fedc-42b7-bfc3-2751f9210129",
			"createdAt" : "/Date(1413986279562)/",
			"updatedAt" : "/Date(1414026539562)/",
			"version" : 4,
			"attributes" : "{\"project\":\"name\"}",
			"itemGroup" : "Content management system",
			"docIndex" : 1,
			"duration" : 7200000,
			"price" : 1000.0,
			"displayName" : "#1"
		}
	],
	"author" : {
		"id" : "a6491fe6-fb3a-40ef-8b93-8c8fc0713b60",
		"createdAt" : "/Date(1413986879561)/",
		"updatedAt" : "/Date(1414001339561)/",
		"version" : 2,
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
		"birthdayRemind" : "/Date(1415833200000)/",
		"workingTimeStart" : "/Date(1413957600000)/",
		"workingTimeEnd" : "/Date(1413990000000)/",
		"created" : "/Date(1413900539561)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"groupAttributes" : "[\"project\"]",
	"displayName" : "2013-01"
}
```
