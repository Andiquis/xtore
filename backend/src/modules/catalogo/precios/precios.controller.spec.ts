import { Test, TestingModule } from '@nestjs/testing';
import { PreciosController } from './precios.controller';

describe('PreciosController', () => {
  let controller: PreciosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreciosController],
    }).compile();

    controller = module.get<PreciosController>(PreciosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
