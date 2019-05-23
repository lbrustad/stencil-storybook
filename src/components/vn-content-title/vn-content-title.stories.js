import { storiesOf } from '@storybook/html';

let btns = {
    'Accordion (prioritetsguide)': `<vn-content-title>Accordion (prioritetsguide)</vn-content-title>`,
    'Bilder': `<vn-content-title>Bilder</vn-content-title>`,   
    'Bilde med caption': `<vn-content-title>Bilde med caption</vn-content-title>`,
    'Core nav states': `<vn-content-title>Core nav states</vn-content-title>`,
    'Footer': `<vn-content-title>Footer</vn-content-title>`,
    'Gråtoner': `<vn-content-title>Gråtoner</vn-content-title>`,
    'Header': `<vn-content-title>Header</vn-content-title>`,
    'Ikoner, knapper & labels': `<vn-content-title>Ikoner</vn-content-title>`,
    'Kjerneinnhold accordion': `<vn-content-title>Kjerneinnhold accordion</vn-content-title>`,
    'Kommentar - infomelding': `<vn-content-title>Kommentar - infomelding</vn-content-title>`,
    'Lenker': `<vn-content-title>Lenker</vn-content-title>`,
    'Liste': `<vn-content-title>Liste</vn-content-title>`,
    'Person': `<vn-content-title>Person</vn-content-title>`,
    'Primær fargepalet': `<vn-content-title>Primær fargepalet</vn-content-title>`,
    'Sitat': `<vn-content-title>Sitat</vn-content-title>`,
    'Sidebar': `<vn-content-title>Sidebar</vn-content-title>`,
    'Sitemap ': `<vn-content-title>Sitemap</vn-content-title>`,
    'Skjema': `<vn-content-title>Skjema</vn-content-title>`,
    'Typografiskala': `<vn-content-title>Typografiskala</vn-content-title>`,
           
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
