import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrArticleComponent } from './sr-article.component';

describe('SrArticleComponent', () => {
  let component: SrArticleComponent;
  let fixture: ComponentFixture<SrArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
