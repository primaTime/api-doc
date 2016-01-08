ContactPerson
==

## URL

	https://api.primaerp.com/v1/time/clients/{id}/contacts

## Properties

| Name        | Type      | Access     | Required | Description                                                                                         |
|-------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| client      | Client    | read write | no       | Provides info about client for which person works.                                                  |
| createdAt   | Date      | read only  | no       | Date of creation.                                                                                   |
| displayName | String    | read only  | no       | Describes an object in human readable form.                                                         |
| email       | String    | read write | no       | Contact person's e-mail address.                                                                    |
| firstName   | String    | read write | no       | Contact person's first name.                                                                        |
| id          | String    | read write | no       | Unique object identifier.                                                                           |
| jobTitle    | String    | read write | no       | Describes the job position held by a person.                                                        |
| lastName    | String    | read write | no       | Contact person's last name.                                                                         |
| phone       | String    | read write | no       | Contact person's phone number.                                                                      |
| trashItem   | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | no       | Last modified date.                                                                                 |
| version     | Long      | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "ContactPerson",
	"path" : "/v1/time/clients/{id}/contacts",
	"fields" : [
		{
			"type" : "Client",
			"path" : "/v1/time/clients",
			"name" : "client",
			"description" : "Provides info about client for which person works.",
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
			"name" : "email",
			"description" : "Contact person's e-mail address.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Email",
					"details" : "regexp .*"
				}
			]
		},
		{
			"type" : "String",
			"name" : "firstName",
			"description" : "Contact person's first name.",
			"access" : "READ_WRITE"
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
			"name" : "jobTitle",
			"description" : "Describes the job position held by a person.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "lastName",
			"description" : "Contact person's last name.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "phone",
			"description" : "Contact person's phone number.",
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
	"id" : "aa6a4523-7c99-48e6-b3fa-6054e7a35f0d",
	"createdAt" : "/Date(1452256879046)/",
	"updatedAt" : "/Date(1452340159046)/",
	"version" : 5,
	"firstName" : "Pedro",
	"lastName" : "Examplo",
	"email" : "pedro@example.com",
	"phone" : "66 234 555 678",
	"jobTitle" : "deputy director",
	"client" : {
		"id" : "ef7e8fa7-ce9d-419b-a034-aff4be993b17",
		"createdAt" : "/Date(1452254719046)/",
		"updatedAt" : "/Date(1452314959046)/",
		"version" : 8,
		"externalSystem" : {
			"id" : "5eb9bbd0-7bd1-454f-9cab-39d017ccdd06",
			"createdAt" : "/Date(1452254239046)/",
			"updatedAt" : "/Date(1452322159046)/",
			"version" : 4,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1452257359045)/",
		"externalSynced" : true,
		"name" : "Example Ltd.",
		"code" : "EXL",
		"email" : "info@example.com",
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
