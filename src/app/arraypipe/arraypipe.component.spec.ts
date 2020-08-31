import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraypipeComponent } from './arraypipe.component';

describe('ArraypipeComponent', () => {
  let component: ArraypipeComponent;
  let fixture: ComponentFixture<ArraypipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraypipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraypipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
