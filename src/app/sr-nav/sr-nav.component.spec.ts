import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrNavComponent } from './sr-nav.component';

describe('SrNavComponent', () => {
  let component: SrNavComponent;
  let fixture: ComponentFixture<SrNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
