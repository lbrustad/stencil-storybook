import { storiesOf } from '@storybook/html';

storiesOf('Components/VnContent', module)
    .add(
        'example',
        () => `<vn-content>
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
      <h1>H1 / Apercu Light</h1>
      <h2>H2 / Apercu Regular</h2>
      <h3>H3 / Apercu Regular</h3>
      <h4>H4 / Apercu Regular</h4>
      <h5>H5 / Apercu Regular</h5>
      <h6>H6 / Apercu Medium</h6>
    </vn-content>`,
    );