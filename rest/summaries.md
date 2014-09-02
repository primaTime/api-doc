Summary sub-resource
==

The primaERP API provides summaries for all resources.

#### Basic syntax

		/{resource}/summary

Where `{resource}` is a module resource such as: `time/projects`, `time/timerecords`, `time/tasks`, etc. Or a global resource such as `user`.


#### Example

		GET http://{tenant}.api.primaerp.com/v1/time/timerecords/summary

		GET http://{tenant}.api.primaerp.com/v1/time/projects/summary

The summaries can be affected by the `summary` query parameter.

#### General syntax

		/{resource}/?summary={groupedBy};count();sum({fieldName});avg({fieldName});min({fieldName});max({fieldName})

Where `{resource}` is a module resource such as: `time/projects`, `time/timerecords`, `time/tasks`, etc. Or a global resource such as `user`.

## The {groupedBy} value

- It is the field name for the grouping of the summaries.
- It must be used as the first part of the summary parameter.
- It can only be used with an aggregation function such as: count(), sum(), avg(), etc.
- The grouping value is labeled as "key".
- This is optional, if {groupedBy} is not used, then the "key" will be "\*".

#### Example

We have three time records. One of these is billable and others are not.

		GET http://{tenant}.api.primaerp.com/v1/time/timerecords/summary?summary=billable;count()

```JSON
[
	{"key":"true","summaries":[{"name":"count()","value":"1"}]},
	{"key":"false","summaries":[{"name":"count()","value":"2"}]}
]
```

## count()

- It is the aggregating function for counting objects.
- It can be used with a [$filter](options.md#filtering) query.

#### Basic use

		GET http://{tenant}.api.primaerp.com/v1/time/timerecords/summary?summary=count()

```JSON
[
	{"key":"*","summaries":[{"name":"count()","value":"3"}]}
]
```

#### With filter

		GET http://{tenant}.api.primaerp.com/v1/time/timerecords/summary?summary=count()&$filter=user/id+eq+'683f0893-9b4b-4150-8123-e41b266041bc'

```JSON
[
	{"key":"*","summaries":[{"name":"count()","value":"2"}]}
]
```

## sum({fieldName})

- It is the aggregating function for the summation.
- The {fieldName} determines the values that will be summed up.
- It can be used with a [$filter](options.md#filtering) query.

#### Basic use

		GET http://{tenant}.api.primaerp.com/v1/time/timerecords/summary?summary=sum(price)

```JSON
[
		{"key":"*","summaries":[{"name":"sum(price)","value":"6000.0"}]}
]
```

#### With filter

		GET http://{tenant}.api.primaerp.com/v1/time/timerecords/summary?summary=sum(price)&$filter=user/id+eq+'683f0893-9b4b-4150-8123-e41b266041bc'

```JSON
[
	{"key":"*","summaries":[{"name":"sum(price)","value":"5000.0"}]}
]
```

## avg({fieldName})

- It is the aggregating function for averaging.
- The {fieldName} determines the values that will be averaged.
- It can be used with a [$filter](options.md#filtering) query.

#### Basic use

		GET http://{tenant}.api.primaerp.com/v1/time/timerecords/summary?summary=avg(price)

```JSON
[
	{"key":"*","summaries":[{"name":"avg(price)","value":"2000.0"}]}
]
```

## min({fieldName})

- It is the aggregating function for the minimal value determination.
- The {fieldName} determines the values that will be compared.
- It can be used with a [$filter](options.md#filtering) query.

#### Basic use

		GET http://{tenant}.api.primaerp.com/v1/time/timerecords/summary?summary=min(price)

```JSON
[
	{"key":"*","summaries":[{"name":"min(price)","value":"1000.0"}]}
]
```

## max({fieldName}

- It is the aggregating function for the maximal value determination.
- The {fieldName} determines the values that will be compared.
- It can be used with a [$filter](options.md#filtering) query.

		GET http://{tenant}.api.primaerp.com/v1/time/timerecords/summary?summary=max(price)

```JSON
[
	{"key":"*","summaries":[{"name":"max(price)","value":"3000.0"}]}
]
```

## Complex examples

### Summaries of prices and durations

		GET http://{tenant}.api.primaerp.com/v1/time/timerecords/summary?summary=sum(price);sum(duration)

```JSON
[
	{"key":"*","summaries":[
		{"name":"sum(price)","value":"6000.0"},
		{"name":"sum(duration)","value":"6000000"}
	]}
]
```

### All aggregating functions together

		GET http://{tenant}.api.primaerp.com/v1/time/timerecords/summary?summary=count();sum(price);avg(price);min(price);max(price)

```JSON
[
	{"key":"*","summaries":[
		{"name":"count()","value":"3"},
		{"name":"sum(price)","value":"6000.0"},
		{"name":"avg(price)","value":"2000.0"},
		{"name":"min(price)","value":"1000.0"},
		{"name":"max(price)","value":"3000.0"}
	]}
]
```

### All aggregating functions grouped by billable

		GET http://{tenant}.api.primaerp.com/v1/time/timerecords/summary?summary=billable;count();sum(price);avg(price);min(price);max(price)

```JSON
[
	{"key":"true","summaries":[
		{"name":"count()","value":"1"},
		{"name":"sum(price)","value":"1000.0"},
		{"name":"avg(price)","value":"1000.0"},
		{"name":"min(price)","value":"1000.0"},
		{"name":"max(price)","value":"1000.0"}
	]},
	{"key":"false","summaries":[
		{"name":"count()","value":"2"},
		{"name":"sum(price)","value":"5000.0"},
		{"name":"avg(price)","value":"2500.0"},
		{"name":"min(price)","value":"2000.0"},
		{"name":"max(price)","value":"3000.0"}
	]}
]
```

### Prices summed up per users

		GET http://{tenant}.api.primaerp.com/v1/time/timerecords/summary?summary=user/id;sum(price)

```JSON
[
	{"key":"b67ca5db-1dee-41d1-bdbc-6044b73af39e","summaries":[{"name":"sum(price)","value":"1000.0"}]},
	{"key":"683f0893-9b4b-4150-8123-e41b266041bc","summaries":[{"name":"sum(price)","value":"5000.0"}]}
]
```
