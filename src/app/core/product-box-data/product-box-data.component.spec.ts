import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBoxDataComponent } from './product-box-data.component';

describe('ProductBoxDataComponent', () => {
  let component: ProductBoxDataComponent;
  let fixture: ComponentFixture<ProductBoxDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBoxDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBoxDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
