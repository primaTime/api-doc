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
	"id" : "d9c27adb-8a61-4a44-9240-a6be12301f6a",
	"createdAt" : "/Date(1651049426843)/",
	"updatedAt" : "/Date(1651115306843)/",
	"version" : 2,
	"user" : {
		"id" : "840d9380-b635-480f-b9ab-b4063675a66d",
		"createdAt" : "/Date(1651050206843)/",
		"updatedAt" : "/Date(1651100906843)/",
		"version" : 7,
		"firstName" : "John",
		"lastName" : "Doe",
		"nickName" : "Johny D.",
		"email" : "8wa0161dwsc1eyw@testdata.com",
		"phone" : "55 234 555 678",
		"position" : "Senior developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "yyyy-MM-dd",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "pt_BR",
		"password" : "8ay0vqyyn62aoe52qlf6",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1652911200000)/",
		"workingTimeStart" : "/Date(1651039200000)/",
		"workingTimeEnd" : "/Date(1651071600000)/",
		"created" : "/Date(1650964106843)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"secretKey" : "09f31e8c-2fda-44f6-ac90-616a2a88bcaf",
	"name" : "Chrome plugin",
	"senderId" : "mobileApp",
	"registrationId" : "HPRgkF3VZjC9KtT8OvPVGJ-hQMRKRrZuDELjzEvxwYv7hH5OFEeco8ohsN5PjL1iC2dNtk2BAokeMCg2ZXKqpc8FXKmhX94kIxQ",
	"expiration" : "/Date(1653469706843)/",
	"applicationId" : "6248151342",
	"displayName" : "Chrome plugin (09f31e8c-2fda-44f6-ac90-616a2a88bcaf)"
}
```
