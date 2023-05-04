import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/FrontOffice/Services/auth.service';
import { User } from 'src/app/Models/user';
import { NgxQRCodeModule, NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';


@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit{
  user!: User[];
  p: number =1;
  count: number =0;
  title = 'UserQR';
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'u';

  constructor(private userService: AuthService,
    private router: Router ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getAllUsers().subscribe(data => {
      this.user = data;
    });
  }

  // fonctionDetails(id: number){
  //   this.router.navigate(['fonction-details', id]);
  // }

  updateUser(id: number){
    this.router.navigate(['update-event', id]);
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe( data => {
      console.log(data);
      this.getUsers();

    })
  }
  enabledUser(id: number){
    this.userService.enableUser(id).subscribe( data => {
      console.log(data);
      this.getUsers();

    })
  }
  disableUser(id: number){
    this.userService.disableUser(id).subscribe( data => {
      console.log(data);
      this.getUsers();

    })
  }
  
}
