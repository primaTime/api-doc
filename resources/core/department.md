Department
==

## URL

	https://api.primaerp.com/v1/departments

## Properties

| Name        | Type      | Access     | Required                                                               | Description                                                                                         |
|-------------|-----------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| createdAt   | Date      | read only  | no                                                                     | Date of creation.                                                                                   |
| displayName | String    | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| id          | String    | read write | no                                                                     | Unique object identifier.                                                                           |
| manager     | User      | read write | no                                                                     | The user who is the manager of the department.                                                      |
| name        | String    | read write | no                                                                     | The department name.                                                                                |
| trashItem   | TrashItem | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | no                                                                     | Last modified date.                                                                                 |
| version     | Long      | read write | no                                                                     | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Department",
	"path" : "/v1/departments",
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
			"type" : "User",
			"path" : "/v1/users",
			"name" : "manager",
			"description" : "The user who is the manager of the department.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "name",
			"description" : "The department name.",
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
				"TrashItem",
				"DepartmentMember"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "3389b62c-3dbe-4963-a14b-3449b72e3a60",
	"createdAt" : "/Date(1417519420564)/",
	"updatedAt" : "/Date(1417579300564)/",
	"version" : 5,
	"name" : "Development",
	"manager" : {
		"id" : "6276f2d5-83aa-402a-ab78-ad9ff205c47b",
		"createdAt" : "/Date(1417518220564)/",
		"updatedAt" : "/Date(1417593700564)/",
		"version" : 4,
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
		"birthdayRemind" : "/Date(1418338800000)/",
		"workingTimeStart" : "/Date(1417503600000)/",
		"workingTimeEnd" : "/Date(1417536000000)/",
		"created" : "/Date(1417435300564)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"displayName" : "Development"
}
```
