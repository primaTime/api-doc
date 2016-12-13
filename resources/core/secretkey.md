SecretKey
==

## URL

	https://api.primaerp.com/v1/users/@self/secretkeys

## Properties

| Name           | Type      | Access     | Required | Description                                                                                         |
|----------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| applicationId  | String    | read write | no       | Application ID for mobile applications usage.                                                       |
| createdAt      | Date      | read only  | no       | Date of creation.                                                                                   |
| displayName    | String    | read only  | no       | Describes an object in human readable form.                                                         |
| expiration     | Date      | read write | no       | Expiration date of the secret key. For internal usage only.                                         |
| id             | String    | read write | no       | Unique object identifier.                                                                           |
| name           | String    | read write | no       | Describes intended use of the secret key.                                                           |
| registrationId | String    | read write | no       | Registration ID for mobile applications usage.                                                      |
| secretKey      | String    | read only  | no       | A key for user authentication.                                                                      |
| senderId       | String    | read write | no       | Sender ID for mobile applications usage (deprecated).                                               |
| trashItem      | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt      | Date      | read only  | no       | Last modified date.                                                                                 |
| user           | User      | read write | no       | Provides info about the user for whom the secret Key was generated.                                 |
| version        | Long      | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "SecretKey",
	"path" : "/v1/users/@self/secretkeys",
	"fields" : [
		{
			"type" : "String",
			"name" : "applicationId",
			"description" : "Application ID for mobile applications usage.",
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
			"description" : "Describes intended use of the secret key.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "registrationId",
			"description" : "Registration ID for mobile applications usage.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "secretKey",
			"description" : "A key for user authentication.",
			"access" : "READ_ONLY",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "String",
			"name" : "senderId",
			"description" : "Sender ID for mobile applications usage (deprecated).",
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
	"id" : "69ee4074-00e8-4bf1-9aed-85baa0a353ce",
	"createdAt" : "/Date(1481619409342)/",
	"updatedAt" : "/Date(1481636329342)/",
	"version" : 0,
	"user" : {
		"id" : "9bf55dc1-534f-4451-87e0-29c3653b41ae",
		"createdAt" : "/Date(1481621689342)/",
		"updatedAt" : "/Date(1481679529342)/",
		"version" : 8,
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
		"birthdayRemind" : "/Date(1482447600000)/",
		"workingTimeStart" : "/Date(1481612400000)/",
		"workingTimeEnd" : "/Date(1481644800000)/",
		"created" : "/Date(1481535529342)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"secretKey" : "ec46d8fc-81ab-46e8-a5de-d4d4d9765ec6",
	"name" : "Chrome plugin",
	"senderId" : "mobileApp",
	"registrationId" : "HPRgkF3VZjC9KtT8OvPVGJ-hQMRKRrZuDELjzEvxwYv7hH5OFEeco8ohsN5PjL1iC2dNtk2BAokeMCg2ZXKqpc8FXKmhX94kIxQ",
	"expiration" : "/Date(1484041129342)/",
	"applicationId" : "6248151342",
	"displayName" : "Chrome plugin (ec46d8fc-81ab-46e8-a5de-d4d4d9765ec6)"
}
```
