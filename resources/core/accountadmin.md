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
| version     | Long      | read only  | no                                                                     | Object version number.                                                                              |

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
	"id" : "c770c4da-9ff7-41aa-9701-2ec2db3f494a",
	"createdAt" : "/Date(1417601579933)/",
	"updatedAt" : "/Date(1417619339933)/",
	"version" : 4,
	"account" : {
		"id" : "0398d495-3619-4e98-8831-cf6d28924cc5",
		"createdAt" : "/Date(1417604459933)/",
		"updatedAt" : "/Date(1417622939933)/",
		"version" : 7,
		"owner" : {
			"id" : "72f332ed-f19b-41c7-a4a5-e3f2c36c7e47",
			"createdAt" : "/Date(1417603559933)/",
			"updatedAt" : "/Date(1417658939933)/",
			"version" : 6,
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
			"birthdayRemind" : "/Date(1418425200000)/",
			"workingTimeStart" : "/Date(1417590000000)/",
			"workingTimeEnd" : "/Date(1417622400000)/",
			"created" : "/Date(1417518539933)/",
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
		"workingTimeStart" : "/Date(1417590000000)/",
		"workingTimeEnd" : "/Date(1417622400000)/",
		"created" : "/Date(1417518539933)/",
		"source" : "LINKEDIN",
		"campaign" : "LINKEDIN-2013-C1",
		"deactivationRequestedAt" : "/Date(1417604939933)/",
		"affiliateId" : "75592998-f5f3-49ad-b404-44fbbd417293",
		"displayName" : "Example Ltd. (example-ltd)"
	},
	"user" : {
		"id" : "24d62fd6-ec63-4253-b4af-95dc8eaec668",
		"createdAt" : "/Date(1417604819933)/",
		"updatedAt" : "/Date(1417658939933)/",
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
		"birthdayRemind" : "/Date(1418857200000)/",
		"workingTimeStart" : "/Date(1417590000000)/",
		"workingTimeEnd" : "/Date(1417622400000)/",
		"created" : "/Date(1417518539933)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Johnson Charles"
	},
	"displayName" : "Johnson Charles"
}
```
