import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosContratacionComponent } from './datos-contratacion.component';

describe('DatosContratacionComponent', () => {
  let component: DatosContratacionComponent;
  let fixture: ComponentFixture<DatosContratacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosContratacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosContratacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
