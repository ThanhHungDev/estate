import React from 'react'
const MAX_IMAGE = 7
const MAX_VIDEO = 2

export default props => {
    const { images, videos } = props

    return (
        <div className="uploads">
            <label className={ "uploads__photo " + (images.length > MAX_IMAGE ? 'hidden__color' : '') }  htmlFor='photo'>
                <i className="fad fa-images"></i>
                {
                    images.length > MAX_IMAGE
                    ? null
                    : <i className="plus fad fa-plus"></i>
                }
                {
                    images.length > MAX_IMAGE
                    ? <i className="limit__image error">không thể thêm ảnh</i>
                    : <i className="limit__image">bấm để thể thêm ảnh</i>
                }
                {
                    images.length > MAX_IMAGE
                    ? null
                    : <input id="photo" className="d-none" multiple type='file' onChange={props.onChange} accept="image/*" />
                }
            </label>
            {/* <label className="uploads__360" htmlFor='img360'>
                <i className="fad fa-video"></i>
                <i className="plus fad fa-plus"></i>
                <input id="video" className="d-none" type='file' onChange={props.onChange} accept="video/*" />
            </label> */}

            <label className={ "uploads__video " + (videos.length > MAX_VIDEO ? 'hidden__color' : '') }  htmlFor='video'>
                <i className="fad fa-video"></i>
                {
                    videos.length > MAX_VIDEO
                    ? null
                    : <i className="plus fad fa-plus"></i>
                }
                {
                    videos.length > MAX_VIDEO
                    ? <i className="limit__image error">không thể thêm video</i>
                    : <i className="limit__image">bấm để thể thêm video</i>
                }
                {
                    videos.length > MAX_VIDEO
                    ? null
                    : <input id="video" className="d-none" multiple type='file' onChange={props.onChange} accept="video/*" />
                }
            </label>
        </div>
    )
}