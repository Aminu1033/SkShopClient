import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userFormGroup!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.userFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.maxLength(250)]),
      address: new FormControl(''),
      zipcode: new FormControl(''), 
      registerDate: new FormControl(new Date().toUTCString())
    })
  }


  onSubmit(){}

}
