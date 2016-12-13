TimeRecord
==

## URL

	https://api.primaerp.com/v1/time/timerecords

	https://api.primaerp.com/v1/time/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/timerecords/$unbilled

	https://api.primaerp.com/v1/time/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/timerecords/{id}/$updateprice

	https://api.primaerp.com/v1/time/tasks/{id}/timerecords

	https://api.primaerp.com/v1/time/tasks/{id}/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/tasks/{id}/timerecords/$unbilled

	https://api.primaerp.com/v1/time/tasks/{id}/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/tasks/{id}/timerecords/{id}/$updateprice

	https://api.primaerp.com/v1/time/tags/{id}/timerecords

	https://api.primaerp.com/v1/time/tags/{id}/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/tags/{id}/timerecords/$unbilled

	https://api.primaerp.com/v1/time/tags/{id}/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/tags/{id}/timerecords/{id}/$updateprice

	https://api.primaerp.com/v1/time/projects/{id}/timerecords

	https://api.primaerp.com/v1/time/projects/{id}/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/projects/{id}/timerecords/$unbilled

	https://api.primaerp.com/v1/time/projects/{id}/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/projects/{id}/timerecords/{id}/$updateprice

	https://api.primaerp.com/v1/time/users/{id}/timerecords

	https://api.primaerp.com/v1/time/users/{id}/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/users/{id}/timerecords/$unbilled

	https://api.primaerp.com/v1/time/users/{id}/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/users/{id}/timerecords/{id}/$updateprice

	https://api.primaerp.com/v1/time/worktypes/{id}/timerecords

	https://api.primaerp.com/v1/time/worktypes/{id}/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/worktypes/{id}/timerecords/$unbilled

	https://api.primaerp.com/v1/time/worktypes/{id}/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/worktypes/{id}/timerecords/{id}/$updateprice

## Properties

| Name                 | Type           | Access     | Required | Description                                                                                           |
|----------------------|----------------|------------|----------|-------------------------------------------------------------------------------------------------------|
| approved             | Boolean        | read write | no       | Determines whether the record was approved.                                                           |
| billable             | Boolean        | read write | no       | Determines whether the time record can be billed. A price will be stored only if the value is 'true'. |
| billed               | Boolean        | read only  | no       | Determines whether the record was billed.                                                             |
| client               | Client         | read write | no       | A client belongs to this object.                                                                      |
| createdAt            | Date           | read only  | no       | Date of creation.                                                                                     |
| description          | String         | read write | no       | Some description of the record.                                                                       |
| displayName          | String         | read only  | no       | Describes an object in human readable form.                                                           |
| duration             | Long           | read write | no       | Recording length (in milliseconds).                                                                   |
| effective            | Boolean        | read write | YES      | Determines whether the record is effective. Default value is true.                                    |
| externalBrowsableUrl | String         | read write | no       | Human accessible link in external system.                                                             |
| externalResourceId   | String         | read write | no       | Unique external system identifier.                                                                    |
| externalSynced       | Boolean        | write only | no       | Determines whether an object was synced with the external system.                                     |
| externalSyncedAt     | Date           | read only  | no       | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.     |
| externalSystem       | ExternalSystem | read write | no       | External system which maintains this object.                                                          |
| id                   | String         | read write | no       | Unique object identifier.                                                                             |
| price                | Double         | read write | no       | The price of the time record is calculated by the formula: 'unitPrice * duration'.                    |
| priceAutoCalculation | Boolean        | read write | no       | deprecated                                                                                            |
| priceModified        | Boolean        | read write | no       | If the value is 'true', the price won't be calculated by the price list.                              |
| project              | Project        | read write | no       | Task belongs to this project.                                                                         |
| recordType           | TimeRecordType | read only  | no       | A record type.                                                                                        |
| start                | Date           | read write | no       | Date when recording starts.                                                                           |
| stop                 | Date           | read write | no       | Date when recording stops.                                                                            |
| task                 | Task           | read write | no       | A task belonging to this project.                                                                     |
| trashItem            | TrashItem      | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified.   |
| unitPrice            | Double         | read write | no       | The unit price is the price per hour.                                                                 |
| updatedAt            | Date           | read only  | no       | Last modified date.                                                                                   |
| user                 | User           | read write | YES      | The user for whom the time on the task is recorded.                                                   |
| version              | Long           | read write | no       | Object version number.                                                                                |
| workType             | WorkType       | read write | no       | User which time on task is recorded.                                                                  |

## Metadata

```JSON
{
	"type" : "TimeRecord",
	"path" : "/v1/time/timerecords",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "approved",
			"description" : "Determines whether the record was approved.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "billable",
			"description" : "Determines whether the time record can be billed. A price will be stored only if the value is 'true'.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "billed",
			"description" : "Determines whether the record was billed.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "Client",
			"path" : "/v1/time/clients",
			"name" : "client",
			"description" : "A client belongs to this object.",
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
			"name" : "description",
			"description" : "Some description of the record.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "displayName",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "Long",
			"name" : "duration",
			"description" : "Recording length (in milliseconds).",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Min",
					"details" : "value 0"
				}
			]
		},
		{
			"type" : "Boolean",
			"name" : "effective",
			"description" : "Determines whether the record is effective.",
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
			"type" : "Double",
			"name" : "price",
			"description" : "The price of the time record is calculated by the formula: 'unitPrice * duration'. ",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "priceAutoCalculation",
			"description" : "deprecated",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "priceModified",
			"description" : "If the value is 'true', the price won't be calculated by the price list.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Project",
			"path" : "/v1/time/projects",
			"name" : "project",
			"description" : "Task belongs to this project.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "TimeRecordType",
			"name" : "recordType",
			"description" : "A record type.",
			"access" : "READ_ONLY",
			"constraints" : [
				{
					"type" : "Enum",
					"details" : "ATTENDANCE"
				}
			]
		},
		{
			"type" : "Date",
			"name" : "start",
			"description" : "Date when recording starts.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "stop",
			"description" : "Date when recording stops.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Task",
			"path" : "/v1/time/tasks",
			"name" : "task",
			"description" : "A task belonging to this project.",
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
			"type" : "Double",
			"name" : "unitPrice",
			"description" : "The unit price is the price per hour.",
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
			"description" : "The user for whom the time on the task is recorded.",
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
		},
		{
			"type" : "WorkType",
			"path" : "/v1/time/worktypes",
			"name" : "workType",
			"description" : "User which time on task is recorded.",
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
	"id" : "0f168465-5a11-429f-92b7-34d2d03060ff",
	"createdAt" : "/Date(1481618688967)/",
	"updatedAt" : "/Date(1481675928967)/",
	"version" : 6,
	"externalSystem" : {
		"id" : "39eee0ab-289c-4123-a579-2edf04a2d65d",
		"createdAt" : "/Date(1481619408967)/",
		"updatedAt" : "/Date(1481629128967)/",
		"version" : 0,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "time-55567",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334/time/55567",
	"externalSyncedAt" : "/Date(1481621928966)/",
	"externalSynced" : true,
	"user" : {
		"id" : "e32bb3bb-37e4-4418-8407-ec4b431c10b7",
		"createdAt" : "/Date(1481618928967)/",
		"updatedAt" : "/Date(1481650728967)/",
		"version" : 6,
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
		"birthdayRemind" : "/Date(1482447600000)/",
		"workingTimeStart" : "/Date(1481612400000)/",
		"workingTimeEnd" : "/Date(1481644800000)/",
		"created" : "/Date(1481535528966)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Smith John"
	},
	"project" : {
		"id" : "e414541c-efcf-4d29-98ce-e5f083681ec2",
		"createdAt" : "/Date(1481620068967)/",
		"updatedAt" : "/Date(1481636328967)/",
		"version" : 3,
		"externalSystem" : {
			"id" : "cd0f4c4d-9ed5-41bd-8bbb-f483044b2eb9",
			"createdAt" : "/Date(1481620068967)/",
			"updatedAt" : "/Date(1481657928967)/",
			"version" : 0,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1481621928966)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1481535528966)/",
		"ends" : "/Date(1481708328966)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : true,
		"owner" : {
			"id" : "44c9a69f-1cb8-4711-98b2-1f2d22fb6c63",
			"createdAt" : "/Date(1481620068967)/",
			"updatedAt" : "/Date(1481686728967)/",
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
			"birthdayRemind" : "/Date(1483484400000)/",
			"workingTimeStart" : "/Date(1481612400000)/",
			"workingTimeEnd" : "/Date(1481644800000)/",
			"created" : "/Date(1481535528966)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "06dc9812-8d26-4dff-a479-9333103ffe5d",
			"createdAt" : "/Date(1481621028967)/",
			"updatedAt" : "/Date(1481654328967)/",
			"version" : 7,
			"externalSystem" : {
				"id" : "252bbc82-ede1-4f71-a581-cd501d1e55ed",
				"createdAt" : "/Date(1481620788967)/",
				"updatedAt" : "/Date(1481647128967)/",
				"version" : 3,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1481621928966)/",
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
	"task" : {
		"id" : "415b2a80-b9c8-4e92-8afc-cda8833e507a",
		"createdAt" : "/Date(1481621448967)/",
		"updatedAt" : "/Date(1481661528967)/",
		"version" : 3,
		"externalSystem" : {
			"id" : "3f07e394-79a7-4478-81f3-8f7e7cac4451",
			"createdAt" : "/Date(1481621868967)/",
			"updatedAt" : "/Date(1481690328967)/",
			"version" : 1,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-334",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334",
		"externalSyncedAt" : "/Date(1481621928966)/",
		"externalSynced" : true,
		"project" : {
			"id" : "e414541c-efcf-4d29-98ce-e5f083681ec2",
			"createdAt" : "/Date(1481620068967)/",
			"updatedAt" : "/Date(1481636328967)/",
			"version" : 3,
			"externalSystem" : {
				"id" : "cd0f4c4d-9ed5-41bd-8bbb-f483044b2eb9",
				"createdAt" : "/Date(1481620068967)/",
				"updatedAt" : "/Date(1481657928967)/",
				"version" : 0,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1481621928966)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1481535528966)/",
			"ends" : "/Date(1481708328966)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : true,
			"owner" : {
				"id" : "44c9a69f-1cb8-4711-98b2-1f2d22fb6c63",
				"createdAt" : "/Date(1481620068967)/",
				"updatedAt" : "/Date(1481686728967)/",
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
				"birthdayRemind" : "/Date(1483484400000)/",
				"workingTimeStart" : "/Date(1481612400000)/",
				"workingTimeEnd" : "/Date(1481644800000)/",
				"created" : "/Date(1481535528966)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "06dc9812-8d26-4dff-a479-9333103ffe5d",
				"createdAt" : "/Date(1481621028967)/",
				"updatedAt" : "/Date(1481654328967)/",
				"version" : 7,
				"externalSystem" : {
					"id" : "252bbc82-ede1-4f71-a581-cd501d1e55ed",
					"createdAt" : "/Date(1481620788967)/",
					"updatedAt" : "/Date(1481647128967)/",
					"version" : 3,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1481621928966)/",
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
		"done" : false,
		"author" : {
			"id" : "44c9a69f-1cb8-4711-98b2-1f2d22fb6c63",
			"createdAt" : "/Date(1481620068967)/",
			"updatedAt" : "/Date(1481686728967)/",
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
			"birthdayRemind" : "/Date(1483484400000)/",
			"workingTimeStart" : "/Date(1481612400000)/",
			"workingTimeEnd" : "/Date(1481644800000)/",
			"created" : "/Date(1481535528966)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "e32bb3bb-37e4-4418-8407-ec4b431c10b7",
			"createdAt" : "/Date(1481618928967)/",
			"updatedAt" : "/Date(1481650728967)/",
			"version" : 6,
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
			"birthdayRemind" : "/Date(1482447600000)/",
			"workingTimeStart" : "/Date(1481612400000)/",
			"workingTimeEnd" : "/Date(1481644800000)/",
			"created" : "/Date(1481535528966)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Smith John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "2fbee51c-00ef-4fec-a1dc-a420c202a06d",
		"createdAt" : "/Date(1481621748967)/",
		"updatedAt" : "/Date(1481693928967)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "3d3dac45-7349-4e93-868d-a07ebc41c2e4",
			"createdAt" : "/Date(1481619768967)/",
			"updatedAt" : "/Date(1481621928967)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1481621928966)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"category" : "WORK",
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "06dc9812-8d26-4dff-a479-9333103ffe5d",
		"createdAt" : "/Date(1481621028967)/",
		"updatedAt" : "/Date(1481654328967)/",
		"version" : 7,
		"externalSystem" : {
			"id" : "252bbc82-ede1-4f71-a581-cd501d1e55ed",
			"createdAt" : "/Date(1481620788967)/",
			"updatedAt" : "/Date(1481647128967)/",
			"version" : 3,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1481621928966)/",
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
	"start" : "/Date(1481535528966)/",
	"stop" : "/Date(1481557128966)/",
	"duration" : 21600000,
	"description" : "Form validations and CRUD.",
	"billable" : true,
	"price" : 648.5,
	"unitPrice" : 3.0023E-5,
	"priceAutoCalculation" : true,
	"priceModified" : false,
	"approved" : true,
	"billed" : false,
	"recordType" : "ATTENDANCE",
	"displayName" : "Smith John"
}
```
