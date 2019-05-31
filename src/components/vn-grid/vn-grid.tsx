import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-grid',
  styleUrl: 'vn-grid.styl',
})
export class VnGrid {
  @Prop() start: string;
  @Prop() end: string;
  @Prop() span: string;

  /* "1 2 3"/"1,2,3"/"1 , 2,3" => number[1, 2, 3] */
  private getNumberArray(from: string = "") {
    if (from.length <= 1) return [];
    const array: number[] = [];
    for (const val of from.replace(/[^\d,\s]+/g, '').split(/\s*,\s*|\s+/)) {
      console.log(val, parseInt(val));
      const num = parseInt(val);
      array.push(num);
    }
    return array;
  }

  private checkTrueOrFalse(str: string) {
    return str === 'true';
  }

  render() {
    const start: number[] = this.getNumberArray(this.start);
    const end: number[] = this.getNumberArray(this.end);
    const span: boolean = this.checkTrueOrFalse(this.span);
    return (
      <div
      class={
        'grid start-'
      }
      vn-starts={
        's-'+start.join(' s-')
      }
      vn-ends={
        's-'+end.join(' s-')
      }
      vn-span={
        span
      }>
        <slot />
      </div>
    );
  }
}
