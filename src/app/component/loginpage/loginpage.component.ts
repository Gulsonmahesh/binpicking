import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
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
  constructor(public fb: FormBuilder, public router: ActivatedRoute, public route: Router) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({

    })
  }

  forgotPasswordClick() {
    this.forgotShow = true;
    this.otpShow = false;
    this.resetShow = false;
    this.signinShow = false;
  }

  onSubmit() {
    this.route.navigate(['/project-details']);
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
};
}
