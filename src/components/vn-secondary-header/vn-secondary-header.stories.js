import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

let btns = {
    'Elementer': `<vn-secondary-header>Elementer</vn-secondary-header>`,
    'Komponenter': `<vn-secondary-header>Komponenter</vn-secondary-header>`,
    'Seksjoner ': `<vn-secondary-header>Seksjoner</vn-secondary-header>`
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/VnSecondaryHeader', module)
    .addParameters(params)
    .add(
        'All Items',
        () => arr.join('<br />')
    );
for (let key in btns) {
    stories.add(key, () => btns[key]);
}