import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grassroots-about',
  templateUrl: './grassroots-about.component.html',
  styleUrls: ['./grassroots-about.component.css']
})
export class GrassrootsAboutComponent implements OnInit {

  aboutText = `Established in 1993 by George Germinat, Grassroots Gardening has been producing high quality, locally grown turf in the Central Indiana area for over 25 years.
  We are proud to have serviced clients in all micro-climates of the Central Indiana area with quality products that meet and exceed customers’ expectations. Focusing Grassroots Gardening’s seed selection on the most weather tolerant, best color, best texture turf available, customers can count on the delivery of a high quality products that meet current landscaping needs.
  Growing quality grass product today incorporates more than just producing quality, locally sourced agriculture products; but also providing for sustainable agricultural stewardship of surrounding waterways and groundwater.  
  Grassroots Gardening is proud of its ‘reliable on time delivery service’ and knowledgeable staff. Because of our high caliber personnel and centrally located center, we’ve maintained a 99% on time delivery record for over 20 years running. In every part of the Grassroots Gardening operation, the needs of the client drive the way our business is run. From quality, disease and weather resistant varieties, to low environmental impact turf grasses to service and delivery systems, Grassroots Gardening is your best choice for locally grown acclimatized products.
  When quality really matters, give Grassroots Gardening a call.`

  constructor() { }

  ngOnInit() {
  }

}
