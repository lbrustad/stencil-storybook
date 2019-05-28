import { Component } from '@stencil/core';

@Component({
  tag: 'my-build',
  styleUrl: 'my-build.styl',
})
export class MyBuild {
  render() {
    return (
      <div class="build">
        <slot />
      </div>
    );
  }
}
