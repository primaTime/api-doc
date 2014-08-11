Specials
==

## Activating and deactivating an object

This API feature allows one to activate or deactivatean object by using a single request.

This method eliminates the need of getting, changing and putting the object back.

## Syntax for Activate

$activate

## Syntax for Deactivate

$deactivate

### Example

Activating objects:

GET http://{tenant}.api.primaerp.com/v1/projects/{id}/$activate

Deactivating objects

GET http://{tenant}.api.primaerp.com/v1/projects/{id}/$deactivate

This functionality is possible to use for the [Project](http://devdoc.primaerp.com/resources/detail?entity=Project)resources only.
