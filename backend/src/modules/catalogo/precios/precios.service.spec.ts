import { Test, TestingModule } from '@nestjs/testing';
import { PreciosService } from './precios.service';

describe('PreciosService', () => {
  let service: PreciosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreciosService],
    }).compile();

    service = module.get<PreciosService>(PreciosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
