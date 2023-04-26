import { Visibilite } from "./visibilite";
export class Publication {
    idPub!: number;
    contenuPub?: string;
    titrePub?: string;
    vis?: Visibilite;
    dateCreationPub?: Date;
    image?: string;
    likeCount?: number;
    dislikeCount?: number;
    isFavorite?: boolean;
    favoriteDate?: Date;
    user?: any;
    commentaires?: any[];
    likes?: any[];
    favoriteUsers?: any[];
  }
  