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
	"path" : "/v1/users/@self/secretkeys",
	"fields" : [
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
			"type" : "Date",
			"name" : "expiration",
			"description" : "Expiration date of the secret key. For internal usage only.",
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
			"description" : "Describes intended use of the secret key.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "registrationId",
			"description" : "Registration ID for Google Cloud Messaging usage.",
			"access" : "READ_WRITE"
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
			"type" : "User",
			"path" : "/v1/users",
			"name" : "user",
			"description" : "Provides info about the user for whom the secret Key was generated.",
			"access" : "READ_WRITE"
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
	"id" : "01b87ba5-ec51-46f2-9426-a90d4a005d1f",
	"createdAt" : "/Date(1416916197603)/",
	"updatedAt" : "/Date(1416981117603)/",
	"version" : 4,
	"user" : {
		"id" : "5b135f9b-8a54-45e5-adff-3cc9d0c590cc",
		"createdAt" : "/Date(1416912837603)/",
		"updatedAt" : "/Date(1416927117603)/",
		"version" : 6,
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
		"created" : "/Date(1416829917603)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"secretKey" : "c7bc651d-aacb-4fef-9133-7f88f83db1bd",
	"name" : "Chrome plugin",
	"senderId" : "6248151342",
	"registrationId" : "HPRgkF3VZjC9KtT8OvPVGJ-hQMRKRrZuDELjzEvxwYv7hH5OFEeco8ohsN5PjL1iC2dNtk2BAokeMCg2ZXKqpc8FXKmhX94kIxQ",
	"expiration" : "/Date(1419335517603)/",
	"displayName" : "Chrome plugin (c7bc651d-aacb-4fef-9133-7f88f83db1bd)"
}
```
