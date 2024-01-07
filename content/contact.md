---
title: Contact
menu:
  main:
    weight: 300
---
## CONTACT US

You can write to us at: 

Manitowoc Marine Band<br/>
PO Box 2224<br/>
Manitowoc, WI 54221-2224

Or send us a message using the form below.

-------------------

<form id='Contact' method='post' action="/contact_thanks/" data-netlify="true" netlify-honeypot="trapit">
  <fieldset >
    <div class='container'>
      <label for='name' >Your Name: </label><br/>
      <input type='text' name='name' id='name' required/><br/>
    </div>
    <div class='container'>
      <label for='email' >Email Address:</label><br/>
      <input type='email' name='email' id='email' required/><br/>
    </div>
    <div class='container'>
      <label for='message' >Message:</label><br/>
      <textarea rows="10" cols="50" name='message' id='message'></textarea>
    </div>
    <div class='container'>
      <input type="text" name="trapit" value="" style="display:none">
      <input type='submit' name='Submit' value='Submit' />
    </div>
  </fieldset>
</form>
