Client
==

## URL

	https://api.primaerp.com/v1/time/clients

## Properties

| Name                  | Type           | Access     | Description                                                                                         |
|-----------------------|----------------|------------|-----------------------------------------------------------------------------------------------------|
| active                | Boolean        | read write | Determines whether the client is currently active.                                                  |
| additionalAddressInfo | String         | read write | Any additional information related to the address.                                                  |
| billsCount            | Long           | read only  | Counts the number of bills which were issued for the client.                                        |
| city                  | String         | read write | Name of the city.                                                                                   |
| code                  | String         | read write | A code or an abbreviation of the client.                                                            |
| countryCode           | String         | read write | Country code according to ISO 3166-1 alpha-3 standard.                                              |
| createdAt             | Date           | read only  | Date of creation.                                                                                   |
| displayName           | String         | read only  | Describes an object in human readable form.                                                         |
| email                 | String         | read write | E-mail address of the client.                                                                       |
| externalBrowsableUrl  | String         | read write | Human accessible link in external system.                                                           |
| externalResourceId    | String         | read write | Unique external system identifier.                                                                  |
| externalSynced        | Boolean        | write only | Determines whether an object was synced with the external system.                                   |
| externalSyncedAt      | Date           | read only  | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.   |
| externalSystem        | ExternalSystem | read write | External system which maintains this object.                                                        |
| id                    | String         | read write | Unique object identifier.                                                                           |
| name                  | String         | read write | Client name.                                                                                        |
| phone                 | String         | read write | Telephone number.                                                                                   |
| projectsCount         | Long           | read only  | Counts the number of projects being done for the client.                                            |
| state                 | String         | read write | Name of the state or province.                                                                      |
| streetAddress         | String         | read write | Street name with the house number.                                                                  |
| trashItem             | TrashItem      | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt             | Date           | read only  | Last modified date.                                                                                 |
| vatId                 | String         | read write | VAT identification number.                                                                          |
| version               | Long           | read write | Object version number.                                                                              |
| website               | String         | read write | Website URL.                                                                                        |
| zipCode               | String         | read write | ZIP or postal code.                                                                                 |

## Metadata

```JSON
{
	"type" : "Client",
	"path" : "/v1/time/clients",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "active",
			"description" : "Determines whether the client is currently active.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "additionalAddressInfo",
			"description" : "Any additional information related to the address.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Long",
			"name" : "billsCount",
			"description" : "Counts the number of bills which were issued for the client.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "String",
			"name" : "city",
			"description" : "Name of the city.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "code",
			"description" : "A code or an abbreviation of the client.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Size",
					"pattern" : null
				}
			]
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
			"description" : "E-mail address of the client.",
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
			"name" : "externalBrowsableUrl",
			"description" : "Human accessible link in external system.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "externalResourceId",
			"description" : "Unique external system identifier.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "externalSynced",
			"description" : "Determines whether an object was synced with the external system.",
			"access" : "WRITE_ONLY"
		},
		{
			"type" : "Date",
			"name" : "externalSyncedAt",
			"description" : "Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "ExternalSystem",
			"path" : "/v1/externalsystems",
			"name" : "externalSystem",
			"description" : "External system which maintains this object.",
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
			"name" : "name",
			"description" : "Client name.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "phone",
			"description" : "Telephone number.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Long",
			"name" : "projectsCount",
			"description" : "Counts the number of projects being done for the client.",
			"access" : "READ_ONLY"
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
			"description" : "Street name with the house number.",
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
			"description" : "Website URL.",
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
				"Bill",
				"TrashItem",
				"ContactPerson"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "e7597148-9288-45d3-b90d-9859c4a14035",
	"createdAt" : "/Date(1416914817774)/",
	"updatedAt" : "/Date(1416955917774)/",
	"version" : 3,
	"externalSystem" : {
		"id" : "95bb20f7-a3ec-4461-81bc-1dbec34e16cb",
		"createdAt" : "/Date(1416913977774)/",
		"updatedAt" : "/Date(1416934317774)/",
		"version" : 8,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "customer-996",
	"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
	"externalSyncedAt" : "/Date(1416916317774)/",
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
}
```