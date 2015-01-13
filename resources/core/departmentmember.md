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
	"id" : "a0d518a1-e76a-464f-805e-d0f54f5dac72",
	"createdAt" : "/Date(1421139698516)/",
	"updatedAt" : "/Date(1421148338516)/",
	"version" : 3,
	"user" : {
		"id" : "286f5213-faf5-4297-b38e-82ab139378ff",
		"createdAt" : "/Date(1421140718517)/",
		"updatedAt" : "/Date(1421151938517)/",
		"version" : 6,
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
		"birthdayRemind" : "/Date(1423004400000)/",
		"workingTimeStart" : "/Date(1421132400000)/",
		"workingTimeEnd" : "/Date(1421164800000)/",
		"created" : "/Date(1421054738516)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"department" : {
		"id" : "83044909-bf79-4a51-9ffa-fe4abe3cb39f",
		"createdAt" : "/Date(1421138978516)/",
		"updatedAt" : "/Date(1421195138516)/",
		"version" : 6,
		"name" : "Development",
		"manager" : {
			"id" : "6ec3e9af-6650-4cd8-a8af-1128c01e2efd",
			"createdAt" : "/Date(1421140058516)/",
			"updatedAt" : "/Date(1421180738516)/",
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
			"birthdayRemind" : "/Date(1421967600000)/",
			"workingTimeStart" : "/Date(1421132400000)/",
			"workingTimeEnd" : "/Date(1421164800000)/",
			"created" : "/Date(1421054738516)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"displayName" : "Development"
	},
	"displayName" : "Doe John"
}
```
