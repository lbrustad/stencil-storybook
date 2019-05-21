import { newE2EPage } from '@stencil/core/testing';

describe('vn-content-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<vn-content-title></vn-content-title>');
    const element = await page.find('vn-content-title');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<vn-content-title></vn-content-title>');
    const component = await page.find('vn-content-title');
    const element = await page.find('vn-content-title >>> div');
    expect(element.textContent).toEqual(`Hello World`);

    component.setProperty('test', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);
  });
});
