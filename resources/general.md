General information
==

## IDs of resources

All the data resources are represented by objects from the table below. Each of them is uniquely identifiable by the "id" property.

The identifier is an UUID string. We use the Version 4 of UUID in the form 8-4-4-4-12 characters (e.g. 56e35ffd-48dc-43e0-bbed-ceb6050b223f).

The UUID can be generated automatically during the object creation. It occurs if the "id" property is not specified . If you want to generate your own UUID, then it has to match the regular expression"[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}".

When the ID does not match to the pattern or it is not unique, the API returns the status code 412 together with the error "PE01-1104 - Validation error". To find out more, check in the Errors page section about the error object "constraintViolations".
