import { Component } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profiles: any[] = [];
  selectedProfile: any = {};
  newProfile: any = {};

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles() {
    this.profileService.getProfiles().subscribe(res => {
      this.profiles = res;
    });
  }

  selectProfile(profile: any) {
    this.selectedProfile = profile;
  }

  addProfile() {
    this.profileService.addProfile(this.newProfile).subscribe(res => {
      this.profiles.push(res);
      this.newProfile = {};
    });
  }


}
