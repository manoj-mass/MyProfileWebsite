import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTechnologyComponent } from './choose-technology.component';

describe('ChooseTechnologyComponent', () => {
  let component: ChooseTechnologyComponent;
  let fixture: ComponentFixture<ChooseTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
