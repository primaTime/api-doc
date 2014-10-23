User
==

## URL

	https://api.primaerp.com/v1/users

## Properties

| Name             | Type      | Access     | Description                                                                                                            |
|------------------|-----------|------------|------------------------------------------------------------------------------------------------------------------------|
| active           | Boolean   | read write | Determines whether or not the user is active. Only active user can be logged into his account.                         |
| admin            | Boolean   | read write | Determines whether the user is admin.                                                                                  |
| birthdayRemind   | Date      | read write | Date which reminds the user of the birthday of another person.                                                         |
| confirmed        | Boolean   | read only  | User confirmed his registration. Only confirmed users can log into the account.                                        |
| confirmedEmail   | Boolean   | read only  | User confirmed his email address.                                                                                      |
| created          | Date      | read only  | Date and time when was the user was registered.                                                                        |
| createdAt        | Date      | read only  | Date of creation.                                                                                                      |
| dateFormat       | String    | read write | Date format pattern according to the java.text.SimpleDateFormat                                                        |
| displayName      | String    | read only  | Describes an object in human readable form.                                                                            |
| email            | String    | read only  | User's e-mail address. It is also used as a login. Can be set only once.                                               |
| firstName        | String    | read write | User's first name.                                                                                                     |
| id               | String    | read write | Unique object identifier.                                                                                              |
| language         | String    | read write | Preferred language.                                                                                                    |
| lastName         | String    | read write | User's last name.                                                                                                      |
| nickName         | String    | read write | User's nick name.                                                                                                      |
| password         | String    | write only | The password in plain text. It is used only for changing the password.                                                 |
| phone            | String    | read write | User's contact phone.                                                                                                  |
| position         | String    | read write | User's job position.                                                                                                   |
| projectManager   | Boolean   | read write | Determines whether the user is project manager.                                                                        |
| secretKey        | String    | read write | Unique authentication key. Can be used instead of the user’s credentials.                                              |
| timeFormat       | String    | read write | Time format pattern according to java.text.SimpleDateFormat                                                            |
| timeZone         | String    | read write | The time zone of the place where the user works. The time zone is identified by the ID according to java.util.TimeZone |
| trashItem        | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified.                    |
| updatedAt        | Date      | read only  | Last modified date.                                                                                                    |
| version          | Long      | read write | Object version number.                                                                                                 |
| weekStart        | Byte      | read write | The number of the day when the week starts. Monday is 1 and Sunday is 7.                                               |
| workingTimeEnd   | Date      | read write | Time when the work usually ends.                                                                                       |
| workingTimeStart | Date      | read write | Time when the work usually starts.                                                                                     |

## Metadata

```JSON
{
	"type" : "User",
	"fields" : [
		{
			"type" : "Boolean",
			"name" : "active",
			"description" : "Determines whether or not the user is active. Only active user can be logged into his account.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Boolean",
			"name" : "admin",
			"description" : "Determines whether the user is admin.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "Date",
			"name" : "birthdayRemind",
			"description" : "Date which reminds the user of the birthday of another person.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Boolean",
			"name" : "confirmed",
			"description" : "User confirmed his registration. Only confirmed users can log into the account.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "Boolean",
			"name" : "confirmedEmail",
			"description" : "User confirmed his email address.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "created",
			"description" : "Date and time when was the user was registered.",
			"access" : "READ_ONLY",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "Date",
			"name" : "createdAt",
			"description" : "Date of creation.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "dateFormat",
			"description" : "Date format pattern according to the java.text.SimpleDateFormat",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Pattern",
					"pattern" : "dd\\.MM\\.yyyy|MM/dd/yyyy|dd/MM/yyyy|yyyy-MM-dd|yyyy\\.MM\\.dd|yyyy/MM/dd"
				}
			]
		},
		{
			"type" : "String",
			"name" : "displayName",
			"description" : "Describes an object in human readable form.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "email",
			"description" : "User's e-mail address. It is also used as a login. Can be set only once.",
			"access" : "READ_ONLY",
			"constraints" : [
				{
					"type" : "Email",
					"pattern" : ".*"
				},
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "String",
			"name" : "firstName",
			"description" : "User's first name.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "id",
			"description" : "Unique object identifier.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Pattern",
					"pattern" : "[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
				},
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "String",
			"name" : "language",
			"description" : "Preferred language.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "lastName",
			"description" : "User's last name.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "nickName",
			"description" : "User's nick name.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "password",
			"description" : "The password in plain text. It is used only for changing the password.",
			"access" : "WRITE_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "phone",
			"description" : "User's contact phone.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "position",
			"description" : "User's job position.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Boolean",
			"name" : "projectManager",
			"description" : "Determines whether the user is project manager.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "NotNull",
					"pattern" : null
				}
			]
		},
		{
			"type" : "String",
			"name" : "secretKey",
			"description" : "Unique authentication key. Can be used instead of the user’s credentials.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "String",
			"name" : "timeFormat",
			"description" : "Time format pattern according to java.text.SimpleDateFormat",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Pattern",
					"pattern" : "HH:mm|K:mm a"
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
					"pattern" : "^(Africa|America|Asia|Atlantic|Australia|Europe|Indian|Pacific)/.*|UTC|GMT"
				}
			]
		},
		{
			"type" : "TrashItem",
			"name" : "trashItem",
			"description" : "Informs whether an object is in the trash. An object is in the trash if a trash item was specified.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "updatedAt",
			"description" : "Last modified date.",
			"access" : "READ_ONLY",
			"constraints" : [ ]
		},
		{
			"type" : "Long",
			"name" : "version",
			"description" : "Object version number.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Byte",
			"name" : "weekStart",
			"description" : "The number of the day when the week starts. Monday is 1 and Sunday is 7.",
			"access" : "READ_WRITE",
			"constraints" : [
				{
					"type" : "Min",
					"pattern" : null
				},
				{
					"type" : "Max",
					"pattern" : null
				}
			]
		},
		{
			"type" : "Date",
			"name" : "workingTimeEnd",
			"description" : "Time when the work usually ends.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		},
		{
			"type" : "Date",
			"name" : "workingTimeStart",
			"description" : "Time when the work usually starts.",
			"access" : "READ_WRITE",
			"constraints" : [ ]
		}
	],
	"cascades" : [
		{
			"cascadeType" : "REMOVE",
			"objectTypes" : [
				"TrashItem",
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
	"id" : "afb996ba-0fb3-4de7-a7a5-4bcdcc77f52d",
	"createdAt" : "/Date(1413985680492)/",
	"updatedAt" : "/Date(1414037340492)/",
	"version" : 1,
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
	"birthdayRemind" : "/Date(1414796400000)/",
	"workingTimeStart" : "/Date(1413957600000)/",
	"workingTimeEnd" : "/Date(1413990000000)/",
	"created" : "/Date(1413900540492)/",
	"admin" : false,
	"projectManager" : false,
	"displayName" : "Smith John"
}
```
