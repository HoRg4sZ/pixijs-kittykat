import {Component, OnInit, ViewChild} from '@angular/core';

declare var PIXI: any;

@Component({
  selector: 'app-pixi',
  templateUrl: './pixi.component.html',
  styleUrls: ['./pixi.component.css']
})

export class PixiComponent implements OnInit {

  title = 'pixi-test';
  @ViewChild('pixiContainer', {static: true}) pixiContainer; // this allows us to reference and load stuff into the div container

  public app: any; // this will be our pixi application

  ngOnInit() {
    // Aliases
    const Application = PIXI.Application;
    const loader = PIXI.loader;
    const resources = PIXI.loader.resources;
    const Sprite = PIXI.Sprite;
    this.app = new Application({
      width: 256,
      height: 256,
      antialias: true,
      transparent: false,
      resolution: 1
    }); // this creates our pixi application
    this.pixiContainer.nativeElement.appendChild(this.app.view); // this places our pixi application onto the viewable document
    loader
      .add('assets/images/cat.png')
      .load(() => {
        const cat = new Sprite(resources['assets/images/cat.png'].texture);
        cat.position.set(100, 100);
        cat.scale.set(0.9, 0.9);
        cat.anchor.set(0.5, 0.5);
        cat.rotation = 0.5;
        this.app.stage.addChild(cat);
      });
  }

}
