import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChromeModule } from './chrome/chrome.module';

@Module({
  imports: [ChromeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
