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
	"id" : "0364ffc5-6e52-48f9-90a0-9b9fd101cfe3",
	"createdAt" : "/Date(1421138857831)/",
	"updatedAt" : "/Date(1421198737831)/",
	"version" : 7,
	"account" : {
		"id" : "5e1320c4-b31b-47c8-83f5-c2b2d0bc1c97",
		"createdAt" : "/Date(1421138437831)/",
		"updatedAt" : "/Date(1421202337831)/",
		"version" : 9,
		"owner" : {
			"id" : "fdaa1bb7-8740-4163-8a31-96894dd6fe2a",
			"createdAt" : "/Date(1421140417831)/",
			"updatedAt" : "/Date(1421155537831)/",
			"version" : 0,
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
			"birthdayRemind" : "/Date(1421967600000)/",
			"workingTimeStart" : "/Date(1421132400000)/",
			"workingTimeEnd" : "/Date(1421164800000)/",
			"created" : "/Date(1421054737831)/",
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
		"workingTimeStart" : "/Date(1421132400000)/",
		"workingTimeEnd" : "/Date(1421164800000)/",
		"created" : "/Date(1421054737831)/",
		"source" : "LINKEDIN",
		"campaign" : "LINKEDIN-2013-C1",
		"deactivationRequestedAt" : "/Date(1421141137831)/",
		"affiliateId" : "f7433627-a60d-4551-92b0-21a8d749cb0f",
		"displayName" : "Example Ltd. (example-ltd)"
	},
	"licenseNumber" : "4101c44d-5029-4348-9c8c-187df0c803a3",
	"usersCount" : 5,
	"validFrom" : "/Date(1420930800000)/",
	"validTo" : "/Date(1423609200000)/",
	"ownerName" : "Example Ltd.",
	"product" : "TIME",
	"type" : "BUY",
	"purchaseInfo" : "{\"purchase_id\":\"1154795\"}",
	"displayName" : "4101c44d-5029-4348-9c8c-187df0c803a3"
}
```
