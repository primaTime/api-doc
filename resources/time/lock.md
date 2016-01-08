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
	"id" : "c0b1adf5-a2c8-45f5-a818-5f3f18a0e9fe",
	"createdAt" : "/Date(1452253819132)/",
	"updatedAt" : "/Date(1452296959132)/",
	"version" : 9,
	"user" : {
		"id" : "deb4d641-651e-46b2-a52c-00e09cf21c18",
		"createdAt" : "/Date(1452256819133)/",
		"updatedAt" : "/Date(1452286159133)/",
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
		"birthdayRemind" : "/Date(1454108400000)/",
		"workingTimeStart" : "/Date(1452236400000)/",
		"workingTimeEnd" : "/Date(1452268800000)/",
		"created" : "/Date(1452170959132)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"client" : {
		"id" : "62733db8-c9c0-4e84-8bac-2d37c016aacf",
		"createdAt" : "/Date(1452254959133)/",
		"updatedAt" : "/Date(1452311359133)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "dd3223fe-6a5f-4b96-beb7-052ad5b9c5d5",
			"createdAt" : "/Date(1452257299133)/",
			"updatedAt" : "/Date(1452311359133)/",
			"version" : 6,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1452257359132)/",
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
		"id" : "15deab59-0753-4c4f-bf3f-cde1843c51dc",
		"createdAt" : "/Date(1452257179133)/",
		"updatedAt" : "/Date(1452340159133)/",
		"version" : 4,
		"externalSystem" : {
			"id" : "084e7ffb-0ee6-48d2-95ad-fea05048e10e",
			"createdAt" : "/Date(1452256399133)/",
			"updatedAt" : "/Date(1452304159133)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1452257359132)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1449578959132)/",
		"ends" : "/Date(1451652559132)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "deb4d641-651e-46b2-a52c-00e09cf21c18",
			"createdAt" : "/Date(1452256819133)/",
			"updatedAt" : "/Date(1452286159133)/",
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
			"birthdayRemind" : "/Date(1454108400000)/",
			"workingTimeStart" : "/Date(1452236400000)/",
			"workingTimeEnd" : "/Date(1452268800000)/",
			"created" : "/Date(1452170959132)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "62733db8-c9c0-4e84-8bac-2d37c016aacf",
			"createdAt" : "/Date(1452254959133)/",
			"updatedAt" : "/Date(1452311359133)/",
			"version" : 1,
			"externalSystem" : {
				"id" : "dd3223fe-6a5f-4b96-beb7-052ad5b9c5d5",
				"createdAt" : "/Date(1452257299133)/",
				"updatedAt" : "/Date(1452311359133)/",
				"version" : 6,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1452257359132)/",
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
	"lockedTo" : "/Date(1452257359132)/",
	"note" : "Johnny can no longer track his time on the CMS project.",
	"displayName" : "Fri Jan 08 13:49:19 CET 2016"
}
```