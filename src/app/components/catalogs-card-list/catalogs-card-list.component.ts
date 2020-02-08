import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Catalog } from '../../_model/catalog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogs-card-list',
  templateUrl: './catalogs-card-list.component.html'
})
export class CatalogsCardListComponent implements OnInit {
  @Input()
  catalogs: Catalog[];

  constructor(
    // private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  catalogDetails(catalog: Catalog) {
    const myJSON = JSON.stringify(catalog);
    localStorage.setItem('catalog', myJSON);
    this.router.navigate(['/details']);
  }
}
