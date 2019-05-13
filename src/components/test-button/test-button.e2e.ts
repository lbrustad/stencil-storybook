import { newE2EPage } from '@stencil/core/testing';

describe('test-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<test-button></test-button>');
    const element = await page.find('test-button');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<test-button></test-button>');
    const component = await page.find('test-button');
    const element = await page.find('test-button >>> div');
    expect(element.textContent).toEqual(`Hello World`);

    component.setProperty('test', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);
  });
});
