import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GetGpsComponent} from './get-gps.component';

describe('GetGpsComponent', () => {
  let component: GetGpsComponent;
  let fixture: ComponentFixture<GetGpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GetGpsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetGpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
