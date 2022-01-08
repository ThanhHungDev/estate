import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from 'react-router'
import { useHistory } from "react-router-dom"
import ImagesApartment from './SavePost/Partial/UploadImage/ImagesApartment'
import projectApi from "../../service/apartment.project.api"
import ExpandShowMore from "./ExpandShowMore"


function ApartmentProjectDetail( props ){

    const history = useHistory()
    const { id } = useParams()
    const [ project, setProject ] = useState(null)

    useEffect(()=>{
        if( !project ){
            /// fetch api 
            /// call api get province
            projectApi.getProject(id)
            .then( response => {
                let { data } = response
                console.log(data)
                data = { ... data, images: JSON.parse(data.images) }
                setProject(data)
            })
            .catch(error => {
                console.log("ERROR:: ",error)
            });
        }
    })
    if( !project ){
        return (
            <div> không tìm thấy </div>
        )
    }

    // const images = project.images.map( img => img.url )
    return (
        <div className="apartment-project-detail main-upload">
            <h2>{ project.name }</h2>
            <div className="galleries"> { project.images.length ? <ImagesApartment images={ project.images } /> : null } </div>
            <ExpandShowMore content={project.introduction} />
        </div>
    )
}


export default ApartmentProjectDetail