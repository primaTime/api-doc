License
==

## URL

	https://api.primaerp.com/v1/licenses

## Properties

| Name          | Type        | Access     | Required | Description                                                                                         |
|---------------|-------------|------------|----------|-----------------------------------------------------------------------------------------------------|
| account       | Account     | read write | no       | Provides info about the account for which the license was created.                                  |
| createdAt     | Date        | read only  | no       | Date of creation.                                                                                   |
| displayName   | String      | read only  | no       | Describes an object in human readable form.                                                         |
| id            | String      | read write | no       | Unique object identifier.                                                                           |
| interval      | Interval    | read write | no       | Duration of the license. Default value is N_A.                                                      |
| licenseNumber | String      | read write | no       | The license number.                                                                                 |
| ownerName     | String      | read write | no       | The names of the licensed owner.                                                                    |
| product       | Product     | read write | no       | The product which is licensed.                                                                      |
| promoCode     | String      | read write | no       | Used promo code.                                                                                    |
| purchaseInfo  | String      | read write | no       | The purchase informations.                                                                          |
| trashItem     | TrashItem   | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| type          | LicenseType | read write | no       | Type of license.                                                                                    |
| updatedAt     | Date        | read only  | no       | Last modified date.                                                                                 |
| usersCount    | Integer     | read write | no       | The number of users for which the license is valid.                                                 |
| validFrom     | Date        | read write | no       | The license is valid from this date.                                                                |
| validTo       | Date        | read write | no       | The License is valid until this date.                                                               |
| version       | Long        | read write | no       | Object version number.                                                                              |

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
			"type" : "Interval",
			"name" : "interval",
			"description" : "Duration of the license.",
			"defaultValue" : "N_A",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Enum",
					"details" : "MONTHLY, YEARLY, N_A"
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
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Enum",
					"details" : "CORE, TIME, BILLING, ATTENDANCE"
				}
			]
		},
		{
			"type" : "String",
			"name" : "promoCode",
			"description" : "Used promo code.",
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
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Enum",
					"details" : "FREE, BUY, PROMO, CANCELED"
				}
			]
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
			"access" : "READ_WRITE"
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
	"id" : "3537c2d1-fbad-4b4d-8a2a-ee11154d1a39",
	"createdAt" : "/Date(1651050087220)/",
	"updatedAt" : "/Date(1651050507220)/",
	"version" : 8,
	"account" : {
		"id" : "a1d60445-b8e5-4b75-8ba0-8dad2c3d61a9",
		"createdAt" : "/Date(1651047807220)/",
		"updatedAt" : "/Date(1651093707220)/",
		"version" : 0,
		"owner" : {
			"id" : "1711fd10-8cbd-44ba-ba20-2b3819d34bb1",
			"createdAt" : "/Date(1651049907220)/",
			"updatedAt" : "/Date(1651133307220)/",
			"version" : 5,
			"firstName" : "John",
			"lastName" : "Doe",
			"nickName" : "Johny D.",
			"email" : "q1cg6meg4_8fe8d@testdata.com",
			"phone" : "55 234 555 678",
			"position" : "Senior developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "yyyy-MM-dd",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "pt_BR",
			"password" : "j9n3wbtfj6kjuac7xii5",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1652911200000)/",
			"workingTimeStart" : "/Date(1651039200000)/",
			"workingTimeEnd" : "/Date(1651071600000)/",
			"created" : "/Date(1650964107220)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
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
		"paymentInfo" : "2100 2527 33 1234567890",
		"timeZone" : "America/Cuiaba",
		"dateFormat" : "dd/MM/yyyy",
		"timeFormat" : "HH:mm",
		"weekStart" : 7,
		"language" : "en_US",
		"apiKey" : "0165e7d3-c99f-41b5-bf8c-03222edcf681",
		"confirmed" : true,
		"currency" : "USD",
		"workingTimeStart" : "/Date(1651039200000)/",
		"workingTimeEnd" : "/Date(1651071600000)/",
		"created" : "/Date(1650964107220)/",
		"source" : "LINKEDIN",
		"campaign" : "LINKEDIN-2013-C1",
		"deactivationRequestedAt" : "/Date(1651050507220)/",
		"affiliateId" : "e44fda48-8a40-446d-b883-128d361e7a4d",
		"vatMode" : "DECLARE_VAT",
		"displayName" : "Example Ltd. (example-ltd)"
	},
	"licenseNumber" : "e0c469e2-52d7-48a7-b713-e7647acdd476",
	"usersCount" : 5,
	"validFrom" : "/Date(1650837600000)/",
	"validTo" : "/Date(1653429600000)/",
	"ownerName" : "Example Ltd.",
	"product" : "TIME",
	"type" : "BUY",
	"purchaseInfo" : "{\"purchase_id\":\"1154795\"}",
	"promoCode" : "PROMO",
	"interval" : "MONTHLY",
	"displayName" : "e0c469e2-52d7-48a7-b713-e7647acdd476"
}
```
