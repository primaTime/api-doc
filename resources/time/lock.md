Lock
==

## URL

	https://api.primaerp.com/v1/time/locks

## Properties

| Name        | Type      | Access     | Required | Description                                                                                         |
|-------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| client      | Client    | read write | no       | The client whose time records are locked.                                                           |
| createdAt   | Date      | read only  | no       | Date of creation.                                                                                   |
| displayName | String    | read only  | no       | Describes an object in human readable form.                                                         |
| id          | String    | read write | no       | Unique object identifier.                                                                           |
| lockedTo    | Date      | read write | no       | Time records created beforer this date are locked.                                                  |
| note        | String    | read write | no       | Additional note.                                                                                    |
| project     | Project   | read write | no       | The project whose time records are locked.                                                          |
| trashItem   | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | no       | Last modified date.                                                                                 |
| user        | User      | read write | no       | The user whose time records are locked.                                                             |
| version     | Long      | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Lock",
	"path" : "/v1/time/locks",
	"fields" : [
		{
			"type" : "Client",
			"path" : "/v1/time/clients",
			"name" : "client",
			"description" : "The client whose time records are locked.",
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
			"type" : "Date",
			"name" : "lockedTo",
			"description" : "Time records created beforer this date are locked.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "note",
			"description" : "Additional note.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Project",
			"path" : "/v1/time/projects",
			"name" : "project",
			"description" : "The project whose time records are locked.",
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
			"description" : "The user whose time records are locked.",
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
	"id" : "a89d3ec3-a2ac-42ae-8e62-5317846cf99a",
	"createdAt" : "/Date(1489385055174)/",
	"updatedAt" : "/Date(1489445595174)/",
	"version" : 3,
	"user" : {
		"id" : "127cc28e-c751-4080-8d98-26ddc14a4484",
		"createdAt" : "/Date(1489385715174)/",
		"updatedAt" : "/Date(1489459995174)/",
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
		"birthdayRemind" : "/Date(1491256800000)/",
		"workingTimeStart" : "/Date(1489388400000)/",
		"workingTimeEnd" : "/Date(1489420800000)/",
		"created" : "/Date(1489301595174)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"client" : {
		"id" : "7e240fd5-4587-4a84-854b-4c32645c66a4",
		"createdAt" : "/Date(1489384755174)/",
		"updatedAt" : "/Date(1489434795174)/",
		"version" : 4,
		"externalSystem" : {
			"id" : "6392e0ba-7053-48c1-83b1-75714d0fac87",
			"createdAt" : "/Date(1489384995174)/",
			"updatedAt" : "/Date(1489405995174)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1489387995173)/",
		"externalSynced" : true,
		"name" : "Example Ltd.",
		"code" : "EXL",
		"email" : "info@example.com",
		"billsCount" : 2,
		"projectsCount" : 1,
		"streetAddress" : "Rua 123 Sul Avenida Lo 15",
		"additionalAddressInfo" : "",
		"zipCode" : "89020-000",
		"city" : "Palmas",
		"state" : "Tocantins",
		"countryCode" : "BRA",
		"phone" : "+66 987 654 321",
		"vatId" : "23.456.789/0001-77",
		"website" : "http://www.example.com/",
		"displayName" : "Example Ltd."
	},
	"project" : {
		"id" : "50f6daae-6a13-4940-8bf1-2f919f6a0ca0",
		"createdAt" : "/Date(1489387455174)/",
		"updatedAt" : "/Date(1489449195174)/",
		"version" : 7,
		"externalSystem" : {
			"id" : "a924ff53-a8e9-40d8-ba89-154d9c841719",
			"createdAt" : "/Date(1489387875174)/",
			"updatedAt" : "/Date(1489416795174)/",
			"version" : 7,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1489387995173)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1486968795173)/",
		"ends" : "/Date(1488783195173)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "127cc28e-c751-4080-8d98-26ddc14a4484",
			"createdAt" : "/Date(1489385715174)/",
			"updatedAt" : "/Date(1489459995174)/",
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
			"birthdayRemind" : "/Date(1491256800000)/",
			"workingTimeStart" : "/Date(1489388400000)/",
			"workingTimeEnd" : "/Date(1489420800000)/",
			"created" : "/Date(1489301595174)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "7e240fd5-4587-4a84-854b-4c32645c66a4",
			"createdAt" : "/Date(1489384755174)/",
			"updatedAt" : "/Date(1489434795174)/",
			"version" : 4,
			"externalSystem" : {
				"id" : "6392e0ba-7053-48c1-83b1-75714d0fac87",
				"createdAt" : "/Date(1489384995174)/",
				"updatedAt" : "/Date(1489405995174)/",
				"version" : 2,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1489387995173)/",
			"externalSynced" : true,
			"name" : "Example Ltd.",
			"code" : "EXL",
			"email" : "info@example.com",
			"billsCount" : 2,
			"projectsCount" : 1,
			"streetAddress" : "Rua 123 Sul Avenida Lo 15",
			"additionalAddressInfo" : "",
			"zipCode" : "89020-000",
			"city" : "Palmas",
			"state" : "Tocantins",
			"countryCode" : "BRA",
			"phone" : "+66 987 654 321",
			"vatId" : "23.456.789/0001-77",
			"website" : "http://www.example.com/",
			"displayName" : "Example Ltd."
		},
		"billable" : true,
		"autoMembership" : false,
		"membersCount" : 1,
		"tasksCount" : 3,
		"timeRecordsCount" : 2,
		"displayName" : "Content management system"
	},
	"lockedTo" : "/Date(1489387995173)/",
	"note" : "Johnny can no longer track his time on the CMS project.",
	"displayName" : "Mon Mar 13 07:53:15 CET 2017"
}
```
