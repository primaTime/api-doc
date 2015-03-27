RoleCompetency
==

## URL

	https://api.primaerp.com/v1/rolecompetencies

## Properties

| Name        | Type       | Access     | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Description                                                                                         |
|-------------|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| competency  | Competency | read only  | no                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | If it is set, then the role is generated automatically and cannot be edited.                        |
| createdAt   | Date       | read only  | no                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Date of creation.                                                                                   |
| displayName | String     | read only  | no                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Describes an object in human readable form.                                                         |
| id          | String     | read write | no                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Unique object identifier.                                                                           |
| role        | Role       | read write | no                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | The role of an custom user's role. Built-in roles do not have a role.                               |
| trashItem   | TrashItem  | read write | no                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date       | read only  | no                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Last modified date.                                                                                 |
| version     | Long       | read write | no                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Object version number.                                                                              |

## Metadata

```JSON
{
	"type" : "RoleCompetency",
	"path" : "/v1/rolecompetencies",
	"fields" : [
		{
			"type" : "Competency",
			"name" : "competency",
			"description" : "If it is set, then the role is generated automatically and cannot be edited.",
			"access" : "READ_ONLY",
			"constraints" : [
				{
					"type" : "Enum",
					"details" : "READ_ACCESS, WRITE_ACCESS, OWNERSHIP, ACCOUNT_ADMIN, USERS_MANAGE, USER_PROFILE, TIME_ACCESS, TIME_ADMIN, CLIENTS_MANAGE, WORKTYPES_MANAGE, PROJECTS_CREATE_NEW, TIMERECORD_TRACK_OWN, TIMERECORD_TRACK_WITHOUT_PROJECT, PROJECTS_PRIVATE_MANAGE_TRACK, PROJECTS_MEMBER_VIEW_TRACK, PROJECTS_MEMBER_VIEW_OTHERS, PROJECTS_OWN_MANAGE_TRACK, PROJECTS_ALL_MANAGE_TRACK, APPROVE_OWN, APPROVE_ALL, REPORTS_PERSONAL, REPORTS_COMPLETE, REPORTS_PROJECT, REPORTS_TEAM, PRICES_VIEW, PRICES_UPDATE, BILLING_ACCESS, BILLING_ADMIN, ATTENDANCE_ACCESS, ATTENDANCE_ADMIN"
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
			"type" : "Role",
			"path" : "/v1/roles",
			"name" : "role",
			"description" : "The role of an custom user's role. Built-in roles do not have a role.",
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
	"id" : "360c6e4b-0aed-459d-8f8c-a6f28e5d7a12",
	"createdAt" : "/Date(1424880852907)/",
	"updatedAt" : "/Date(1424890452907)/",
	"version" : 6,
	"role" : {
		"id" : "c1dc3bcb-9570-4aa2-aea0-1d291db368af",
		"createdAt" : "/Date(1424881692907)/",
		"updatedAt" : "/Date(1424883252907)/",
		"version" : 4,
		"name" : "Admin",
		"builtInRole" : "ADMIN",
		"roleType" : "EXPLICIT",
		"product" : "CORE",
		"displayName" : "ADMIN"
	},
	"competency" : "ACCOUNT_ADMIN",
	"displayName" : "eu.abra.primaerp.api.beans.system.permissions.Role@380959b3[name=Admin,builtInRole=ADMIN,roleType=EXPLICIT,product=CORE,id=c1dc3bcb-9570-4aa2-aea0-1d291db368af,tenantId=<null>,trashItem=<null>,createdAt=Wed Feb 25 17:28:12 CET 2015,updatedAt=Wed Feb 25 17:54:12 CET 2015,version=4][ACCOUNT_ADMIN]"
}
```
