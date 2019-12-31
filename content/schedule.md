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
  - /customListView.js
---
## UPCOMING SCHEDULE
{{< fullCalendar >}}
  var options = {
    plugins: [ 'list' ],
    header: false,
    defaultView: 'list',
    duration: { day: 365 },
    events: {
      url: '/event/index.json'
    },
    height: 'auto',
    navLinks: false,
    allDayText: 'TBD'
  };
{{< /fullCalendar >}}

## PAST EVENTS
{{< fullCalendar container="calendar_old" >}}
  var beginDate = new Date();
  var endDate = new Date();

  beginDate.setMonth(0);
  beginDate.setDate(1);
  endDate.setDate(endDate.getDate() - 1);

  var options = {
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
    },
    allDayText: 'TBD'
  };
{{< /fullCalendar >}}
