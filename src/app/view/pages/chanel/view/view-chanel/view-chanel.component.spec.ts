import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChanelComponent } from './view-chanel.component';

describe('ViewChanelComponent', () => {
  let component: ViewChanelComponent;
  let fixture: ComponentFixture<ViewChanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
