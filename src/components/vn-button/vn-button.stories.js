import { storiesOf } from '@storybook/html';

let btns = {
    'Input 1': '<vn-button box-size="2">Mario</vn-button>',
    'Input 2': '<vn-button box-size="2">Lasse</vn-button>',
    'Input 3': '<vn-button box-size="2">Thor Arne</vn-button>'
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/VnButton', module)
    .add(
        'Default',
        () => arr.join(' ')
    );
for (let key in btns) {
    stories.add(key, () => btns[key]);
}