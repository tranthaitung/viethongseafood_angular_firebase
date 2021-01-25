import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSmComponent } from './product-sm.component';

describe('ProductSmComponent', () => {
  let component: ProductSmComponent;
  let fixture: ComponentFixture<ProductSmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
