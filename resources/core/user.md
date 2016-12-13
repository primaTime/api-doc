User
==

## URL

	https://api.primaerp.com/v1/users

	https://api.primaerp.com/v1/users/{id}/$confirmation

	https://api.primaerp.com/v1/users/{id}/roles

	https://api.primaerp.com/v1/users/{id}/$setEmail

	https://api.primaerp.com/v1/users/{id}/competencies

	https://api.primaerp.com/v1/users/@self

## Properties

| Name             | Type      | Access     | Required | Description                                                                                                            |
|------------------|-----------|------------|----------|------------------------------------------------------------------------------------------------------------------------|
| active           | Boolean   | read write | YES      | Determines whether or not the user is active. Only active user can be logged into his account.                         |
| admin            | Boolean   | read write | YES      | Determines whether the user is admin.                                                                                  |
| birthdayRemind   | Date      | read write | no       | Date which reminds the user of the birthday of another person.                                                         |
| confirmed        | Boolean   | read only  | no       | User confirmed his registration. Only confirmed users can log into the account.                                        |
| confirmedEmail   | Boolean   | read only  | no       | User confirmed his email address.                                                                                      |
| created          | Date      | read only  | no       | Date and time when was the user was registered.                                                                        |
| createdAt        | Date      | read only  | no       | Date of creation.                                                                                                      |
| dateFormat       | String    | read write | YES      | Date format pattern according to the java.text.SimpleDateFormat                                                        |
| displayName      | String    | read only  | no       | Describes an object in human readable form.                                                                            |
| email            | String    | read only  | no       | User's e-mail address. It is also used as a login. Can be set only once.                                               |
| firstName        | String    | read write | no       | User's first name.                                                                                                     |
| id               | String    | read write | no       | Unique object identifier.                                                                                              |
| language         | String    | read write | YES      | Preferred language.                                                                                                    |
| lastName         | String    | read write | no       | User's last name.                                                                                                      |
| nickName         | String    | read write | no       | User's nick name.                                                                                                      |
| password         | String    | write only | no       | The password in plain text. It is used only for changing the password.                                                 |
| phone            | String    | read write | no       | User's contact phone.                                                                                                  |
| position         | String    | read write | no       | User's job position.                                                                                                   |
| projectManager   | Boolean   | read write | YES      | Determines whether the user is project manager.                                                                        |
| secretKey        | String    | read write | no       | Unique authentication key. Can be used instead of the user’s credentials.                                              |
| timeFormat       | String    | read write | YES      | Time format pattern according to java.text.SimpleDateFormat                                                            |
| timeZone         | String    | read write | YES      | The time zone of the place where the user works. The time zone is identified by the ID according to java.util.TimeZone |
| trashItem        | TrashItem | read write | no       | Informs whether an object is in the trash. An object is in the trash if a trash item was specified.                    |
| updatedAt        | Date      | read only  | no       | Last modified date.                                                                                                    |
| version          | Long      | read write | no       | Object version number.                                                                                                 |
| weekStart        | Byte      | read write | YES      | The number of the day when the week starts. Monday is 1 and Sunday is 7.                                               |
| workingTimeEnd   | Date      | read write | no       | Time when the work usually ends.                                                                                       |
| workingTimeStart | Date      | read write | no       | Time when the work usually starts.                                                                                     |

## Metadata

```JSON
{
	"type" : "User",
	"path" : "/v1/users",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "active",
			"description" : "Determines whether or not the user is active. Only active user can be logged into his account.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Required",
					"details" : ""
				}
			]
		},
		{
			"type" : "Boolean",
			"name" : "admin",
			"description" : "Determines whether the user is admin.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "Date",
			"name" : "birthdayRemind",
			"description" : "Date which reminds the user of the birthday of another person.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "confirmed",
			"description" : "User confirmed his registration. Only confirmed users can log into the account.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "Boolean",
			"name" : "confirmedEmail",
			"description" : "User confirmed his email address.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "Date",
			"name" : "created",
			"description" : "Date and time when was the user was registered.",
			"access" : "READ_ONLY",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "Date",
			"name" : "createdAt",
			"description" : "Date of creation.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "String",
			"name" : "dateFormat",
			"description" : "Date format pattern according to the java.text.SimpleDateFormat",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Required",
					"details" : ""
				},
				{
					"type" : "Pattern",
					"details" : "regexp dd\\.MM\\.yyyy|MM/dd/yyyy|dd/MM/yyyy|yyyy-MM-dd|yyyy\\.MM\\.dd|yyyy/MM/dd"
				}
			]
		},
		{
			"type" : "String",
			"name" : "displayName",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "String",
			"name" : "email",
			"description" : "User's e-mail address. It is also used as a login. Can be set only once.",
			"access" : "READ_ONLY",
			"constraints" : [
				{
					"type" : "NotNull"
				},
				{
					"type" : "Email",
					"details" : "regexp .*"
				}
			]
		},
		{
			"type" : "String",
			"name" : "firstName",
			"description" : "User's first name.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "id",
			"description" : "Unique object identifier.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Pattern",
					"details" : "regexp [0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
				},
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "String",
			"name" : "language",
			"description" : "Preferred language.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Required",
					"details" : ""
				}
			]
		},
		{
			"type" : "String",
			"name" : "lastName",
			"description" : "User's last name.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "nickName",
			"description" : "User's nick name.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "password",
			"description" : "The password in plain text. It is used only for changing the password.",
			"access" : "WRITE_ONLY"
		},
		{
			"type" : "String",
			"name" : "phone",
			"description" : "User's contact phone.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "position",
			"description" : "User's job position.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Boolean",
			"name" : "projectManager",
			"description" : "Determines whether the user is project manager.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull"
				}
			]
		},
		{
			"type" : "String",
			"name" : "secretKey",
			"description" : "Unique authentication key. Can be used instead of the user’s credentials.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "String",
			"name" : "timeFormat",
			"description" : "Time format pattern according to java.text.SimpleDateFormat",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Required",
					"details" : ""
				},
				{
					"type" : "Pattern",
					"details" : "regexp HH:mm|K:mm a|h:mm a|hh:mm a"
				}
			]
		},
		{
			"type" : "String",
			"name" : "timeZone",
			"description" : "The time zone of the place where the user works. The time zone is identified by the ID according to java.util.TimeZone",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Pattern",
					"details" : "regexp ^(Africa|America|Asia|Atlantic|Australia|Europe|Indian|Pacific)/.*|UTC|GMT"
				},
				{
					"type" : "Required",
					"details" : ""
				}
			]
		},
		{
			"type" : "TrashItem",
			"path" : "/v1/trash",
			"name" : "trashItem",
			"description" : "Informs whether an object is in the trash. An object is in the trash if a trash item was specified.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "updatedAt",
			"description" : "Last modified date.",
			"access" : "READ_ONLY"
		},
		{
			"type" : "Long",
			"name" : "version",
			"description" : "Object version number.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Byte",
			"name" : "weekStart",
			"description" : "The number of the day when the week starts. Monday is 1 and Sunday is 7.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Required",
					"details" : ""
				},
				{
					"type" : "Max",
					"details" : "value 7"
				},
				{
					"type" : "Min",
					"details" : "value 1"
				}
			]
		},
		{
			"type" : "Date",
			"name" : "workingTimeEnd",
			"description" : "Time when the work usually ends.",
			"access" : "READ_WRITE"
		},
		{
			"type" : "Date",
			"name" : "workingTimeStart",
			"description" : "Time when the work usually starts.",
			"access" : "READ_WRITE"
		}
	],
	"cascades" : [
		{
			"cascadeType" : "REMOVE",
			"objectTypes" : [
				"TrashItem",
				"ProjectMember",
				"SpendingTimeUnit",
				"SecretKey",
				"Access"
			]
		}
	]
}
```

## Dummy data

```JSON
{
	"id" : "4fb35cbf-682c-42d7-a122-43eb8cfbbdb3",
	"createdAt" : "/Date(1481618988895)/",
	"updatedAt" : "/Date(1481650728895)/",
	"version" : 8,
	"firstName" : "John",
	"lastName" : "Smith",
	"nickName" : "Smith, J.",
	"email" : "john.smith@example.com",
	"phone" : "55 123 444 567",
	"position" : "Chief developer",
	"timeZone" : "America/Sao_Paulo",
	"dateFormat" : "dd/MM/yyyy",
	"timeFormat" : "K:mm a",
	"weekStart" : 7,
	"language" : "en_US",
	"password" : "",
	"secretKey" : "userSecretKey",
	"confirmed" : false,
	"confirmedEmail" : false,
	"active" : false,
	"birthdayRemind" : "/Date(1482447600000)/",
	"workingTimeStart" : "/Date(1481612400000)/",
	"workingTimeEnd" : "/Date(1481644800000)/",
	"created" : "/Date(1481535528895)/",
	"admin" : false,
	"projectManager" : false,
	"displayName" : "Smith John"
}
```
