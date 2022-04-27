SubscriptionEvent
==

## URL

	https://api.primaerp.com/v1/subscriptionEvents

## Properties

| Name        | Type      | Access     | Required | Description                                                                                         |
|-------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| createdAt   | Date      | read only  | no       | Date of creation.                                                                                   |
| data        | String    | read write | no       | The event data - varies per event type.                                                             |
| displayName | String    | read only  | no       | Describes an object in human readable form.                                                         |
| eventId     | String    | read write | YES      | Unique event identifier.                                                                            |
| id          | String    | read write | no       | Unique object identifier.                                                                           |
| license     | License   | read write | YES      | Provides info about the license for which the event was created.                                    |
| trashItem   | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| type        | String    | read write | no       | Type of the event.                                                                                  |
| updatedAt   | Date      | read only  | no       | Last modified date.                                                                                 |
| version     | Long      | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "SubscriptionEvent",
	"path" : "/v1/subscriptionEvents",
	"fields" : [
		{
			"type" : "Date",
			"name" : "createdAt",
			"description" : "Date of creation.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "String",
			"name" : "data",
			"description" : "The event data - varies per event type.",
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
			"name" : "eventId",
			"description" : "Unique event identifier.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
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
			"type" : "License",
			"path" : "/v1/licenses",
			"name" : "license",
			"description" : "Provides info about the license for which the event was created.",
			"access" : "READ_WRITE",
			"constraints" : [
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
			"type" : "String",
			"name" : "type",
			"description" : "Type of the event.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "updatedAt",
			"description" : "Last modified date.",
			"access" : "READ_ONLY"
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
	"id" : "45a47433-4a09-4ee7-b233-32bf96e14e16",
	"createdAt" : "/Date(1651050087128)/",
	"updatedAt" : "/Date(1651075707128)/",
	"version" : 2,
	"eventId" : "U4zDY70PScSyvsZ5MbSXbg",
	"type" : "order.completed",
	"data" : "{\"order\" : \"4_pJCiCGThOiBbvlV-DwFQ\",\"id\" : \"4_pJCiCGThOiBbvlV-DwFQ\",\"reference\" : \"ABRASOFTWARE210226-9127-21136\",\"buyerReference\" : null,\"ipAddress\" : \"86.49.238.132\",\"completed\" : true,\"changed\" : 1614318734340,\"changedValue\" : 1614318734340,\"changedInSeconds\" : 1614318734,\"changedDisplay\" : \"2/26/21\",\"language\" : \"en\",\"live\" : false,\"currency\" : \"CZK\",\"payoutCurrency\" : \"USD\",\"...\" : \"...\"}",
	"license" : {
		"id" : "d7bd0704-97bb-4792-be6a-c297f428453f",
		"createdAt" : "/Date(1651049727129)/",
		"updatedAt" : "/Date(1651115307129)/",
		"version" : 1,
		"account" : {
			"id" : "19a1bb1d-e998-4b51-a164-66ff367b8535",
			"createdAt" : "/Date(1651048587129)/",
			"updatedAt" : "/Date(1651093707129)/",
			"version" : 4,
			"owner" : {
				"id" : "f80c5cd1-e849-40fb-a9d1-4598ab322849",
				"createdAt" : "/Date(1651048587129)/",
				"updatedAt" : "/Date(1651126107129)/",
				"version" : 9,
				"firstName" : "John",
				"lastName" : "Doe",
				"nickName" : "Johny D.",
				"email" : "auzgts_jk20yxi4@testdata.com",
				"phone" : "55 234 555 678",
				"position" : "Senior developer",
				"timeZone" : "America/Sao_Paulo",
				"dateFormat" : "yyyy-MM-dd",
				"timeFormat" : "K:mm a",
				"weekStart" : 7,
				"language" : "pt_BR",
				"password" : "evj0qmkracp5j9m2o10e",
				"secretKey" : "userSecretKey",
				"confirmed" : false,
				"confirmedEmail" : false,
				"active" : false,
				"birthdayRemind" : "/Date(1652911200000)/",
				"workingTimeStart" : "/Date(1651039200000)/",
				"workingTimeEnd" : "/Date(1651071600000)/",
				"created" : "/Date(1650964107128)/",
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
			"created" : "/Date(1650964107128)/",
			"source" : "LINKEDIN",
			"campaign" : "LINKEDIN-2013-C1",
			"deactivationRequestedAt" : "/Date(1651050507128)/",
			"affiliateId" : "80b7246f-e776-4b30-8492-7f2c4f8bd7e3",
			"vatMode" : "DECLARE_VAT",
			"displayName" : "Example Ltd. (example-ltd)"
		},
		"licenseNumber" : "df2c1a37-61f1-4932-aaa1-5ffbb0994fce",
		"usersCount" : 5,
		"validFrom" : "/Date(1650837600000)/",
		"validTo" : "/Date(1653429600000)/",
		"ownerName" : "Example Ltd.",
		"product" : "TIME",
		"type" : "BUY",
		"purchaseInfo" : "{\"purchase_id\":\"1154795\"}",
		"promoCode" : "PROMO",
		"interval" : "MONTHLY",
		"displayName" : "df2c1a37-61f1-4932-aaa1-5ffbb0994fce"
	},
	"displayName" : "order.completed"
}
```
