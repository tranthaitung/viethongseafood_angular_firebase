import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PLgComponent } from './p-lg.component';

describe('PLgComponent', () => {
  let component: PLgComponent;
  let fixture: ComponentFixture<PLgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PLgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
