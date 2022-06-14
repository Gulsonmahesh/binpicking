import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  FormBuilder, FormGroup, FormControl, Validators}  from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LoginService } from 'src/app/service/login.service';
import { ConfirmedValidator } from './confirmed.validator';

export class subject{
  public password:any;
  public password2:any;
}
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  myform: any;
  userlist: any;
  model  = new subject();
  bntStyle: any;
  bntStyles: any;
  numberdisabled=false;
  maildisabled=false;
  mailnormal=true;
  numbernormal=true;
  emails= false;
  numbers=false;
  hide = true;
  forgotShow: any;
  otpShow: any;
  signInForm: any;
  resetShow: any;
  afterResetSuccess: any;
  signinShow: boolean = true;
  
  // isAdmin = false;
  form: FormGroup = new FormGroup({});
  constructor(public fb: FormBuilder, public router: ActivatedRoute, public route: Router,private loginService: LoginService) {
    this.form = fb.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    })
   }
   submitform(data:any){
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
    // console.log(data);
    //  this.userlist= data;
     this.otpShow = false;
     this.forgotShow = false;
     this.resetShow = false;
     this.signinShow = true;
     this.afterResetSuccess = true;
      }
   submitmail() {
     this.numberdisabled=true;
     this.numbernormal=false;
    this.bntStyle = 'btn-change';
  }
  submitnumber() {
    this.maildisabled=true;
    this.mailnormal=false;
    this.bntStyles = 'btn-changes';
  }
   disableemailclick(){
    // this.emails= true;
    // this.numbers=false;
  }
  disablenumberclick(){
    // this.emails= false;
    // this.numbers=true;
  }
   get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
    this.signinShow=true;
    this.resetShow=false;
  }
  token_data =''

  ngOnInit(): void {
    this. bntStyle = 'btn-default';
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
      // this.route.navigate(['/gripper']);
      const statusArray:any = ['',''];
      sessionStorage.setItem('isAdmin', this.signInForm.controls.isAdmin.value);
      sessionStorage.setItem('sidebarstatus', JSON.stringify(statusArray));
      if(this.signInForm.controls.isAdmin.value === true) {
        // this.operator = "admin"
        const logindetails = new FormData();
        logindetails.append("username", <string>this.signInForm.controls.username.value );
        logindetails.append("password", <string>this.signInForm.controls.password.value );
        console.log(this.signInForm.value)
        this.loginService.loginDetails(logindetails).subscribe((data:any) => {
          console.log("data",data)
          this.route.navigate(['/gripper']);
        })
      // this.route.navigate(['/gripper']);
      } else {
        // this.operator = "user"
        const statusArray:any = ['','','','','','','','','',''];
        sessionStorage.setItem('sidebarstatus', JSON.stringify(statusArray));
        console.log(this.signInForm.value)
        const logindetails = new FormData();
        logindetails.append("username", <string>this.signInForm.controls.username.value );
        logindetails.append("password", <string>this.signInForm.controls.password.value );
        this.loginService.loginDetails(logindetails).subscribe((data:any) => {
          console.log("data",data)
          // this.loginService.UserDetails().subscribe((new_data:any) => {
          //   console.log(new_data)
          // });
          this.route.navigate(['/projectsummary']);
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
