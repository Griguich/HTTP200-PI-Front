import { Component } from '@angular/core';
import { Profile } from '../Models/Profile';
import { ProfileService } from '../Services/profile.service';
import { Feedback } from '../Models/Feedback';
import { FeedbackService } from '../Services/feedback.service';

@Component({
  selector: 'app-profile-front',
  templateUrl: './profile-front.component.html',
  styleUrls: ['./profile-front.component.css']
})
export class ProfileFrontComponent {
  profiles: Profile[] = [];
  Feedbacks : Feedback[] = [];
  selectedProfile: any = {};
  selectedFeedback: any = {};
  newProfile: any = {}; 
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue!: number;
  feedback : Feedback[] = [];

  constructor(private profileService: ProfileService,private FeedbackService: FeedbackService) { }

  ngOnInit() {
    this.profileService.getProfiles().subscribe(profiles => {
      this.profiles = profiles;
    });
  }  

  getProfiles() {
    this.profileService.getProfiles().subscribe(res => {
      this.profiles = res;
    });
  }

  selectProfile(profile: any) {
    this.selectedProfile = profile;
  }

  updateProfile() {
    this.profileService.updateProfile(this.selectedProfile).subscribe(res => {
      this.selectedProfile = {};
    });
  }

  deleteProfile(id: number) {
    this.profileService.deleteProfile(id).subscribe(res => {
      this.profiles = this.profiles.filter(p => p.id !== id);
    });
  } 

  
deleteFeedback(id: number) {
  this.profileService.deleteFeedback(id).subscribe(res => {
    this.Feedbacks = this.Feedbacks.filter(p => p.id !== id);
    window.location.reload();
  });
} 
selectFeedback(feedback: any) {
  this.selectFeedback = feedback;
}
countStar(star: number,feedback:Feedback,profile: Profile) {
  feedback.rating = star;
  feedback.profile= this.selectedProfile;
  console.log('Value of feedback1', feedback); 
  console.log('Value of Profileselected',profile.id);
  console.log('Value of star', star);  
  feedback.profile.id = profile.id;
  this.profileService.updateFeedback(feedback).subscribe(test => {
    this.selectedFeedback = {};
  });
} 




}
