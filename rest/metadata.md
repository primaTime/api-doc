Metadata
==

## API metadata description

The primaERP API may display the metadata document where the data model for the selected resource is described.

#### Syntax

		/{resource}/$metadata

Where `{resource}` is a module resource such as: `time/projects`, `time/timerecords`, `time/tasks`, etc. Or a global resource such as `user`.

#### Example

		GET http://{tenant}.api.primaerp.com/v1/time/projects/$metadata

```JSON
{
	"type" : "Client",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "active",
			"description" : "Determines whether the client is currently active.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "additionalAddressInfo",
			"description" : "Any additional information related to the address.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Long",
			"name" : "billsCount",
			"description" : "Counts the number of bills which were issued for the client.",
			"access" : "READ_ONLY",
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
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "externalResourceId",
			"description" : "Unique external system identifier.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Boolean",
			"name" : "externalSynced",
			"description" : "Determines whether an object was synced with the external system.",
			"access" : "WRITE_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "externalSyncedAt",
			"description" : "Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "ExternalSystem",
			"name" : "externalSystem",
			"description" : "External system which maintains this object.",
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
			"name" : "name",
			"description" : "Client name.",
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
			"type" : "Long",
			"name" : "projectsCount",
			"description" : "Counts the number of projects being done for the client.",
			"access" : "READ_ONLY",
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
			"description" : "Street name with the house number.",
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
			"description" : "Website URL.",
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
				"Bill",
				"TrashItem",
				"ContactPerson"
			]
		}
	]
}
```