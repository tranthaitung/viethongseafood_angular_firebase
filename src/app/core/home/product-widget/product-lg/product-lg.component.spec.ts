import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLgComponent } from './product-lg.component';

describe('ProductLgComponent', () => {
  let component: ProductLgComponent;
  let fixture: ComponentFixture<ProductLgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
