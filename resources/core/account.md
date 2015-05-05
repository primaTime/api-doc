Account
==

## URL

	https://api.primaerp.com/v1/accounts

	https://api.primaerp.com/v1/accounts/{id}/$setUrlPrefix

	https://api.primaerp.com/v1/accounts/@own

## Properties

| Name                    | Type      | Access     | Required | Description                                                                                                                   |
|-------------------------|-----------|------------|----------|-------------------------------------------------------------------------------------------------------------------------------|
| additionalAddressInfo   | String    | read write | no       | Any additional informations related to the address.                                                                           |
| affiliateId             | String    | read write | no       | An identification of the subject who has contributed to the account registration.                                             |
| apiKey                  | String    | read write | no       | Unique key for access the application.                                                                                        |
| campaign                | String    | read write | no       | The marketing campaign from which the account originates from. For internal use only.                                         |
| city                    | String    | read write | no       | Name of the city.                                                                                                             |
| confirmed               | Boolean   | read write | no       | The account is confirmed. Users can log into confirmed account only.                                                          |
| countryCode             | String    | read write | no       | Country code according to ISO 3166-1 alpha-3 standard.                                                                        |
| created                 | Date      | read only  | no       | The date and time when the account was created.                                                                               |
| createdAt               | Date      | read only  | no       | Date of creation.                                                                                                             |
| currency                | String    | read write | no       | Default currency for the account.                                                                                             |
| dateFormat              | String    | read write | no       | The date format pattern according to java.text.SimpleDateFormat                                                               |
| deactivationRequestedAt | Date      | read write | no       | The date and time when the account owner requested deactivation.                                                              |
| displayName             | String    | read only  | no       | Describes an object in human readable form.                                                                                   |
| id                      | String    | read write | no       | Unique object identifier.                                                                                                     |
| language                | String    | read write | no       | Preferred language.                                                                                                           |
| name                    | String    | read write | YES      | The Account name.                                                                                                             |
| owner                   | User      | read write | no       | The user who has created the account.                                                                                         |
| phone                   | String    | read write | no       | Telephone number.                                                                                                             |
| source                  | String    | read write | no       | The account sources for marketing purposes. For internal use only.                                                            |
| state                   | String    | read write | no       | Name of the state or province.                                                                                                |
| streetAddress           | String    | read write | no       | The street name with the house number.                                                                                        |
| timeFormat              | String    | read write | no       | The time format pattern according to java.text.SimpleDateFormat                                                               |
| timeZone                | String    | read write | no       | The time zone of the place where the account is located. The timezone is identified by the ID according to java.util.TimeZone |
| trashItem               | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified.                           |
| updatedAt               | Date      | read only  | no       | Last modified date.                                                                                                           |
| urlPrefix               | String    | read only  | no       | Identifies the account tenant.                                                                                                |
| vatId                   | String    | read write | no       | VAT identification number.                                                                                                    |
| version                 | Long      | read write | no       | Object version number.                                                                                                        |
| website                 | String    | read write | no       | The website URL.                                                                                                              |
| weekStart               | Byte      | read write | no       | The number of the day when the week starts. Monday is 1 and Sunday is 7.                                                      |
| workingTimeEnd          | Date      | read write | no       | The time when the work day usually end.                                                                                       |
| workingTimeStart        | Date      | read write | no       | The time when the work day usually start.                                                                                     |
| zipCode                 | String    | read write | no       | ZIP or postal code.                                                                                                           |

## Metadata

```JSON
{
	"type" : "Account",
	"path" : "/v1/accounts",
	"fields" : [
		{
			"type" : "String",
			"name" : "additionalAddressInfo",
			"description" : "Any additional informations related to the address.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "affiliateId",
			"description" : "An identification of the subject who has contributed to the account registration.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "apiKey",
			"description" : "Unique key for access the application.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "campaign",
			"description" : "The marketing campaign from which the account originates from. For internal use only.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "city",
			"description" : "Name of the city.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "confirmed",
			"description" : "The account is confirmed. Users can log into confirmed account only.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "countryCode",
			"description" : "Country code according to ISO 3166-1 alpha-3 standard.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Size",
					"details" : "min 3, max 3"
				},
				{
					"type" : "Pattern",
					"details" : "regexp [A-Z]+"
				}
			]
		},
		{
			"type" : "Date",
			"name" : "created",
			"description" : "The date and time when the account was created.",
			"access" : "READ_ONLY",
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
			"name" : "currency",
			"description" : "Default currency for the account.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "dateFormat",
			"description" : "The date format pattern according to java.text.SimpleDateFormat",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Pattern",
					"details" : "regexp dd\\.MM\\.yyyy|MM/dd/yyyy|dd/MM/yyyy|yyyy-MM-dd|yyyy\\.MM\\.dd|yyyy/MM/dd"
				}
			]
		},
		{
			"type" : "Date",
			"name" : "deactivationRequestedAt",
			"description" : "The date and time when the account owner requested deactivation.",
			"access" : "READ_WRITE"
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
			"name" : "language",
			"description" : "Preferred language.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "name",
			"description" : "The Account name.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotBlank"
				}
			]
		},
		{
			"type" : "User",
			"path" : "/v1/users",
			"name" : "owner",
			"description" : "The user who has created the account.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "phone",
			"description" : "Telephone number.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "source",
			"description" : "The account sources for marketing purposes. For internal use only.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "state",
			"description" : "Name of the state or province.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "streetAddress",
			"description" : "The street name with the house number.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "timeFormat",
			"description" : "The time format pattern according to java.text.SimpleDateFormat",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Pattern",
					"details" : "regexp HH:mm|K:mm a"
				}
			]
		},
		{
			"type" : "String",
			"name" : "timeZone",
			"description" : "The time zone of the place where the account is located. The timezone is identified by the ID according to java.util.TimeZone",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Pattern",
					"details" : "regexp ^(Africa|America|Asia|Atlantic|Australia|Europe|Indian|Pacific)/.*|UTC|GMT"
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
			"type" : "String",
			"name" : "urlPrefix",
			"description" : "Identifies the account tenant.",
			"access" : "READ_ONLY",
			"constraints" : [
				{
					"type" : "Pattern",
					"details" : "regexp (^[a-z0-9]$)|(^[a-z0-9][-a-z0-9]*[a-z0-9]$)"
				},
				{
					"type" : "NotBlank"
				}
			]
		},
		{
			"type" : "String",
			"name" : "vatId",
			"description" : "VAT identification number.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Long",
			"name" : "version",
			"description" : "Object version number.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "website",
			"description" : "The website URL.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Byte",
			"name" : "weekStart",
			"description" : "The number of the day when the week starts. Monday is 1 and Sunday is 7.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Max",
					"details" : "value 7"
				},
				{
					"type" : "Min",
					"details" : "value 1"
				}
			]
		},
		{
			"type" : "Date",
			"name" : "workingTimeEnd",
			"description" : "The time when the work day usually end.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "workingTimeStart",
			"description" : "The time when the work day usually start.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "zipCode",
			"description" : "ZIP or postal code.",
			"access" : "READ_WRITE"
		}
	],
	"cascades" : [
		{
			"cascadeType" : "REMOVE",
			"objectTypes" : [
				"TrashItem",
				"License"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "90c338ee-e942-478c-afea-149329bfd077",
	"createdAt" : "/Date(1430140254100)/",
	"updatedAt" : "/Date(1430175114100)/",
	"version" : 2,
	"owner" : {
		"id" : "a03ae044-a7a0-45c2-a962-5863747d3dcb",
		"createdAt" : "/Date(1430140134100)/",
		"updatedAt" : "/Date(1430207514100)/",
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
		"birthdayRemind" : "/Date(1430949600000)/",
		"workingTimeStart" : "/Date(1430114400000)/",
		"workingTimeEnd" : "/Date(1430146800000)/",
		"created" : "/Date(1430056314100)/",
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
	"countryCode" : "BRA",
	"phone" : "+55 123 456 789",
	"website" : "http://www.example.com",
	"vatId" : "12.345.678/0009-66",
	"timeZone" : "America/Cuiaba",
	"dateFormat" : "dd/MM/yyyy",
	"timeFormat" : "HH:mm",
	"weekStart" : 7,
	"language" : "en_US",
	"apiKey" : "0165e7d3-c99f-41b5-bf8c-03222edcf681",
	"confirmed" : true,
	"currency" : "USD",
	"workingTimeStart" : "/Date(1430114400000)/",
	"workingTimeEnd" : "/Date(1430146800000)/",
	"created" : "/Date(1430056314100)/",
	"source" : "LINKEDIN",
	"campaign" : "LINKEDIN-2013-C1",
	"deactivationRequestedAt" : "/Date(1430142714100)/",
	"affiliateId" : "711583cd-5a91-487f-ac38-f0addff32ef6",
	"displayName" : "Example Ltd. (example-ltd)"
}
```
