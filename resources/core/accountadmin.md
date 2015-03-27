AccountAdmin
==

## URL

	https://api.primaerp.com/v1/accountadmins

## Properties

| Name        | Type      | Access     | Required                                                               | Description                                                                                         |
|-------------|-----------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| account     | Account   | read write | YES                                                                    | Determines which account is administered.                                                           |
| createdAt   | Date      | read only  | no                                                                     | Date of creation.                                                                                   |
| displayName | String    | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| id          | String    | read write | no                                                                     | Unique object identifier.                                                                           |
| trashItem   | TrashItem | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | no                                                                     | Last modified date.                                                                                 |
| user        | User      | read write | YES                                                                    | The user who is the account administrator.                                                          |
| version     | Long      | read write | no                                                                     | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "AccountAdmin",
	"path" : "/v1/accountadmins",
	"fields" : [
		{
			"type" : "Account",
			"path" : "/v1/accounts",
			"name" : "account",
			"description" : "Determines which account is administered.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
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
			"type" : "TrashItem",
			"path" : "/v1/trash",
			"name" : "trashItem",
			"description" : "Informs whether an object is in the trash. An object is in the trash if a trash item was specified.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "updatedAt",
			"description" : "Last modified date.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "User",
			"path" : "/v1/users",
			"name" : "user",
			"description" : "The user who is the account administrator.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
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
	"id" : "9d976152-7e42-49dd-92b7-541262fa20a8",
	"createdAt" : "/Date(1424882714054)/",
	"updatedAt" : "/Date(1424883254054)/",
	"version" : 2,
	"account" : {
		"id" : "b2005f46-af55-45c8-9637-69957b1a5135",
		"createdAt" : "/Date(1424881874054)/",
		"updatedAt" : "/Date(1424944454054)/",
		"version" : 9,
		"owner" : {
			"id" : "4be88ffc-0919-4092-ba22-6632cc7f34b4",
			"createdAt" : "/Date(1424881994054)/",
			"updatedAt" : "/Date(1424883254054)/",
			"version" : 4,
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
			"birthdayRemind" : "/Date(1425682800000)/",
			"workingTimeStart" : "/Date(1424847600000)/",
			"workingTimeEnd" : "/Date(1424880000000)/",
			"created" : "/Date(1424796854054)/",
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
		"workingTimeStart" : "/Date(1424847600000)/",
		"workingTimeEnd" : "/Date(1424880000000)/",
		"created" : "/Date(1424796854054)/",
		"source" : "LINKEDIN",
		"campaign" : "LINKEDIN-2013-C1",
		"deactivationRequestedAt" : "/Date(1424883254054)/",
		"affiliateId" : "ed91ad2f-a1f1-4bef-8a30-7d7b24d995f9",
		"displayName" : "Example Ltd. (example-ltd)"
	},
	"user" : {
		"id" : "97f16d45-dd43-49ec-bbc2-efd5880160cc",
		"createdAt" : "/Date(1424883254054)/",
		"updatedAt" : "/Date(1424904854054)/",
		"version" : 8,
		"firstName" : "Charles",
		"lastName" : "Johnson",
		"nickName" : "Charlie",
		"email" : "charles.johnson@example.com",
		"phone" : "55 345 666 789",
		"position" : "Administrator",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "dd.MM.yyyy",
		"timeFormat" : "HH:mm:ss",
		"weekStart" : 1,
		"language" : "pt_BR",
		"password" : "",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1426114800000)/",
		"workingTimeStart" : "/Date(1424847600000)/",
		"workingTimeEnd" : "/Date(1424880000000)/",
		"created" : "/Date(1424796854054)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Johnson Charles"
	},
	"displayName" : "Johnson Charles"
}
```
