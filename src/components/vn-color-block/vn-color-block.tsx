import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-color-block',
  styleUrl: 'vn-color-block.styl',
  shadow: true,
})
export class VnColorBlock {

  @Prop() type: string = 'p'; // 'p' or 'g'
  @Prop() bg: string = '1'; // p -> 1-3 or g -> 1-7
  @Prop() p: string = '0'; // 0 | 7 | 15 | 30*(1+)
  @Prop() pt: string = '0'; // same as 'p', but prefered and from top
  @Prop() pl: string = '0'; // same as 'p', but prefered and from left

  validatePadding() { // return default (7) if invalid
    let p: number = parseInt(this.p);
    //
    return p;
  }

  render() {
    let classes: string[] = ['blc'];
    //let bg: number = parseInt(this.bg);
    let p: number = this.validatePadding();
    return (
      <div
        class={classes.join(' ')}
      >
        <slot />{p}
      </div>
    );
  }
}
