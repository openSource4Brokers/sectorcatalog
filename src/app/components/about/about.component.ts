import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  outputPath = 'https://github.com/openSource4Brokers/sectorcatalog';

  constructor() {}

  ngOnInit() {}

  getSource() {}
}
