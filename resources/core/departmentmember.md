DepartmentMember
==

## URL

	https://api.primaerp.com/v1/departmentmembers

## Properties

| Name        | Type       | Access     | Description                                                                                         |
|-------------|------------|------------|-----------------------------------------------------------------------------------------------------|
| createdAt   | Date       | read only  | Date of creation.                                                                                   |
| department  | Department | read write | The department of the account member.                                                               |
| displayName | String     | read only  | Describes an object in human readable form.                                                         |
| id          | String     | read write | Unique object identifier.                                                                           |
| trashItem   | TrashItem  | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date       | read only  | Last modified date.                                                                                 |
| user        | User       | read write | User who is a member.                                                                               |
| version     | Long       | read write | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "DepartmentMember",
	"fields" : [
		{
			"type" : "Date",
			"name" : "createdAt",
			"description" : "Date of creation.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "Department",
			"name" : "department",
			"description" : "The department of the account member.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "String",
			"name" : "displayName",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
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
			"type" : "TrashItem",
			"name" : "trashItem",
			"description" : "Informs whether an object is in the trash. An object is in the trash if a trash item was specified.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "updatedAt",
			"description" : "Last modified date.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "User",
			"name" : "user",
			"description" : "User who is a member.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "Long",
			"name" : "version",
			"description" : "Object version number.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
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
	"id" : "44732889-1863-4ea9-a8ed-1e398c3092f0",
	"createdAt" : "/Date(1412165207961)/",
	"updatedAt" : "/Date(1412179007961)/",
	"version" : 1,
	"user" : {
		"id" : "64792093-686d-4184-8cca-f32f7c7f3ef5",
		"createdAt" : "/Date(1412167007961)/",
		"updatedAt" : "/Date(1412171807961)/",
		"version" : 7,
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
		"birthdayRemind" : "/Date(1414015200000)/",
		"workingTimeStart" : "/Date(1412143200000)/",
		"workingTimeEnd" : "/Date(1412175600000)/",
		"created" : "/Date(1412081807961)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"department" : {
		"id" : "e2d2183b-f8dd-46cf-bf37-2ea649a1cf75",
		"createdAt" : "/Date(1412168087961)/",
		"updatedAt" : "/Date(1412168207961)/",
		"version" : 7,
		"name" : "Development",
		"manager" : {
			"id" : "b3a9a73c-ac0a-49c2-92ea-2d2facc7f157",
			"createdAt" : "/Date(1412165087961)/",
			"updatedAt" : "/Date(1412240207961)/",
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
			"birthdayRemind" : "/Date(1412978400000)/",
			"workingTimeStart" : "/Date(1412143200000)/",
			"workingTimeEnd" : "/Date(1412175600000)/",
			"created" : "/Date(1412081807961)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"displayName" : "Development"
	},
	"displayName" : "Doe John"
}
```
