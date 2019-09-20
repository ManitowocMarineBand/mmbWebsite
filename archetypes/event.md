---
title: "{{ replace .Name "-" " " | title }}"
draft: true
type: event

allday: false
statDate: {{ .Date }} 
endDate: {{ dateFormat "2006-01-02T15:04:05" (now.AddDate +1 0 0) }} 
location: ""
---