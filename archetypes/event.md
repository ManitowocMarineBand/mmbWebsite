---
title: "{{ replace .Name "-" " " | title }}"
fileName: "{{ .Name }}"
draft: true
type: event

allDay: false
startDate: {{ .Date | dateFormat "2006-01-02T15:04:05" }}
endDate: {{ (now.AddDate 0 0 1).Format "2006-01-02T15:04:05" }}
location: ""
category: ""
---
