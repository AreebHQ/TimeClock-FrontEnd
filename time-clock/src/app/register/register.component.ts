import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    firstName:null,
    lastName:null,
    password: null,
    email:null,
    role:null
  };

  isRegister = false;
  isRegisterFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router:Router) { }
 

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, password, email, firstName, lastName, role } = this.form;

    console.log(firstName + " " + lastName + " " + username + " " + email+ " " +password + " " + role );

   this.authService.register(username,email,password,firstName,lastName,role).subscribe({

      
      error: err => {
        console.log( "response from error: " + err.message);
        this.errorMessage = err.message;
        this.isRegisterFailed = true;
      }


    });

  }

  reloadPage(): void {
    window.location.reload(); 
  }

}
