import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-checkbox',
  styleUrl: 'vn-checkbox.styl',
})
export class VnCheckbox {
  @Prop() props: string;

  render() {
    return (
      <div class="vn-checkbox">
        <slot />
      </div>
    );
  }
}
