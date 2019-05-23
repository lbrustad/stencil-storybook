import { storiesOf } from '@storybook/html';
//import ButtonReadme from './readme.md';

let btns = {
    'Large button': '<vn-button box-size="large">Vis formål</vn-button>',
    'Small button': '<vn-button color="p4" box-size="large">Sitemap</vn-button>'
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/Ikoner, knapper & labels/VnButton', module)
    .add(
        'All Items',
        () => arr.join('<br /><br /><br />')
    );
for (let key in btns) {
    stories.add(key, () => btns[key]);
}