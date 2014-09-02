Query string options
==

## CRUD operations

The primaERP API supports CRUD (Create, Read, Update, Delete) operations via the HTTP Header.

| Operation | SQL | HTTP |
| --- | --- | --- |
| Create | [INSERT](http://en.wikipedia.org/wiki/Insert_(SQL)) | [POST](http://en.wikipedia.org/wiki/POST_(HTTP)) |
| Read (Retrieve) | [SELECT](http://en.wikipedia.org/wiki/Select_(SQL)) | [GET](http://en.wikipedia.org/wiki/GET_(HTTP)) |
| Update (Modify) | [UPDATE](http://en.wikipedia.org/wiki/Update_(SQL)) | [PUT](http://en.wikipedia.org/wiki/PUT_(HTTP)) |
| Delete (Destroy) | [DELETE](http://en.wikipedia.org/wiki/Delete_(SQL)) | [DELETE](http://en.wikipedia.org/wiki/DELETE_(HTTP)) |

In case you have a client with limited capability for setting the HTTP Header, you should set up a CRUD operation by the query parameter `?method`.

#### Syntax

- PUT = `?method=PUT`
- DELETE = `?method=DELETE`


## $set

This is a special case used to set values to the object's fields. This query can be used with multiple parameters.

#### Syntax

		/{resource}/{id}/$set?object_field1=value1&object_field2=value2

Values:

- `{resource}` - a module resource such as: `time/projects`, `time/timerecords`, `time/tasks`, etc. Or a global resource such as `user`
- `{id}` - a resource ID

#### Example

For a single field.

		POST http://{tenant}.api.primaerp.com/v1/time/projects/d18ae895-7266-4e9f-87f2-1a426f7e29ec/$set?name=primaERP

For multiple fields.

		POST http://{tenant}.api.primaerp.com/v1/time/projects/d18ae895-7266-4e9f-87f2-1a426f7e29ec/$set?name=primaERP&note=important


## Inner Collections

The API can provide the inner collections for some resources.

#### Syntax:

		/{resource}/{id}/{inner collection}

Values:

- `{resource}` - a module resource such as `time/projects` or a global resource such as `user`.
- `{inner collection}` - an inner resource such as `tasks` or `timerecords`.

#### Example:

The project contains a collection of tasks.

		GET http://{tenant}.api.primaerp.com/v1/time/projects/{id}/tasks

	
## Order response data

The primaERP API provides the query string option to sort the entries collection. It also supports multi sorting by chaining the field names.

#### Syntax

		/{resource}/$orderby = object_field1 {order}, object_field2 {order}

Value:

- `{resource}` - a module resource such as `time/projects` or a global resource such as `user`.
- `{order}` - `asc` (ascending order), `desc` (descending order) 

\* Note that the default order is ascendant.

#### Example

This request sorts the projects by name

		GET http://{tenant}.api.primaerp.com/v1/time/projects?$orderby=name

This request sorts the projects by name in a descending order.

		GET http://{tenant}.api.primaerp.com/v1/time/projects?$orderby=name desc

For multi sorting.

		GET http://{tenant}.api.primaerp.com/v1/time/timerecords?$orderby=start desc, description asc

## Paging

The primaERP API returns up to 1000 records. Paging parameters can be used for paging records in the table.

#### Syntax

		/{resource}/?$top = number_of_records

		/{resource}/?$skip = number_of_records

Where `{resource}` is a module resource such as: `time/projects`, `time/timerecords`, `time/tasks`, etc. Or a global resource such as `user`.

#### Example

This request returns the first 10 records

		GET http://{tenant}.api.primaerp.com/v1/time/projects?$top=10

This request returns the next 10 records starting with the 11th

		GET http://{tenant}.api.primaerp.com/v1/time/projects?$skip=10&top=10

## Filtering

The API supports filtering by fields:

| Operator | Description | Example |
| --- | --- | --- |
| **Logical Operators** |||
| Eq | Equal | **String** <br />/time/projects?$filter=name eq 'Project one' <br />**Inner object** <br />/time/projects?$filter=owner/firstName eq 'John' <br />**Boolean** <br />/time/projects?$filter=billable eq true <br />**Number** <br />/time/projects?$filter=priceBudget eq 100 <br />**Date and time** <br />/time/projects?$filter=begins eq datetime'2013-06-15T00:00:00.000Z' |
| Ne | Not equal | /time/projects?$filter=name ne 'Project one' |
| Gt | Greater than | /time/projects?$filter=priceBudget gt 20 |
| Ge | Greater than or equal | /time/projects?$filter=priceBudget ge 10 |
| Lt | Less than | /time/projects?$filter=priceBudget lt 20 |
| Le | Less than or equal | /time/projects?$filter=priceBudget le 100 |
| And | Logical and | /time/projects?$priceBudget=Price le 200 and priceBudget gt 100 |
| Or | Logical or | /time/projects?$filter=priceBudget le 100 or priceBudget gt 200 |
| Not | Logical negation | /time/projects?$filter=not endswith(name,'1') |
| **Arithmetic Operators** |||
| Add | Addition | /time/projects?$filter=priceBudget add 5 gt 10 |
| Sub | Subtraction | /time/projects?$filter=priceBudget sub 5 gt 10 |
| Mul | Multiplication | /time/projects?$filter=priceBudget mul 2 gt 2000 |
| Div | Division | /time/projects?$filter=priceBudget div 2 gt 4 |
| Mod | Modulo | /time/projects?$filter=priceBudget mod 2 eq 0 |
| **Grouping Operators** |||
| ( ) | Precedence grouping | /time/projects?$filter=(priceBudget sub 5) gt 10 |

API also supports filtering by string functions:

| Function | Example |
| --- | --- |
| **String function** ||
| substring( fieldName, index ) | /time/projects?$filter=substring(name, 2) eq 'imaERP' |
| substring( fieldName, index, lenght ) | /time/projects?$filter=substring(name, 5, 3) eq 'ERP' |
| substringof( string, fieldName ) | /time/projects?$filter=substringof('PrimaERP', name) eq true |
| startswith( fieldName, string ) | /time/projects?$filter=startswith(name, 'Prima') eq true |
| endswith( fieldName, string ) | /time/projects?$filter=endswith(name, 'ERP') eq true |
| length( fieldName ) | /time/projects?$filter=length(note) lt 10 |
| indexof( fieldName, string ) | /time/projects?$filter=length(name, 'ERP') eq 5 |
| tolower( fieldName ) | /time/projects?$filter=tolower(name) eq 'primaerp' |
| toupper( fieldName ) | /time/projects?$filter=toupper(name) eq 'PRIMAERP' |
| concat( fieldName, string ) | /time/projects?$filter=concat(name, 'x') eq 'PrimaERPx' |

### Complex examples

The following example searches active [users](/resources/core/user.md) whose first name is John.

		GET http://{tenant}.api.primaerp.com/v1/users/?$filter=active eq true and substringof('john',tolower(firstName)) eq true

The following example returns active [projects](/resources/time/project.md) which are processed for a given client.

		GET http://{tenant}.api.primaerp.com/v1/time/projects/?$filter=active eq true and client/id eq '2a1e546a-81a6-4af6-bfb4-65c57ad15a9f'

The following example returns [time records](/resources/time/timerecord.md) which were recorded in January by a given user.

		GET http://{tenant}.api.primaerp.com/v1/time/timerecords/?$filter=start ge datetime'2014-01-01T00:00:00Z' and start lt datetime'2014-01-31T23:59:59Z' and user/id eq 'cc41790b-59f4-4520-81e1-ac10c74e9454'

The following example returns [projects](/resources/time/project.md) which were updated or created on a given date (e.g. since the last synchronization).

		GET http://{tenant}.api.primaerp.com/v1/time/projects/?$filter=(updatedAt gt datetime'2012-12-31T23:00:00Z') or (createdAt gt datetime'2012-12-31T23:00:00Z')

The following example returns the undone [tasks](/resources/time/task.md) of a given user. Please note, these tasks are from the active projects only.

		GET http://{tenant}.api.primaerp.com/v1/time/tasks/?$filter=(done eq false or done eq null) and owner/id eq 'cc41790b-59f4-4520-81e1-ac10c74e9454' and project/active eq true

## Counting records

The primaERP API provides a special method for returning a text/plain response with the amount of requested records.

#### Syntax

		/{resource}/$count

Where `{resource}` is a module resource such as: `time/projects`, `time/timerecords`, `time/tasks`, etc. Or a global resource such as `user`.

#### Example

This example will return the amount of projects.

		GET http://{tenant}.api.primaerp.com/v1/projects/$count

Note that the method `$count` supports also additional queries:

		GET http://{tenant}.api.primaerp.com/v1/time/projects/$count/?$filter=priceBudget ge 10

## Aggregating records

The API allows the use of aggregation functions over resources for the simplification of the client's applications.

It's possible to return multiple functions in one request to the API. The list of aggregated functions is still fixed and cannot be used for any entity or any field.

It sets the timeRecordsCount property on all returned [projects](/resources/time/project.md).

		GET http://{tenant}.api.primaerp.com/v1/projects/?append=timerecords-count

 It sets the tasksCount property on all returned [projects](/resources/time/project.md).
		
		GET http://{tenant}.api.primaerp.com/v1/projects/?append=tasks-count

It sets the membersCount property on all returned [projects](/resources/time/project.md). 

		GET http://{tenant}.api.primaerp.com/v1/projects/?append=members-count

It sets the billsCount property on all returned [clients](/resources/time/client.md). 

		GET http://{tenant}.api.primaerp.com/v1/clients/?append=bills-count
		
It sets the projectsCount property on all returned [clients](/resources/time/client.md).
 	
		GET http://{tenant}.api.primaerp.com/v1/clients/?append=projects-count

It sets the tasksCount and the membersCount properties on all returned [projects](/resources/time/project.md) (example of chaining aggregated functions). 

		GET http://{tenant}.api.primaerp.com/v1/projects/?append=tasks-count,members-count
 
## Dummy objects

The API provides a method for generating a sample object with random values.

Types of returned objects are either JSON or XML according to the HTTP "Accept" Header.

#### Syntax

		$dummy

#### Example

		GET http://{tenant}.api.primaerp.com/v1/projects/$dummy
