import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactServices } from '../../services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit{
  loaded:boolean=true;
  ContactData:any={};

  constructor(private _contactServices:ContactServices) {
  }



  ngOnInit(): void {
    setTimeout(()=>{ this.loaded=false;},1000)
    this.getContactInfo();
  }



  getContactInfo() {
    this._contactServices.getContact().subscribe({
      next:(res) => {
        this.ContactData= res.data;
      }
    })
 }

  contactForm: FormGroup = new FormGroup ({
    name: new FormControl('', [Validators.required , Validators.minLength(3)]),
    company: new FormControl(),
    email: new FormControl('',[Validators.required , Validators.email]),
    phone: new FormControl('', [Validators.required , Validators.maxLength(13) , Validators.minLength(11)]),
    message: new FormControl('', [Validators.required , Validators.minLength(20)]),
  })

  // contactSubmit(form:FormGroup) {
  //   console.log(form.value);
  //   alert('Send Success');
  // }
}
