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
| version     | Long       | read write | no                                                                     | Object version number.                                                                              |

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
	"id" : "c563d852-c3e8-4836-964e-27333a940c38",
	"createdAt" : "/Date(1417519181688)/",
	"updatedAt" : "/Date(1417546901688)/",
	"version" : 4,
	"user" : {
		"id" : "3db9d6eb-1ec3-4c42-91ad-165d48830526",
		"createdAt" : "/Date(1417518521689)/",
		"updatedAt" : "/Date(1417536101689)/",
		"version" : 3,
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
		"birthdayRemind" : "/Date(1419375600000)/",
		"workingTimeStart" : "/Date(1417503600000)/",
		"workingTimeEnd" : "/Date(1417536000000)/",
		"created" : "/Date(1417435301688)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"department" : {
		"id" : "08446687-facf-43c6-bd7e-86097e48aa4a",
		"createdAt" : "/Date(1417518581688)/",
		"updatedAt" : "/Date(1417543301688)/",
		"version" : 5,
		"name" : "Development",
		"manager" : {
			"id" : "ed7b6b7c-007a-4bf3-a65c-7e462ad12725",
			"createdAt" : "/Date(1417518761689)/",
			"updatedAt" : "/Date(1417568501689)/",
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
			"birthdayRemind" : "/Date(1418338800000)/",
			"workingTimeStart" : "/Date(1417503600000)/",
			"workingTimeEnd" : "/Date(1417536000000)/",
			"created" : "/Date(1417435301688)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"displayName" : "Development"
	},
	"displayName" : "Doe John"
}
```
