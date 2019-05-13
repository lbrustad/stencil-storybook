import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'test-button',
  styleUrl: 'test-button.css',
  shadow: true,
})
export class TestButton {
  /**
   * A test prop
   */
  @Prop() test: string = 'Hello World';

  render() {
    return <div class="test-button">{this.test}</div>;
  }
}
