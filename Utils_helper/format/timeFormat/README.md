# Time Format Function

## Aiming
  transfer the Date or the timestamp to the format you want, you can put the format string in the second parameter, also you can put a callback function in the second parameter, the callback function will receive a dateInfo object as the parameter then you need to return a string as the formatter result.

## Arguments
  date *[**required**]* : the Date or the timestamp you want to format.
  format *[**required**]* : the format string or the callback function.
  isPad *[**options**]* : if the number is less than its standard, whether to pad 0 before it, default is false.

## Example
  1. **Simple use**

  &emsp;The example use the default format string 'yyyy-MM-dd hh:mm:ss' to format the date
  ```js
  import { timeFormat } from 'format-time-format';
  const date = new Date();
  const format = 'yyyy-MM-dd hh:mm:ss';
  const result = timeFormat(date, format);
  console.log(result); // 2019-1-1 12:0:0
  ```
  &emsp;The example use the default format string 'datetime' to format the timestamp
  ```js
  import { timeFormat } from 'format-time-format';
  const timestamp = 1546300800000;
  const format = 'datetime';
  const result = timeFormat(timestamp, format);
  console.log(result); // 2019-1-1 12:0:0
  ```
  2. **Use the callback function**

  &emsp;The example use the callback function to format the date
  ```js
  import { timeFormat } from 'format-time-format';
  const date = new Date();
  const format = (dateInfo) => {
    const { year, month, day, hour, minute, second } = dateInfo;
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  };
  const result = timeFormat(date, format);
  console.log(result); // 2019-1-1 12:0:0
  ```
  3. **Use the isPad option**

  &emsp;The example use the isPad option to format the date
  ```js
  import { timeFormat } from 'format-time-format';
  const date = new Date();
  const format = 'yyyy-MM-dd hh:mm:ss';
  const isPad = true;
  const result = timeFormat(date, format, isPad);
  console.log(result); // 2019-01-01 12:00:00
  ```

# Test Command
  1. npm run dev
  2. search the url http://localhost:5173/test/index.html in the browser
  3. open the console to see the result
