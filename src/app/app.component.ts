import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  object: Object = { foo :  'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  exibition: string;

  constructor() {
    this.formatJsonToHtml(this.object);
    console.log(`"foo": "bar"`.split(': ')[0]);
    console.log(`"nested" : {"`.split(': ')[1]);
  }

  private formatJsonToHtml(obj: Object): string {

    return this.exibition = JSON.stringify(obj, null , 2)
      .split('\n')
      .map((item, i) => `${i + 1} ${ this.styleJsonToHtml(item)} \n`)
      .join('\n');
  }

  private styleJsonToHtml(item: string) {

    const itemKey = `<span class="json__key">${item.split(': ')[0] }</span>`;
    const itemValue = `<span class="json__value">${item.split(': ')[1] }</span>`;

    return item.replace(/("{1})(.)+/, `${itemKey} : ${itemValue}`);

  }

}
