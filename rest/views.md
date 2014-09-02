Views
==

## Overview

The views help to simply affect the right set of records.

The API returns records by using "views" in relation to the authorized user.

## Impulses

The API returns all impulses where the mode is set to STOPWATCH.

		GET http://{tenant}.api.primaerp.com/v1/time/impulses/@stopwatch

## Projects

The API returns all projects where the user is set as a member.

		GET http://{tenant}.api.primaerp.com/v1/time/projects/@member

The API returns all projects where the user is set as an owner.

		GET http://{tenant}.api.primaerp.com/v1/time/projects/@own

## Departments

The API returns all departments where the user is set as a member.

		GET http://{tenant}.api.primaerp.com/v1/departments/@member

## Users

The API returns the authorized user.

		GET http://{tenant}.api.primaerp.com/v1/users/@self

## Accounts

The API returns the object of the account.

		GET http://{tenant}.api.primaerp.com/v1/accounts/@own

## Accesses

The API returns all accesses which exceed the license limit.

		GET http://{tenant}.api.primaerp.com/v1/accesses/@exceeded

## Deleted resources

The API returns resources which were deleted and placed in the trash.

		GET http://{tenant}.api.primaerp.com/v1/time/projects/@deleted

To find out more, check on the [Deleting page.](/rest/deleting.md)
