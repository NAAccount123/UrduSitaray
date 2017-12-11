import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrContentComponent } from './sr-content.component';

describe('SrContentComponent', () => {
  let component: SrContentComponent;
  let fixture: ComponentFixture<SrContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
