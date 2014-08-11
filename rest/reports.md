Reporting services
==

It provides data for various types of reports.

## Read totals

### Syntax

/time/reports/readtotals

### Example

GET http://{tenant}.api.primaerp.com/v1/time/reports/readtotals

This example returns the summarized data from the time records. The data is structured according to the format below.

It can be grouped according to the [Summary sub-resources](http://devdoc.primaerp.com/rest/summaries), [filtered](http://devdoc.primaerp.com/rest/options#filtering)or [TimeRecords](http://devdoc.primaerp.com/resources/detail?entity=TimeRecord).

{

 "\*":{

   "count":9,

   "time":87780000,

   "billableTime":52200000,

   "effectiveTime":15780000,

   "money":289.0,

   "averagePricePerHour":11.852358168163844,

   "averageTime":9753333

 }

}

**\***

The grouping is done the same way as with the [Summary sub-resources](http://devdoc.primaerp.com/rest/summaries).

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

### Example

The example below gives the KPI of the project.

GET http://{tenant}.api.primaerp.com/v1/time/reports/readtotals?$filter=project/id eq 'fb1eacff-a17d-46d2-9fd9-2e04299a6503'

The response data:

{

 "\*":{

   "count":9,

   "time":87780000,

   "billableTime":52200000,

   "effectiveTime":15780000,

   "money":289.0,

   "averagePricePerHour":11.852358168163844,

   "averageTime":9753333

 }

}

The KPI of all projects can be used for the summary parameter.

GET http://{tenant}.api.primaerp.com/v1/time/reports/readtotals?summary=project/id;

Note: The semicolon at the end of the summary parameter is necessary.

Response data:

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

## Grouped totals

### Syntax

time/reports/groupedtotals

### Example

GET http://{tenant}.api.primaerp.com/v1/time/reports/groupedtotals

It extends the possibilities of "readtotals" service. The data can be customized by the query parameters **range, range\_from, range\_to, offset** . These parameters are described [below](http://devdoc.primaerp.com/rest/reports#range).

The data can be similarly grouped as [Summary subresources](http://devdoc.primaerp.com/rest/summaries)and [filtered](http://devdoc.primaerp.com/rest/options#filtering)the same as [TimeRecords](http://devdoc.primaerp.com/resources/detail?entity=TimeRecord).

## Single totals

### Syntax

/time/reports/singletotals

### Example

GET http://{tenant}.api.primaerp.com/v1/time/reports/singletotals

It will return a single result in the format below.

{

 "count":9,

 "time":87780000,

 "billableTime":52200000,

 "effectiveTime":15780000,

 "money":289.0,

 "averagePricePerHour":11.852358168163844,

 "averageTime":9753333

}

The data **cannot be grouped** .

The data can be customized by the query parameters **range, range\_from, range\_to, offset** . These parameters are described [below](http://devdoc.primaerp.com/rest/reports#range).

## Trended totals

### Syntax

/time/reports/trendedtotals

### Example

It provides summarized data for a comparison with past data.

GET http://{tenant}.api.primaerp.com/v1/time/reports/trendedtotals

The data can be customized by the query parameters **range, range\_from, range\_to** . These parameters are described [below](http://devdoc.primaerp.com/rest/reports#range).

It can also be [filtered](http://devdoc.primaerp.com/rest/options#filtering)the same way as with the [TimeRecords](http://devdoc.primaerp.com/resources/detail?entity=TimeRecord).

A new important query parameter is **depth,** which determines the length of the period in the past. This parameter depends on **range** . The example below gets the data for a comparison of two months. One of them is defined by range. The second proceeds via **depth=1** parameter.

GET http://{tenant}.api.primaerp.com/v1/time/reports/trendedtotals?range=31&range\_from=2013-06-01&range\_to=2013-06-30&depth=1

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

## Single slices

### Syntax

/time/reports/singleslices

### Example

GET http://{tenant}.api.primaerp.com/v1/time/reports/singleslices

It will return the data for the graphs. This data is structured according to the format below (list of slices).

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

**offset**

It is the chronological number of slices.

**time**

It is the time recorded in this part of period (in milliseconds).

E.g. data interpretation  
 ![](data:image/*;base64,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)

The data should be [filtered](http://devdoc.primaerp.com/rest/options#filtering)the same way as [TimeRecords](http://devdoc.primaerp.com/resources/detail?entity=TimeRecord). The filter can reduce the amount of "time".

E.g. time spent on project$filter=project/id eq 'fb1eacff-a17d-46d2-9fd9-2e04299a6503'

The form of slices may be affected by the following query parameters.

**range**

It is the time range of the graph. Possible values are:

- "0" - without limits
- "1" - day
- "7" - week
- "31" - month
- "365" - year
- "999" - specific date interval

**range\_from**

It is the date when the range starts. The format is "yyyy-MM-dd". For ranges 7, 31 and 365 it is modified automatically to the beginning of the corresponding week, month or year.

**range\_to**

It is the date when the range ends. The format is "yyyy-MM-dd". It is usable only for the 999 range. For ranges 7, 31 and 365 it is modified automatically to the end of the corresponding week, month or year.

**offset**

It determines the difference of the range. Possible values are:

- "0" - means the range is exactly as it was defined
- negative values – it's the same range as in the past (e.g. offset "-1" with range "365" means last year relative to the "range\_from" date)
- positive values – it's the same range as in the future (e.g. offset "1" with range "31" means next month relative to the "range\_from" date)

**slice\_by**

It affects the amount of returned slices. Possible values are:

- "1" - range sliced by day (7 slices per week, 31 slices per month, ...)
- "7" - range sliced by week (5 slices per month, 53 slices per year, ...)
- "31" - range sliced by month (12 slices per year)
- "365" - range sliced by year

The data on the above picture will be returned on request (year sliced by months):

GET http://{tenant}.api.primaerp.com/v1/time/reports/singleslices?range=365&range\_from=2013-01-01&range\_to=2013-12-31&offset=0&slice\_by=31

Similarly should be sliced by weeks:

GET http://{tenant}.api.primaerp.com/v1/time/reports/singleslices?range=365&range\_from=2013-01-01&range\_to=2013-12-31&offset=0&slice\_by=7

Then the following data will be returned:

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
