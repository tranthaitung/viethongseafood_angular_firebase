import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSmComponent } from './p-sm.component';

describe('PSmComponent', () => {
  let component: PSmComponent;
  let fixture: ComponentFixture<PSmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
