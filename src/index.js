import React from "react";
import ReactDom from "react-dom";
import './index.css';

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return <article>
    <Image />
    <Title />
    <Author />
  </article>
}

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/813MhRXz2CL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => (
  <h1>La Princesse de Clèves</h1>
);

const Author = () => <h4>Mme de Lafayette</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
