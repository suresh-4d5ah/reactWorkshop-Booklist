import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71VTIUNTI0L._AC_UL480_FMwebp_QL65_.jpg",
    title: "The Maid: A Novel",
    author: "Nita Prose",
    price: "12.99",
    reviews: "12,136",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/71YBjhIs0ML._AC_UL480_FMwebp_QL65_.jpg",
    title: "Wish You Were Here: A Novel",
    author: "Jodi Picoult",
    price: "14.99",
    reviews: "16,054",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/81tpxsoDdSL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Best I Ever Had",
    author: "S.L. Scott",
    price: "0.00",
    reviews: "144",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/9157GzaPz2L._AC_UL480_FMwebp_QL65_.jpg",
    title: "The Beekeeper of Aleppo: A Novel",
    author: "Christy Lefteri",
    price: "8.99",
    reviews: "21,214",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/71sIVAqjlfL._AC_UL480_FMwebp_QL65_.jpg",
    title: "The Seven Husbands of Evelyn Hugo: A Novel",
    author: "Taylor Jenkins Reid",
    price: "14.99",
    reviews: "55,137",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/71HYziDaoKL._AC_UL480_FMwebp_QL65_.jpg",
    title: "In Five Years: A Novel",
    author: "Rebecca Serle",
    price: "12.99",
    reviews: "27,566",
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/91kB0uzAglL._AC_UL480_FMwebp_QL65_.jpg",
    title: "The Paper Palace: A Novel",
    author: "Miranda Cowley Heller",
    price: "13.99",
    reviews: "20,035",
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/51j4N42wa4L._AC_UL480_FMwebp_QL65_.jpg",
    title: "The Last Flight: A Novel",
    author: "Julie Clark",
    price: "9.48",
    reviews: "20,416",
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/81ahQ0MC8BL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Apples Never Fall",
    author: "Liane Moriarty",
    price: "14.99",
    reviews: "33,559",
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/I/71ODaT072wL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Things We Never Got Over",
    author: "Lucy Score",
    price: "0.00",
    reviews: "14,422",
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/I/71rDThWVwES._AC_UL480_FMwebp_QL65_.jpg",
    title: "The Stranger in the Lifeboat",
    author: "Mitch Albom",
    price: "11.99",
    reviews: "12,257",
  },
  {
    id: 12,
    img: "https://m.media-amazon.com/images/I/71rkaxiZ4mS._AC_UL480_FMwebp_QL65_.jpg",
    title:
      "The Second Mrs. Astor: A Heartbreaking Historical Novel of the Titanic",
    author: "Shana Abe",
    price: "8.23",
    reviews: "3,980",
  },
  {
    id: 13,
    img: "https://m.media-amazon.com/images/I/81o3--WQB7L._AC_UL480_FMwebp_QL65_.jpg",
    title: "Free Food for Millionaires",
    author: "Min Jin Lee",
    price: "9.99",
    reviews: "1,296",
  },
  {
    id: 14,
    img: "https://m.media-amazon.com/images/I/81+JbRqqBGL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Beach Read",
    author: "Emily Henry",
    price: "8.99",
    reviews: "24,940",
  },
  {
    id: 15,
    img: "https://m.media-amazon.com/images/I/81dILj5mNrS._AC_UL480_FMwebp_QL65_.jpg",
    title: "Summer Island: A Novel",
    author: "Kristin Hannah",
    price: "7.99",
    reviews: "7,167",
  },
  {
    id: 16,
    img: "https://m.media-amazon.com/images/I/91AfkgyV1kL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Still Life",
    author: "Sarah Winman",
    price: "17.54",
    reviews: "2,897",
  },
  {
    id: 17,
    img: "https://m.media-amazon.com/images/I/81N14nAacOL._AC_UL480_FMwebp_QL65_.jpg",
    title: "The Liar's Dictionary: A Novel",
    author: "Eley Williams",
    price: "11.99",
    reviews: "1,005",
  },
  {
    id: 18,
    img: "https://m.media-amazon.com/images/I/81N2n0+9dML._AC_UL480_FMwebp_QL65_.jpg",
    title: "Perestroika in Paris: A novel",
    author: "Jane Smiley",
    price: "11.99",
    reviews: "1,921",
  },
  {
    id: 19,
    img: "https://m.media-amazon.com/images/I/81tCtHFtOgL._AC_UL480_FMwebp_QL65_.jpg",
    title: "The Midnight Library: A Novel",
    author: "Matt Haig",
    price: "13.29",
    reviews: "139,287",
  },
  {
    id: 20,
    img: "https://m.media-amazon.com/images/I/81qHEkVVniL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Family Money",
    author: "Chad Zunker",
    price: "0.00",
    reviews: "10,275",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (book) => {
  console.log(book);
  const title = book.title;
  const author = book.author;
  const img = book.img;
  const price = book.price;
  const reviews = book.reviews;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>by {author}</h4>
      <h4 className="price">{price}</h4>
      <h4>{reviews} reviews</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
