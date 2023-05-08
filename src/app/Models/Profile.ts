import { Feedback } from "./Feedback";
import { User } from "./user";

export class Profile {
  id!: number;
  username!: string;
  sexe!: string;
  categorie!: Categorie;
  isVerified: boolean = false;
  photoprofile!: string;
  feedbackList: Feedback[] = [];
  user: User = new User;
}

export enum Categorie {
    Plombier = "plombier",
    Electricien = "electricien",
    Jardinier = "jardinier"
  }
