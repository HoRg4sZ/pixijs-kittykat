import {Component, OnInit, ViewChild} from '@angular/core';

declare var PIXI: any;

@Component({
  selector: 'app-pixi',
  templateUrl: './pixi.component.html',
  styleUrls: ['./pixi.component.css']
})

export class PixiComponent  implements OnInit {
  title = 'pixi-test';
  @ViewChild('pixiContainer', {static: true}) pixiContainer; // this allows us to reference and load stuff into the div container

  public app: any; // this will be our pixi application

  ngOnInit() {

    this.app = new PIXI.Application({width: 800, height: 600}); // this creates our pixi application
    this.app.renderer.backgroundColor = 0x061639;


    this.pixiContainer.nativeElement.appendChild(this.app.view); // this places our pixi application onto the viewable document
  }

}
