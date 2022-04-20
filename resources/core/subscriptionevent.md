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
	"id" : "2f811a9a-c143-4732-9db9-d1c02d3f3a04",
	"createdAt" : "/Date(1650452814129)/",
	"updatedAt" : "/Date(1650485454129)/",
	"version" : 6,
	"eventId" : "U4zDY70PScSyvsZ5MbSXbg",
	"type" : "order.completed",
	"data" : "{\"order\" : \"4_pJCiCGThOiBbvlV-DwFQ\",\"id\" : \"4_pJCiCGThOiBbvlV-DwFQ\",\"reference\" : \"ABRASOFTWARE210226-9127-21136\",\"buyerReference\" : null,\"ipAddress\" : \"86.49.238.132\",\"completed\" : true,\"changed\" : 1614318734340,\"changedValue\" : 1614318734340,\"changedInSeconds\" : 1614318734,\"changedDisplay\" : \"2/26/21\",\"language\" : \"en\",\"live\" : false,\"currency\" : \"CZK\",\"payoutCurrency\" : \"USD\",\"...\" : \"...\"}",
	"license" : {
		"id" : "cb5d766f-a6c6-4f6c-a12e-029d96c59b46",
		"createdAt" : "/Date(1650452814129)/",
		"updatedAt" : "/Date(1650492654129)/",
		"version" : 1,
		"account" : {
			"id" : "aac144a7-fece-4824-ac44-2f7890b83084",
			"createdAt" : "/Date(1650452394129)/",
			"updatedAt" : "/Date(1650474654129)/",
			"version" : 0,
			"owner" : {
				"id" : "f8b8ff94-c8ff-42dd-95f6-1f4b3b5d9a7d",
				"createdAt" : "/Date(1650451914129)/",
				"updatedAt" : "/Date(1650525054129)/",
				"version" : 8,
				"firstName" : "John",
				"lastName" : "Doe",
				"nickName" : "Johny D.",
				"email" : "mm80xrp5ty3dov2@testdata.com",
				"phone" : "55 234 555 678",
				"position" : "Senior developer",
				"timeZone" : "America/Sao_Paulo",
				"dateFormat" : "yyyy-MM-dd",
				"timeFormat" : "K:mm a",
				"weekStart" : 7,
				"language" : "pt_BR",
				"password" : "civ6mya8btoyri7ocw3e",
				"secretKey" : "userSecretKey",
				"confirmed" : false,
				"confirmedEmail" : false,
				"active" : false,
				"birthdayRemind" : "/Date(1652306400000)/",
				"workingTimeStart" : "/Date(1650434400000)/",
				"workingTimeEnd" : "/Date(1650466800000)/",
				"created" : "/Date(1650366654129)/",
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
			"created" : "/Date(1650366654129)/",
			"source" : "LINKEDIN",
			"campaign" : "LINKEDIN-2013-C1",
			"deactivationRequestedAt" : "/Date(1650453054129)/",
			"affiliateId" : "c680fe7c-0b2a-45ae-bda9-59abe0f46abc",
			"vatMode" : "DECLARE_VAT",
			"displayName" : "Example Ltd. (example-ltd)"
		},
		"licenseNumber" : "1d887cfd-d08a-428f-8180-58bea482494f",
		"usersCount" : 5,
		"validFrom" : "/Date(1650232800000)/",
		"validTo" : "/Date(1652824800000)/",
		"ownerName" : "Example Ltd.",
		"product" : "TIME",
		"type" : "BUY",
		"purchaseInfo" : "{\"purchase_id\":\"1154795\"}",
		"promoCode" : "PROMO",
		"interval" : "MONTHLY",
		"displayName" : "1d887cfd-d08a-428f-8180-58bea482494f"
	},
	"displayName" : "order.completed"
}
```
