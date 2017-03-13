Task
==

## URL

	https://api.primaerp.com/v1/time/tasks

	https://api.primaerp.com/v1/time/tasks/@trackable

	https://api.primaerp.com/v1/time/tasks/@editable

	https://api.primaerp.com/v1/time/projects/{id}/tasks

	https://api.primaerp.com/v1/time/projects/{id}/tasks/@trackable

	https://api.primaerp.com/v1/time/projects/{id}/tasks/@editable

## Properties

| Name                 | Type           | Access     | Required | Description                                                                                         |
|----------------------|----------------|------------|----------|-----------------------------------------------------------------------------------------------------|
| author               | User           | read write | no       | User who created the task.                                                                          |
| code                 | String         | read write | no       | A code or an abbreviation of the task.                                                              |
| createdAt            | Date           | read only  | no       | Date of creation.                                                                                   |
| displayName          | String         | read only  | no       | Describes an object in human readable form.                                                         |
| done                 | Boolean        | read write | no       | Determines whether the task is currently done.                                                      |
| effective            | Boolean        | read write | YES      | Determines whether the task is effective. Default value is true.                                    |
| externalBrowsableUrl | String         | read write | no       | Human accessible link in external system.                                                           |
| externalResourceId   | String         | read write | no       | Unique external system identifier.                                                                  |
| externalSynced       | Boolean        | write only | no       | Determines whether an object was synced with the external system.                                   |
| externalSyncedAt     | Date           | read only  | no       | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.   |
| externalSystem       | ExternalSystem | read write | no       | External system which maintains this object.                                                        |
| id                   | String         | read write | no       | Unique object identifier.                                                                           |
| name                 | String         | read write | no       | Task name.                                                                                          |
| note                 | String         | read write | no       | Additional note.                                                                                    |
| owner                | User           | read write | no       | User who is responsible for the task.                                                               |
| priceBudget          | Double         | read write | no       | Amount of money available for the task.                                                             |
| project              | Project        | read write | no       | Tasks belonging to this project.                                                                    |
| timeBudget           | Long           | read write | no       | Amount of milliseconds available for the task.                                                      |
| trashItem            | TrashItem      | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt            | Date           | read only  | no       | Last modified date.                                                                                 |
| version              | Long           | read write | no       | Object version number.                                                                              |

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
			"defaultValue" : "true",
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
	"id" : "ab7b8420-a11b-4673-a3b4-06d0977a65de",
	"createdAt" : "/Date(1489385235092)/",
	"updatedAt" : "/Date(1489449195092)/",
	"version" : 9,
	"externalSystem" : {
		"id" : "5d92f9d1-6e71-4967-839a-43500c6def14",
		"createdAt" : "/Date(1489385415092)/",
		"updatedAt" : "/Date(1489395195092)/",
		"version" : 0,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "task-556",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
	"externalSyncedAt" : "/Date(1489387995091)/",
	"externalSynced" : true,
	"project" : {
		"id" : "3fc74688-bacb-4d0f-9e0c-558eefaf453e",
		"createdAt" : "/Date(1489386315092)/",
		"updatedAt" : "/Date(1489405995092)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "f92fa1b1-6637-413b-a722-679c0c19469c",
			"createdAt" : "/Date(1489384755092)/",
			"updatedAt" : "/Date(1489413195092)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1489387995091)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1489301595091)/",
		"ends" : "/Date(1489474395091)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "e62c110c-d8c3-43db-bc30-2ea42ddda887",
			"createdAt" : "/Date(1489385415092)/",
			"updatedAt" : "/Date(1489420395092)/",
			"version" : 1,
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
			"created" : "/Date(1489301595091)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "ae0c7b74-16c9-47c2-b60a-55718133e0b3",
			"createdAt" : "/Date(1489387395092)/",
			"updatedAt" : "/Date(1489416795092)/",
			"version" : 9,
			"externalSystem" : {
				"id" : "f9523dbf-0183-4e99-b1bb-f88ca091facf",
				"createdAt" : "/Date(1489384755092)/",
				"updatedAt" : "/Date(1489420395092)/",
				"version" : 7,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1489387995091)/",
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
	"name" : "Article editation",
	"code" : "ART",
	"note" : "form with validation",
	"done" : true,
	"author" : {
		"id" : "e62c110c-d8c3-43db-bc30-2ea42ddda887",
		"createdAt" : "/Date(1489385415092)/",
		"updatedAt" : "/Date(1489420395092)/",
		"version" : 1,
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
		"created" : "/Date(1489301595091)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"owner" : {
		"id" : "1791b493-d196-48df-a0d0-c8e6cf9ffac2",
		"createdAt" : "/Date(1489385055092)/",
		"updatedAt" : "/Date(1489456395092)/",
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
		"birthdayRemind" : "/Date(1490223600000)/",
		"workingTimeStart" : "/Date(1489388400000)/",
		"workingTimeEnd" : "/Date(1489420800000)/",
		"created" : "/Date(1489301595092)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"timeBudget" : 86400000,
	"priceBudget" : 1000.0,
	"displayName" : "Article editation"
}
```
