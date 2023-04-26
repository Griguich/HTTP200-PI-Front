import { Component, OnInit } from '@angular/core';
import { Publication } from '../Models/publication';
import { PublicationService } from '../Service/publication.service';
import { Visibilite } from '../Models/visibilite';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  publications: Publication[] = [];
  newPublication: Publication = {
    idPub: 0,
    titrePub: '',
    contenuPub: '',
    image: '',
    vis: Visibilite.publique, 
    dateCreationPub: new Date(),
    likeCount: 0,
    dislikeCount: 0,
    isFavorite: false,
    favoriteDate: new Date(),
    user: null,
    commentaires: [],
    likes: [],
    favoriteUsers: []
  };

  constructor(private publicationService: PublicationService) { }

  ngOnInit(): void {
    this.getPublications();
  }

  getPublications(): void {
    this.publicationService.getAllPublications()
      .subscribe(publications => this.publications = publications);
  }

  getPublicationsByUserId(userId: number): void {
    this.publicationService.getPublicationsByUserId(userId)
      .subscribe(publications => this.publications = publications);
  }

  onAddPublication(formValue: any): void {
    const userId = formValue.user;
    const vis = formValue.vis;
    this.newPublication.vis = vis;
    this.publicationService.addPublication(this.newPublication, userId)
      .subscribe(newPublication => {
        this.publications.push(newPublication);
        this.newPublication = {
          idPub: 0,
          titrePub: '',
          contenuPub: '',
          image: '',
          vis: Visibilite.publique,
          dateCreationPub: new Date(),
          likeCount: 0,
          dislikeCount: 0,
          isFavorite: false,
          favoriteDate: new Date(),
          user: null,
          commentaires: [],
          likes: [],
          favoriteUsers: []
        };
      });
  }
  

  onUpdatePublication(idPub: number, publication: Publication): void {
    this.publicationService.updatePublication(idPub, publication)
      .subscribe(() => {
        const index = this.publications.findIndex(p => p.idPub === idPub);
        this.publications[index] = publication;
      });
  }

  onDeletePublication(idPub: number): void {
    this.publicationService.deletePublication(idPub)
      .subscribe(() => {
        this.publications = this.publications.filter(p => p.idPub !== idPub);
      });
  }
}
