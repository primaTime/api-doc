License
==

## URL

	http://api.primaerp.com/v1/licenses

## Properties

| Name          | Type        | Access     | Description                                                                                         |
|---------------|-------------|------------|-----------------------------------------------------------------------------------------------------|
| account       | Account     | read write | Provides info about the account for which the license was created.                                  |
| createdAt     | Date        | read only  | Date of creation.                                                                                   |
| displayName   | String      | read only  | Describes an object in human readable form.                                                         |
| id            | String      | read write | Unique object identifier.                                                                           |
| licenseNumber | String      | read write | The license number.                                                                                 |
| ownerName     | String      | read write | The names of the licensed owner.                                                                    |
| product       | Product     | read write | The product which is licensed.                                                                      |
| purchaseInfo  | String      | read write | The purchase informations.                                                                          |
| trashItem     | TrashItem   | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| type          | LicenseType | read write | Type of license.                                                                                    |
| updatedAt     | Date        | read only  | Last modified date.                                                                                 |
| usersCount    | Integer     | read write | The number of users for which the license is valid.                                                 |
| validFrom     | Date        | read write | The license is valid from this date.                                                                |
| validTo       | Date        | read write | The License is valid until this date.                                                               |
| version       | Long        | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "License",
	"fields" : [
		{
			"type" : "Account",
			"name" : "account",
			"description" : "Provides info about the account for which the license was created.",
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
			"name" : "displayName",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY",
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
			"type" : "String",
			"name" : "licenseNumber",
			"description" : "The license number.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "ownerName",
			"description" : "The names of the licensed owner.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Product",
			"name" : "product",
			"description" : "The product which is licensed.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "purchaseInfo",
			"description" : "The purchase informations.",
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
			"type" : "LicenseType",
			"name" : "type",
			"description" : "Type of license.",
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
			"type" : "Integer",
			"name" : "usersCount",
			"description" : "The number of users for which the license is valid.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "validFrom",
			"description" : "The license is valid from this date.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "validTo",
			"description" : "The License is valid until this date.",
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
				"TrashItem"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "1ed5b381-f9f7-427d-af6d-3d1222467f63",
	"createdAt" : "/Date(1408430464427)/",
	"updatedAt" : "/Date(1408470724427)/",
	"version" : 7,
	"account" : {
		"id" : "7cb81abc-3118-463f-a620-2bb29870301f",
		"createdAt" : "/Date(1408428904427)/",
		"updatedAt" : "/Date(1408485124427)/",
		"version" : 1,
		"owner" : {
			"id" : "67ef5ffb-eab0-4b4d-8b6b-652a8949b5e1",
			"createdAt" : "/Date(1408429624427)/",
			"updatedAt" : "/Date(1408499524427)/",
			"version" : 5,
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
			"birthdayRemind" : "/Date(1409263200000)/",
			"workingTimeStart" : "/Date(1408428000000)/",
			"workingTimeEnd" : "/Date(1408460400000)/",
			"created" : "/Date(1408344724427)/",
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
		"workingTimeStart" : "/Date(1408428000000)/",
		"workingTimeEnd" : "/Date(1408460400000)/",
		"created" : "/Date(1408344724427)/",
		"source" : "LINKEDIN",
		"campaign" : "LINKEDIN-2013-C1",
		"deactivationRequestedAt" : "/Date(1408431124427)/",
		"displayName" : "Example Ltd. (example-ltd)"
	},
	"licenseNumber" : "293810a9-1038-4401-bf20-e0772c559063",
	"usersCount" : 5,
	"validFrom" : "/Date(1408226400000)/",
	"validTo" : "/Date(1410904800000)/",
	"ownerName" : "Example Ltd.",
	"product" : "TIME",
	"type" : "BUY",
	"purchaseInfo" : "{\"purchase_id\":\"1154795\"}",
	"displayName" : "293810a9-1038-4401-bf20-e0772c559063"
}
```
