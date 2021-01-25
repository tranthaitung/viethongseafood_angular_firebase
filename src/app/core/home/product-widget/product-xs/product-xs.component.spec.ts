import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductXsComponent } from './product-xs.component';

describe('ProductXsComponent', () => {
  let component: ProductXsComponent;
  let fixture: ComponentFixture<ProductXsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductXsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
