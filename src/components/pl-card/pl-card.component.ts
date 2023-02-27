import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-pl-card',
  templateUrl: './pl-card.component.html',
  styleUrls: ['./pl-card.component.css']
})
export class PlCardComponent implements OnInit {
  @ContentChild('plCardHeader') plCardHeader!: TemplateRef<any>;
  @ContentChild('plCardContainer') plCardContainer!: TemplateRef<any>;
  @ContentChild('plCardFooter') plCardFooter!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
