import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailVideoComponent } from './detail-video.component';

describe('DetailVideoComponent', () => {
  let component: DetailVideoComponent;
  let fixture: ComponentFixture<DetailVideoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
