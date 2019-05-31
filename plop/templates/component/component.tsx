import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'template-component',
  styleUrl: 'template-component.styl',
})
export class TemplateComponent {
  @Prop() props: string;

  render() {
    return (
      <div class="template-component">
        <slot />
      </div>
    );
  }
}
