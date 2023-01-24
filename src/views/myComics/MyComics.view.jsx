import React, { useEffect } from 'react'
import './myComics.css'
import { useDispatch } from 'react-redux';
import comicsActions from '../../store/comics/actions';
import Categories from "../../components/ComicsCategories";
import ComicsCards from '../../components/ComicsCards';

const { getMyComics } = comicsActions

const MyComics = () => {
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMyComics({
      token
    }))
  }, [])
  return (
    <div className="comicsBody">
      <h1 className="tituloComics">My comics</h1>

      <section>
        <div className="exploradorDeComics">
          <Categories />
          <ComicsCards />
        </div>
      </section>
  </div>
  )
}

export default MyComics