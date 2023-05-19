//////1 question
//////////////a. Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}

///////b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class movie {
    constructor(title,movie,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
///////c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
get PG(movie)
{
    return movies.filter(movie => movie.rating =="PG");
}


////////d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG13”

const Casino Royale= new movie("casino royale","Eon productions","PG13");

//////2 question Convert the UML diagram to Typescript class. - use number for double
class Circle {
    constructor(radius,color) {
      this.radius = radius;
      this.color =color;
    }
    
      getRadius() {
          return this.radius
      }
  
  
      setRadius() {
          this.radius = radius
      }
  
  
      getColor(){
          return this.color
      }
  
     
      setColor(){
          this.color = color
      }
  
      toString() {
          return `Radius: ${this.radius} Color: ${this.color}`
      }
  
     getArea() {
      return Math.PI * this.radius* this.radius;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  const circle = new Circle(1.0,'red');
  console.log(circle.getArea()); 
  console.log(circle.getCircumference()); 


//////3 question
class person {
    constructor(name,age,gender,location){
    this.name=name;
    this.age =age;
    this.gender =gender;
    this.location =location;
}
    speak(){
    console.log(`hello,my name is ${this.name} and my age is ${this.age}`);
}
}
const Person=new person('lalitha','22','female','tamil nadu');
Person.speak()

///////4 question
class uberprice {
    constructor(distance,time){
        this.distance=distance;
        this.time=time;
    }
 ubercalculator(){
    const miles= this.distance;
    const minutes=this.time;
    const baseFare=2.00;
    const costPermile=5.00;
    const costPerminute= 1.00;
    const totalrideFare= baseFare+(miles*costPermile)+(minutes*costPerminute);
    return totalrideFare;}
}
const distance= 50;
const time= 60;
const uberbooking=new uberprice(distance,time);
const price= uberbooking.ubercalculator();
const totalfare= price.toFixed(2);
console.log(totalfare);

