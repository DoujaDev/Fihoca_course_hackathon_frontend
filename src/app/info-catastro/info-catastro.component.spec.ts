import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCatastroComponent } from './info-catastro.component';

describe('InfoCatastroComponent', () => {
  let component: InfoCatastroComponent;
  let fixture: ComponentFixture<InfoCatastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCatastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCatastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
