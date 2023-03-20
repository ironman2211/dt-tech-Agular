import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyboardComponent } from './journeyboard.component';

describe('JourneyboardComponent', () => {
  let component: JourneyboardComponent;
  let fixture: ComponentFixture<JourneyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
