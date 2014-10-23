AccountAdmin
==

## URL

	https://api.primaerp.com/v1/accountadmins

## Properties

| Name        | Type      | Access     | Description                                                                                         |
|-------------|-----------|------------|-----------------------------------------------------------------------------------------------------|
| account     | Account   | read write | Determines which account is administered.                                                           |
| createdAt   | Date      | read only  | Date of creation.                                                                                   |
| displayName | String    | read only  | Describes an object in human readable form.                                                         |
| id          | String    | read write | Unique object identifier.                                                                           |
| trashItem   | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | Last modified date.                                                                                 |
| user        | User      | read write | The user who is the account administrator.                                                          |
| version     | Long      | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "AccountAdmin",
	"fields" : [
		{
			"type" : "Account",
			"name" : "account",
			"description" : "Determines which account is administered.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
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
			"type" : "User",
			"name" : "user",
			"description" : "The user who is the account administrator.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
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
	"id" : "eb1bc985-a2a6-4786-a4f3-cab8e18fdf75",
	"createdAt" : "/Date(1413985380014)/",
	"updatedAt" : "/Date(1414040940014)/",
	"version" : 6,
	"account" : {
		"id" : "d9aab7e4-d039-4fc3-9708-cc6411935a31",
		"createdAt" : "/Date(1413983940014)/",
		"updatedAt" : "/Date(1414033740014)/",
		"version" : 7,
		"owner" : {
			"id" : "88dfa68b-e736-4be9-bb05-316344fdbe3f",
			"createdAt" : "/Date(1413985560014)/",
			"updatedAt" : "/Date(1414033740014)/",
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
			"birthdayRemind" : "/Date(1414796400000)/",
			"workingTimeStart" : "/Date(1413957600000)/",
			"workingTimeEnd" : "/Date(1413990000000)/",
			"created" : "/Date(1413900540014)/",
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
		"workingTimeStart" : "/Date(1413957600000)/",
		"workingTimeEnd" : "/Date(1413990000000)/",
		"created" : "/Date(1413900540014)/",
		"source" : "LINKEDIN",
		"campaign" : "LINKEDIN-2013-C1",
		"deactivationRequestedAt" : "/Date(1413986940014)/",
		"affiliateId" : "aa1a5160-9749-471a-a041-99440e159b87",
		"displayName" : "Example Ltd. (example-ltd)"
	},
	"user" : {
		"id" : "309516fd-ccf3-406c-81d7-93976a6aa366",
		"createdAt" : "/Date(1413984600014)/",
		"updatedAt" : "/Date(1414040940014)/",
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
		"birthdayRemind" : "/Date(1415228400000)/",
		"workingTimeStart" : "/Date(1413957600000)/",
		"workingTimeEnd" : "/Date(1413990000000)/",
		"created" : "/Date(1413900540014)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Johnson Charles"
	},
	"displayName" : "Johnson Charles"
}
```
