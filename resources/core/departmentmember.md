DepartmentMember
==

## URL

	https://api.primaerp.com/v1/departmentmembers

## Properties

| Name        | Type       | Access     | Required                                                               | Description                                                                                         |
|-------------|------------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| createdAt   | Date       | read only  | no                                                                     | Date of creation.                                                                                   |
| department  | Department | read write | YES                                                                    | The department of the account member.                                                               |
| displayName | String     | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| id          | String     | read write | no                                                                     | Unique object identifier.                                                                           |
| trashItem   | TrashItem  | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date       | read only  | no                                                                     | Last modified date.                                                                                 |
| user        | User       | read write | YES                                                                    | User who is a member.                                                                               |
| version     | Long       | read only  | no                                                                     | Object version number.                                                                              |

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
			"access" : "READ_ONLY"
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
	"id" : "d87bbe4d-1082-4f12-8837-4c87ea2542e4",
	"createdAt" : "/Date(1417603381288)/",
	"updatedAt" : "/Date(1417676941288)/",
	"version" : 0,
	"user" : {
		"id" : "d72c71bf-ecd5-4e89-9b71-90b13e8a77de",
		"createdAt" : "/Date(1417601401288)/",
		"updatedAt" : "/Date(1417655341288)/",
		"version" : 8,
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
		"birthdayRemind" : "/Date(1419462000000)/",
		"workingTimeStart" : "/Date(1417590000000)/",
		"workingTimeEnd" : "/Date(1417622400000)/",
		"created" : "/Date(1417518541288)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"department" : {
		"id" : "e55d4151-80b0-4a90-8efa-94f33b4cf2a4",
		"createdAt" : "/Date(1417602961288)/",
		"updatedAt" : "/Date(1417604941288)/",
		"version" : 5,
		"name" : "Development",
		"manager" : {
			"id" : "59881d41-0afd-4cb8-9733-acff5f9b85b4",
			"createdAt" : "/Date(1417601821288)/",
			"updatedAt" : "/Date(1417612141288)/",
			"version" : 2,
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
			"birthdayRemind" : "/Date(1418425200000)/",
			"workingTimeStart" : "/Date(1417590000000)/",
			"workingTimeEnd" : "/Date(1417622400000)/",
			"created" : "/Date(1417518541287)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"displayName" : "Development"
	},
	"displayName" : "Doe John"
}
```
