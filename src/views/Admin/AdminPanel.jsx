import { useDispatch, useSelector } from "react-redux";
import './Admin.css'
import { useEffect, useState } from "react";
import React from "react";
import comicActions from "../../store/admin/actions";
const { adminAuthors, getAuthors, getCompanies } = comicActions;

export default function AdminPanel(){
    const adminStoreAuthors = useSelector((store)=> store.adminAuthors?.authors?.response)
    const adminStoreCompanies = useSelector((store)=> store.adminCompanies)
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    console.log(adminStoreCompanies)
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
            <div className="Title">
                <h1>Panel</h1>
            </div>
            <div className="buttons">
                <button className="button">Authors</button>
                <button className="button">Companies</button>
            </div>
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
                </div>
            </div>
        </div>
    )
}