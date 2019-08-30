---
title: "Contact"
date: 2019-08-24T21:01:34-05:00
customCss: "contact.css"
menu: 
  main:
    weight: 300
---
## CONTACT US

\* required fields
<form id='contactus' action='https://jumprock.co/mail/ManitowocMarineBand' method='post' accept-charset='UTF-8'>
  <fieldset >
    <div><span class='error'></span></div>
    <div class='container'>
      <label for='name' >Your Name*: </label><br/>
      <input type='text' name='name' id='name'/><br/>
    </div>
    <div class='container'>
      <label for='email' >Email Address*:</label><br/>
      <input type='text' name='email' id='email'/><br/>
    </div>
    <div class='container'>
      <label for='message' >Message:</label><br/>
      <textarea rows="10" cols="50" name='message' id='message'></textarea>
    </div>
    <div class='container'>
      <input type="hidden" name="after" value="{{< ref thanks >}}" />
      <input type='submit' name='Submit' value='Submit' />
    </div>
  </fieldset>
</form>
