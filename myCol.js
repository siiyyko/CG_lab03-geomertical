class myCol{
    constructor(r, g, b){
      this.r = abs(r)%256;
      this.g = abs(g)%256;
      this.b = abs(b)%256;
    }
    
    average(other){
      let newr = (this.r + other.r) / 2.0;
      let newg = (this.g + other.g) / 2.0;
      let newb = (this.b + other.b) / 2.0;
      
      return new myCol(newr, newg, newb);
    }
    
    displace(maxDisplace){
      
      this.r += random()*random(maxDisplace);
      this.r -= random()*random(maxDisplace);
      this.r = abs(this.r)%256;
      
      this.g += random()*random(maxDisplace);
      this.g -= random()*random(maxDisplace);
      this.g = abs(this.g)%256;
      
      this.b += random()*random(maxDisplace);
      this.b -= random()*random(maxDisplace);
      this.b = abs(this.b)%256;
    }
  }