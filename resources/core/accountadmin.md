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
	"id" : "242f2319-5bf6-49d1-bcd9-befb116dc8f9",
	"createdAt" : "/Date(1421141017235)/",
	"updatedAt" : "/Date(1421223937235)/",
	"version" : 8,
	"account" : {
		"id" : "e2cb1c09-fc46-4c5c-8b1f-09683c87cfc9",
		"createdAt" : "/Date(1421140297235)/",
		"updatedAt" : "/Date(1421187937235)/",
		"version" : 9,
		"owner" : {
			"id" : "c8ca7fc1-372b-42cc-83e4-9708784efa2d",
			"createdAt" : "/Date(1421138017235)/",
			"updatedAt" : "/Date(1421191537235)/",
			"version" : 3,
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
			"created" : "/Date(1421054737234)/",
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
		"created" : "/Date(1421054737234)/",
		"source" : "LINKEDIN",
		"campaign" : "LINKEDIN-2013-C1",
		"deactivationRequestedAt" : "/Date(1421141137235)/",
		"affiliateId" : "34a8b093-9ae3-45ac-97de-f6ea500736c5",
		"displayName" : "Example Ltd. (example-ltd)"
	},
	"user" : {
		"id" : "61b41517-5890-432a-9060-e179b1ece0b6",
		"createdAt" : "/Date(1421138977235)/",
		"updatedAt" : "/Date(1421159137235)/",
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
		"birthdayRemind" : "/Date(1422399600000)/",
		"workingTimeStart" : "/Date(1421132400000)/",
		"workingTimeEnd" : "/Date(1421164800000)/",
		"created" : "/Date(1421054737235)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Johnson Charles"
	},
	"displayName" : "Johnson Charles"
}
```
