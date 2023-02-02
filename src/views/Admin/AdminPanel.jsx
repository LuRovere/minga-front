import { useDispatch, useSelector } from "react-redux";
import './Admin.css'
import { useEffect, useState } from "react";
import React from "react";
import comicActions from "../../store/admin/actions";
import BasicHooksExample from "../../components/buttonSwitch";
const { adminAuthors, getAuthors, getCompanies } = comicActions;

export default function AdminPanel(){
    const adminStoreAuthors = useSelector((store)=> store.adminAuthors?.authors?.response)
    const adminStoreCompanies = useSelector((store)=> store.adminCompanies?.companies.response)
    console.log(adminStoreAuthors)
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const[authors, setAuthors] = useState(true)
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
            Companies
          </button>

          <button className={`buttonAdmin${authors ? "1" : ""}`} onClick={showCompanies}>
            {" "}
            Authors{" "}
          </button>
            </div>
            {authors?(
            adminStoreCompanies?.map((card, index)=>{
                return(
                    <div key={index}  className="tableAdmin">
                    <tr className="tableMax">
                    <td className="table">{card.name}</td>
                    <td className="table">{card.website}</td>
                    <td className="table"><img src={`${card.logo}`}></img></td>
                    <td className="table"><BasicHooksExample/></td>
                    </tr>
                    </div>
                )
            })
        ):adminStoreAuthors?.map((card,index)=>{
            return(
                <div key={index}  className="tableAdmin">
                <tr className="tableMax">
                <td className="tableName">{card.name}</td>
                <td className="tableDate">{card.date}</td>
                <td className="tableCity">{card.city},{card.country}</td>
                <td className="tableImage"><img src={`${card.photo}`} className="imageAuthorsAdmin"></img></td>
                <td className="table"><BasicHooksExample/></td>
                </tr>
                </div>
            )
            })}
                </div>
            </div>
        </div>
        
    )
}