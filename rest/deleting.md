Deleting
==

## Overview

The deleted resources are moved to the trash.

## Delete resources

In order to delete a resource you should use the "DELETE" request. This way the deleted resources are going to be moved to the trash.

### Syntax

/{resource}/{id}

### Example

DELETE http://{tenant}.api.primaerp.com/v1/users/{id}

Note that it's only possible to retrieve the resources from the trash by using the @deleted view query.

### Syntax

/{resource}/@deleted

/{resource}/{id}/@deleted

### Examples

GET http://{tenant}.api.primaerp.com/v1/users/@deleted

Returns all deleted users.

GET http://{tenant}.api.primaerp.com/v1/users/{id}/@deleted

Returns a deleted user with a given id.

## To empty the trash

Only after removing the resources from the trash are they going to be deleted from the database.

### Syntax

/trash/{id}

### Example

DELETE http://{tenant}.api.primaerp.com/v1/trash/{id}

Note: An {id} means a [TrashItem](http://devdoc.primaerp.com/resources/detail?entity=TrashItem)id, not a deletedObjectId.

## Hard deleting

The entities can be deleted in a hard way, which means that the resources are not going to be stored in the trash, but deleted straight from the database.

### Syntax

/{resource}/{id}?hard=true

| {resource} = | Module resources such as: time/projects, time/timerecords, time/tasks, etcOr global resources such as: user |
| --- | --- |
| {id} = | Resource id |

### Example

DELETE http://{tenant}.api.primaerp.com/v1/time/projects/{id}?hard=true

## Cascade deleting

The cascade deleting feature moves all records related to the removed resource to the trash.

After moving the records, the API saves a "group's identifier" field which belongs to the cascade.

This ensures that by recovering the parent resource, it will also recover all the connected resources.

Note: This functionality is currently implemented only for the following resources:

- Bill- relatedBillItemwill be deleted together
- Client- relatedBill,ContactPersonwill be deleted together
- Department- relatedDepartmentMemberwill be deleted together
- Project- relatedProjectMember,TimeRecord,Taskwill be deleted together
- User- relatedSpendingTimeUnit,SecretKey,Accesswill be deleted together

## Restoring resources from the trash

The primaERP API allows to restore the deleted resources which are in the trash.

### Syntax

trash/{id}/$restore

### Example

GET http://{tenant}.api.primaerp.com/v1/trash/{id}/$restore

Note: An {id} means a [TrashItem](http://devdoc.primaerp.com/resources/detail?entity=TrashItem)id. Not a deletedObjectId.
