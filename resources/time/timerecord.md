TimeRecord
==

## URL

	https://api.primaerp.com/v1/time/timerecords

	https://api.primaerp.com/v1/time/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/timerecords/$unbilled

	https://api.primaerp.com/v1/time/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/timerecords/{id}/$updateprice

	https://api.primaerp.com/v1/time/tags/{id}/timerecords

	https://api.primaerp.com/v1/time/tags/{id}/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/tags/{id}/timerecords/$unbilled

	https://api.primaerp.com/v1/time/tags/{id}/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/tags/{id}/timerecords/{id}/$updateprice

	https://api.primaerp.com/v1/time/worktypes/{id}/timerecords

	https://api.primaerp.com/v1/time/worktypes/{id}/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/worktypes/{id}/timerecords/$unbilled

	https://api.primaerp.com/v1/time/worktypes/{id}/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/worktypes/{id}/timerecords/{id}/$updateprice

	https://api.primaerp.com/v1/time/users/{id}/timerecords

	https://api.primaerp.com/v1/time/users/{id}/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/users/{id}/timerecords/$unbilled

	https://api.primaerp.com/v1/time/users/{id}/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/users/{id}/timerecords/{id}/$updateprice

	https://api.primaerp.com/v1/time/projects/{id}/timerecords

	https://api.primaerp.com/v1/time/projects/{id}/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/projects/{id}/timerecords/$unbilled

	https://api.primaerp.com/v1/time/projects/{id}/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/projects/{id}/timerecords/{id}/$updateprice

	https://api.primaerp.com/v1/time/tasks/{id}/timerecords

	https://api.primaerp.com/v1/time/tasks/{id}/timerecords/$calculateprice

	https://api.primaerp.com/v1/time/tasks/{id}/timerecords/$unbilled

	https://api.primaerp.com/v1/time/tasks/{id}/timerecords/$unbilledsummary

	https://api.primaerp.com/v1/time/tasks/{id}/timerecords/{id}/$updateprice

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
| effective            | Boolean        | read write | YES      | Determines whether the record is beneficial. Default value is true.                                   |
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
			"description" : "Determines whether the record is beneficial.",
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
	"id" : "f614179b-031f-4a05-b866-c4d37bfc044e",
	"createdAt" : "/Date(1651047507153)/",
	"updatedAt" : "/Date(1651097307153)/",
	"version" : 4,
	"externalSystem" : {
		"id" : "abf0570d-97fc-42d7-b6b3-f32830c82716",
		"createdAt" : "/Date(1651050507154)/",
		"updatedAt" : "/Date(1651104507154)/",
		"version" : 1,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "time-55567",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334/time/55567",
	"externalSyncedAt" : "/Date(1651050507152)/",
	"externalSynced" : true,
	"user" : {
		"id" : "11183308-2d70-4228-a5ef-08ba17168c8c",
		"createdAt" : "/Date(1651049487154)/",
		"updatedAt" : "/Date(1651082907154)/",
		"version" : 7,
		"firstName" : "John",
		"lastName" : "Doe",
		"nickName" : "Johny D.",
		"email" : "nj06yc0rtjsa95f@testdata.com",
		"phone" : "55 234 555 678",
		"position" : "Senior developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "yyyy-MM-dd",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "pt_BR",
		"password" : "kupokwi1e4j26emdi4yo",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1652911200000)/",
		"workingTimeStart" : "/Date(1651039200000)/",
		"workingTimeEnd" : "/Date(1651071600000)/",
		"created" : "/Date(1650964107152)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"project" : {
		"id" : "530f3ef3-9e26-4406-9b47-23c70fb20c40",
		"createdAt" : "/Date(1651048347153)/",
		"updatedAt" : "/Date(1651057707153)/",
		"version" : 7,
		"externalSystem" : {
			"id" : "b257ba54-535b-4da8-8ed1-04daa01b8b4c",
			"createdAt" : "/Date(1651050267153)/",
			"updatedAt" : "/Date(1651082907153)/",
			"version" : 8,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "project-221",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
		"externalSyncedAt" : "/Date(1651050507152)/",
		"externalSynced" : true,
		"name" : "Content management system",
		"code" : "CMS",
		"note" : "core feature",
		"begins" : "/Date(1650964107152)/",
		"ends" : "/Date(1651136907152)/",
		"timeBudget" : 604800000,
		"priceBudget" : 100000.0,
		"personal" : true,
		"owner" : {
			"id" : "a28a03d5-55d3-452f-8807-d8fd2d62c6b1",
			"createdAt" : "/Date(1651047807153)/",
			"updatedAt" : "/Date(1651100907153)/",
			"version" : 1,
			"firstName" : "John",
			"lastName" : "Doe",
			"nickName" : "Johny D.",
			"email" : "wifvg9lu4xgo1tz@testdata.com",
			"phone" : "55 234 555 678",
			"position" : "Senior developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "yyyy-MM-dd",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "pt_BR",
			"password" : "cb0aa2wkj4zycblkw4r_",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1652911200000)/",
			"workingTimeStart" : "/Date(1651039200000)/",
			"workingTimeEnd" : "/Date(1651071600000)/",
			"created" : "/Date(1650964107152)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"client" : {
			"id" : "df46107f-d5d8-4982-89ec-c2b223042730",
			"createdAt" : "/Date(1651047327153)/",
			"updatedAt" : "/Date(1651079307153)/",
			"version" : 9,
			"externalSystem" : {
				"id" : "cb1867d5-93a0-498b-ad00-91c2413e26c3",
				"createdAt" : "/Date(1651049247153)/",
				"updatedAt" : "/Date(1651090107153)/",
				"version" : 7,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "customer-996",
			"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
			"externalSyncedAt" : "/Date(1651050507152)/",
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
			"consentTill" : "/Date(1682586507152)/",
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
		"id" : "bdb3f868-25ff-4b45-9d2a-182ba7ec0458",
		"createdAt" : "/Date(1651050267153)/",
		"updatedAt" : "/Date(1651097307153)/",
		"version" : 6,
		"externalSystem" : {
			"id" : "50c2622f-26f2-4ec6-8497-e503cf69eb76",
			"createdAt" : "/Date(1651049127154)/",
			"updatedAt" : "/Date(1651104507154)/",
			"version" : 1,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "task-334",
		"externalBrowsableUrl" : "http://www.vendor.com/projects/221/tasks/334",
		"externalSyncedAt" : "/Date(1651050507152)/",
		"externalSynced" : true,
		"project" : {
			"id" : "530f3ef3-9e26-4406-9b47-23c70fb20c40",
			"createdAt" : "/Date(1651048347153)/",
			"updatedAt" : "/Date(1651057707153)/",
			"version" : 7,
			"externalSystem" : {
				"id" : "b257ba54-535b-4da8-8ed1-04daa01b8b4c",
				"createdAt" : "/Date(1651050267153)/",
				"updatedAt" : "/Date(1651082907153)/",
				"version" : 8,
				"name" : "Vendor system",
				"integrationPlugin" : "vendor",
				"displayName" : "Vendor system"
			},
			"externalResourceId" : "project-221",
			"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
			"externalSyncedAt" : "/Date(1651050507152)/",
			"externalSynced" : true,
			"name" : "Content management system",
			"code" : "CMS",
			"note" : "core feature",
			"begins" : "/Date(1650964107152)/",
			"ends" : "/Date(1651136907152)/",
			"timeBudget" : 604800000,
			"priceBudget" : 100000.0,
			"personal" : true,
			"owner" : {
				"id" : "a28a03d5-55d3-452f-8807-d8fd2d62c6b1",
				"createdAt" : "/Date(1651047807153)/",
				"updatedAt" : "/Date(1651100907153)/",
				"version" : 1,
				"firstName" : "John",
				"lastName" : "Doe",
				"nickName" : "Johny D.",
				"email" : "wifvg9lu4xgo1tz@testdata.com",
				"phone" : "55 234 555 678",
				"position" : "Senior developer",
				"timeZone" : "America/Sao_Paulo",
				"dateFormat" : "yyyy-MM-dd",
				"timeFormat" : "K:mm a",
				"weekStart" : 7,
				"language" : "pt_BR",
				"password" : "cb0aa2wkj4zycblkw4r_",
				"secretKey" : "userSecretKey",
				"confirmed" : false,
				"confirmedEmail" : false,
				"active" : false,
				"birthdayRemind" : "/Date(1652911200000)/",
				"workingTimeStart" : "/Date(1651039200000)/",
				"workingTimeEnd" : "/Date(1651071600000)/",
				"created" : "/Date(1650964107152)/",
				"admin" : false,
				"projectManager" : false,
				"displayName" : "Doe John"
			},
			"client" : {
				"id" : "df46107f-d5d8-4982-89ec-c2b223042730",
				"createdAt" : "/Date(1651047327153)/",
				"updatedAt" : "/Date(1651079307153)/",
				"version" : 9,
				"externalSystem" : {
					"id" : "cb1867d5-93a0-498b-ad00-91c2413e26c3",
					"createdAt" : "/Date(1651049247153)/",
					"updatedAt" : "/Date(1651090107153)/",
					"version" : 7,
					"name" : "Vendor system",
					"integrationPlugin" : "vendor",
					"displayName" : "Vendor system"
				},
				"externalResourceId" : "customer-996",
				"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
				"externalSyncedAt" : "/Date(1651050507152)/",
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
				"consentTill" : "/Date(1682586507152)/",
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
			"id" : "a28a03d5-55d3-452f-8807-d8fd2d62c6b1",
			"createdAt" : "/Date(1651047807153)/",
			"updatedAt" : "/Date(1651100907153)/",
			"version" : 1,
			"firstName" : "John",
			"lastName" : "Doe",
			"nickName" : "Johny D.",
			"email" : "wifvg9lu4xgo1tz@testdata.com",
			"phone" : "55 234 555 678",
			"position" : "Senior developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "yyyy-MM-dd",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "pt_BR",
			"password" : "cb0aa2wkj4zycblkw4r_",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1652911200000)/",
			"workingTimeStart" : "/Date(1651039200000)/",
			"workingTimeEnd" : "/Date(1651071600000)/",
			"created" : "/Date(1650964107152)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"owner" : {
			"id" : "11183308-2d70-4228-a5ef-08ba17168c8c",
			"createdAt" : "/Date(1651049487154)/",
			"updatedAt" : "/Date(1651082907154)/",
			"version" : 7,
			"firstName" : "John",
			"lastName" : "Doe",
			"nickName" : "Johny D.",
			"email" : "nj06yc0rtjsa95f@testdata.com",
			"phone" : "55 234 555 678",
			"position" : "Senior developer",
			"timeZone" : "America/Sao_Paulo",
			"dateFormat" : "yyyy-MM-dd",
			"timeFormat" : "K:mm a",
			"weekStart" : 7,
			"language" : "pt_BR",
			"password" : "kupokwi1e4j26emdi4yo",
			"secretKey" : "userSecretKey",
			"confirmed" : false,
			"confirmedEmail" : false,
			"active" : false,
			"birthdayRemind" : "/Date(1652911200000)/",
			"workingTimeStart" : "/Date(1651039200000)/",
			"workingTimeEnd" : "/Date(1651071600000)/",
			"created" : "/Date(1650964107152)/",
			"admin" : false,
			"projectManager" : false,
			"displayName" : "Doe John"
		},
		"timeBudget" : 86400000,
		"priceBudget" : 1000.0,
		"displayName" : "Article editation"
	},
	"workType" : {
		"id" : "e68182da-18c7-43f2-8588-b9040619fec7",
		"createdAt" : "/Date(1651048107154)/",
		"updatedAt" : "/Date(1651064907154)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "d6ce647d-75b4-4b9e-9493-7368247b50c2",
			"createdAt" : "/Date(1651047927154)/",
			"updatedAt" : "/Date(1651097307154)/",
			"version" : 5,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1651050507152)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"category" : "WORK",
		"displayName" : "Software development"
	},
	"client" : {
		"id" : "df46107f-d5d8-4982-89ec-c2b223042730",
		"createdAt" : "/Date(1651047327153)/",
		"updatedAt" : "/Date(1651079307153)/",
		"version" : 9,
		"externalSystem" : {
			"id" : "cb1867d5-93a0-498b-ad00-91c2413e26c3",
			"createdAt" : "/Date(1651049247153)/",
			"updatedAt" : "/Date(1651090107153)/",
			"version" : 7,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1651050507152)/",
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
		"consentTill" : "/Date(1682586507152)/",
		"displayName" : "Example Ltd."
	},
	"start" : "/Date(1650964107152)/",
	"stop" : "/Date(1650985707152)/",
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
	"displayName" : "Doe John"
}
```
