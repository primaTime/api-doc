NoSQL storage
==

It allows the storing of text data for up to 16384 characters encoded in UTF-8.

It is possible to specify the content type via the HTTP header "Content-Type"

#### Example:

		Content-Type: application/json

		Content-Type: text/plain

The retrieved data will have the same content type.

The data is stored in keys and structured into groups. It also possible to determine the scope of visibility.

The Scope can be `private`(default) or `public`.

Private data is visible only for the currently logged in user.

Public data is shared between all users.

#### Syntax

		/storage/{group}/{key}/{scope}

## Examples

If you send the following request:

		POST http://{tenant}.api.primaerp.com/v1/storage/exampleGroup/someKey

With the content type in the header

		> Content-Type: text/plain

Together with some content in the body

		> Some data.

Then you will receive it back with the same content type in the response.

#### Example:

		GET http://{tenant}.api.primaerp.com/v1/storage/exampleGroup/someKey

		< Content-Type: text/plain

		< Some data.

Public data can be stored via the following request.

#### Example:

		POST http://{tenant}.api.primaerp.com/v1/storage/exampleGroup/anotherKey/public

		> Content-Type: text/plain

		> Some public data.

If you have more items in the same group, then you can get a simple list of them.

#### Example:

		GET http://{tenant}.api.primaerp.com/v1/storage/exampleGroup

```JSON
[
	{"itemKey":"someKey","publicScope":false,"contentType":"text/plain"},
	{"itemKey":"anotherKey","publicScope":true,"contentType":"text/plain"}
]
```