import React from 'react'
import './myComics.css'
import Categories from "../../components/ComicsCategories";

const MyComics = () => {
  return (
    <div className="comicsBody">
      <h1 className="tituloComics">My comics</h1>

      <section>
        <div className="exploradorDeComics">
          <Categories />
        </div>
      </section>
  </div>
  )
}

export default MyComics