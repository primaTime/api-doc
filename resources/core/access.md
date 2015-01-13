Access
==

## URL

	https://api.primaerp.com/v1/accesses

## Properties

| Name        | Type      | Access     | Required                                                               | Description                                                                                         |
|-------------|-----------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| created     | Date      | read only  | no                                                                     | Date and time when the access was granted.                                                          |
| createdAt   | Date      | read only  | no                                                                     | Date of creation.                                                                                   |
| displayName | String    | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| id          | String    | read write | no                                                                     | Unique object identifier.                                                                           |
| product     | Product   | read write | YES                                                                    | Access is granted to this product.                                                                  |
| trashItem   | TrashItem | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | no                                                                     | Last modified date.                                                                                 |
| user        | User      | read write | YES                                                                    | Provides info about the user for whom the access is granted.                                        |
| version     | Long      | read only  | no                                                                     | Object version number.                                                                              |

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
			"access" : "READ_ONLY"
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
	"id" : "401ee9e2-dd8e-4ee1-a2c9-a0dcd61da158",
	"createdAt" : "/Date(1421140356771)/",
	"updatedAt" : "/Date(1421220336771)/",
	"version" : 8,
	"user" : {
		"id" : "c8f41ca0-3bad-4373-9172-83527464f799",
		"createdAt" : "/Date(1421138136771)/",
		"updatedAt" : "/Date(1421141136771)/",
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
		"birthdayRemind" : "/Date(1421967600000)/",
		"workingTimeStart" : "/Date(1421132400000)/",
		"workingTimeEnd" : "/Date(1421164800000)/",
		"created" : "/Date(1421054736771)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"product" : "TIME",
	"created" : "/Date(1421141136771)/",
	"displayName" : "TIME"
}
```
