import { storiesOf } from '@storybook/html';

storiesOf('Components/VnContent', module)
    .add(
        'example',
        () => `<vn-content>
      <h1>H1 / Apercu Light</h1>
      <hr />
      <h2>H2 / Apercu Regular</h2>
      <hr />
      <h3>H3 / Apercu Regular</h3>
      <hr />
      <h4>H4 / Apercu Regular</h4>
      <hr />
      <h5>H5 / Apercu Regular</h5>
      <hr />
      <h6>H6 / Apercu Medium</h6>
      <hr />
      <span class="body-en">Body 1 / Apercu regular</span>
      <hr />
      <span class="body-to">Body 2 / Apercu Regular</span>
      <hr />
      <span class="subtitle-en">Subtitle 1 / Apercu Regular</span>
      <hr />
      <span class="subtitle-to">Subtitle 2 / Apercu Medium</span>
      <hr />
      <span class="button">Button / Apercu Medium</span>
      <hr />
      <span class="caption">Caption / Apercu Regular</span>
      <hr />
      <span class="overline">Overline / Apercu Medium</span>
      

    </vn-content>`,
    );