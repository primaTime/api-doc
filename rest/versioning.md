Objects version
==

Each object has a "version" field. It is used to determine whether a user is working with the latest object version. The API returns an error after the PUT of the stale object, see the following example:

{

 "status":409,

 "code":"PE01-1107",

 "message":"Version stale",

 "description":

   "Some fields in conflict.

   Field 'begins' old value: Fri Aug 09 14:25:41 CEST 2013

   Field 'begins' new value: Fri Aug 09 14:26:41 CEST 2013

   Field 'note' old value: Change from first user.

   Field 'note' new value: Change from second user.",

 "constraintViolations":[]

}

This error is possible to suppress by using the query parameterversion\_ignore=true. The object will be overwritten regardless of the version.

If [$set method](http://devdoc.primaerp.com/rest/options#set)is used, then it is possible to add a "version" field with the current value. An equivalent of version\_ignore=true is to omit a "version" field.
