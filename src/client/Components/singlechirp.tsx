import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import setData from './fetch';

let SingleChirp: React.FC<iSingleProps> = ({ match: { params: { id } } }) => {

    let [nameval, setNameval] = useState<string>("")
    let [textval, setTextval] = useState<string>("");
    let [locationval, setLocationval] = useState<string>("");
    
    let single = async (id: string) => {
        let response = await fetch(`/api/chirps/${id}`);
        let json = await response.json();
        setNameval(json.userid);
        setTextval(json.text);
        setLocationval(json.location);
    }
    
    useEffect(() => {
        console.log(id)
        single(id)
    }, [id])

    let handleChange = (e: string, id: string) => {
        if (id === "name") {
            setNameval(e);
        } else if (id === "text") {
            setTextval(e);
        } else if (id === "location") {
            setLocationval(e);
        }
    }

    let handleSet = () => {
        if (nameval !== "" && textval !== "") {
            let num = parseInt(nameval, 10)
            if (Number.isInteger(num) === true) {
                setData(`/api/chirps/${id}`, {
                    userid: num,
                    text: textval,
                    location: locationval
                }, "PUT")
            }
        }
    }

    let handleDelete = () => {
        setData(`/api/chirps/${id}`, {}, "DELETE")
    }

    return (
        <div className="container d-flex " style={{ "height": "100vh" }}>
            <div className="d-flex flex-column align-self-center col-sm-12">
                <form className="col-sm-9 pt-3 pb-3 mx-auto bg-dark text-light"
                    style={{ "borderRadius": "1em" }}>

                    <div className="form-group">
                        <label htmlFor="userID">Edit User ID</label>
                        <input type="text" placeholder="Edit User ID"
                            className="form-control" id="userID" value={nameval}
                            onChange={(event) => { handleChange(event.target.value, 'name') }} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="chirp">Edit Chirp</label>
                        <input type="text" placeholder="Edit Chirp"
                            className="form-control" id="chirp" value={textval}
                            onChange={(event) => { handleChange(event.target.value, 'text') }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Edit Location</label>
                        <input type="text" placeholder="Edit Chirp"
                            className="form-control" id="location" value={locationval}
                            onChange={(event) => { handleChange(event.target.value, 'location') }} />
                    </div>

                    <div className="d-flex justify-content-around mt-4">
                        <Link to="/" className="col-sm-3">
                            <button className="btn btn-warning col-sm-12"
                                onClick={() => { handleSet() }}>Set Chirp</button>
                        </Link>
                        <Link to="/" className="col-sm-3">
                            <button className="btn btn-danger col-sm-12"
                                onClick={() => { handleDelete() }}>Delete Chirp</button>
                        </Link>

                    </div>

                </form>
            </div>
        </div>
    )
}

export interface iSingleProps extends RouteComponentProps<{ id: string; }> { }

export default SingleChirp;