---
title: "Schedule"
date: 2019-08-25T13:42:13-05:00
menu:
  main:
    weight: 600
---
## UPCOMING SCHEDULE

<link href="https://unpkg.com/@fullcalendar/core@4.3.1/main.min.css" rel="stylesheet">
<link href="https://unpkg.com/@fullcalendar/list@4.3.0/main.min.css" rel="stylesheet">
<script src="https://unpkg.com/@fullcalendar/core@4.3.1/main.min.js"></script>
<script src="/customListView.js"></script>

<script type='text/javascript'>
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'list' ],
      header: false,
      defaultView: 'list',
      duration: { day: 365 },
      events: {
        url: '/event/index.json'
      },
      height: 'auto',
      navLinks: false
    });

    calendar.render();

    var calendarOldEl = document.getElementById('calendar_old');
    var beginDate = new Date();
    var endDate = new Date();

    beginDate.setMonth(0);
    beginDate.setDate(1);
    endDate.setDate(endDate.getDate() - 1);

    var calendar = new FullCalendar.Calendar(calendarOldEl, {
      plugins: [ 'list' ],
      header: false,
      defaultView: 'list',
      events: {
        url: '/event/index.json'
      },
      height: 'auto',
      visibleRange:{
        start: beginDate,
        end: endDate
      }
    });

    calendar.render();
  });
</script>

<div id="calendar"></div>

## Past Events
<div id="calendar_old"></div>
