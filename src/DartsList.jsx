import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';

export const DartsList = () => {
 const [isPending, setPending] = useState(false);
 const [dartses, setDartses] = useState([]);

 useEffect(() => {
    const fetchdata = async() => {
    setPending(true);
    try {
    const valasz = await axios.get("https://darts.sulla.hu/darts")
    setDartses(valasz.data);
    }
    catch (error) {
        console.log("Hiba : ", error);
    }
    finally {
        setPending(false);
    }
    }
    fetchdata();
},[]);
return (
    <div>
        {isPending ? (
            <div className="spinner-border text-danger"></div>
        ) : (
            <div className="p-5 m-auto text-center content bg-ivory">
                <h2>Dartsozók</h2>
                {dartses.map((darts, index)=>(
                    <div className="card col-sm-3 d-inline-block m-1 p-2" key={index}>
                        <p className="text-dark">Dartsozó neve: {darts.name} </p>
                        <p className="text-dark">Születési éve: {darts.birth_date} </p>
                        <p className="text-dark">Nyert világbajnokságai: {darts.world_ch_won} </p>
                        <div className="card-body">
                            <Link to={darts.profile_url} target="_blank">Profil link</Link><br />
                            <Link to={"/darts/"+darts.id}><img src={darts.image_url ? darts.image_url : "https://via.placeholder.com/400x800"}
                            alt={darts.name} className="img-fluid" style={{maxHeight : 200}} /><br />
                            <i className="bi bi-three-dots" data-bs-toggle="tooltip" title="Részletek"></i></Link>&nbsp;&nbsp;&nbsp;
                            <Link to={"/darts-modify/" + darts.id}><i className="bi bi-pencil-square fs-6 "></i></Link>&nbsp;&nbsp;&nbsp;
                            <Link to={"/darts-delete/" + darts.id}><i className="bi bi-trash3 fs-6  "></i></Link><br /><br />
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
);
}