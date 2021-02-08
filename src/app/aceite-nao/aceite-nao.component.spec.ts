import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceiteNaoComponent } from './aceite-nao.component';

describe('AceiteNaoComponent', () => {
  let component: AceiteNaoComponent;
  let fixture: ComponentFixture<AceiteNaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceiteNaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceiteNaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
