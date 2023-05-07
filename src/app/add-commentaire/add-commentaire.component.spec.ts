import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentaireComponent } from './add-commentaire.component';

describe('AddCommentaireComponent', () => {
  let component: AddCommentaireComponent;
  let fixture: ComponentFixture<AddCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommentaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
