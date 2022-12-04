import { Test, TestingModule } from '@nestjs/testing';
import { BypassCloudflareService } from './bypass-cloudflare.service';

describe('BypassCloudflareService', () => {
  let service: BypassCloudflareService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BypassCloudflareService],
    }).compile();

    service = module.get<BypassCloudflareService>(BypassCloudflareService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
