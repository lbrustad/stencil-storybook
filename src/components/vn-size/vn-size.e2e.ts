import { newE2EPage } from '@stencil/core/testing';

describe('vn-size', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<vn-size></vn-size>');
    const element = await page.find('vn-size');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<vn-size></vn-size>');
    const component = await page.find('vn-size');
    const element = await page.find('vn-size >>> div');
    expect(element.textContent).toEqual(`Hello World`);

    component.setProperty('test', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);
  });
});
