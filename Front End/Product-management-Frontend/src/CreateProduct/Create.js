import React from "react";
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Create.css'
import ImageUploader from "../components/ImageUploader";

class Create extends React.Component {



    render() {
        return (
            <div className="create-container">
                <div>
                    {/* <h1>Create new product</h1>
                    Name <input type="text" className="form-control" />
                    Price <input type="text" className="form-control" />
                    Category <input type="text" className="form-control" /> */}
                    <ImageUploader></ImageUploader>
                </div>


            </div>

        )
    }
}
export default withRouter(Create);