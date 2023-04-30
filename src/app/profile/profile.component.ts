import { Component } from '@angular/core';
import { ProfileService } from '../Services/profile.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profiles: any[] = [];
  selectedProfile: any = {};
  newProfile: any = {};
  selectedFile!: File;
  photoprofile!: string;
  

  constructor(private profileService: ProfileService,private http: HttpClient) { }

 onFileChanged(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  if (inputElement.files && inputElement.files.length > 0) {
    this.selectedFile = inputElement.files[0];
    this.newProfile.photoprofile = "/assets/images/"+this.selectedFile.name;
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    console.log(this.selectedFile.name);
    this.http.post<any>('http://localhost:8080/api/uploadImage', formData).subscribe(
      (res) => {
        this.photoprofile = res.imagePath;
        console.log("res path",this.photoprofile);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

  
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
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    console.log(this.selectedFile.name);
    this.newProfile.photoprofile = "/assets/images/"+this.selectedFile.name;
    this.http.post<any>('http://localhost:8080/api/uploadImage', formData).subscribe(
      (res) => {
        this.photoprofile = res.imagePath;
        console.log("res path",this.photoprofile);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  
}
