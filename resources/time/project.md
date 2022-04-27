Project
==

## URL

	https://api.primaerp.com/v1/time/projects

	https://api.primaerp.com/v1/time/projects/{id}/$activate

	https://api.primaerp.com/v1/time/projects/{id}/$deactivate

	https://api.primaerp.com/v1/time/projects/@trackable

	https://api.primaerp.com/v1/time/projects/@editable

	https://api.primaerp.com/v1/time/projects/@member

	https://api.primaerp.com/v1/time/projects/@own

	https://api.primaerp.com/v1/users/{id}/projects

	https://api.primaerp.com/v1/users/{id}/projects/@member/summary

	https://api.primaerp.com/v1/users/{id}/projects/{id}/$activate

	https://api.primaerp.com/v1/users/{id}/projects/{id}/$deactivate

	https://api.primaerp.com/v1/users/{id}/projects/@trackable

	https://api.primaerp.com/v1/users/{id}/projects/@editable

	https://api.primaerp.com/v1/users/{id}/projects/@own

	https://api.primaerp.com/v1/time/clients/{id}/projects

	https://api.primaerp.com/v1/time/clients/{id}/projects/{id}/$activate

	https://api.primaerp.com/v1/time/clients/{id}/projects/{id}/$deactivate

	https://api.primaerp.com/v1/time/clients/{id}/projects/@trackable

	https://api.primaerp.com/v1/time/clients/{id}/projects/@editable

	https://api.primaerp.com/v1/time/clients/{id}/projects/@member

	https://api.primaerp.com/v1/time/clients/{id}/projects/@own

## Properties

| Name                 | Type           | Access     | Required | Description                                                                                         |
|----------------------|----------------|------------|----------|-----------------------------------------------------------------------------------------------------|
| active               | Boolean        | read write | no       | Determines whether the project is currently active. Default value is true.                          |
| autoMembership       | Boolean        | read write | no       | All new users will be added to this project automatically.                                          |
| begins               | Date           | read write | no       | Date and time when the project begins.                                                              |
| billable             | Boolean        | read write | no       | Determines whether the project will be billed to the client.                                        |
| client               | Client         | read write | no       | Provides info about the client for whom the project is realized.                                    |
| code                 | String         | read write | no       | A code or an abbreviation of the project.                                                           |
| createdAt            | Date           | read only  | no       | Date of creation.                                                                                   |
| displayName          | String         | read only  | no       | Describes an object in human readable form.                                                         |
| effective            | Boolean        | read write | YES      | Determines whether the project is effective. Default value is true.                                 |
| ends                 | Date           | read write | no       | Date and time of project completion.                                                                |
| externalBrowsableUrl | String         | read write | no       | Human accessible link in external system.                                                           |
| externalResourceId   | String         | read write | no       | Unique external system identifier.                                                                  |
| externalSynced       | Boolean        | write only | no       | Determines whether an object was synced with the external system.                                   |
| externalSyncedAt     | Date           | read only  | no       | Date of the last sync with the external system. It is set when the 'externalSynced' flag is true.   |
| externalSystem       | ExternalSystem | read write | no       | External system which maintains this object.                                                        |
| id                   | String         | read write | no       | Unique object identifier.                                                                           |
| membersCount         | Long           | read only  | no       | Counts the number of members working on the project.                                                |
| name                 | String         | read write | no       | Project name.                                                                                       |
| note                 | String         | read write | no       | Note about the project.                                                                             |
| owner                | User           | read write | YES      | Identifies the project owner.                                                                       |
| personal             | Boolean        | read write | no       | Determines whether the project is available, only for the owner.                                    |
| priceBudget          | Double         | read write | no       | Amount of money available for the project.                                                          |
| tasksCount           | Long           | read only  | no       | Counts the number of tasks that belong to the project and which have not been done.                 |
| timeBudget           | Long           | read write | no       | Amount of milliseconds available for the project.                                                   |
| timeRecordsCount     | Long           | read only  | no       | Counts the number of time records in the project.                                                   |
| trashItem            | TrashItem      | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt            | Date           | read only  | no       | Last modified date.                                                                                 |
| version              | Long           | read write | no       | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "Project",
	"path" : "/v1/time/projects",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "active",
			"description" : "Determines whether the project is currently active.",
			"defaultValue" : "true",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "autoMembership",
			"description" : "All new users will be added to this project automatically.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "begins",
			"description" : "Date and time when the project begins.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "billable",
			"description" : "Determines whether the project will be billed to the client.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Client",
			"path" : "/v1/time/clients",
			"name" : "client",
			"description" : "Provides info about the client for whom the project is realized.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "code",
			"description" : "A code or an abbreviation of the project.",
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
			"name" : "effective",
			"description" : "Determines whether the project is effective.",
			"defaultValue" : "true",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "Date",
			"name" : "ends",
			"description" : "Date and time of project completion.",
			"access" : "READ_WRITE"
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
			"type" : "Long",
			"name" : "membersCount",
			"description" : "Counts the number of members working on the project.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "String",
			"name" : "name",
			"description" : "Project name.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "note",
			"description" : "Note about the project.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "User",
			"path" : "/v1/users",
			"name" : "owner",
			"description" : "Identifies the project owner.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "Boolean",
			"name" : "personal",
			"description" : "Determines whether the project is available, only for the owner.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Double",
			"name" : "priceBudget",
			"description" : "Amount of money available for the project.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Long",
			"name" : "tasksCount",
			"description" : "Counts the number of tasks that belong to the project and which have not been done.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "Long",
			"name" : "timeBudget",
			"description" : "Amount of milliseconds available for the project.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Long",
			"name" : "timeRecordsCount",
			"description" : "Counts the number of time records in the project.",
			"access" : "READ_ONLY"
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
				"Task",
				"TimeRecord",
				"ProjectWorkTypeLink",
				"TrashItem",
				"Impulse",
				"ProjectMember"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "e175c384-c2b4-44d0-afb1-fcf78b1345e9",
	"createdAt" : "/Date(1651049426785)/",
	"updatedAt" : "/Date(1651093706785)/",
	"version" : 4,
	"externalSystem" : {
		"id" : "21070bf0-48c7-499d-b30d-02015225995d",
		"createdAt" : "/Date(1651050506785)/",
		"updatedAt" : "/Date(1651108106785)/",
		"version" : 8,
		"name" : "Vendor system",
		"integrationPlugin" : "vendor",
		"displayName" : "Vendor system"
	},
	"externalResourceId" : "project-221",
	"externalBrowsableUrl" : "http://www.vendor.com/projects/221",
	"externalSyncedAt" : "/Date(1651050506785)/",
	"externalSynced" : true,
	"name" : "Content management system",
	"code" : "CMS",
	"note" : "core feature",
	"begins" : "/Date(1650964106785)/",
	"ends" : "/Date(1651136906785)/",
	"timeBudget" : 604800000,
	"priceBudget" : 100000.0,
	"personal" : false,
	"owner" : {
		"id" : "8e7b9a13-03ff-4ef4-bd2d-ac462d74484c",
		"createdAt" : "/Date(1651048826785)/",
		"updatedAt" : "/Date(1651079306785)/",
		"version" : 2,
		"firstName" : "John",
		"lastName" : "Doe",
		"nickName" : "Johny D.",
		"email" : "fppph7ohj04pa1u@testdata.com",
		"phone" : "55 234 555 678",
		"position" : "Senior developer",
		"timeZone" : "America/Sao_Paulo",
		"dateFormat" : "yyyy-MM-dd",
		"timeFormat" : "K:mm a",
		"weekStart" : 7,
		"language" : "pt_BR",
		"password" : "7ibmrtq1pgc3ws4ddc17",
		"secretKey" : "userSecretKey",
		"confirmed" : false,
		"confirmedEmail" : false,
		"active" : false,
		"birthdayRemind" : "/Date(1652911200000)/",
		"workingTimeStart" : "/Date(1651039200000)/",
		"workingTimeEnd" : "/Date(1651071600000)/",
		"created" : "/Date(1650964106785)/",
		"admin" : false,
		"projectManager" : false,
		"displayName" : "Doe John"
	},
	"client" : {
		"id" : "ad1dfe06-608a-463b-b610-7c61d74e7769",
		"createdAt" : "/Date(1651047806785)/",
		"updatedAt" : "/Date(1651082906785)/",
		"version" : 1,
		"externalSystem" : {
			"id" : "c6718a9c-b1ce-4ead-88f8-26ec27e2171f",
			"createdAt" : "/Date(1651047566785)/",
			"updatedAt" : "/Date(1651129706785)/",
			"version" : 9,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "customer-996",
		"externalBrowsableUrl" : "http://www.vendor.com/customers/996",
		"externalSyncedAt" : "/Date(1651050506785)/",
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
		"consentTill" : "/Date(1682586506785)/",
		"displayName" : "Example Ltd."
	},
	"billable" : true,
	"autoMembership" : false,
	"membersCount" : 1,
	"tasksCount" : 3,
	"timeRecordsCount" : 2,
	"displayName" : "Content management system"
}
```
