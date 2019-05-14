import { newE2EPage } from '@stencil/core/testing';

describe('vn-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<vn-button></vn-button>');
    const element = await page.find('vn-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<vn-button></vn-button>');
    const component = await page.find('vn-button');
    const element = await page.find('vn-button >>> div');
    expect(element.textContent).toEqual(`Hello World`);

    component.setProperty('test', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);
  });
});
