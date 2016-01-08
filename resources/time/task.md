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
	"id" : "e53cff11-24b9-4c54-afa9-c45913d4414d",
	"createdAt" : "/Date(1452256698199)/",
	"updatedAt" : "/Date(1452336558199)/",
	"version" : 9,
	"externalSystem" : {
		"id" : "41fbafdd-b842-40e0-92e7-ff2cf3613cb1",
		"createdAt" : "/Date(1452255978199)/",
		"updatedAt" : "/Date(1452271758199)/",
		"version" : 5,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "task-556",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/556",
	"externalSyncedAt" : "/Date(1452257358198)/",
	"externalSynced" : true,
	"project" : {
		"id" : "c01022fd-4a0f-4d07-ae45-ec74ee2498b9",
		"createdAt" : "/Date(1452256698199)/",
		"updatedAt" : "/Date(1452264558199)/",
		"version" : 0,
		"externalSystem" : {
			"id" : "55b14b17-1bd8-4bfe-a831-0cc668307c30",
			"createdAt" : "/Date(1452254538199)/",
			"updatedAt" : "/Date(1452307758199)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1452257358198)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1452170958198)/",
		"ends" : "/Date(1452343758198)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : false,
		"owner" : {
			"id" : "ff0e41e0-b871-4b28-9819-9d36568ca527",
			"createdAt" : "/Date(1452255558199)/",
			"updatedAt" : "/Date(1452329358199)/",
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
			"birthdayRemind" : "/Date(1454108400000)/",
			"workingTimeStart" : "/Date(1452236400000)/",
			"workingTimeEnd" : "/Date(1452268800000)/",
			"created" : "/Date(1452170958198)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "7bb6007f-5e39-4bad-9aea-596caf0976d2",
			"createdAt" : "/Date(1452253998199)/",
			"updatedAt" : "/Date(1452311358199)/",
			"version" : 6,
			"externalSystem" : {
				"id" : "da5e1afe-0008-470f-aef5-e9b05b757347",
				"createdAt" : "/Date(1452254598199)/",
				"updatedAt" : "/Date(1452275358199)/",
				"version" : 0,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1452257358198)/",
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
		"id" : "ff0e41e0-b871-4b28-9819-9d36568ca527",
		"createdAt" : "/Date(1452255558199)/",
		"updatedAt" : "/Date(1452329358199)/",
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
		"birthdayRemind" : "/Date(1454108400000)/",
		"workingTimeStart" : "/Date(1452236400000)/",
		"workingTimeEnd" : "/Date(1452268800000)/",
		"created" : "/Date(1452170958198)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"owner" : {
		"id" : "c5deff61-6983-4590-a935-f526cf41edad",
		"createdAt" : "/Date(1452256098199)/",
		"updatedAt" : "/Date(1452336558199)/",
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
		"birthdayRemind" : "/Date(1453071600000)/",
		"workingTimeStart" : "/Date(1452236400000)/",
		"workingTimeEnd" : "/Date(1452268800000)/",
		"created" : "/Date(1452170958198)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"timeBudget" : 86400000,
	"priceBudget" : 1000.0,
	"displayName" : "Article editation"
}
```
