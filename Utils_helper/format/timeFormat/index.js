const FORMAT_STRING_DICT = {
  'datetime': 'yyyy-MM-dd HH:mm:ss',
  'date': 'yyyy-MM-dd',
  'time': 'HH:mm:ss',
}

function _formatNormalize(pattern) {
  if (typeof pattern === 'function') {
    return pattern;
  }
  if (typeof pattern !== 'string') {
    throw new TypeError('Please pass a string or a function variable');
  }
  // normalize the pattern string, such as datetime -> yyyy-MM-dd HH:mm:ss
  pattern = _formatStringNormalize(pattern);
  
  return (dateInfo) => {
    const { yyyy, MM, dd, HH, mm, ss } = dateInfo;
    return pattern.replace(/yyyy|MM|dd|HH|mm|ss/g, (match) => {
      return {
        yyyy,
        MM,
        dd,
        HH,
        mm,
        ss
      }[match];
    });
  }
}
function _formatStringNormalize(string) {
  Object.keys(FORMAT_STRING_DICT).forEach(key => {
    if (string === key) {
      string = FORMAT_STRING_DICT[key];
    }
  });
  return string;
}


export default function formatter(date = new Date(), formatter, isPad = false) {
  if (typeof (date === 'string')) {
    date = new Date(date);
  }
  const dateInfo = {
    'yyyy': date.getFullYear(),
    'MM': date.getMonth() + 1,
    'dd': date.getDate(),
    'HH': date.getHours(),
    'mm': date.getMinutes(),
    'ss': date.getSeconds()
  }  

  if (isPad) {
    _pad('yyyy', 4);
    _pad('MM', 2);
    _pad('dd', 2);
    _pad('HH', 2);
    _pad('mm', 2);
    _pad('ss', 2);
  }

  try {
    const formatterFn = _formatNormalize(formatter);
    return formatterFn(dateInfo);
  } catch (error) {
    return error;
  }


  function _pad(propKey, length) {
    dateInfo[propKey] = dateInfo[propKey].toString().padStart(length, '0');
  }
}

