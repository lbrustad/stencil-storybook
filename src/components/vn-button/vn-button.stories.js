import { storiesOf } from '@storybook/html';

storiesOf('Components/VnButton', module)
    .add(
        'Default',
        () => `<vn-button></vn-button>`
    )
    .add(
        'With Input',
        () => `<vn-button box-size="3">Lasse</vn-button> 
              <vn-button color="red">Mario</vn-button> 
              <vn-button>Thor</vn-button>`,
    )
    .add(
        'Random Page',
        () => `<vn-button value="Random greier"></vn-button>`
    );
