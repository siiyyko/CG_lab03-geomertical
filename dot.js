class dot{
    constructor(x,y,col){
      this.x = x;
      this.y = y;
      this.col = col;
    }
    
    aver(other){
      let newx = (this.x + other.x) / 2.0;
      let newy = (this.y + other.y) / 2.0;
      let newcol = this.col.average(other.col);
     
      return new dot(newx, newy, newcol);
    }
    
    show(){
      set(this.x, this.y, color(this.col.r, this.col.g, this.col.b));
      //updatePixels();
    }
    
    displace(maxDisplace){
      this.col.displace(maxDisplace);
    }
  }