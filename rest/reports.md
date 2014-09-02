Reporting services
==

It provides data for various types of reports.

## Read totals

#### Syntax

		/time/reports/readtotals

#### Example

		GET http://{tenant}.api.primaerp.com/v1/time/reports/readtotals

This example returns the summarized data from the time records. The data is structured according to the format below.

It can be similarly grouped as [Summary sub-resources](summaries.md) and [filtered](options.md#filtering) the same as 
[time records](/resources/time/timerecord.md).


```JSON
{
	"*":{
		"count":9,
		"time":87780000,
		"billableTime":52200000,
		"effectiveTime":15780000,
		"money":289.0,
		"averagePricePerHour":11.852358168163844,
		"averageTime":9753333
	}
}
```

**\***

The grouping is done the same way as with the [Summary sub-resources](summaries.md).

**count**

It counts the time record objects used for the reports.

**time**

It is the total time of the filtered time records (in milliseconds).

**billableTime**

It is the billable part of "time" (in milliseconds).

**effectiveTime**

It is the effective part of "time" (in milliseconds).

**money**

It is the sum of the time record prices.

**averagePricePerHour**

It is the average calculated from "money" and "time".

**averageTime**

It is the average calculated from "time" and "count" (in milliseconds).

#### Example

The example below gives the KPI of the project.

		GET http://{tenant}.api.primaerp.com/v1/time/reports/readtotals?$filter=project/id eq 'fb1eacff-a17d-46d2-9fd9-2e04299a6503'

The response data:

```JSON
{
	"*":{
		"count":9,
		"time":87780000,
		"billableTime":52200000,
		"effectiveTime":15780000,
		"money":289.0,
		"averagePricePerHour":11.852358168163844,
		"averageTime":9753333
	}
}
```

The KPI of all projects can be used for the summary parameter.

		GET http://{tenant}.api.primaerp.com/v1/time/reports/readtotals?summary=project/id

The response data:

```JSON
{
	"17d9bebc-6b20-4d31-a3dc-11b9bc7c6e7d":{
		"count":2,
		"time":29640000,
		"billableTime":0,
		"effectiveTime":29640000,
		"money":0.0,
		"averagePricePerHour":0.0,
		"averageTime":14820000
	},
	"18add50f-cbe3-4001-91e0-d68046932dc7":{
		"count":3,
		"time":21900000,
		"billableTime":21900000,
		"effectiveTime":0,
		"money":47.5,
		"averagePricePerHour":7.808219178124977,
		"averageTime":7300000
	},
	"1fdcaf83-485c-4c17-8d9d-2d17450b5c19":{
		"count":10,
		"time":70080000,
		"billableTime":0,
		"effectiveTime":70080000,
		"money":0.0,
		"averagePricePerHour":0.0,
		"averageTime":7008000
	}
}
```

## Grouped totals

#### Syntax

		time/reports/groupedtotals

#### Example

		GET http://{tenant}.api.primaerp.com/v1/time/reports/groupedtotals

It extends the possibilities of "readtotals" service. The data can be customized by the query parameters 
**range**, **range_from**, **range_to** and **offset**. These parameters are described [below](reports.md#single-slices).

The data can be similarly grouped as [Summary sub-resources](summaries.md) and [filtered](options.md#filtering) 
the same as [time records](/resources/time/timerecord.md).

## Single totals

#### Syntax

		/time/reports/singletotals

#### Example

		GET http://{tenant}.api.primaerp.com/v1/time/reports/singletotals

It will return a single result in the format below.

```JSON
{
	"count":9,
	"time":87780000,
	"billableTime":52200000,
	"effectiveTime":15780000,
	"money":289.0,
	"averagePricePerHour":11.852358168163844,
	"averageTime":9753333
}
```

The data **cannot be grouped**.

The data can be customized by the query parameters **range**, **range_from**, **range_to** and **offset**. 
These parameters are described [below](reports.md#single-slices).

## Trended totals

#### Syntax

		/time/reports/trendedtotals

#### Example

It provides summarized data for a comparison with past data.

		GET http://{tenant}.api.primaerp.com/v1/time/reports/trendedtotals

The data can be customized by the query parameters **range**, **range_from**, **range_to** and **offset**. 
These parameters are described [below](reports.md#single-slices).

It can also be [filtered](options.md#filtering) the same way as the [time records](/resources/time/timerecord.md).

A new important query parameter is **depth,** which determines the length of the period in the past. This parameter 
depends on **range**. The example below gets the data for a comparison of two months. One of them is defined by "range". 
The second one via **depth=1** parameter.

		GET http://{tenant}.api.primaerp.com/v1/time/reports/trendedtotals?range=31&range_from=2013-06-01&range_to=2013-06-30&depth=1

```JSON
[
	{
	 "count":2,
	 "time":34200000,
	 "billableTime":34200000,
	 "effectiveTime":7200000,
	 "money":275.0,
	 "averagePricePerHour":28.94736842105263,
	 "averageTime":17100000
	},
	{
	 "count":3,
	 "time":21600000,
	 "billableTime":18000000,
	 "effectiveTime":3600000,
	 "money":14.0,
	 "averagePricePerHour":2.3333333333333335,
	 "averageTime":7200000
	}

]
```

## Single slices

#### Syntax

		/time/reports/singleslices

#### Example

		GET http://{tenant}.api.primaerp.com/v1/time/reports/singleslices

It will return the data for the graphs. This data is structured according to the format below (list of slices).

```JSON
[
	{"offset":0,"time":279000000},
	{"offset":1,"time":0},
	{"offset":2,"time":0},
	{"offset":3,"time":90900000},
	{"offset":4,"time":222120000},
	{"offset":5,"time":18120000},
	{"offset":6,"time":39600000},
	{"offset":7,"time":0},
	{"offset":8,"time":40200000},
	{"offset":9,"time":0},
	{"offset":10,"time":0},
	{"offset":11,"time":0}
]
```

**offset**

It is the chronological number of slices.

**time**

It is the time recorded in this part of period (in milliseconds).

E.g. data interpretation
  
![Slices per year](/images/slices_year.png)
 
The data can be [filtered](options.md#filtering) the same way as [time records](/resources/time/timerecord.md). 
The filter can reduce the amount of "time".

E.g. time spent on project `$filter=project/id eq 'fb1eacff-a17d-46d2-9fd9-2e04299a6503'`

The form of slices may be affected by the following query parameters.

**range**

It is the time range of the graph. Possible values are:

- "0" - without limits
- "1" - day
- "7" - week
- "31" - month
- "365" - year
- "999" - specific date interval

**range_from**

It is the date when the range starts. The format is "yyyy-MM-dd". 
For ranges 7, 31 and 365 it is modified automatically to the beginning of the corresponding week, month or year.

**range_to**

It is the date when the range ends. The format is "yyyy-MM-dd". It is usable only for the 999 range. 
For ranges 7, 31 and 365 it is modified automatically to the end of the corresponding week, month or year.

**offset**

It determines the difference of the range. Possible values are:

- "0" - means the range is exactly as it was defined
- negative values – it's the same range but in the past 
(e.g. offset "-1" with range "365" means last year relative to the "range_from" date)
- positive values – it's the same range but in the future 
(e.g. offset "1" with range "31" means next month relative to the "range_from" date)

**slice_by**

It affects the amount of returned slices. Possible values are:

- "1" - range sliced by day (7 slices per week, 31 slices per month, ...)
- "7" - range sliced by week (5 slices per month, 53 slices per year, ...)
- "31" - range sliced by month (12 slices per year)
- "365" - range sliced by year

The data on the above picture will be returned on request (year sliced by months):

		GET http://{tenant}.api.primaerp.com/v1/time/reports/singleslices?range=365&range_from=2013-01-01&range_to=2013-12-31&offset=0&slice_by=31

Similarly can be sliced by weeks:

		GET http://{tenant}.api.primaerp.com/v1/time/reports/singleslices?range=365&range_from=2013-01-01&range_to=2013-12-31&offset=0&slice_by=7

Then the following data will be returned:

```JSON
[
	{"offset":0,"time":0},
	{"offset":1,"time":64800000},
	{"offset":2,"time":136800000},
	{"offset":3,"time":77400000},
	{"offset":4,"time":0},
	{"offset":5,"time":0},
	{"offset":6,"time":0},
	{"offset":7,"time":0},
	{"offset":8,"time":0},
	{"offset":9,"time":0},
	{"offset":10,"time":0},
	{"offset":11,"time":0},
	{"offset":12,"time":0},
	{"offset":13,"time":0},
	{"offset":14,"time":0},
	{"offset":15,"time":900000},
	{"offset":16,"time":45000000},
	{"offset":17,"time":199800000},
	{"offset":18,"time":67320000},
	{"offset":19,"time":0},
	{"offset":20,"time":0},
	{"offset":21,"time":0},
	{"offset":22,"time":120000},
	{"offset":23,"time":18000000},
	{"offset":24,"time":0},
	{"offset":25,"time":0},
	{"offset":26,"time":21600000},
	{"offset":27,"time":18000000},
	{"offset":28,"time":0},
	{"offset":29,"time":0},
	{"offset":30,"time":0},
	{"offset":31,"time":0},
	{"offset":32,"time":0},
	{"offset":33,"time":0},
	{"offset":34,"time":0},
	{"offset":35,"time":30900000},
	{"offset":36,"time":9300000},
	{"offset":37,"time":0},
	{"offset":38,"time":0},
	{"offset":39,"time":0},
	{"offset":40,"time":0},
	{"offset":41,"time":0},
	{"offset":42,"time":0},
	{"offset":43,"time":0},
	{"offset":44,"time":0},
	{"offset":45,"time":0},
	{"offset":46,"time":0},
	{"offset":47,"time":0},
	{"offset":48,"time":0},
	{"offset":49,"time":0},
	{"offset":50,"time":0},
	{"offset":51,"time":0},
	{"offset":52,"time":0}
]
```
