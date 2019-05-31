import { storiesOf } from '@storybook/html';

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
    .add(
        'All Items',
        () => arr.join('<br />')
    );
for (let key in btns) {
    stories.add(key, () => btns[key]);
}