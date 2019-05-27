import { storiesOf } from '@storybook/html';

storiesOf('Components/MyBuild', module)

.add('Test build', () => `
  <my-build>
    <vn-grid>

      <vn-content class="header">
        <vn-header size="3">Dette er en overskrift</vn-header>
      </vn-content>

      <vn-content class="content">
        <p class="body-en">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </vn-content>

      <vn-content class="menu">
        <vn-button color="p4" box-size="large">
          <h4>start</h4>
        </vn-button>
        <br />
        <vn-button color="p4" box-size="large">
          <h4>start2</h4>
        </vn-button>
        <br />
        <vn-button color="p4" box-size="large">
          <h4>start3</h4>
        </vn-button>
        <br />
        <vn-button color="p4" box-size="large">
          <h4>start4</h4>
        </vn-button>
      </vn-content>

      <vn-content class="footer">
        <vn-header size="5">Dette er en footer</vn-header>
      </vn-content>
    </vn-grid>
  </my-build>
`);