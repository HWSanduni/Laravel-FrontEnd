import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsisodeComponent } from './epsisode.component';

describe('EpsisodeComponent', () => {
  let component: EpsisodeComponent;
  let fixture: ComponentFixture<EpsisodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpsisodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpsisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
