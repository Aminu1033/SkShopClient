import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GenerateToken } from 'src/app/models/generate-token';
import { UserForAuthDto } from 'src/app/models/userForAuthDto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  email!: FormControl;
  password!: FormControl;
  rememberMe!: FormControl;

  loginFormGroup!: FormGroup;
  constructor(private route: ActivatedRoute, private authService: AuthService) { 
    
  }

  ngOnInit(): void {   
    this.loadFormControls();
    this.loadFormGroup();
  }

  loadFormControls(){
    this.email = new FormControl('', [Validators.required, Validators.email]),
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]),
    this.rememberMe = new FormControl(false)
  }

  loadFormGroup(){
    this.loginFormGroup = new FormGroup({
      email :  this.email,
      password : this.password,
      rememberMe : this.rememberMe
    });
  }

  onSubmit(loginFormGroup: FormGroup){
    console.log("Login details: ", loginFormGroup.value);
    let loginDetails = loginFormGroup.value as UserForAuthDto;    
    this.authService.generateToken(loginDetails)
          .subscribe((data) => {
            let generatedToken = data as GenerateToken;

            let token = generatedToken?.token;
            console.log("Token : ", data as GenerateToken); 
            console.log("Token : ", token);            
          })
  }
}
