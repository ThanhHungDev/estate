import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from 'react-router'
import { useHistory } from "react-router-dom"
import ImagesApartment from './SavePost/Partial/UploadImage/ImagesApartment'
import userAPI from "../../service/user.api"
import ExpandShowMore from "./ExpandShowMore"
import Apartment from "./SavePost/Apartment"

function EditPost( props ){

    const history = useHistory()
    const { id } = useParams()
    const [ post, setPost ] = useState(null)

    useEffect(()=>{
        if( !post ){
            /// fetch api 
            /// call api get province
            userAPI.getProductUserById(id)
            .then( response => {
                let { data } = response
                console.log(data)
                data = { ... data, images: JSON.parse(data.images) }
                setPost(data)
            })
            .catch(error => {
                console.log("ERROR:: ",error)
            });
        }
    })
    console.log( "có vào đây", id )
    
    return <div>
        { id }
    </div>
}


export default EditPost