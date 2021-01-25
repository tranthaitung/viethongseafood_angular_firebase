import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PWidgetComponent } from './p-widget.component';

describe('PWidgetComponent', () => {
  let component: PWidgetComponent;
  let fixture: ComponentFixture<PWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
