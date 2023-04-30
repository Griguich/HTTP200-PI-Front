import { Component } from '@angular/core';
import { Profile } from '../Models/Profile';
import { ProfileService } from '../Services/profile.service';
import { Feedback } from '../Models/Feedback';
import { FeedbackService } from '../Services/feedback.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
declare var $: any;
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
  analysisImage !: string;
  selectedFile!: File;
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
    this.FeedbackService.getFeedbacksByProfileUsername(profile.username).subscribe(feedbacks => {
      this.selectedProfile.feedbackList = feedbacks;
    }); 
    console.log(this.selectedProfile);
  } 


/*
selectProfile(profile: any) {
  let feedbackList = [];
  for (let feedback of profile.feedbackList) {
    feedbackList.push({message: feedback.message, rating: feedback.rating});
  }

  this.selectedProfile = {
    id: profile.id,
    username: profile.username,
    sexe: profile.sexe,
    categorie: profile.categorie,
    photoprofile: profile.photoprofile,
    feedbackList: feedbackList
  };

  console.log(this.selectedProfile);
}
*/

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
countStar(star: number,feedback:Feedback) {
  feedback.rating = star;
  feedback.profile= this.selectedProfile;
  console.log('Value of feedback1', feedback); 
  console.log('Value of Profileselected');
  console.log('Value of star', star);  
  this.FeedbackService.updateFeedback(feedback).subscribe(test => {
    this.selectedFeedback = {};
  });
}
feedbackAnalysis(username:string){
  this.FeedbackService.FeedbackAnalysis(username).subscribe((image: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      if (reader.result !== null) {
        this.analysisImage = reader.result as string;
      } 
      console.log(this.analysisImage);
    };
  }); 
}





}
