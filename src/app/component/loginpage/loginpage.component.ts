import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  hide = true;
  forgotShow: any;
  otpShow: any;
  signInForm: any;
  resetShow: any;
  afterResetSuccess: any;
  signinShow: boolean = true;
  // isAdmin = false;

  constructor(public fb: FormBuilder, public router: ActivatedRoute, public route: Router,private loginService: LoginService) { }

  name = "";
  password = "";
  operator = "";

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: new FormControl('',[Validators.required, Validators.nullValidator]),
      password: new FormControl('',[Validators.required, Validators.nullValidator]),
      isAdmin: new FormControl(false)
    })
  }

  forgotPasswordClick() {
    this.forgotShow = true;
    this.otpShow = false;
    this.resetShow = false;
    this.signinShow = false;
  }

  onSubmit(event:any) {
    event.preventDefault();
    
    if(this.signInForm.status === 'VALID') {
      sessionStorage.setItem('isAdmin', this.signInForm.controls.isAdmin.value);
      if(this.signInForm.controls.isAdmin.value === true) {
        this.operator = "admin"
        const logindetails = new FormData();
        logindetails.append("username", <string>this.signInForm.controls.username.value );
        logindetails.append("password", <string>this.signInForm.controls.password.value );
        console.log(this.signInForm.value)
        this.loginService.loginDetails(logindetails).subscribe((data:any) => {
          if (data.status === "success") {
            this.route.navigate(['/robot']);
          }
        })
      this.route.navigate(['/gripper']);
      } else {
        this.route.navigate(['/projectsummary']);
        this.operator = "user"
        console.log(this.signInForm.value)
        const logindetails = new FormData();
        logindetails.append("username", <string>this.signInForm.controls.username.value );
        logindetails.append("password", <string>this.signInForm.controls.password.value );
        this.loginService.loginDetails(logindetails).subscribe((data:any) => {
          if (data.status === "success") {
            this.route.navigate(['/projectsummary']);
          }
        });
      }
    }
    return;
  }
  nextOtp() {
    this.otpShow = true;
    this.forgotShow = false;
    this.resetShow = false;
    this.signinShow = false;
    // this.route.navigate(['/project-details']);
  }
  openverify(){
    this.otpShow=false;
    this.resetShow= true;
    this.forgotShow=false;
  }
  successOtp() {
    this.otpShow = true;
    this.forgotShow = false;
    this.resetShow = false;
    this.signinShow = false;
  }
  verifiedotp(){
    this.otpShow= false;
    this.resetShow= true;
  }

  isLoadingfal: boolean = true;
  isLoading: any;
  isLoadingTrue: any;
  loadingData() {
    this.isLoading = true;
    this.isLoadingfal = false;
    this.isLoadingTrue = false;
    setTimeout(() => {
      this.isLoading = false;
      this.isLoadingTrue = true;
    }, 1000)

    // this.isLoading= false;
  }
  resetPassword() {
    this.otpShow = false;
    this.forgotShow = false;
    this.resetShow = false;
    this.signinShow = true;
    this.afterResetSuccess = true;
  }
  btnClick() {
    this.route.navigate(['/project-details']);
  }
  setAdmin() {
    // console.log(this.isAdmin)
  }
}
