import React, { Component } from 'react'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
// import { API_URL } from './config'
// import './App.css'

export default class MainUpload extends Component {

    state = {
        uploading: false,
        images: []
    }

    onChange = e => {
        const { CONFIG } = this.props
        // const files = 
        this.setState({ uploading: true })

        const formData = new FormData()

        // files.forEach((file, i) => {
        //     formData.append(i, file)
        // })
        formData.append("file", e.target.files[0])
        formData.append("type", CONFIG.IMAGE.POST)

        fetch(`${CONFIG.API.API_UPLOAD_FILE}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(images => {
                this.setState({
                    uploading: false,
                    images
                })
            })
    }

    removeImage = id => {
        this.setState({
            images: this.state.images.filter(image => image.public_id !== id)
        })
    }

    render() {
        const { uploading, images } = this.state

        const content = () => {
            switch (true) {
                case uploading:
                    return <Spinner />
                case images.length > 0:
                    return <Images images={images} removeImage={this.removeImage} />
                default:
                    return <Buttons onChange={this.onChange} />
            }
        }

        return (
            <div>
                <div className='buttons'>
                    {content()}
                </div>
            </div>
        )
    }
}