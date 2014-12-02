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
| version       | Long        | read write | no                                                                     | Object version number.                                                                              |

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
	"id" : "98d5a0ee-a327-460e-9844-997a2ec6b371",
	"createdAt" : "/Date(1417518880204)/",
	"updatedAt" : "/Date(1417568500204)/",
	"version" : 8,
	"account" : {
		"id" : "5e15163e-cca8-4e5a-b0f6-01d89109b313",
		"createdAt" : "/Date(1417521640205)/",
		"updatedAt" : "/Date(1417600900205)/",
		"version" : 3,
		"owner" : {
			"id" : "ae647f9b-dc55-43fb-901e-ab627e91c80a",
			"createdAt" : "/Date(1417521400205)/",
			"updatedAt" : "/Date(1417572100205)/",
			"version" : 9,
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
			"birthdayRemind" : "/Date(1418338800000)/",
			"workingTimeStart" : "/Date(1417503600000)/",
			"workingTimeEnd" : "/Date(1417536000000)/",
			"created" : "/Date(1417435300204)/",
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
		"workingTimeStart" : "/Date(1417503600000)/",
		"workingTimeEnd" : "/Date(1417536000000)/",
		"created" : "/Date(1417435300204)/",
		"source" : "LINKEDIN",
		"campaign" : "LINKEDIN-2013-C1",
		"deactivationRequestedAt" : "/Date(1417521700204)/",
		"affiliateId" : "89e4638e-9d57-480e-9105-edbd73d5c712",
		"displayName" : "Example Ltd. (example-ltd)"
	},
	"licenseNumber" : "97d98222-293d-4dff-bc0d-eb54a5a9e2cb",
	"usersCount" : 5,
	"validFrom" : "/Date(1417302000000)/",
	"validTo" : "/Date(1419894000000)/",
	"ownerName" : "Example Ltd.",
	"product" : "TIME",
	"type" : "BUY",
	"purchaseInfo" : "{\"purchase_id\":\"1154795\"}",
	"displayName" : "97d98222-293d-4dff-bc0d-eb54a5a9e2cb"
}
```
