License
==

## URL

	https://api.primaerp.com/v1/licenses

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
	"id" : "13655be3-66ed-4fbb-b745-3b5d5bbf8adb",
	"createdAt" : "/Date(1416913017531)/",
	"updatedAt" : "/Date(1416955917531)/",
	"version" : 7,
	"account" : {
		"id" : "a4d0f8d8-dd13-4ac5-a759-d06dc98bec6e",
		"createdAt" : "/Date(1416915537531)/",
		"updatedAt" : "/Date(1416995517531)/",
		"version" : 6,
		"owner" : {
			"id" : "c83cd263-1b20-44fe-9228-6390adaa3fe7",
			"createdAt" : "/Date(1416914457531)/",
			"updatedAt" : "/Date(1416945117531)/",
			"version" : 2,
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
			"birthdayRemind" : "/Date(1417734000000)/",
			"workingTimeStart" : "/Date(1416898800000)/",
			"workingTimeEnd" : "/Date(1416931200000)/",
			"created" : "/Date(1416829917531)/",
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
		"workingTimeStart" : "/Date(1416898800000)/",
		"workingTimeEnd" : "/Date(1416931200000)/",
		"created" : "/Date(1416829917531)/",
		"source" : "LINKEDIN",
		"campaign" : "LINKEDIN-2013-C1",
		"deactivationRequestedAt" : "/Date(1416916317531)/",
		"affiliateId" : "9a7a31fa-18dc-4a4c-b21d-ba07fdab3d31",
		"displayName" : "Example Ltd. (example-ltd)"
	},
	"licenseNumber" : "0446d8cf-9bec-4bf1-b154-b54690719b42",
	"usersCount" : 5,
	"validFrom" : "/Date(1416697200000)/",
	"validTo" : "/Date(1419289200000)/",
	"ownerName" : "Example Ltd.",
	"product" : "TIME",
	"type" : "BUY",
	"purchaseInfo" : "{\"purchase_id\":\"1154795\"}",
	"displayName" : "0446d8cf-9bec-4bf1-b154-b54690719b42"
}
```
