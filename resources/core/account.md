Account
==

## URL

	https://api.primaerp.com/v1/accounts

## Properties

| Name                    | Type      | Access     | Description                                                                                                                   |
|-------------------------|-----------|------------|-------------------------------------------------------------------------------------------------------------------------------|
| additionalAddressInfo   | String    | read write | Any additional informations related to the address.                                                                           |
| apiKey                  | String    | read write | Unique key for access the application.                                                                                        |
| campaign                | String    | read write | The marketing campaign from which the account originates from. For internal use only.                                         |
| city                    | String    | read write | Name of the city.                                                                                                             |
| confirmed               | Boolean   | read write | The account is confirmed. Users can log into confirmed account only.                                                          |
| countryCode             | String    | read write | Country code according to ISO 3166-1 alpha-3 standard.                                                                        |
| created                 | Date      | read only  | The date and time when the account was created.                                                                               |
| createdAt               | Date      | read only  | Date of creation.                                                                                                             |
| currency                | String    | read write | Default currency for the account.                                                                                             |
| dateFormat              | String    | read write | The date format pattern according to java.text.SimpleDateFormat                                                               |
| deactivationRequestedAt | Date      | read write | The date and time when the account owner requested deactivation.                                                              |
| displayName             | String    | read only  | Describes an object in human readable form.                                                                                   |
| id                      | String    | read write | Unique object identifier.                                                                                                     |
| language                | String    | read write | Preferred language.                                                                                                           |
| name                    | String    | read write | The Account name.                                                                                                             |
| owner                   | User      | read write | The user who has created the account.                                                                                         |
| phone                   | String    | read write | Telephone number.                                                                                                             |
| source                  | String    | read write | The account sources for marketing purposes. For internal use only.                                                            |
| state                   | String    | read write | Name of the state or province.                                                                                                |
| streetAddress           | String    | read write | The street name with the house number.                                                                                        |
| timeFormat              | String    | read write | The time format pattern according to java.text.SimpleDateFormat                                                               |
| timeZone                | String    | read write | The time zone of the place where the account is located. The timezone is identified by the ID according to java.util.TimeZone |
| trashItem               | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified.                           |
| updatedAt               | Date      | read only  | Last modified date.                                                                                                           |
| urlPrefix               | String    | read only  | Identifies the account tenant.                                                                                                |
| vatId                   | String    | read write | VAT identification number.                                                                                                    |
| version                 | Long      | read write | Object version number.                                                                                                        |
| website                 | String    | read write | The website URL.                                                                                                              |
| weekStart               | Byte      | read write | The number of the day when the week starts. Monday is 1 and Sunday is 7.                                                      |
| workingTimeEnd          | Date      | read write | The time when the work day usually end.                                                                                       |
| workingTimeStart        | Date      | read write | The time when the work day usually start.                                                                                     |
| zipCode                 | String    | read write | ZIP or postal code.                                                                                                           |

## Metadata

```JSON
{
	"type" : "Account",
	"fields" : [
		{
			"type" : "String",
			"name" : "additionalAddressInfo",
			"description" : "Any additional informations related to the address.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "apiKey",
			"description" : "Unique key for access the application.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "campaign",
			"description" : "The marketing campaign from which the account originates from. For internal use only.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "city",
			"description" : "Name of the city.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Boolean",
			"name" : "confirmed",
			"description" : "The account is confirmed. Users can log into confirmed account only.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "countryCode",
			"description" : "Country code according to ISO 3166-1 alpha-3 standard.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Pattern",
					"pattern" : "[A-Z]+"
				},
				{
					"type" : "Size",
					"pattern" : null
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
			"name" : "currency",
			"description" : "Default currency for the account.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "dateFormat",
			"description" : "The date format pattern according to java.text.SimpleDateFormat",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Pattern",
					"pattern" : "dd\\.MM\\.yyyy|MM/dd/yyyy|dd/MM/yyyy|yyyy-MM-dd|yyyy\\.MM\\.dd|yyyy/MM/dd"
				}
			]
		},
		{
			"type" : "Date",
			"name" : "deactivationRequestedAt",
			"description" : "The date and time when the account owner requested deactivation.",
			"access" : "READ_WRITE",
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
			"type" : "String",
			"name" : "language",
			"description" : "Preferred language.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "name",
			"description" : "The Account name.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotBlank",
					"pattern" : null
				}
			]
		},
		{
			"type" : "User",
			"name" : "owner",
			"description" : "The user who has created the account.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "phone",
			"description" : "Telephone number.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "source",
			"description" : "The account sources for marketing purposes. For internal use only.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "state",
			"description" : "Name of the state or province.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "streetAddress",
			"description" : "The street name with the house number.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "timeFormat",
			"description" : "The time format pattern according to java.text.SimpleDateFormat",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Pattern",
					"pattern" : "HH:mm|K:mm a"
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
					"pattern" : "^(Africa|America|Asia|Atlantic|Australia|Europe|Indian|Pacific)/.*|UTC|GMT"
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
			"type" : "String",
			"name" : "urlPrefix",
			"description" : "Identifies the account tenant.",
			"access" : "READ_ONLY",
			"constraints" : [
				{
					"type" : "NotBlank",
					"pattern" : null
				},
				{
					"type" : "Pattern",
					"pattern" : "(^[a-z0-9]$)|(^[a-z0-9][-a-z0-9]*[a-z0-9]$)"
				}
			]
		},
		{
			"type" : "String",
			"name" : "vatId",
			"description" : "VAT identification number.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Long",
			"name" : "version",
			"description" : "Object version number.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "website",
			"description" : "The website URL.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Byte",
			"name" : "weekStart",
			"description" : "The number of the day when the week starts. Monday is 1 and Sunday is 7.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Min",
					"pattern" : null
				},
				{
					"type" : "Max",
					"pattern" : null
				}
			]
		},
		{
			"type" : "Date",
			"name" : "workingTimeEnd",
			"description" : "The time when the work day usually end.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "workingTimeStart",
			"description" : "The time when the work day usually start.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "zipCode",
			"description" : "ZIP or postal code.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
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
	"id" : "0af216e3-6c15-47c8-aa13-9f690c0d6532",
	"createdAt" : "/Date(1412167967855)/",
	"updatedAt" : "/Date(1412197007855)/",
	"version" : 0,
	"owner" : {
		"id" : "1a9ca0ee-2d1c-46b2-8afc-a205df4bdafa",
		"createdAt" : "/Date(1412167007855)/",
		"updatedAt" : "/Date(1412251007855)/",
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
		"birthdayRemind" : "/Date(1412978400000)/",
		"workingTimeStart" : "/Date(1412143200000)/",
		"workingTimeEnd" : "/Date(1412175600000)/",
		"created" : "/Date(1412081807855)/",
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
	"workingTimeStart" : "/Date(1412143200000)/",
	"workingTimeEnd" : "/Date(1412175600000)/",
	"created" : "/Date(1412081807855)/",
	"source" : "LINKEDIN",
	"campaign" : "LINKEDIN-2013-C1",
	"deactivationRequestedAt" : "/Date(1412168207855)/",
	"displayName" : "Example Ltd. (example-ltd)"
}
```
