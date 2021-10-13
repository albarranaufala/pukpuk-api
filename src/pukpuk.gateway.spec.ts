import { Test, TestingModule } from '@nestjs/testing';
import { PukpukGateway } from './pukpuk.gateway';

describe('PukpukGateway', () => {
  let gateway: PukpukGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PukpukGateway],
    }).compile();

    gateway = module.get<PukpukGateway>(PukpukGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
