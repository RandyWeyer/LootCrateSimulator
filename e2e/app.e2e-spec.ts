import { LootCrateSimulatorPage } from './app.po';

describe('loot-crate-simulator App', () => {
  let page: LootCrateSimulatorPage;

  beforeEach(() => {
    page = new LootCrateSimulatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
