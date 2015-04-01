Department
==

## URL

	https://api.primaerp.com/v1/departments

## Properties

| Name        | Type      | Access     | Required | Description                                                                                         |
|-------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| createdAt   | Date      | read only  | no       | Date of creation.                                                                                   |
| displayName | String    | read only  | no       | Describes an object in human readable form.                                                         |
| id          | String    | read write | no       | Unique object identifier.                                                                           |
| manager     | User      | read write | no       | The user who is the manager of the department.                                                      |
| name        | String    | read write | no       | The department name.                                                                                |
| trashItem   | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | no       | Last modified date.                                                                                 |
| version     | Long      | read write | no       | Object version number.                                                                              |

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
	"id" : "207d37b2-ddce-4266-b97e-acdc75e60fed",
	"createdAt" : "/Date(1427900340265)/",
	"updatedAt" : "/Date(1427902260265)/",
	"version" : 6,
	"name" : "Development",
	"manager" : {
		"id" : "e8b68914-3f6a-4c5c-9457-c313b5909d3a",
		"createdAt" : "/Date(1427901900265)/",
		"updatedAt" : "/Date(1427909460265)/",
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
		"birthdayRemind" : "/Date(1428703200000)/",
		"workingTimeStart" : "/Date(1427868000000)/",
		"workingTimeEnd" : "/Date(1427900400000)/",
		"created" : "/Date(1427815860265)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"displayName" : "Development"
}
```
