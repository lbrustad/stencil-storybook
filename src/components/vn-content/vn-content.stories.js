import { storiesOf } from '@storybook/html';

storiesOf('Components/VnContent', module)
  .add(
    'example',
    () => `<vn-content>
      <h1>H1 / Apercu Light</h1>
      <h2>H2 / Apercu Regular</h2>
      <h3>H3 / Apercu Regular</h3>
      <h4>H4 / Apercu Regular</h4>
      <h5>H5 / Apercu Regular</h5>
      <h6>H6 / Apercu Medium</h6>
    </vn-content>`,
  );
