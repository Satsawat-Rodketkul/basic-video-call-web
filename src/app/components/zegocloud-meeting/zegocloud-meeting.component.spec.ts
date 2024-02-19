import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZegocloudMeetingComponent } from './zegocloud-meeting.component';

describe('ZegocloudMeetingComponent', () => {
  let component: ZegocloudMeetingComponent;
  let fixture: ComponentFixture<ZegocloudMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZegocloudMeetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZegocloudMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
