access
==

## Properties

| Name        | Type      | Access     | Description                                                                                         |
|-------------|-----------|------------|-----------------------------------------------------------------------------------------------------|
| created     | Date      | read write | Date and time when the access was granted.                                                          |
| createdAt   | Date      | read only  | Date of creation.                                                                                   |
| displayName | String    | read only  | Describes an object in human readable form.                                                         |
| id          | String    | read write | Unique object identifier.                                                                           |
| product     | Product   | read write | Access is granted to this product.                                                                  |
| trashItem   | TrashItem | read write | Informs whether an object is in the trash. An object is in the trash if a trash item was specified. |
| updatedAt   | Date      | read only  | Last modified date.                                                                                 |
| user        | User      | read write | Provides info about the user for whom the access is granted.                                        |
| version     | Long      | read write | Object version number.

## Metadata

```JSON
{
    "type": "Access",
    "fields": [
        {
            "type": "Date",
            "name": "created",
            "description": "Date and time when the access was granted.",
            "access": "READ_WRITE",
            "constraints": [
                {
                    "type": "NotNull",
                    "pattern": null
                }
            ]
        },
        {
            "type": "Date",
            "name": "createdAt",
            "description": "Date of creation.",
            "access": "READ_ONLY",
            "constraints": []
        },
        {
            "type": "String",
            "name": "displayName",
            "description": "Describes an object in human readable form.",
            "access": "READ_ONLY",
            "constraints": []
        },
        {
            "type": "String",
            "name": "id",
            "description": "Unique object identifier.",
            "access": "READ_WRITE",
            "constraints": [
                {
                    "type": "Pattern",
                    "pattern": "[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"
                },
                {
                    "type": "NotNull",
                    "pattern": null
                }
            ]
        },
        {
            "type": "Product",
            "name": "product",
            "description": "Access is granted to this product.",
            "access": "READ_WRITE",
            "constraints": []
        },
        {
            "type": "TrashItem",
            "name": "trashItem",
            "description": "Informs whether an object is in the trash. An object is in the trash if a trash item was specified.",
            "access": "READ_WRITE",
            "constraints": []
        },
        {
            "type": "Date",
            "name": "updatedAt",
            "description": "Last modified date.",
            "access": "READ_ONLY",
            "constraints": []
        },
        {
            "type": "User",
            "name": "user",
            "description": "Provides info about the user for whom the access is granted.",
            "access": "READ_WRITE",
            "constraints": []
        },
        {
            "type": "Long",
            "name": "version",
            "description": "Object version number.",
            "access": "READ_WRITE",
            "constraints": []
        }
    ],
    "cascades": [
        {
            "cascadeType": "REMOVE",
            "objectTypes": [
                "TrashItem"
            ]
        }
    ]
}
```

## Dummy data

```JSON
{
    "id": "815286bf-1fec-42e1-985b-1e7eb376da15",
    "createdAt": "/Date(1393854238675)/",
    "updatedAt": "/Date(1393908838675)/",
    "version": 0,
    "user": {
        "id": "60cd9eb4-da7d-433c-bf89-fd8bcd92947a",
        "createdAt": "/Date(1393852198675)/",
        "updatedAt": "/Date(1393876438675)/",
        "version": 3,
        "firstName": "John",
        "lastName": "Smith",
        "nickName": "Smith, J.",
        "email": "john.smith@example.com",
        "phone": "55 123 444 567",
        "position": "Chief developer",
        "timeZone": "America/Sao_Paulo",
        "dateFormat": "EEE, d MMM yyyy",
        "timeFormat": "h:mm a",
        "weekStart": 7,
        "language": "en_US",
        "password": "",
        "secretKey": "userSecretKey",
        "confirmed": false,
        "confirmedEmail": false,
        "active": false,
        "birthdayRemind": "/Date(1394665200000)/",
        "workingTimeStart": "/Date(1393830000000)/",
        "workingTimeEnd": "/Date(1393862400000)/",
        "created": "/Date(1393768438675)/",
        "displayName": "Smith John"
    },
    "product": "TIME",
    "created": "/Date(1393854838675)/",
    "displayName": "TIME"
}
```
