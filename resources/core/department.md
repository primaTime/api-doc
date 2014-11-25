Department
==

## URL

	https://api.primaerp.com/v1/departments

## Properties

| Name        | Type      | Access     | Description                                                                                         |
|-------------|-----------|------------|-----------------------------------------------------------------------------------------------------|
| createdAt   | Date      | read only  | Date of creation.                                                                                   |
| displayName | String    | read only  | Describes an object in human readable form.                                                         |
| id          | String    | read write | Unique object identifier.                                                                           |
| manager     | User      | read write | The user who is the manager of the department.                                                      |
| name        | String    | read write | The department name.                                                                                |
| trashItem   | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | Last modified date.                                                                                 |
| version     | Long      | read write | Object version number.                                                                              |

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
					"pattern" : "[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
				},
				{
					"type" : "NotNull",
					"pattern" : null
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
	"id" : "075d77cd-b3f3-46a4-b346-3aaf7bf8a941",
	"createdAt" : "/Date(1416914337317)/",
	"updatedAt" : "/Date(1416988317317)/",
	"version" : 7,
	"name" : "Development",
	"manager" : {
		"id" : "54fae6fc-45b8-4ab5-8a61-c3a7a8a1d881",
		"createdAt" : "/Date(1416915477317)/",
		"updatedAt" : "/Date(1416923517317)/",
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
		"birthdayRemind" : "/Date(1417734000000)/",
		"workingTimeStart" : "/Date(1416898800000)/",
		"workingTimeEnd" : "/Date(1416931200000)/",
		"created" : "/Date(1416829917317)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"displayName" : "Development"
}
```
