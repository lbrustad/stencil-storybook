import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-build',
  styleUrl: 'my-build.styl',
})
export class MyBuild {
  /**
   * A test prop
   */
  @Prop() test: string = 'Hello World';

  render() {
    return (
      <div class="build">
        <slot />
      </div>
    );
  }
}
