import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ChromeService } from './chrome.service';

@Module({
  providers: [ChromeService],
})
export class ChromeModule implements OnApplicationBootstrap {
  constructor(private chromeService: ChromeService) {}
  onApplicationBootstrap() {
    this.chromeService.openBrowser();
  }
}
