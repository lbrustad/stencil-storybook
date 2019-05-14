import { storiesOf } from '@storybook/html';

storiesOf('Components/VnButton', module)
    .add(
        'Default',
        () => `<vn-button></vn-button>`
    )
    .add(
        'With Input',
        () => `<vn-button value="Lasse" color="grey"></vn-button>
              <vn-button value="Thor" color="red"></vn-button>`
    )
    .add(
        'Random Page',
        () => `<vn-button value="Random greier"></vn-button>`
    );