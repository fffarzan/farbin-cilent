import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ExtensionMethodService {

  // familiers!
  getCookie(c_name) {
    let c_value = document.cookie;
    let c_start = c_value.indexOf(" " + c_name + "=");

    if (c_start === -1) {
      c_start = c_value.indexOf(c_name + "=");
    }

    if (c_start === -1) {
      c_value = null;
    } else {
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = c_value.length;
      }
      c_value = unescape(c_value.substring(c_start, c_end));
    }

    return c_value;
  }

  isDate(val) {
    let d = new Date(val);

    return !isNaN(d.valueOf());
  }

  ginj(strDate, f) {
    let res = strDate.split("/");
    let year = res[0];
    let month = res[1];
    let day = res[2];

    let $g_days_in_month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    let $j_days_in_month = new Array(31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29);

    let $gy = year - 1600;
    let $gm = month - 1;
    let $gd = day - 1;

    let $g_day_no = 365 * $gy + div($gy + 3, 4) - div($gy + 99, 100) + div($gy + 399, 400);

    for (let $i = 0; $i < $gm; ++$i)
      $g_day_no += $g_days_in_month[$i];
    if ($gm > 1 && (($gy % 4 == 0 && $gy % 100 != 0) || ($gy % 400 == 0)))
      /* leap and after Feb */
      $g_day_no++;
    $g_day_no += $gd;

    let $j_day_no = $g_day_no - 79;

    let $j_np = div($j_day_no, 12053); /* 12053 = 365*33 + 32/4 */
    $j_day_no = $j_day_no % 12053;

    let $jy = 979 + 33 * $j_np + 4 * div($j_day_no, 1461); /* 1461 = 365*4 + 4/4 */
    let $jm;
    let $jd;

    $j_day_no %= 1461;

    if ($j_day_no >= 366) {
      $jy += div($j_day_no - 1, 365);
      $j_day_no = ($j_day_no - 1) % 365;
    }

    for (var $i = 0; $i < 11 && $j_day_no >= $j_days_in_month[$i]; ++$i)
      $j_day_no -= $j_days_in_month[$i];
    $jm = $i + 1;
    $jd = $j_day_no + 1;

    function div(x, y) {
      return Math.floor(x / y);


    }
    if (!f || f == undefined)
      return { y: $jy, m: $jm, d: $jd }
    else
      return $jy + '/' + $jm + '/' + $jd;





  }

  jing(strDate, f) {
    let res = strDate.split("/");
    let year = res[0];
    let month = res[1];
    let day = res[2];

    function div(x, y) {
      return Math.floor(x / y);
    }

    let $g_days_in_month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    let $j_days_in_month = new Array(31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29);

    let $jy = year - 979;
    let $jm = month - 1;
    let $jd = day - 1;

    let $j_day_no = 365 * $jy + div($jy, 33) * 8 + div($jy % 33 + 3, 4);
    for (let $i = 0; $i < $jm; ++$i) {
      $j_day_no += $j_days_in_month[$i];
    }

    $j_day_no += $jd;

    let $g_day_no = $j_day_no + 79;

    let $gy = 1600 + 400 * div($g_day_no, 146097); /* 146097 = 365*400 + 400/4 - 400/100 + 400/400 */
    $g_day_no = $g_day_no % 146097;

    let $leap = true;
    if ($g_day_no >= 36525) { /* 36525 = 365*100 + 100/4 */
      $g_day_no--;
      $gy += 100 * div($g_day_no, 36524); /* 36524 = 365*100 + 100/4 - 100/100 */
      $g_day_no = $g_day_no % 36524;

      if ($g_day_no >= 365) {
        $g_day_no++;
      } else {
        $leap = false;
      }
    }

    $gy += 4 * div($g_day_no, 1461); /* 1461 = 365*4 + 4/4 */
    $g_day_no %= 1461;

    if ($g_day_no >= 366) {
      $leap = false;

      $g_day_no--;
      $gy += div($g_day_no, 365);
      $g_day_no = $g_day_no % 365;
    }

    let $gm;
    let $gd;
    for (let $i = 0; $g_day_no >= $g_days_in_month[$i] + +($i == 1 && $leap); $i++) {
      $g_day_no -= $g_days_in_month[$i] + +($i == 1 && $leap);
      $gm = $i + 1;
      $gd = $g_day_no + 1;
    }

    if (!f || f == undefined) {
      return { y: $gy, m: $gm, d: $gd }
    } else {
      return $gy + '/' + $gm + '/' + $gd;
    }
  }

  t2j(date, f) {
    let g = this.t2g(date, false);

    return this.ginj(g, f);
  }

  t2g(date, f) {
    date = date * 1000;
    let d = new Date(date);
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    if (!f || f == undefined) {
      return { y: year, m: month, d: day }
    } else {
      return year + '/' + month + '/' + day;
    }
  }

  NewGuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  // unfamilers!
  EmptyGuid() {
    return '00000000-0000-0000-0000-000000000000';
  }

  GetParameterByName(Name, Url) {
    if (!Url) {
      Url = window.location.href;
    }

    Name = Name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + Name + "(=([^&#]*)|&|#|$)");
    let results = regex.exec(Url);

    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }

    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  FindItemInJson(source, IDName, IDValue, ChildName) {
    for (let key in source) {
      let item = source[key];

      for (let idx in item) {
        if (idx == IDName && item[idx] == IDValue) {
          return item;
        }
      }

      if (item.hasOwnProperty(ChildName)) {
        let subresult = this.FindItemInJson(item[ChildName], IDName, IDValue, ChildName);
        if (subresult) {
          return subresult;
        }
      }
    }

    return null;
  }

  binEncode(data) {
    let binArray = []
    let datEncode = "";

    for (let i = 0; i < data.length; i++) {
      binArray.push(data[i].charCodeAt(0).toString(2));
    }

    for (let j = 0; j < binArray.length; j++) {
      let pad = padding_left(binArray[j], '0', 8);
      datEncode += pad + ' ';
    }

    function padding_left(s, c, n) {
      if (!s || !c || s.length >= n) {
        return s;
      }

      let max = (n - s.length) / c.length;
      for (var i = 0; i < max; i++) {
        s = c + s;
      }

      return s;
    }

    return binArray;
  }

  // fffarzan-functions
  DetectMobile() {
    if (navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  }

  isLandscape() {
    if (window.innerWidth >= 812) {
      if (window.innerWidth <= 1024) {
        return true;
      }
    }
  }

  DetectTablet() {
    if (navigator.userAgent.match(/iPad/i)) {
      return true;
    } else {
      return false;
    }
  }

  getSmallImage(imageUrl) {
    if (imageUrl) {
      let temp = [];

      if (imageUrl.includes('/')) {
        if (!imageUrl.includes('\\')) temp = imageUrl.split('/');
      } else if (imageUrl.includes('\\')) {
        if (!imageUrl.includes('/')) temp = imageUrl.split('\\');
      } else if (imageUrl.includes('\\')) {
        if (imageUrl.includes('/')) temp = imageUrl.split('\\');
      }

      let tempLength = temp.length;
      temp.splice(tempLength - 1, 0, 'Small');

      if (imageUrl.includes('/')) {
        if (!imageUrl.includes('\\')) imageUrl = temp.join('/');
      } else if (imageUrl.includes('\\')) {
        if (!imageUrl.includes('/')) imageUrl = temp.join('\\');
      } else if (imageUrl.includes('\\')) {
        if (imageUrl.includes('/')) imageUrl = temp.join('\\');
      }

      return imageUrl;
    }
  }
}