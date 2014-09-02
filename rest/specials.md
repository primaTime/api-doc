Specials
==

## Activating and deactivating an object

This API feature allows one to activate or deactivate an object by using a single request.

This method eliminates the need of getting, changing and putting the object back.

This functionality is possible to use for the [Project](/resources/time/project) resources only.

#### Syntax

		$activate

		$deactivate

#### Example

Activating objects:

		GET http://{tenant}.api.primaerp.com/v1/projects/{id}/$activate

Deactivating objects

		GET http://{tenant}.api.primaerp.com/v1/projects/{id}/$deactivate
