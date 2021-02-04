import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenAcessoComponent } from './token-acesso.component';

describe('TokenAcessoComponent', () => {
  let component: TokenAcessoComponent;
  let fixture: ComponentFixture<TokenAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenAcessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
