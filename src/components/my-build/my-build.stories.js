import { storiesOf } from '@storybook/html';
import Readme from './readme.md';

const params = {
    readme: {
        content: Readme,
        sidebar: Readme
    }
}

storiesOf('Components/MyBuild', module)
    .addParameters(params)

.add('Test build', () => `
  <my-build>
    <vn-grid nums="[2, 3, 5]">

      <vn-content class="start-1 end-12-span">
        <vn-header size="3">Dette er en overskrift</vn-header>
      </vn-content>

      <vn-content class="start-4 end-13 line-2">
        <p class="body-en">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </vn-content>

      <vn-content class="start-1 end-4-span">
        <vn-button color="p4" box-size="large">
          <h4>start 1</h4>
        </vn-button>
        <br />
        <vn-button color="p4" box-size="large">
          <h4>start 2</h4>
        </vn-button>
      </vn-content>

      <vn-content class="start-1 end-12-span">
        <vn-header size="5">Dette er en footer</vn-header>
      </vn-content>
    </vn-grid>
  </my-build>
`);