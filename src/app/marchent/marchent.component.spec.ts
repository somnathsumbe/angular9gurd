import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchentComponent } from './marchent.component';

describe('MarchentComponent', () => {
  let component: MarchentComponent;
  let fixture: ComponentFixture<MarchentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
