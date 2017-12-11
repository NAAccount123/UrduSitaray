import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrAddContentComponent } from './sr-add-content.component';

describe('SrAddContentComponent', () => {
  let component: SrAddContentComponent;
  let fixture: ComponentFixture<SrAddContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrAddContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrAddContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
