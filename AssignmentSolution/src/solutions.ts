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