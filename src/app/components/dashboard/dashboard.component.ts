import { Component, OnInit } from '@angular/core';

import { noop, Observable } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';
import { createHttpObservable } from '../../_common/util';
import { Catalog } from '../../_model/catalog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  catalogs33$: Observable<Catalog[]>;
  catalogs39$: Observable<Catalog[]>;
  catalogs79$: Observable<Catalog[]>;
  catalogs96$: Observable<Catalog[]>;
  catalogs97$: Observable<Catalog[]>;
  catalogs145$: Observable<Catalog[]>;
  catalogs2393$: Observable<Catalog[]>;
  catalogs445$: Observable<Catalog[]>;
  catalogs463$: Observable<Catalog[]>;
  catalogs687$: Observable<Catalog[]>;
  catalogs4000$: Observable<Catalog[]>;
  catalogs9900$: Observable<Catalog[]>;
  catalogs40001$: Observable<Catalog[]>;
  catalogs47696$: Observable<Catalog[]>;

  constructor() {}

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    // http://app.sectorcatalog.be/SectorCatalog/feed/digestedcatalogItems?SecureGuid=D4114B06-2492-433B-A4E1-9F89017F6D89&Language%5B%5D=NL&CompanyCode%5B%5D=79&CompanyCode%5B%5D=97&CompanyCode%5B%5D=145&CompanyCode%5B%5D=487&CompanyCode%5B%5D=39&CompanyCode%5B%5D=96&CompanyCode%5B%5D=9900&CompanyCode%5B%5D=687&CompanyCode%5B%5D=0739&CompanyCode%5B%5D=463&CompanyCode%5B%5D=1401&CompanyCode%5B%5D=40001&CompanyCode%5B%5D=359&CompanyCode%5B%5D=58

    const sectorCatalogUrl =
      'https://app.sectorcatalog.be/SectorCatalog/feed/digestedcatalogItems?SecureGuid=D4114B06-2492-433B-A4E1-9F89017F6D89';

    const http$ = createHttpObservable(sectorCatalogUrl);
    // only for checking model selected by broker
    http$.subscribe(
      catalogs => console.log(catalogs),
      () => {},
      () => console.log('completed')
    );

    const allcatalogs$: Observable<Catalog[]> = http$.pipe(
      tap(() => console.log('HTTP request executed')),
      map(res => Object.values(res['Items'])),
      shareReplay()
    );

    this.catalogs33$ = allcatalogs$.pipe(
      map(catalogs =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter(catalog => catalog.CompanyCode === '33')
          .filter(catalog => catalog.Language === 'NL')
      )
    );

    this.catalogs39$ = allcatalogs$.pipe(
      map(catalogs =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter(catalog => catalog.CompanyCode === '39')
          .filter(catalog => catalog.Language === 'NL')
      )
    );

    this.catalogs79$ = allcatalogs$.pipe(
      map(catalogs =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter(catalog => catalog.CompanyCode === '79')
          .filter(catalog => catalog.Language === 'NL')
      )
    );

    this.catalogs96$ = allcatalogs$.pipe(
      map(catalogs =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter(catalog => catalog.CompanyCode === '96')
          .filter(catalog => catalog.Language === 'NL')
      )
    );

    this.catalogs97$ = allcatalogs$.pipe(
      map(catalogs =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter(catalog => catalog.CompanyCode === '97')
          .filter(catalog => catalog.Language === 'NL')
      )
    );

    this.catalogs145$ = allcatalogs$.pipe(
      map(catalogs =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter(catalog => catalog.CompanyCode === '145')
          .filter(catalog => catalog.Language === 'NL')
      )
    );

    this.catalogs445$ = allcatalogs$.pipe(
      map(catalogs =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter(catalog => catalog.CompanyCode === '445')
          .filter(catalog => catalog.Language === 'NL')
      )
    );

    this.catalogs463$ = allcatalogs$.pipe(
      map(catalogs =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter(catalog => catalog.CompanyCode === '463')
          .filter(catalog => catalog.Language === 'NL')
      )
    );

    this.catalogs687$ = allcatalogs$.pipe(
      map(catalogs =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter(catalog => catalog.CompanyCode === '687')
          .filter(catalog => catalog.Language === 'NL')
      )
    );

    this.catalogs2393$ = allcatalogs$.pipe(
      map(catalogs =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter(catalog => catalog.CompanyCode === '2393')
          .filter(catalog => catalog.Language === 'NL')
      )
    );

    this.catalogs4000$ = allcatalogs$.pipe(
      map(catalogs =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter(catalog => catalog.CompanyCode === '4000')
          .filter(catalog => catalog.Language === 'NL')
      )
    );

    this.catalogs9900$ = allcatalogs$.pipe(
      map(catalogs =>
        // array filter (do not confuse with RxJs 'filter' )
        catalogs
          .filter(catalog => catalog.CompanyCode === '9900')
          .filter(catalog => catalog.Language === 'NL')
      )
    );

    this.catalogs40001$ = allcatalogs$.pipe(
      map(catalogs =>
        // array filter (not to confuse with RxJs 'filter' )
        catalogs
          .filter(catalog => catalog.CompanyCode === '40001')
          .filter(catalog => catalog.Language === 'NL')
      )
    );

    this.catalogs47696$ = allcatalogs$.pipe(
      map(catalogs =>
        // array filter (not to confuse with RxJs 'filter' )
        catalogs
          .filter(catalog => catalog.CompanyCode === '47696')
          .filter(catalog => catalog.Language === 'NL')
      )
    );
  }
}
