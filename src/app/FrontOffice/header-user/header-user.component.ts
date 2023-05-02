import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Services/storage.service';
import { AuthService } from '../Services/auth.service';
import { EventBusService } from '../_shared/event-bus.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent{

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
  ) {}

  
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
