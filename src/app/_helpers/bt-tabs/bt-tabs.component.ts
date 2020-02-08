/**
 * The main component that renders single TabComponent
 * instances.
 */

import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';

import { BtTabComponent } from './bt-tab/bt-tab.component';

@Component({
  selector: 'app-bt-tabs',
  templateUrl: './bt-tabs.component.html'
})
export class BtTabsComponent implements AfterContentInit {
  @ContentChildren(BtTabComponent) tabs: QueryList<BtTabComponent>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: BtTabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(thisTab => (thisTab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
