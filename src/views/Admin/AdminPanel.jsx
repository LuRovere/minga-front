import { useDispatch, useSelector } from "react-redux";
import './Admin.css'
import { useEffect, useState } from "react";
import React from "react";
import comicActions from "../../store/admin/actions";
const { adminAuthors, getAuthors, getCompanies } = comicActions;

export default function AdminPanel(){
    const adminStoreAuthors = useSelector((store)=> store.adminAuthors?.authors?.response)
    const adminStoreCompanies = useSelector((store)=> store.adminCompanies?.companies.response)
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const[authors, setAuthors] = useState(false)
    const showAuthors = ()=>{
        setAuthors(true)
    }
    const showCompanies = () =>{
        setAuthors(false)
    }
    useEffect(()=>{
        dispatch(getAuthors(token))
    }, [])
    useEffect(()=>{
        dispatch(getCompanies(token))
    }, [])
    console.log(adminStoreAuthors)
    return (
        <div>
            <div className="todo">
                <div className="background">
                    <div className="Title">
                        <h1>Panel</h1>
                    </div>
                    <div className="parraf">
                        <p>This is the administrator panel where you can manage authors and companies</p>
                    </div>
                </div>
            <div className="border">
                <div className="entities">
                    <h2>Entities</h2>
                </div>
            <div className="buttons">
            <button
            className={`buttonAdmin${authors ? "": "1"}`}
            onClick={showAuthors}
          >
            Authors
          </button>

          <button className={`buttonAdmin${authors ? "1" : ""}`} onClick={showCompanies}>
            {" "}
            Companies{" "}
          </button>
            </div>
            {authors?(
                <div className="spaceCard">
                    {adminStoreAuthors?.map((card, index)=>{
                        return (
                            <div key={index} className="card">
                                <div className="directionCard">
                                    <h2>{card.name}</h2>
                                    <button>dissable</button>
                                </div>
                            </div>
                        )
                    })}
                </div>):
                <div>
                    {adminStoreCompanies?.map((card, index)=>{
                        return (
                            <div key={index} className="card">
                                <div className="directionCard">
                                    <h2>{card.name}</h2>
                                    <button>dissable</button>
                                </div>
                            </div>
                        )
                    })}
                </div>}
                </div>
            </div>
        </div>
    )
}