Access
==

## URL

	https://api.primaerp.com/v1/accesses

	https://api.primaerp.com/v1/accesses/product/{product}/$free

	https://api.primaerp.com/v1/accesses/products/$allowed

	https://api.primaerp.com/v1/accesses/@exceeded

	https://api.primaerp.com/v1/users/{id}/accesses

	https://api.primaerp.com/v1/users/{id}/accesses/product/{product}/$free

	https://api.primaerp.com/v1/users/{id}/accesses/products/$allowed

	https://api.primaerp.com/v1/users/{id}/accesses/@exceeded

## Properties

| Name        | Type      | Access     | Required | Description                                                                                         |
|-------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| created     | Date      | read only  | no       | Date and time when the access was granted.                                                          |
| createdAt   | Date      | read only  | no       | Date of creation.                                                                                   |
| displayName | String    | read only  | no       | Describes an object in human readable form.                                                         |
| id          | String    | read write | no       | Unique object identifier.                                                                           |
| product     | Product   | read write | YES      | Access is granted to this product.                                                                  |
| trashItem   | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | no       | Last modified date.                                                                                 |
| user        | User      | read write | YES      | Provides info about the user for whom the access is granted.                                        |
| version     | Long      | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Access",
	"path" : "/v1/accesses",
	"fields" : [
		{
			"type" : "Date",
			"name" : "created",
			"description" : "Date and time when the access was granted.",
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
			"type" : "Product",
			"name" : "product",
			"description" : "Access is granted to this product.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				},
				{
					"type" : "Enum",
					"details" : "CORE, TIME, BILLING, ATTENDANCE"
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
			"description" : "Provides info about the user for whom the access is granted.",
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
	"id" : "b8846520-1818-43eb-8067-743256850b38",
	"createdAt" : "/Date(1651050207413)/",
	"updatedAt" : "/Date(1651133307413)/",
	"version" : 7,
	"user" : {
		"id" : "15af2214-5335-4a89-9c6d-db5d1ba09f33",
		"createdAt" : "/Date(1651047747413)/",
		"updatedAt" : "/Date(1651104507413)/",
		"version" : 8,
		"firstName" : "John",
		"lastName" : "Doe",
		"nickName" : "Johny D.",
		"email" : "zkjmrskyp9z_k2k@testdata.com",
		"phone" : "55 234 555 678",
		"position" : "Senior developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "yyyy-MM-dd",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "pt_BR",
		"password" : "9m5lz9sb7fym_wz3xpwy",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1652911200000)/",
		"workingTimeStart" : "/Date(1651039200000)/",
		"workingTimeEnd" : "/Date(1651071600000)/",
		"created" : "/Date(1650964107413)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"product" : "TIME",
	"created" : "/Date(1651050507413)/",
	"displayName" : "TIME"
}
```
