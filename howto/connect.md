How to connect to the API
==

## API KEY

An API key is required to connect the API

## Testing

For testing the API you can use a CHROME application: https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo?hl=en-US&utm_source=ARC

## Authorize & connect

To authorize to the API just send a GET request: http://XXXXXX.api.primaerp.com/v1/auth/login?apikey=XXXXXX

with headers: `Authorization: Basic {xxx}`

where `{xxx}` is a BASE64 hash from a string: `{email}:{password}`

To generating the base64 hash you can use an online tool: http://www.motobit.com/util/base64-decoder-encoder.asp

## List of projects

Then you will receive an token and with that token you can ask our API for everything :-)

eg. `http://{tenant}.api.primaerp.com/v1/projects?token={token}`
