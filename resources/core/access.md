Access
==

## URL

	https://api.primaerp.com/v1/accesses

## Properties

| Name        | Type      | Access     | Description                                                                                         |
|-------------|-----------|------------|-----------------------------------------------------------------------------------------------------|
| created     | Date      | read write | Date and time when the access was granted.                                                          |
| createdAt   | Date      | read only  | Date of creation.                                                                                   |
| displayName | String    | read only  | Describes an object in human readable form.                                                         |
| id          | String    | read write | Unique object identifier.                                                                           |
| product     | Product   | read write | Access is granted to this product.                                                                  |
| trashItem   | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | Last modified date.                                                                                 |
| user        | User      | read write | Provides info about the user for whom the access is granted.                                        |
| version     | Long      | read write | Object version number.                                                                              |

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
			"access" : "READ_WRITE",
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
					"pattern" : "[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
				},
				{
					"type" : "NotNull",
					"pattern" : null
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
					"type" : "NotNull",
					"pattern" : null
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
					"type" : "NotNull",
					"pattern" : null
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
	"id" : "0fe97830-01b4-40ef-bdab-6bb62640fba9",
	"createdAt" : "/Date(1416914277024)/",
	"updatedAt" : "/Date(1416941517024)/",
	"version" : 3,
	"user" : {
		"id" : "b274cfd9-febe-4de6-96e3-87c74c9a4776",
		"createdAt" : "/Date(1416912957024)/",
		"updatedAt" : "/Date(1416959517024)/",
		"version" : 9,
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
		"birthdayRemind" : "/Date(1417734000000)/",
		"workingTimeStart" : "/Date(1416898800000)/",
		"workingTimeEnd" : "/Date(1416931200000)/",
		"created" : "/Date(1416829917024)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"product" : "TIME",
	"created" : "/Date(1416916317024)/",
	"displayName" : "TIME"
}
```
