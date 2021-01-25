import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAquacultureComponent } from './home-aquaculture.component';

describe('HomeAquacultureComponent', () => {
  let component: HomeAquacultureComponent;
  let fixture: ComponentFixture<HomeAquacultureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAquacultureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAquacultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
