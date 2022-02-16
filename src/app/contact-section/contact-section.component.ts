import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {



/**
   * This is bind to ngForm's InputFields in Template File
   */
 contact = {
  name: '', //Bind  to InputField name="name"
  email: '', //Bind to InputField name="email"
  message: '', //Bind to InputField name="message"
};

/**
 * A post request construct configuration
 */
post = {
  // Where to send the post request Ex. www.my-domain/sendMail.php
  endPoint: 'https://danielhelfenstein.com/send-mail.php',
  // What to send, notice JSON.stringify
  body: (payload: any) => JSON.stringify(payload),
  // How to send, notice Content-Type and responseType
  options: {
    headers: {
      'Content-Type': 'text/plain',
      responseType: 'text',
    },
  },
};
constructor(private http: HttpClient, private router: Router) {}

ngOnInit() {}

/**
 * Do not forget to import FormsModule in app.module.ts
 */
onSubmit(ngForm: any) {
if (ngForm.submitted && ngForm.form.valid) {
 console.log(this.contact);
  this.http
    .post(this.post.endPoint, this.post.body(this.contact))
    .subscribe({
      next: (response) => console.log("Das ist vom response: ",response),
      error: (error) => console.error(error),
      complete: () => console.info('send post complete'),
    });
}

this.contact.name = '';
this.contact.message='';
this.contact.email='';
this.router.navigate(['/success']);


}
}


