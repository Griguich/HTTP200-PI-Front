import { Component } from '@angular/core';
import { Publication } from '../Models/publication';
import { PublicationService } from '../Service/publication.service';
import { Visibilite } from '../Models/visibilite';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent {

  publications: Publication[] = [];
  newPublication: any = {};

  constructor(private publicationService: PublicationService) { }



  onAddPublication(publication: Publication): void {
    const userId = 1; // replace with the actual user ID
    publication.dateCreationPub = new Date(); // set the date to the current date
    publication.dislikeCount=0;
    publication.likeCount=0;
    publication.isFavorite=false;
    
    this.publicationService.addPublication(publication, userId)
      .subscribe(newPublication => {
        this.newPublication = new Publication();
      });
  }  

  
  
 
  
}
