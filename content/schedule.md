---
title: "Schedule"
date: 2019-08-25T13:42:13-05:00
menu:
  main:
    weight: 600
customCss:
  - https://unpkg.com/@fullcalendar/core@4.3.1/main.min.css
  - https://unpkg.com/@fullcalendar/list@4.3.0/main.min.css
customJs:
  - https://unpkg.com/@fullcalendar/core@4.3.1/main.min.js
  - https://unpkg.com/@fullcalendar/google-calendar@4.3.0/main.min.js
  - /customListView.js
---
## UPCOMING SCHEDULE

<script type='text/javascript'>
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'list', 'googleCalendar' ],
      header: false,
      defaultView: 'list',
      duration: { day: 365 },
      googleCalendarApiKey: 'AIzaSyCTjnKkpaxowdC4yRKVxpipbwPT14yrve8',
      eventSources: [
        {
          googleCalendarId: 'manitowocmarineband.org_t157r5a71378md7r86m4jn5lc0@group.calendar.google.com'
        },
        {
          googleCalendarId: 'manitowocmarineband.org_qin5q3e7s39jlqsd4p1hfu9ino@group.calendar.google.com',
          className: 'other-event'
        }
      ],
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
      plugins: [ 'list', 'googleCalendar' ],
      header: false,
      defaultView: 'list',
      googleCalendarApiKey: 'AIzaSyCTjnKkpaxowdC4yRKVxpipbwPT14yrve8',
      eventSources: [
        {
          googleCalendarId: 'manitowocmarineband.org_t157r5a71378md7r86m4jn5lc0@group.calendar.google.com'
        },
        {
          googleCalendarId: 'manitowocmarineband.org_qin5q3e7s39jlqsd4p1hfu9ino@group.calendar.google.com',
          className: 'other-event'
        }
      ],
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
