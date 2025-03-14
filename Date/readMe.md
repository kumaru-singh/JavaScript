# JavaScript Date Methods

## Description
This document provides a list of JavaScript Date methods and their descriptions. These methods allow you to retrieve and modify specific components of a date and time.

## Date Retrieval Methods

| Method            | Description                                      |
|------------------|--------------------------------------------------|
| `getFullYear()`  | Get year as a four-digit number (yyyy).         |
| `getMonth()`     | Get month as a number (0-11).                   |
| `getDate()`      | Get day as a number (1-31).                      |
| `getDay()`       | Get weekday as a number (0-6).                   |
| `getHours()`     | Get hour (0-23).                                 |
| `getMinutes()`   | Get minute (0-59).                               |
| `getSeconds()`   | Get second (0-59).                               |
| `getMilliseconds()` | Get millisecond (0-999).                     |
| `getTime()`      | Get time (milliseconds since January 1, 1970).   |

## Date Modification Methods

| Method            | Description                                      |
|------------------|--------------------------------------------------|
| `setDate()`      | Set the day as a number (1-31).                  |
| `setFullYear()`  | Set the year (yyyy).                             |
| `setHours()`     | Set the hour (0-23).                             |
| `setMilliseconds()` | Set the milliseconds (0-999).                 |
| `setMinutes()`   | Set the minutes (0-59).                          |
| `setMonth()`     | Set the month (0-11).                            |
| `setSeconds()`   | Set the seconds (0-59).                          |
| `setTime()`      | Set the time (milliseconds since January 1, 1970). |

## Usage Example
```javascript
const now = new Date();

// Retrieving date components
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth());
console.log("Date:", now.getDate());
console.log("Weekday:", now.getDay());
console.log("Hour:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Time (ms since 1970):", now.getTime());

// Modifying date components
now.setFullYear(2025);
now.setMonth(11); // December (0-based index)
now.setDate(25);
now.setHours(12);
now.setMinutes(30);
now.setSeconds(45);
now.setMilliseconds(500);
console.log("Updated Date:", now);
```

## Notes
- The `getMonth()` and `setMonth()` methods use a `0-11` range, where `0` represents January and `11` represents December.
- The `getDay()` method returns values from `0-6`, where `0` represents Sunday and `6` represents Saturday.
- `getTime()` and `setTime()` are useful for calculating and setting time differences between dates.
- When modifying dates, ensure valid values to avoid unintended shifts in date-time representation.

