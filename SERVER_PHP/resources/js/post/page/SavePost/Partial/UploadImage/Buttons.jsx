import React from 'react'

export default props =>
    <div className="uploads">
        <label className="uploads__photo"  htmlFor='photo'>
            <i className="fad fa-images"></i>
            <i className="plus fad fa-plus"></i>
            <input id="photo" className="d-none" multiple type='file' onChange={props.onChange} accept="image/*" />
        </label>
        {/* <label className="uploads__360" htmlFor='img360'>
            <i className="fad fa-video"></i>
            <i className="plus fad fa-plus"></i>
            <input id="video" className="d-none" type='file' onChange={props.onChange} accept="video/*" />
        </label> */}
        <label className="uploads__video" htmlFor='video'>
            <i className="fad fa-video"></i>
            <i className="plus fad fa-plus"></i>
            <input id="video" className="d-none" type='file' onChange={props.onChange} accept="video/*" />
        </label>
    </div>