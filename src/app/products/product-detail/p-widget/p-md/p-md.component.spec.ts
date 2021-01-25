import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PMdComponent } from './p-md.component';

describe('PMdComponent', () => {
  let component: PMdComponent;
  let fixture: ComponentFixture<PMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PMdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
