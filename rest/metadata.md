Metadata
==

## API metadata description

The primaERP API may displaythe metadata document where the data model for the selected resource is described.

### Syntax

/{resource}/$metadata

| {resource} = | Module resources such as: time/projects, time/timerecords, time/tasks, etcOr global resources such as: user |
| --- | --- |

### Example

GET http://{tenant}.api.primaerp.com/v1/time/projects/$metadata

- {
-  "type":"Project",
-  "fields":[
-   {
-    "type":"TrashItem",
-    "fields":[],
-    "name":"trashItem",
-    "description":"Informs whether an object is in the trash. An object is in the trash if a trash item was specified.",
-    "constraints":[]
-   },
-   {
-    "type":"Date",
-    "fields":[],
-    "name":"ends",
-    "description":"Date and time of project completion.",
-    "constraints":[]
-   },
-   {
-    "type":"ExternalSystem",
-    "fields":[],
-    "name":"externalSystem",
-    "description":"External system which maintains this object.",
-    "constraints":[]
-   },
-   {
-    "type":"Byte",
-    "fields":[],
-    "name":"timeBudgetWarn",
-    "description":"Value in percentage of the budgeted time. It is useful to warn the owner.",
-    "constraints":[
-     {
-      "type":"Min",
-      "pattern":null
-     },
-     {
-      "type":"Max",
-      "pattern":null
-     }
-    ]
-   },
-   {
-    "type":"String",
-    "fields":[],
-    "name":"name",
-    "description":"Project name.",
-    "constraints":[]
-   },
-   {
-    "type":"Long",
-    "fields":[],
-    "name":"timeBudget",
-    "description":"Amount of milliseconds available for the project.",
-    "constraints":[]
-   },
-   {
-    "type":"Boolean",
-    "fields":[],
-    "name":"active",
-    "description":"Determines whether the project is currently active.",
-    "constraints":[]
-   },
-   {
-    "type":"String",
-    "fields":[],
-    "name":"id",
-    "description":"Unique object identifier.",
-    "constraints":[
-     {
-      "type":"Pattern",
-      "pattern":"[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
-     },
-     {
-      "type":"NotNull",
-      "pattern":null
-     }
-    ]
-   },
-   .
-   .
-   .
-  ]

}

## Inner Collections

The API can provide the inner collections for some resources.

### Syntax:

/{resource}/(id)/{inner collection}

_values:_

{resource} = time/projects, time/tasks, time/worktypes or users

{inner collection} = inner resource

### Example:

The project contains a collection of tasks.

GET http://{tenant}.api.primaerp.com/v1/time/projects/(id)/tasks
