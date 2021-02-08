import { TestBed } from '@angular/core/testing';

import { CadastroIdentificacaoService } from './cadastro-identificacao.service';

describe('CadastroIdentificacaoService', () => {
  let service: CadastroIdentificacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroIdentificacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
