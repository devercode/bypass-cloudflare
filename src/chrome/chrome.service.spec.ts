import { Test, TestingModule } from '@nestjs/testing';
import { ChromeService } from './chrome.service';

describe('ChromeService', () => {
  let service: ChromeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChromeService],
    }).compile();

    service = module.get<ChromeService>(ChromeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
