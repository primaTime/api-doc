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
	"id" : "6cdeb91f-f6aa-4fe4-93a2-bfbfe6617af4",
	"createdAt" : "/Date(1650452693613)/",
	"updatedAt" : "/Date(1650525053613)/",
	"version" : 7,
	"user" : {
		"id" : "2ec58428-a4ad-4e36-afb0-2e9cabb61aef",
		"createdAt" : "/Date(1650452693613)/",
		"updatedAt" : "/Date(1650517853613)/",
		"version" : 5,
		"firstName" : "John",
		"lastName" : "Doe",
		"nickName" : "Johny D.",
		"email" : "vq9r5re3xo004hx@testdata.com",
		"phone" : "55 234 555 678",
		"position" : "Senior developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "yyyy-MM-dd",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "pt_BR",
		"password" : "vrs4ih0xvrzfmkn9g9xk",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1652306400000)/",
		"workingTimeStart" : "/Date(1650434400000)/",
		"workingTimeEnd" : "/Date(1650466800000)/",
		"created" : "/Date(1650366653613)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"secretKey" : "2f91b39a-49da-417d-8c1e-25c20294005c",
	"name" : "Chrome plugin",
	"senderId" : "mobileApp",
	"registrationId" : "HPRgkF3VZjC9KtT8OvPVGJ-hQMRKRrZuDELjzEvxwYv7hH5OFEeco8ohsN5PjL1iC2dNtk2BAokeMCg2ZXKqpc8FXKmhX94kIxQ",
	"expiration" : "/Date(1652872253613)/",
	"applicationId" : "6248151342",
	"displayName" : "Chrome plugin (2f91b39a-49da-417d-8c1e-25c20294005c)"
}
```
