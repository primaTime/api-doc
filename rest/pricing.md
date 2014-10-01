Time records pricing
==

## Price definition

The Prices are defined via the price list. See [price lists resource](../resources/billing/timepricelist.md).

E.g.: The hourly price for one user is stored in the pricelist below:

```JSON
{
	"user" : { "id" : "d2463429-0f35-4dfc-b8f9-697ea3a64ef8" },
	"price" : 100.0
}
```

## Price calculation

The price is calculated based on the following priorities, where the higher number has the higher priority:

1. One price for all
1. Price per work type (activity)
1. Price per **user** (employee)
1. Price per user per work type
1. Price per **client**
1. Price per client per work type
1. Price per client per user
1. Price per client per user per work type
1. Price per **project**
1. Price per project per client
1. Price per project per work type
1. Price per project per user
1. Price per project per user per work type
1. Price per **task**
1. Price per task per project
1. Price per task per project per work type
1. Price per task per project per user
1. Price per task per project per work type

E.g.: In this example there are two types of price lists. The first one has a set price per user per work type. The second one has a set price per project. Therefore the price will then be calculated by the second one.

## Automated calculation

It is used to calculate the price when saving the time record.

#### Syntax

The time record can be stored or updated with the following query parameter

		/time/timerecords?calculate_price=true

		/time/timerecords/{id}?calculate_price=true

#### Example

		POST http://{tenant}.api.primaerp.com/v1/time/timerecords?calculate_price=true

		PUT http://{tenant}.api.primaerp.com/v1/time/timerecords/{id}?calculate_price=true

The price will be calculated by the duration of the time record and its corresponding price list (according to the above priorities). At the end, the time record is saved with the calculated price.

## Price update

It is used to update the price when the price list was changed.

#### Syntax

		/time/timerecords/{id}/$updateprice

Where `{resource}` is a resource ID.

#### Example

		PUT http://{tenant}.api.primaerp.com/v1/time/timerecords/{id}/$updateprice

The price will be calculated by the duration of the time record and its corresponding price list (according to the above priorities). At the end, the time record is saved with the calculated price.

## Calculation on demand

It is used in case you want to know the price of the time record before saving.

#### Syntax

		/time/timerecords/$calculateprice

#### Example

You can post the time record 

		POST http://{tenant}.api.primaerp.com/v1/time/timerecords/$calculateprice

This method returns the price which is calculated by the duration of the time record and its corresponding price list (according to the priorities).

Note that a time record is NOT stored neither updated!
