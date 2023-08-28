import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private UserService:UserService,
    private snack:MatSnackBar
  ) { }

  public user={
    username:'',
    password:'',
    fname:'',
    lname:'',
    email:'',
    phone:'',
  };

  ngOnInit(): void {}

  formSubmit()
  {
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null)
    {
      // alert('User is Required');
      this.snack.open('Username is Required!!','',{
        duration:2100,
        // verticalPosition:'top',
        // horizontalPosition:'right',
      });
      return;
    }

    //Add user: userservice
    this.UserService.addUser(this.user).subscribe(
      (data)=>{
        //success
        console.log(data);
        Swal.fire(
          'Successfully Registered',
          'User Name is '+data.username,
          'success'
        )
      },
      (error)=>{
      //error
      console.log(error);
      //alert("Something went wrong!!");
      this.snack.open('Something went wrong !!','',{
          duration:2100
      })
      }
    );

  }

}

