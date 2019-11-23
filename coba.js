
<script type='text/javascript'>
      //<![CDATA[
      var cekMobile = false;
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        cekMobile = true;
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
          return Math.round(elapsed/1000) + ' detik ' + ago;   
        }
        else if (elapsed < msPerHour) {
          return Math.round(elapsed/msPerMinute) + ' menit ' + ago;   
        }
        else if (elapsed < msPerDay ) {
          return Math.round(elapsed/msPerHour ) + ' jam ' + ago;   
        }
        else if (elapsed < msPerMonth) {
          return Math.round(elapsed/msPerDay) + ' hari ' + ago;   
        }
        else if (elapsed < msPerYear) {
          return Math.round(elapsed/msPerMonth) + ' bulan ' + ago;   
        }
        else {
          return Math.round(elapsed/msPerYear ) + ' tahun ' + ago;   
        }
      }
      $('.comment .datetime').each(function(){
        var timestamp = $(this).find('a').text();
        $(this).find('a').text(timeAgo(timestamp));
      });
      $(window).bind('load',function(){
        $('.timeago').each(function(){
          var timestamp = $(this).attr('datetime');
          $(this).text(timeAgo(timestamp));
        });
      });
      //]]>
    </script>
