import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecaComponent } from './meca.component';

describe('MecaComponent', () => {
  let component: MecaComponent;
  let fixture: ComponentFixture<MecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
