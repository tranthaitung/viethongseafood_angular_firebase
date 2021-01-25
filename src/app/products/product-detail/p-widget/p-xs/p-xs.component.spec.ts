import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PXsComponent } from './p-xs.component';

describe('PXsComponent', () => {
  let component: PXsComponent;
  let fixture: ComponentFixture<PXsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PXsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
