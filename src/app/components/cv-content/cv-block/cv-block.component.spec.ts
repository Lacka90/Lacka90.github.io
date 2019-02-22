import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvBlockComponent } from './cv-block.component';

describe('CvBlockComponent', () => {
  let component: CvBlockComponent;
  let fixture: ComponentFixture<CvBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
