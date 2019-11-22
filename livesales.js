/*
LiveSales-Static-Widget
( c ) 2019 by. SEOTemplate.web.id
*/

function load_css_head(posting) {
var inject_link = document.createElement('link');
inject_link.rel = 'stylesheet';
inject_link.href = posting;
return document.head.appendChild(inject_link);
}

var arr_linkCssHead = [
'https://fonts.googleapis.com/css?family=Roboto:400,600',
'https://unpkg.com/ionicons@4.4.4/dist/css/ionicons.min.css',
]

function each_load_css_head(item, index) {
load_css_head(item);
}
window.onload=function(){
arr_linkCssHead.forEach(each_load_css_head);
}

if(typeof jQuery=='undefined') {
  var headTag = document.getElementsByTagName("head")[0];
  var loadJQUERY = document.createElement('script');
  loadJQUERY.type = 'text/javascript';
  loadJQUERY.src = 'https://cdn.statically.io/gh/merpatiblogger/jasacvmurah/48d3304a/jquery.min.js';
  loadJQUERY.onload = myJQUERY;
  headTag.appendChild(loadJQUERY);
}



  function timeAgo(timeStamp) {
      var previous = new Date(timeStamp);
      var current = new Date();
      var msPerMinute = 60 * 1000;
      var msPerHour = msPerMinute * 60;
      var msPerDay = msPerHour * 24;
      var msPerMonth = msPerDay * 30;
      var msPerYear = msPerDay * 365;
      var ago = 'lalu';
      var elapsed = current - previous;
      if (elapsed < msPerMinute) {
          return Math.round(elapsed / 1000) + ' detik ' + ago;
      } else if (elapsed < msPerHour) {
          return Math.round(elapsed / msPerMinute) + ' menit ' + ago;
      } else if (elapsed < msPerDay) {
          return Math.round(elapsed / msPerHour) + ' jam ' + ago;
      } else if (elapsed < msPerMonth) {
          return Math.round(elapsed / msPerDay) + ' hari ' + ago;
      } else if (elapsed < msPerYear) {
          return Math.round(elapsed / msPerMonth) + ' bulan ' + ago;
      } else {
          return Math.round(elapsed / msPerYear) + ' tahun ' + ago;
      }
  }
  $('.timeago').each(function() {
      var timestamp = $(this).attr('datetime');
      $(this).text(timeAgo(timestamp));
  });

  $(document).on('click','.popWin', function(){
    var target_url = $(this).attr('href'),
        w = $(this).attr('data-popWidth'),
        h = $(this).attr('data-popHeight');

    if (w == null) {
      w = 960;
    }
    if (h == null) {
      h = 540;
    }
    left = Number((screen.width / 2) - (w / 2)),
      tops = Number((screen.height / 2) - (h / 2)),
      popupWindow = window.open(target_url, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
    popupWindow.focus();
    return false;
  });
} /* myJQUERY() */
