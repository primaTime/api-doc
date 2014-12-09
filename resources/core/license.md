License
==

## URL

	https://api.primaerp.com/v1/licenses

## Properties

| Name          | Type        | Access     | Required                                                               | Description                                                                                         |
|---------------|-------------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| account       | Account     | read write | no                                                                     | Provides info about the account for which the license was created.                                  |
| createdAt     | Date        | read only  | no                                                                     | Date of creation.                                                                                   |
| displayName   | String      | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| id            | String      | read write | no                                                                     | Unique object identifier.                                                                           |
| licenseNumber | String      | read write | no                                                                     | The license number.                                                                                 |
| ownerName     | String      | read write | no                                                                     | The names of the licensed owner.                                                                    |
| product       | Product     | read write | no                                                                     | The product which is licensed.                                                                      |
| purchaseInfo  | String      | read write | no                                                                     | The purchase informations.                                                                          |
| trashItem     | TrashItem   | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| type          | LicenseType | read write | no                                                                     | Type of license.                                                                                    |
| updatedAt     | Date        | read only  | no                                                                     | Last modified date.                                                                                 |
| usersCount    | Integer     | read write | no                                                                     | The number of users for which the license is valid.                                                 |
| validFrom     | Date        | read write | no                                                                     | The license is valid from this date.                                                                |
| validTo       | Date        | read write | no                                                                     | The License is valid until this date.                                                               |
| version       | Long        | read only  | no                                                                     | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "License",
	"path" : "/v1/licenses",
	"fields" : [
		{
			"type" : "Account",
			"path" : "/v1/accounts",
			"name" : "account",
			"description" : "Provides info about the account for which the license was created.",
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
			"name" : "displayName",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY"
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
			"type" : "String",
			"name" : "licenseNumber",
			"description" : "The license number.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "ownerName",
			"description" : "The names of the licensed owner.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Product",
			"name" : "product",
			"description" : "The product which is licensed.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "purchaseInfo",
			"description" : "The purchase informations.",
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
			"type" : "LicenseType",
			"name" : "type",
			"description" : "Type of license.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "updatedAt",
			"description" : "Last modified date.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "Integer",
			"name" : "usersCount",
			"description" : "The number of users for which the license is valid.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "validFrom",
			"description" : "The license is valid from this date.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "validTo",
			"description" : "The License is valid until this date.",
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
			"cascadeType" : "REMOVE",
			"objectTypes" : [
				"TrashItem"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "8405af73-6f61-4926-938a-f4fe1d3b1d2e",
	"createdAt" : "/Date(1418064390029)/",
	"updatedAt" : "/Date(1418071890029)/",
	"version" : 8,
	"account" : {
		"id" : "a83c5007-690f-4514-960d-ab428a8975fd",
		"createdAt" : "/Date(1418064630029)/",
		"updatedAt" : "/Date(1418071890029)/",
		"version" : 9,
		"owner" : {
			"id" : "a6a24fa9-f525-4bdb-8006-7157fd5e90bc",
			"createdAt" : "/Date(1418063190029)/",
			"updatedAt" : "/Date(1418140290029)/",
			"version" : 8,
			"firstName" : "John",
			"lastName" : "Smith",
			"nickName" : "Smith, J.",
			"email" : "john.smith@example.com",
			"phone" : "55 123 444 567",
			"position" : "Chief developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "dd/MM/yyyy",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "en_US",
			"password" : "",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1418857200000)/",
			"workingTimeStart" : "/Date(1418022000000)/",
			"workingTimeEnd" : "/Date(1418054400000)/",
			"created" : "/Date(1417978290029)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"urlPrefix" : "example-ltd",
		"name" : "Example Ltd.",
		"streetAddress" : "Avenida General Vale 1234",
		"additionalAddressInfo" : "",
		"zipCode" : "78010-000",
		"city" : "Cuiaba",
		"state" : "Mato Grosso",
		"countryCode" : "Brasil",
		"phone" : "BRA",
		"website" : "+55 123 456 789",
		"vatId" : "http://www.example.com",
		"timeZone" : "America/Cuiaba",
		"dateFormat" : "dd/MM/yyyy",
		"timeFormat" : "HH:mm",
		"weekStart" : 7,
		"language" : "en_US",
		"apiKey" : "0165e7d3-c99f-41b5-bf8c-03222edcf681",
		"confirmed" : true,
		"currency" : "USD",
		"workingTimeStart" : "/Date(1418022000000)/",
		"workingTimeEnd" : "/Date(1418054400000)/",
		"created" : "/Date(1417978290029)/",
		"source" : "LINKEDIN",
		"campaign" : "LINKEDIN-2013-C1",
		"deactivationRequestedAt" : "/Date(1418064690029)/",
		"affiliateId" : "fd72516b-fb78-4b6f-ab91-5f5bd0d5b5f5",
		"displayName" : "Example Ltd. (example-ltd)"
	},
	"licenseNumber" : "2db91001-f2e7-4841-bea9-dd0df3f5e7c2",
	"usersCount" : 5,
	"validFrom" : "/Date(1417820400000)/",
	"validTo" : "/Date(1420498800000)/",
	"ownerName" : "Example Ltd.",
	"product" : "TIME",
	"type" : "BUY",
	"purchaseInfo" : "{\"purchase_id\":\"1154795\"}",
	"displayName" : "2db91001-f2e7-4841-bea9-dd0df3f5e7c2"
}
```
