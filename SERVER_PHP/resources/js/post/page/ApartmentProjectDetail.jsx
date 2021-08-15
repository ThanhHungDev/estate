import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from 'react-router'
import { useHistory } from "react-router-dom"
import projectApi from "../../service/apartment.project.api"


function ApartmentProjectDetail( props ){

    const history = useHistory()
    const { id } = useParams()
    const [ project, setProject ] = useState(null)
    /// bình thường
    // const { match } = props
    // if( match && match.params && match.params.id ){

    // }


    useEffect(()=>{
        if( !project ){
            /// fetch api 
            /// call api get province
            projectApi.getProject(id)
            .then( response => {
                let { data } = response
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

    return (
        <div className="apartment-project-detail">
            <div className="galleries">
            {
                project.images.length
                ? <Images images={ images.map( img => img.IMAGE_RESIZE ) }/>
                : null
            }
            </div>
        </div>
    )
}


export default ApartmentProjectDetail