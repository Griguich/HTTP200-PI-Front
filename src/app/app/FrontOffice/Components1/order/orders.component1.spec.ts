import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Order1Component } from './orders.component1';


describe('OrdersComponent', () => {
  let component: Order1Component;
  let fixture: ComponentFixture<Order1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Order1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Order1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
