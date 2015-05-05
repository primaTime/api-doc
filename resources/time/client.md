Client
==

## URL

	https://api.primaerp.com/v1/time/clients

## Properties

| Name                  | Type           | Access     | Required | Description                                                                                         |
|-----------------------|----------------|------------|----------|-----------------------------------------------------------------------------------------------------|
| active                | Boolean        | read write | no       | Determines whether the client is currently active. Default value is true.                           |
| additionalAddressInfo | String         | read write | no       | Any additional information related to the address.                                                  |
| billsCount            | Long           | read only  | no       | Counts the number of bills which were issued for the client.                                        |
| city                  | String         | read write | no       | Name of the city.                                                                                   |
| code                  | String         | read write | no       | A code or an abbreviation of the client.                                                            |
| countryCode           | String         | read write | no       | Country code according to ISO 3166-1 alpha-3 standard.                                              |
| createdAt             | Date           | read only  | no       | Date of creation.                                                                                   |
| displayName           | String         | read only  | no       | Describes an object in human readable form.                                                         |
| email                 | String         | read write | no       | E-mail address of the client.                                                                       |
| externalBrowsableUrl  | String         | read write | no       | Human accessible link in external system.                                                           |
| externalResourceId    | String         | read write | no       | Unique external system identifier.                                                                  |
| externalSynced        | Boolean        | write only | no       | Determines whether an object was synced with the external system.                                   |
| externalSyncedAt      | Date           | read only  | no       | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.   |
| externalSystem        | ExternalSystem | read write | no       | External system which maintains this object.                                                        |
| id                    | String         | read write | no       | Unique object identifier.                                                                           |
| name                  | String         | read write | no       | Client name.                                                                                        |
| phone                 | String         | read write | no       | Telephone number.                                                                                   |
| projectsCount         | Long           | read only  | no       | Counts the number of projects being done for the client.                                            |
| state                 | String         | read write | no       | Name of the state or province.                                                                      |
| streetAddress         | String         | read write | no       | Street name with the house number.                                                                  |
| trashItem             | TrashItem      | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt             | Date           | read only  | no       | Last modified date.                                                                                 |
| vatId                 | String         | read write | no       | VAT identification number.                                                                          |
| version               | Long           | read write | no       | Object version number.                                                                              |
| website               | String         | read write | no       | Website URL.                                                                                        |
| zipCode               | String         | read write | no       | ZIP or postal code.                                                                                 |

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
			"defaultValue" : "true",
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
					"details" : "min 0, max 20"
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
					"details" : "regexp .*"
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
					"details" : "regexp [0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
				},
				{
					"type" : "NotNull"
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
	"id" : "29790845-13be-4edf-9a4d-42b8000e3793",
	"createdAt" : "/Date(1430140494840)/",
	"updatedAt" : "/Date(1430218314840)/",
	"version" : 2,
	"externalSystem" : {
		"id" : "5501db14-52c6-4e7b-ae68-5e9f4ad04a5e",
		"createdAt" : "/Date(1430140674840)/",
		"updatedAt" : "/Date(1430211114840)/",
		"version" : 6,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "customer-996",
	"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
	"externalSyncedAt" : "/Date(1430142714840)/",
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
}
```
