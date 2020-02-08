/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bt-tab',
  templateUrl: './bt-tab.component.html'
})
export class BtTabComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('tabTitle') title: string;
  @Input() active = false;
}
