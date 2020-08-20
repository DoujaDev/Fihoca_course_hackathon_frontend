import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaEfectoComponent } from './fecha-efecto.component';

describe('FechaEfectoComponent', () => {
  let component: FechaEfectoComponent;
  let fixture: ComponentFixture<FechaEfectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaEfectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaEfectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
