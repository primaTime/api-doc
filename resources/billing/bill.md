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
	"id" : "92c3d38f-983b-4e41-94a6-76310dec9196",
	"createdAt" : "/Date(1412164847464)/",
	"updatedAt" : "/Date(1412229407464)/",
	"version" : 5,
	"docNumber" : "2013-01",
	"docDate" : "/Date(1412168207464)/",
	"vatDate" : "/Date(1412168207464)/",
	"description" : "CMS billing",
	"notes" : "",
	"header" : "",
	"footer" : "",
	"totalPrice" : 1500.0,
	"client" : {
		"id" : "fd61b5b0-d12e-4209-8e1f-2a28cb86b06e",
		"createdAt" : "/Date(1412167487465)/",
		"updatedAt" : "/Date(1412233007465)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "e0770f5b-adab-4dfe-817d-40126f657e58",
			"createdAt" : "/Date(1412165507465)/",
			"updatedAt" : "/Date(1412207807465)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1412168207464)/",
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
		"id" : "fe620d8a-61b3-4b97-82ac-ba14932bdca7",
		"createdAt" : "/Date(1412164967464)/",
		"updatedAt" : "/Date(1412211407464)/",
		"version" : 2,
		"firstName" : "Pedro",
		"lastName" : "Examplo",
		"email" : "pedro@example.com",
		"phone" : "66 234 555 678",
		"jobTitle" : "deputy director",
		"client" : {
			"id" : "fd61b5b0-d12e-4209-8e1f-2a28cb86b06e",
			"createdAt" : "/Date(1412167487465)/",
			"updatedAt" : "/Date(1412233007465)/",
			"version" : 0,
			"externalSystem" : {
				"id" : "e0770f5b-adab-4dfe-817d-40126f657e58",
				"createdAt" : "/Date(1412165507465)/",
				"updatedAt" : "/Date(1412207807465)/",
				"version" : 8,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1412168207464)/",
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
			"id" : "26981c94-7169-41fd-83e1-7d2e4390f3a5",
			"createdAt" : "/Date(1412166167464)/",
			"updatedAt" : "/Date(1412168207464)/",
			"version" : 3,
			"attributes" : "{\"project\":\"name\"}",
			"itemGroup" : "Content management system",
			"docIndex" : 0,
			"duration" : 3600000,
			"price" : 500.0,
			"displayName" : "#0"
		},
		{
			"id" : "c00cb8fe-bdba-4dfc-8d27-fc03372f3b27",
			"createdAt" : "/Date(1412166167464)/",
			"updatedAt" : "/Date(1412233007464)/",
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
		"id" : "20008f8a-5542-46d9-87ba-f975b14ea536",
		"createdAt" : "/Date(1412164727464)/",
		"updatedAt" : "/Date(1412182607464)/",
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
		"birthdayRemind" : "/Date(1414015200000)/",
		"workingTimeStart" : "/Date(1412143200000)/",
		"workingTimeEnd" : "/Date(1412175600000)/",
		"created" : "/Date(1412081807464)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"groupAttributes" : "[\"project\"]",
	"displayName" : "2013-01"
}
```
