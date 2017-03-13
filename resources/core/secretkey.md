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
	"id" : "b9441089-3049-4409-9ff0-f75b2fbe4087",
	"createdAt" : "/Date(1489384934545)/",
	"updatedAt" : "/Date(1489398794545)/",
	"version" : 9,
	"user" : {
		"id" : "749dcb05-d9cf-48ce-abcc-8d33167d7e86",
		"createdAt" : "/Date(1489385354545)/",
		"updatedAt" : "/Date(1489402394545)/",
		"version" : 3,
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
		"created" : "/Date(1489301594545)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"secretKey" : "aee1805d-3b17-4afc-b8cb-178de5d6096e",
	"name" : "Chrome plugin",
	"senderId" : "mobileApp",
	"registrationId" : "HPRgkF3VZjC9KtT8OvPVGJ-hQMRKRrZuDELjzEvxwYv7hH5OFEeco8ohsN5PjL1iC2dNtk2BAokeMCg2ZXKqpc8FXKmhX94kIxQ",
	"expiration" : "/Date(1491803594545)/",
	"applicationId" : "6248151342",
	"displayName" : "Chrome plugin (aee1805d-3b17-4afc-b8cb-178de5d6096e)"
}
```
