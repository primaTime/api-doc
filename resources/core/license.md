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
	"id" : "a89596e3-f2c1-4a16-a047-67817be4be5d",
	"createdAt" : "/Date(1650453054292)/",
	"updatedAt" : "/Date(1650496254292)/",
	"version" : 3,
	"account" : {
		"id" : "3910cdd5-26e9-4e34-a829-1da0543b0406",
		"createdAt" : "/Date(1650452274292)/",
		"updatedAt" : "/Date(1650503454292)/",
		"version" : 8,
		"owner" : {
			"id" : "7ce1fdb1-fbc1-4461-a093-265b149c7a2a",
			"createdAt" : "/Date(1650450114292)/",
			"updatedAt" : "/Date(1650456654292)/",
			"version" : 8,
			"firstName" : "John",
			"lastName" : "Doe",
			"nickName" : "Johny D.",
			"email" : "twhx65dr3fta3gs@testdata.com",
			"phone" : "55 234 555 678",
			"position" : "Senior developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "yyyy-MM-dd",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "pt_BR",
			"password" : "4dyda8cb7hho_k0b2755",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1652306400000)/",
			"workingTimeStart" : "/Date(1650434400000)/",
			"workingTimeEnd" : "/Date(1650466800000)/",
			"created" : "/Date(1650366654291)/",
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
		"workingTimeStart" : "/Date(1650434400000)/",
		"workingTimeEnd" : "/Date(1650466800000)/",
		"created" : "/Date(1650366654291)/",
		"source" : "LINKEDIN",
		"campaign" : "LINKEDIN-2013-C1",
		"deactivationRequestedAt" : "/Date(1650453054291)/",
		"affiliateId" : "4769250c-7c94-4744-930e-0ea54b340096",
		"vatMode" : "DECLARE_VAT",
		"displayName" : "Example Ltd. (example-ltd)"
	},
	"licenseNumber" : "56f4d607-efa8-4573-bf9e-48ff9449f7a5",
	"usersCount" : 5,
	"validFrom" : "/Date(1650232800000)/",
	"validTo" : "/Date(1652824800000)/",
	"ownerName" : "Example Ltd.",
	"product" : "TIME",
	"type" : "BUY",
	"purchaseInfo" : "{\"purchase_id\":\"1154795\"}",
	"promoCode" : "PROMO",
	"interval" : "MONTHLY",
	"displayName" : "56f4d607-efa8-4573-bf9e-48ff9449f7a5"
}
```
