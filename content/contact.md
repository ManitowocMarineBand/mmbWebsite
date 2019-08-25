---
title: "Contact"
date: 2019-08-24T21:01:34-05:00
customCss: "contact.css"
---

## Contact the Marine Band

\* required fields

<form id='contactus' action='https://formspree.io/contact@manitowocmarineband.org' method='post' accept-charset='UTF-8'>
  <fieldset >
    <div><span class='error'></span></div>
    <div class='container'>
      <label for='name' >Your Name*: </label><br/>
      <input type='text' name='name' id='name' maxlength="50" /><br/>
      <span id='contactus_name_errorloc' class='error'></span>
    </div>
    <div class='container'>
      <label for='email' >Email Address*:</label><br/>
      <input type='text' name='email' id='email' maxlength="50" /><br/>
      <span id='contactus_email_errorloc' class='error'></span>
    </div>
    <div class='container'>
      <label for='message' >Message:</label><br/>
      <span id='contactus_message_errorloc' class='error'></span>
      <textarea rows="10" cols="50" name='message' id='message'></textarea>
    </div>
    <div class='container'>
      <input type='submit' name='Submit' value='Submit' />
    </div>
  </fieldset>
</form>
