Access
==

## URL

	https://api.primaerp.com/v1/accesses

	https://api.primaerp.com/v1/accesses/product/{product}/$free

	https://api.primaerp.com/v1/accesses/@exceeded

	https://api.primaerp.com/v1/accesses/products/$allowed

	https://api.primaerp.com/v1/users/{id}/accesses

	https://api.primaerp.com/v1/users/{id}/accesses/product/{product}/$free

	https://api.primaerp.com/v1/users/{id}/accesses/@exceeded

	https://api.primaerp.com/v1/users/{id}/accesses/products/$allowed

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
	"id" : "d0f20f96-2334-4197-be57-ae6cf54520d9",
	"createdAt" : "/Date(1489387573371)/",
	"updatedAt" : "/Date(1489456393371)/",
	"version" : 6,
	"user" : {
		"id" : "1635b648-5dd9-4f8b-bda9-43dda6f3d81f",
		"createdAt" : "/Date(1489387813371)/",
		"updatedAt" : "/Date(1489449193371)/",
		"version" : 7,
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
		"birthdayRemind" : "/Date(1490223600000)/",
		"workingTimeStart" : "/Date(1489388400000)/",
		"workingTimeEnd" : "/Date(1489420800000)/",
		"created" : "/Date(1489301593371)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"product" : "TIME",
	"created" : "/Date(1489387993371)/",
	"displayName" : "TIME"
}
```
