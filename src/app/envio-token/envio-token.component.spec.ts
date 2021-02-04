import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioTokenComponent } from './envio-token.component';

describe('EnvioTokenComponent', () => {
  let component: EnvioTokenComponent;
  let fixture: ComponentFixture<EnvioTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
