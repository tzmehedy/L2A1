function formatString(input:string, toUpper?:boolean):string{
    if(toUpper === true || toUpper === undefined) return  input.toUpperCase()

    else return input.toLowerCase()
}

const result1 = formatString("Hello", false);
console.log(result1)

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[]{

    return items.filter((e) => e.rating >= 4);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const result2 = filterByRating(books)
console.log(result2)

function concatenateArrays<T>(...arrays: T[][]): T[]{
  return arrays.flat()
}

const result3 = concatenateArrays([1, 2], [3, 4], [5]);
console.log(result3)


function processValue(value: string | number): number {

  if (typeof value === "string") {
    return value.length   
  }
  else{
     return value*2
  }
}

const result5 = processValue(10);
console.log(result5)

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

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

const result6 = getMostExpensiveProduct(products)
console.log(result6)