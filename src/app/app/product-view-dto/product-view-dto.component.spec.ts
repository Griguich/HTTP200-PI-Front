import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewDtoComponent } from './product-view-dto.component';

describe('ProductViewDtoComponent', () => {
  let component: ProductViewDtoComponent;
  let fixture: ComponentFixture<ProductViewDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductViewDtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductViewDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
