import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { executablePath } from 'puppeteer';

puppeteer.use(StealthPlugin());
@Injectable()
export class ChromeService {
  async openBrowser() {
    const browser = await puppeteer.launch({
      executablePath: executablePath(),
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto('https://bot.sannysoft.com');
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'testresult.png', fullPage: true });
    await browser.close();
  }
}
