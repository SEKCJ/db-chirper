import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { blankProps } from '../App'
import setData from './fetch'

let FormPost: React.FC<blankProps> = props => {

    let [nameval, setNameval] = useState<string>("");
    let [textval, setTextval] = useState<string>("");
    let [locationval, setLocationval] = useState<string>("");

    let handleChange = (e: string, id: string) => {
        if (id === "name") {
            setNameval(e)
        } else if (id === "text") {
            setTextval(e)
        } else if (id === "location") {
            setLocationval(e)
        }
    }

    let handleClick = () => {
        if (nameval !== "" && textval !== "") {
            let num = parseInt(nameval, 10)
            if (Number.isInteger(num) === true) {
                setData('/api/chirps', {
                    userid: num,
                    text: textval,
                    location: locationval
                }, 'POST')
            }
        }

    }

    return (
        <div className="container d-flex " style={{ "height": "100vh" }}>
            <div className="d-flex flex-column align-self-center col-sm-12">
                <Link className="btn btn-danger mx-auto col-sm-2 mb-5 px-3 py-3" to="/">Go Back</Link>
                <form className="col-sm-9 pt-3 pb-1 mx-auto"
                    style={{
                        "border": '5px solid #3A90B8', 'borderRadius': '1em',
                        'backgroundColor': '#FFF6B0'
                    }}>
                    <div className="form-group">
                        <label htmlFor="userID">Enter User ID</label>
                        <input type="text" placeholder="What's your user ID? (Enter a value from 1-10)"
                            className="form-control" id="userID"
                            onChange={(event) => { handleChange(event.target.value, 'name') }} value={nameval} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="chirp">Enter Chirp</label>
                        <input type="text" placeholder="Chirp it"
                            className="form-control" id="chirp" value={textval}
                            onChange={(event) => { handleChange(event.target.value, 'text') }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Enter Location</label>
                        <input type="text" placeholder="Enter Location"
                            className="form-control" id="location" value={locationval}
                            onChange={(event) => { handleChange(event.target.value, 'location') }} />
                    </div>
                    <div className="form-group text-center">
                        <Link to="/">
                            <button className="btn btn-primary col-sm-8 py-2"
                                onClick={() => { handleClick() }}
                            >Submit</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default FormPost