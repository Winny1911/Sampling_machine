import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncerramentoComponent } from './encerramento.component';

describe('EncerramentoComponent', () => {
  let component: EncerramentoComponent;
  let fixture: ComponentFixture<EncerramentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncerramentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncerramentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
