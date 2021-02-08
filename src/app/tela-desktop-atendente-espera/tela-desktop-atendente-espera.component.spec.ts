import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDesktopAtendenteEsperaComponent } from './tela-desktop-atendente-espera.component';

describe('TelaDesktopAtendenteEsperaComponent', () => {
  let component: TelaDesktopAtendenteEsperaComponent;
  let fixture: ComponentFixture<TelaDesktopAtendenteEsperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaDesktopAtendenteEsperaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDesktopAtendenteEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
