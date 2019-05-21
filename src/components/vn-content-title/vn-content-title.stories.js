import { storiesOf } from '@storybook/html';

let btns = {
    'Primær fargepalet': `<vn-content-title title="Primær fargepalet"></vn-content-title>`,
    'Typografiskala': `<vn-content-title title="Typografiskala"></vn-content-title>`,
    'Gråtoner': `<vn-content-title title="Gråtoner"></vn-content-title>`,
    'Lenker': `<vn-content-title title="Lenker"></vn-content-title>`,
    'Skjema': `<vn-content-title title="Skjema"></vn-content-title>`,
    'Liste': `<vn-content-title title="Liste"></vn-content-title>`,
    'Sitat': `<vn-content-title title="Sitat"></vn-content-title>`,
    'Kommentar - infomelding': `<vn-content-title title="Kommentar - infomelding"></vn-content-title>`,
    'Bilde med caption': `<vn-content-title title="Bilde med caption"></vn-content-title>`,
    'Accordion (prioritetsguide)': `<vn-content-title title="Accordion (prioritetsguide"></vn-content-title>`,
    'Sitemap ': `<vn-content-title title="Sitemap"></vn-content-title>`,
    'Kjerneinnhold accordion': `<vn-content-title title="Kjerneinnhold accordion"></vn-content-title>`,
    'Header': `<vn-content-title title="Header"></vn-content-title>`,
    'Footer': `<vn-content-title title="Footer"></vn-content-title>`,
    'Sidebar': `<vn-content-title title="Sidebar"></vn-content-title>`,
    'Person': `<vn-content-title title="Person"></vn-content-title>`,
    'Ikoner, knapper & labels': `<vn-content-title title="Ikoner"></vn-content-title>`,
    'Bilder': `<vn-content-title title="Bilder"></vn-content-title>`       
};

let arr = [];
for (let key in btns) {
    arr.push(btns[key]);
}

const stories = storiesOf('Components/VnContentTitle', module)
    .add(
        'All Items',
        () => arr.join('<br />')
    );
for (let key in btns) {
    stories.add(key, () => btns[key]);
}
