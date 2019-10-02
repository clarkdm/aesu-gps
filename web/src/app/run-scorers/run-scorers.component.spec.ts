import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RunScorersComponent} from './run-scorers.component';

describe('RunScorersComponent', () => {
  let component: RunScorersComponent;
  let fixture: ComponentFixture<RunScorersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RunScorersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunScorersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
