Task
==

## URL

	https://api.primaerp.com/v1/time/tasks

## Properties

| Name                 | Type           | Access     | Required                                                               | Description                                                                                         |
|----------------------|----------------|------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| author               | User           | read write | no                                                                     | User who created the task.                                                                          |
| code                 | String         | read write | no                                                                     | A code or an abbreviation of the task.                                                              |
| createdAt            | Date           | read only  | no                                                                     | Date of creation.                                                                                   |
| displayName          | String         | read only  | no                                                                     | Describes an object in human readable form.                                                         |
| done                 | Boolean        | read write | no                                                                     | Determines whether the task is currently done.                                                      |
| effective            | Boolean        | read write | YES                                                                    | Determines whether the task is effective.                                                           |
| externalBrowsableUrl | String         | read write | no                                                                     | Human accessible link in external system.                                                           |
| externalResourceId   | String         | read write | no                                                                     | Unique external system identifier.                                                                  |
| externalSynced       | Boolean        | write only | no                                                                     | Determines whether an object was synced with the external system.                                   |
| externalSyncedAt     | Date           | read only  | no                                                                     | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.   |
| externalSystem       | ExternalSystem | read write | no                                                                     | External system which maintains this object.                                                        |
| id                   | String         | read write | no                                                                     | Unique object identifier.                                                                           |
| name                 | String         | read write | no                                                                     | Task name.                                                                                          |
| note                 | String         | read write | no                                                                     | Additional note.                                                                                    |
| owner                | User           | read write | no                                                                     | User who is responsible for the task.                                                               |
| priceBudget          | Double         | read write | no                                                                     | Amount of money available for the task.                                                             |
| project              | Project        | read write | no                                                                     | Tasks belonging to this project.                                                                    |
| timeBudget           | Long           | read write | no                                                                     | Amount of milliseconds available for the task.                                                      |
| trashItem            | TrashItem      | read write | no                                                                     | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt            | Date           | read only  | no                                                                     | Last modified date.                                                                                 |
| version              | Long           | read write | no                                                                     | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Task",
	"path" : "/v1/time/tasks",
	"fields" : [
		{
			"type" : "User",
			"path" : "/v1/users",
			"name" : "author",
			"description" : "User who created the task.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "code",
			"description" : "A code or an abbreviation of the task.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Size",
					"details" : "min 0, max 20"
				}
			]
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
			"type" : "Boolean",
			"name" : "done",
			"description" : "Determines whether the task is currently done.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "effective",
			"description" : "Determines whether the task is effective.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "String",
			"name" : "externalBrowsableUrl",
			"description" : "Human accessible link in external system.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "externalResourceId",
			"description" : "Unique external system identifier.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "externalSynced",
			"description" : "Determines whether an object was synced with the external system.",
			"access" : "WRITE_ONLY"
		},
		{
			"type" : "Date",
			"name" : "externalSyncedAt",
			"description" : "Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "ExternalSystem",
			"path" : "/v1/externalsystems",
			"name" : "externalSystem",
			"description" : "External system which maintains this object.",
			"access" : "READ_WRITE"
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
			"type" : "String",
			"name" : "name",
			"description" : "Task name.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "note",
			"description" : "Additional note.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "User",
			"path" : "/v1/users",
			"name" : "owner",
			"description" : "User who is responsible for the task.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Double",
			"name" : "priceBudget",
			"description" : "Amount of money available for the task.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Project",
			"path" : "/v1/time/projects",
			"name" : "project",
			"description" : "Tasks belonging to this project.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Long",
			"name" : "timeBudget",
			"description" : "Amount of milliseconds available for the task.",
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
				"TrashItem"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "cf32864c-2186-4085-a7f2-ea320e3bd6cf",
	"createdAt" : "/Date(1417520681357)/",
	"updatedAt" : "/Date(1417539701357)/",
	"version" : 4,
	"externalSystem" : {
		"id" : "e4ec62b7-4635-4fa9-9681-8be36eeb6202",
		"createdAt" : "/Date(1417520021358)/",
		"updatedAt" : "/Date(1417521701358)/",
		"version" : 0,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "task-556",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
	"externalSyncedAt" : "/Date(1417521701357)/",
	"externalSynced" : true,
	"project" : {
		"id" : "6c3cc29d-7c9f-4e94-9d8f-12e1fe137046",
		"createdAt" : "/Date(1417518281357)/",
		"updatedAt" : "/Date(1417543301358)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "152a698d-680b-44b4-a28c-cad30feb7dcc",
			"createdAt" : "/Date(1417520741358)/",
			"updatedAt" : "/Date(1417528901358)/",
			"version" : 0,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1417521701357)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1417435301357)/",
		"ends" : "/Date(1417608101357)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "cb5c67b0-78ec-40e9-b566-9f1c93914a05",
			"createdAt" : "/Date(1417518401358)/",
			"updatedAt" : "/Date(1417554101358)/",
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
			"birthdayRemind" : "/Date(1419375600000)/",
			"workingTimeStart" : "/Date(1417503600000)/",
			"workingTimeEnd" : "/Date(1417536000000)/",
			"created" : "/Date(1417435301357)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "38f4c5e4-605d-474d-ab72-4d9eef75d52b",
			"createdAt" : "/Date(1417521341358)/",
			"updatedAt" : "/Date(1417525301358)/",
			"version" : 9,
			"externalSystem" : {
				"id" : "c46fa689-aa11-4c41-a576-f98980a041d8",
				"createdAt" : "/Date(1417518341358)/",
				"updatedAt" : "/Date(1417521701358)/",
				"version" : 7,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1417521701357)/",
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
		"membersCount" : 1,
		"tasksCount" : 3,
		"timeRecordsCount" : 2,
		"displayName" : "Content management system"
	},
	"name" : "Article editation",
	"code" : "ART",
	"note" : "form with validation",
	"done" : true,
	"author" : {
		"id" : "cb5c67b0-78ec-40e9-b566-9f1c93914a05",
		"createdAt" : "/Date(1417518401358)/",
		"updatedAt" : "/Date(1417554101358)/",
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
		"birthdayRemind" : "/Date(1419375600000)/",
		"workingTimeStart" : "/Date(1417503600000)/",
		"workingTimeEnd" : "/Date(1417536000000)/",
		"created" : "/Date(1417435301357)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"owner" : {
		"id" : "8cac6574-43b4-4136-8cf3-db843cdc63c5",
		"createdAt" : "/Date(1417521641357)/",
		"updatedAt" : "/Date(1417528901357)/",
		"version" : 8,
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
		"created" : "/Date(1417435301357)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"timeBudget" : 86400000,
	"priceBudget" : 1000.0,
	"displayName" : "Article editation"
}
```
