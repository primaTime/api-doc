ProjectWorkTypeLink
==

## URL

	https://api.primaerp.com/v1/time/projects/{id}/worktypelinks

## Properties

| Name        | Type      | Access     | Required | Description                                                                                         |
|-------------|-----------|------------|----------|-----------------------------------------------------------------------------------------------------|
| createdAt   | Date      | read only  | no       | Date of creation.                                                                                   |
| displayName | String    | read only  | no       | Describes an object in human readable form.                                                         |
| id          | String    | read write | no       | Unique object identifier.                                                                           |
| trashItem   | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | no       | Last modified date.                                                                                 |
| version     | Long      | read write | no       | Object version number.                                                                              |
| workType    | WorkType  | read write | YES      | The work type which is linked with another object.                                                  |

## Metadata

```JSON
{
	"type" : "ProjectWorkTypeLink",
	"path" : "/v1/time/projects/{id}/worktypelinks",
	"fields" : [
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
		},
		{
			"type" : "WorkType",
			"path" : "/v1/time/worktypes",
			"name" : "workType",
			"description" : "The work type which is linked with another object.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
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
	"id" : "29ecd0c5-041f-4379-b841-e1b5e213b189",
	"createdAt" : "/Date(1489386014922)/",
	"updatedAt" : "/Date(1489449194922)/",
	"version" : 4,
	"workType" : {
		"id" : "120a00e9-e0fc-42a8-88c3-59f6d1325ba3",
		"createdAt" : "/Date(1489386074922)/",
		"updatedAt" : "/Date(1489452794922)/",
		"version" : 2,
		"externalSystem" : {
			"id" : "6d506485-9303-4663-b9a5-cd6bbe89e66d",
			"createdAt" : "/Date(1489384754922)/",
			"updatedAt" : "/Date(1489420394922)/",
			"version" : 2,
			"name" : "Vendor system",
			"integrationPlugin" : "vendor",
			"displayName" : "Vendor system"
		},
		"externalResourceId" : "wt-058",
		"externalBrowsableUrl" : "http://www.vendor.com/worktypes/058",
		"externalSyncedAt" : "/Date(1489387994922)/",
		"externalSynced" : true,
		"name" : "Software development",
		"code" : "SW",
		"category" : "WORK",
		"displayName" : "Software development"
	},
	"displayName" : "Software development"
}
```
