import { Test, TestingModule } from '@nestjs/testing';
import { VscodeService } from './vscode.service';

describe('VscodeService', () => {
  let service: VscodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VscodeService],
    }).compile();

    service = module.get<VscodeService>(VscodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
