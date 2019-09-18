---
title: "Schedule"
date: 2019-08-25T13:42:13-05:00
menu:
  main:
    weight: 600
---
## 2019 SCHEDULE

<link href="https://unpkg.com/@fullcalendar/core@4.3.1/main.min.css" rel="stylesheet">
<link href="https://unpkg.com/@fullcalendar/list@4.3.0/main.min.css" rel="stylesheet">
<script src="https://unpkg.com/@fullcalendar/core@4.3.1/main.min.js"></script>
<script src="https://unpkg.com/@fullcalendar/list@4.3.0/main.min.js"></script>
<script src="https://unpkg.com/@fullcalendar/google-calendar@4.3.0/main.min.js"></script>

<script type='text/javascript'>
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'list', 'googleCalendar' ],
      views: {
        listAll: {
          type: 'listYear',
          duration: {
            years: 999
          }
        }
      },
      defaultView: 'listAll',
      googleCalendarApiKey: 'AIzaSyCTjnKkpaxowdC4yRKVxpipbwPT14yrve8',
      events: 'manitowocmarineband.org_t157r5a71378md7r86m4jn5lc0@group.calendar.google.com',
    });

    calendar.render();
  });
</script>

<div id="calendar"></div>
<iframe src="https://drive.google.com/file/d/10uRlKPWz2ggQbP5Xmo1soT_s7whGCh_S/preview" width="750" height="968"></iframe>
