function formatString(input:string, toUpper?:boolean):string{
    if(toUpper === true || toUpper === undefined) return  input.toUpperCase()

    else return input.toLowerCase()
}



function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[]{

    return items.filter((e) => e.rating >= 4);
}



function concatenateArrays<T>(...arrays: T[][]): T[]{
  return arrays.flat()
}



class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo(): string {
    return `"Make: ${this.make}, Year: (${this.year})`;
  }
}
class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  public getModel(): string {
    return `"Model : ${this.model}"`;
  }
}





function processValue(value: string | number): number {

  if (typeof value === "string") {
    return value.length   
  }
  else{
     return value*2
  }
}





interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{
  if(products.length === 0) return null
  let highestPrice = products[0]
  for(const product of products){
    if(product.price>highestPrice.price){
      highestPrice = product
    }
  }
  return highestPrice
}




enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day){
  if(day === Day.Saturday || day === Day.Sunday) return "Weekend"
  else return "Weekday"
}





async function squareAsync(n: number): Promise<number>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if (n >= 0) resolve(n * n);
      else reject(new Error("Negative number not allowed"));
    },1000)
  })
}