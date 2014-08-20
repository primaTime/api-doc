SecretKey
==

## URL

	https://api.primaerp.com/v1/users/@self/secretkeys

## Properties

| Name           | Type      | Access     | Description                                                                                         |
|----------------|-----------|------------|-----------------------------------------------------------------------------------------------------|
| createdAt      | Date      | read only  | Date of creation.                                                                                   |
| displayName    | String    | read only  | Describes an object in human readable form.                                                         |
| expiration     | Date      | read write | Expiration date of the secret key. For internal usage only.                                         |
| id             | String    | read write | Unique object identifier.                                                                           |
| name           | String    | read write | Describes intended use of the secret key.                                                           |
| registrationId | String    | read write | Registration ID for Google Cloud Messaging usage.                                                   |
| secretKey      | String    | read only  | A key for user authentication.                                                                      |
| senderId       | String    | read write | Sender ID for Google Cloud Messaging usage.                                                         |
| trashItem      | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt      | Date      | read only  | Last modified date.                                                                                 |
| user           | User      | read write | Provides info about the user for whom the secret Key was generated.                                 |
| version        | Long      | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "SecretKey",
	"fields" : [
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
			"type" : "Date",
			"name" : "expiration",
			"description" : "Expiration date of the secret key. For internal usage only.",
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
			"description" : "Describes intended use of the secret key.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "registrationId",
			"description" : "Registration ID for Google Cloud Messaging usage.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "secretKey",
			"description" : "A key for user authentication.",
			"access" : "READ_ONLY",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "String",
			"name" : "senderId",
			"description" : "Sender ID for Google Cloud Messaging usage.",
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
			"type" : "User",
			"name" : "user",
			"description" : "Provides info about the user for whom the secret Key was generated.",
			"access" : "READ_WRITE",
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
	"id" : "dcb68712-223e-4a3b-8207-ee8538024f8b",
	"createdAt" : "/Date(1408460035271)/",
	"updatedAt" : "/Date(1408542715271)/",
	"version" : 2,
	"user" : {
		"id" : "a97ae450-027b-4b8c-9f11-b05887138b82",
		"createdAt" : "/Date(1408461655271)/",
		"updatedAt" : "/Date(1408506715271)/",
		"version" : 5,
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
		"birthdayRemind" : "/Date(1409263200000)/",
		"workingTimeStart" : "/Date(1408428000000)/",
		"workingTimeEnd" : "/Date(1408460400000)/",
		"created" : "/Date(1408377115271)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"secretKey" : "3080ee31-d42e-4f15-91ad-fd772dfe8fc5",
	"name" : "Chrome plugin",
	"senderId" : "6248151342",
	"registrationId" : "HPRgkF3VZjC9KtT8OvPVGJ-hQMRKRrZuDELjzEvxwYv7hH5OFEeco8ohsN5PjL1iC2dNtk2BAokeMCg2ZXKqpc8FXKmhX94kIxQ",
	"expiration" : "/Date(1410882715271)/",
	"displayName" : "Chrome plugin (3080ee31-d42e-4f15-91ad-fd772dfe8fc5)"
}
```
