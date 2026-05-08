import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  form = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail() {
    emailjs.send(
      'service_qmqwq74',
      'template_1ss814k',
      {
        from_name: this.form.name,
        from_email: this.form.email,
        message: this.form.message
      },
      
    )
  }
}
