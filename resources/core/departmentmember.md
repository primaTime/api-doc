DepartmentMember
==

## URL

	https://api.primaerp.com/v1/departmentmembers

## Properties

| Name        | Type       | Access     | Required | Description                                                                                         |
|-------------|------------|------------|----------|-----------------------------------------------------------------------------------------------------|
| createdAt   | Date       | read only  | no       | Date of creation.                                                                                   |
| department  | Department | read write | YES      | The department of the account member.                                                               |
| displayName | String     | read only  | no       | Describes an object in human readable form.                                                         |
| id          | String     | read write | no       | Unique object identifier.                                                                           |
| trashItem   | TrashItem  | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date       | read only  | no       | Last modified date.                                                                                 |
| user        | User       | read write | YES      | User who is a member.                                                                               |
| version     | Long       | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "DepartmentMember",
	"path" : "/v1/departmentmembers",
	"fields" : [
		{
			"type" : "Date",
			"name" : "createdAt",
			"description" : "Date of creation.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "Department",
			"path" : "/v1/departments",
			"name" : "department",
			"description" : "The department of the account member.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
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
			"description" : "User who is a member.",
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
	"id" : "4636e729-f2f8-406c-ae91-d1a0f632989a",
	"createdAt" : "/Date(1427899500368)/",
	"updatedAt" : "/Date(1427927460368)/",
	"version" : 5,
	"user" : {
		"id" : "6e526c99-bc59-4a65-8fac-f4be227f24f6",
		"createdAt" : "/Date(1427900640369)/",
		"updatedAt" : "/Date(1427967060369)/",
		"version" : 5,
		"firstName" : "John",
		"lastName" : "Doe",
		"nickName" : "Johny D.",
		"email" : "john.doe@example.com",
		"phone" : "55 234 555 678",
		"position" : "Senior developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "yyyy-MM-dd",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "pt_BR",
		"password" : "",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1429740000000)/",
		"workingTimeStart" : "/Date(1427868000000)/",
		"workingTimeEnd" : "/Date(1427900400000)/",
		"created" : "/Date(1427815860368)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"department" : {
		"id" : "8078ea08-6403-4d32-b5d0-cd560d21ff80",
		"createdAt" : "/Date(1427900520369)/",
		"updatedAt" : "/Date(1427909460369)/",
		"version" : 3,
		"name" : "Development",
		"manager" : {
			"id" : "46cad1ae-9692-4342-8b61-662b6503d5cf",
			"createdAt" : "/Date(1427901660369)/",
			"updatedAt" : "/Date(1427931060369)/",
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
			"birthdayRemind" : "/Date(1428703200000)/",
			"workingTimeStart" : "/Date(1427868000000)/",
			"workingTimeEnd" : "/Date(1427900400000)/",
			"created" : "/Date(1427815860368)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"displayName" : "Development"
	},
	"displayName" : "Doe John"
}
```
