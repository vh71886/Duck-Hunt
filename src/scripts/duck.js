import MovingObject from "./moving_object";
import { DIMX, DIMY } from "../index";

export default class Duck extends MovingObject {
    constructor(obj) {
        if(!obj.type) obj.type = "green";
        super(obj);
        this.type = obj.type;
        this.imgSize = 65;
        this.frameSize = 40;
        this.maxFrame = 3;
        this.pos = this.randomPosition();
    }

    // Starting random x position (y is always bottom of screen)
    randomPosition() {
        let pos = [];
        pos[0] = Math.floor(Math.random() * DIMX);
        pos[1] = DIMY - this.frameSize; 
        return pos;
    }
    
    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.bounce(this.pos);
    }

    // Duck reaches canvas border
    bounce(pos) {
        console.log("bounce start");
        if(pos[0] < 0 || pos[0] > DIMX) {
            this.vel[0] = -this.vel[0];
        }
        if(pos[1] < 0 || pos[1] > DIMY - this.frameSize) {
            console.log("top of canvas");
            this.vel[1] = -this.vel[1];
        }
    }

}

/** Duck parameters **/

// Green Duck - Slow
// Sprite starts 127 x 115 px

// Blue Duck - Medium
// Sprite starts 0 x 115 px

// Red Duck - Fast
// Sprite starts 256 x 115px

// Animation Notes
// this.ctx.drawImage(                          Parameter Type:
//      ducks,                                  source
//      col * frameSize + duckColOffset,        sprite target start x-pos
//      row * frameSize + duckRowOffset,        sprite target start y-pos
//      frameSize,                              sprite target img width
//      frameSize,                              sprite target img height
//      pos[0],                                 destination canvas x-pos
//      pos[1],                                 destination canvas y-pos
//      imgSize,                                final image size width 
//      imgSize                                 final image size height
//  );