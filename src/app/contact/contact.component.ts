import { AfterContentChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  username: string;
  email: string;
  msg: string;
  constructor() { }

  ngOnInit(): void {
  }



  sendForm(e) {
    e.preventDefault()
    console.log('Username: ', this.username);
    console.log('Email: ', this.email);
    console.log('Msg: ', this.msg);
    this.clearForm()

  }
  clearForm() {
    this.username = ''
    this.email = ''
    this.msg = ''
  }


}
