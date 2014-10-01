ContactPerson
==

## URL

	https://api.primaerp.com/v1/time/clients/{id}/contacts

## Properties

| Name        | Type      | Access     | Description                                                                                         |
|-------------|-----------|------------|-----------------------------------------------------------------------------------------------------|
| client      | Client    | read write | Provides info about client for which person works.                                                  |
| createdAt   | Date      | read only  | Date of creation.                                                                                   |
| displayName | String    | read only  | Describes an object in human readable form.                                                         |
| email       | String    | read write | Contact person's e-mail address.                                                                    |
| firstName   | String    | read write | Contact person's first name.                                                                        |
| id          | String    | read write | Unique object identifier.                                                                           |
| jobTitle    | String    | read write | Describes the job position held by a person.                                                        |
| lastName    | String    | read write | Contact person's last name.                                                                         |
| phone       | String    | read write | Contact person's phone number.                                                                      |
| trashItem   | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | Last modified date.                                                                                 |
| version     | Long      | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "ContactPerson",
	"fields" : [
		{
			"type" : "Client",
			"name" : "client",
			"description" : "Provides info about client for which person works.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
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
			"name" : "email",
			"description" : "Contact person's e-mail address.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Email",
					"pattern" : ".*"
				}
			]
		},
		{
			"type" : "String",
			"name" : "firstName",
			"description" : "Contact person's first name.",
			"access" : "READ_WRITE",
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
			"name" : "jobTitle",
			"description" : "Describes the job position held by a person.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "lastName",
			"description" : "Contact person's last name.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "phone",
			"description" : "Contact person's phone number.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
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
	"id" : "b7b67ae7-fdb6-4cdb-9d58-439aaee6a3cd",
	"createdAt" : "/Date(1412165268997)/",
	"updatedAt" : "/Date(1412207808997)/",
	"version" : 4,
	"firstName" : "Pedro",
	"lastName" : "Examplo",
	"email" : "pedro@example.com",
	"phone" : "66 234 555 678",
	"jobTitle" : "deputy director",
	"client" : {
		"id" : "f970a11e-e509-4f6a-906a-5390fb9c5dee",
		"createdAt" : "/Date(1412165988997)/",
		"updatedAt" : "/Date(1412189808997)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "3c4ce538-0669-4650-bcf8-d7666d82e440",
			"createdAt" : "/Date(1412165268997)/",
			"updatedAt" : "/Date(1412233008997)/",
			"version" : 5,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1412168208996)/",
		"externalSynced" : true,
		"name" : "Example Ltd.",
		"code" : "EXL",
		"email" : "info@example.com",
		"active" : true,
		"billsCount" : 2,
		"projectsCount" : 1,
		"streetAddress" : "Rua 123 Sul Avenida Lo 15",
		"additionalAddressInfo" : "",
		"zipCode" : "89020-000",
		"city" : "Palmas",
		"state" : "Tocantins",
		"countryCode" : "BRA",
		"phone" : "+66 987 654 321",
		"vatId" : "23.456.789/0001-77",
		"website" : "http://www.example.com/",
		"displayName" : "Example Ltd."
	},
	"displayName" : "Examplo Pedro"
}
```
