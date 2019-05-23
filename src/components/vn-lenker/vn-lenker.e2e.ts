import { newE2EPage } from '@stencil/core/testing';

describe('vn-lenker', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<vn-lenker></vn-lenker>');
    const element = await page.find('vn-lenker');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<vn-lenker></vn-lenker>');
    const component = await page.find('vn-lenker');
    const element = await page.find('vn-lenker >>> div');
    expect(element.textContent).toEqual(`Hello World`);

    component.setProperty('test', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);
  });
});
