---
layout: page
permalink: /comp-sci/web-design/activities/1-6
---

[← Back](../)

# Activity 1.6 Tables

## Introduction

Tables are great for displaying organized sets of information. You can create a table to display simple information like product prices or even complex sets of data such as calculations.

A table has the following structure

- Table with one or more rows
- Rows have one or more columns of data, known as **cells**.
- A cell can either be a column title, or an individual piece of data.

### Example

![Table Sample](/assets/img/activities/web-design/table-example.png)

### New Elements

**Table** `<table></table>`

The table element describes a single table consisting of rows of data.

```html
    <table>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
        </tr>

        <tr>
            <td>$35</td>
            <td>$40</td>
            <td>$500</td>
            <td>$1000</td>
        </tr>

        <tr>
            <td>Information</td>
            <td>Information</td>
            <td>Information</td>
            <td>Information</td>
        </tr>
    </table>
```

![Table Sample](/assets/img/activities/web-design/table-annotation.png)

----

**Table Row** `<tr></tr>`

The table row element describes a single row of table information. Either table header elements or table data elements can be nested in a table row.

----

**Table Header** `<th></th>`

The table header element is used to define a title for a column or a row. Table header text is bold.

----

**Table Data** `<td></td>`

The table data element represents a single piece of table data.

----

### Skills to Practice

- Creating tables

## Activity Instructions

### Setup

1. Create a new repl.
    1. Select *HTML, CSS, JS* for the language.
    2. Name the Repl "*1.6 Tables*".
2. Click Create repl.

### Instructions

{% highlight html linenos %}
<!DOCTYPE html>
<html>
<head>
    <title>Lists</title>

    <!-- Write this style element if you want to see borders around your table data. -->
    <!-- This helps you visualize the cell data for learning purposes. -->
    <style>
        table, th, td {
            border: 1px solid black;
        }
    </style>
</head>
<body>

    <h1>My Schedules</h1>

    <h2>Lifting Schedule - Monday Wednesday Friday</h2>

    <table>
        <!-- Column Headers -->
        <tr>
            <th>Lift 1</th>
            <th>Lift 2</th>
            <th>Lift 3</th>
            <th>Optional</th>
        </tr>

        <!-- Table Data -->
        <tr>
            <td>Squat 5x5</td>
            <td>Bench 5x5</td>
            <td>Row 5x5</td>
            <td>Pullups 3x8</td>
        </tr>

        <tr>
            <td>Squat 5x5</td>
            <td>Overhead Press 5x5</td>
            <td>Deadlift 2x5</td>
            <td>Dips 3x8</td>
        </tr>

        <tr>
            <td>Squat 5x5</td>
            <td>Bench 5x5</td>
            <td>Row 5x5</td>
            <td>Pullups 3x8</td>
        </tr>

    </table>

    <h2>Weekend Schedule</h2>

    <table>
        <!-- Column Headers -->
        <tr>
            <th>Day</th>
            <th>Morning</th>
            <th>Afternoon</th>
            <th>Evening</th>
        </tr>

        <!-- Table Data -->
        <tr>
            <th>Friday</th>
            <td colspan="2">school</td><!-- lookup what colspan does... -->
            <td>go to the game</td>
        </tr>

        <tr>
            <th>Saturday</th>
            <td>work</td>
            <td>lift</td>
            <td>boys night out</td>
        </tr>

        <tr>
            <th>Sunday</th>
            <td>church</td>
            <td>watch the game</td>
            <td>homework</td>
        </tr>
    </table>

</body>
</html>
{% endhighlight %}

### Sample Web Page

![Sample Webpage](/assets/img/activities/web-design/webpage-table-sample.png)

## Tips, Tricks, and Reflection

- Notice I used an HTML attribute called `colspan`. There's a similar attribute called `rowspan`. Figure out what they do, and try to implement them in another table.