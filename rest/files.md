# Files upload

It is possible to upload a company logo and user's signature. In the future there will be more files to save, 
including personal user files, etc.

## Company logo

It supports a single file handling.

### Syntax

		/accounts/{id}/logo

		/accounts/@own/logo

## User's signature

It supports a single file handling. The currently logged user can only change his own signature. An account owner can 
change signatures of all users.

#### Syntax

		/users/{id}/signature

		/users/@self/signature

### Examples

#### Upload

		POST http://{tenant}.api.primaerp.com/v1/users/@self/signature/upload?filename=mysignature.jpeg

		> Content-Type: image/jpeg

		> Content-Length: 2738

		> Some image in a request body.

#### Download

		GET http://{tenant}.api.primaerp.com/v1/users/@self/signature/download

		< Content-Type: image/jpeg

		< Content-Length: 2738

		< Your uploaded image in a response body.

#### File metadata

Besides file downloading is it possible to get a [FileMetadata](/resources/core/filemetadata.md) object.

		GET http://{tenant}.api.primaerp.com/v1/users/@self/signature

```JSON
{
	"fileName":"mysignature.jpeg",
	"contentType":"image/jpeg",
	"contentSize":2738,
	...
}
```
