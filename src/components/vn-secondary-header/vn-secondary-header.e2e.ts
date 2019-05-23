import { newE2EPage } from '@stencil/core/testing';

describe('vn-secondary-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<vn-secondary-header></vn-secondary-header>');
    const element = await page.find('vn-secondary-header');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<vn-secondary-header></vn-secondary-header>');
    const component = await page.find('vn-secondary-header');
    const element = await page.find('vn-secondary-header >>> div');
    expect(element.textContent).toEqual(`Hello World`);

    component.setProperty('test', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);
  });
});
