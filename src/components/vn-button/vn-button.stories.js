import { storiesOf } from '@storybook/html';

let btns = {
  'Input 1': '<vn-button box-size="2">Test</vn-button>',
  'Input 2': '<vn-button box-size="2">Test</vn-button>',
  'Input 3': '<vn-button box-size="2">Test</vn-button>'
};

storiesOf('Components/VnButton', module)
    .add(
        'Default',
        () => `<vn-button></vn-button>`
    )
    .add(
        'Input 1',
        () => `<vn-button box-size="3">Lasse</vn-button>`
              
    )
    .add(
      'input 2',
      () => `<vn-button box-size="3">Lasse</vn-button> 
            <vn-button>Mario</vn-button> 
            <vn-button>Thor</vn-button>`,
    )
    .add(
      'Input 3',
      () => `<vn-button box-size="3">Lasse</vn-button> 
            <vn-button>Mario</vn-button> 
            <vn-button>Thor</vn-button>`,
  )
    .add(
        'Random Page',
        () => `<vn-button value="Random greier"></vn-button>`
    );
