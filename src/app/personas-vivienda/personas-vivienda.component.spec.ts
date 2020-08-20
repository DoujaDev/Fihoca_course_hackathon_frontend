import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasViviendaComponent } from './personas-vivienda.component';

describe('PersonasViviendaComponent', () => {
  let component: PersonasViviendaComponent;
  let fixture: ComponentFixture<PersonasViviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasViviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
