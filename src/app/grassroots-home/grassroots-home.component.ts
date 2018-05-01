import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grassroots-home',
  templateUrl: './grassroots-home.component.html',
  styleUrls: ['./grassroots-home.component.css']
})
export class GrassrootsHomeComponent implements OnInit {
  
  
  title = 'Grassroots Gardening';
  slogan ='We sell grass';
  tagLine = '';
  panelTitle = `Starting at the roots`;
  panelText = `You don't want to kill all your dark areas they are very important. Making all those little fluffies that live in the clouds. Very easy to work these to death. We'll put some happy little leaves here and there. The shadows are just like the highlights, but we're going in the opposite direction. There comes a nice little fluffer.`;

  // card vars
  cardOneTitle = 'Our Products';
  cardOneText = 'Grassroots Gardening is proud to offer a wide variety of grasses for any project you might have. Our grasses are kept fed and watered and in peak health. Browse our products here and come see us in person!'

  cardTwoTitle = 'Our Services';
  cardTwoText = `At Grassroots, we don't just want to supply you, we want to help with the upkeep too. Hire us to help mow, weed, trim, fertilize, aerate, or water your lawn. Price packages start at $49.99 with a spring special for $79.99.`;
  constructor() { }

  ngOnInit() {
  }

}
