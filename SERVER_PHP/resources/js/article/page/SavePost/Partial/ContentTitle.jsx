import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import { EditorState, convertToRaw, convertFromHTML, ContentState, ContentBlock  } from "draft-js"
import draftToHtml from 'draftjs-to-html'
import { Editor } from "react-draft-wysiwyg"
import {
    onDraftEditorCopy,
    onDraftEditorCut,
    handleDraftEditorPastedText,
  } from "draftjs-conductor";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

import Validator from "hero-validate"
import V from "../../../validator/user.content-apartment"
import fileApi from '../../../../service/file.api';
/// create rule for your form
Validator.setLocale(Validator.languages.vi)

const ContentTitle = forwardRef((props, ref) => {

    const { OLD, CONFIG } = props

    const [ values, setValues]   = useState({ title: OLD.title || "", content: OLD.content || "", contentText: OLD.content || "" })
    const [ touched, setTouched] = useState({})
    const [ errors, setErrors]   = useState(Validator.getEmpty())

    // / https://jpuri.github.io/react-draft-wysiwyg/#/demo
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(values.content)))
    )

    /// add function error custom
    const hasErr = name => {
        return touched[name] && errors.isError(name)
    }
    /// add function when value change
    const handleChange = (event) => {

        if(event.persist){
            event.persist()
        }
        
        setTouched({ ...touched, [event.target.name]: true })
        setValues({ ...values, [event.target.name]: event.target.value })
    }
    const handlePastedText = (text, html, editorState) => {
        let newState = handleDraftEditorPastedText(html, editorState)
    
        if (newState) {
            handleChangeEditor(newState);
            return true
        }
        return false
    }

    const uploadCallback = file => {
        const formData = new FormData()
        formData.append("file[]", file)
        formData.append("type", CONFIG.VIDEO.VPOST)

        return new Promise((resolve, reject) => {
           
            fileApi.uploadFile(formData)
            .then( response => {
                const { data } = response
                if( data.length ){
                    /// vì update là lists nên lấy phần tử đầu tiên
                    const imgfirst = data[0].root
                    console.log( imgfirst )
                    resolve({ data: { link: imgfirst } });
                }
            })
            .catch(error => {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                    let { data, status, headers } = error.response
                    let { errors } = data
                    let firsKeyError = Object.keys(errors)[0]
                    alert("upload lỗi : " + errors[firsKeyError] )
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request)
                    alert("upload lỗi không nhận được phản hồi" )
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message)
                    alert("Đã xảy ra sự cố khi thiết lập upload." )
                }
            })
        })
    }

    const handleChangeEditor = editorState => {
        
        const contentHTML = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        
        const blocks = convertToRaw(editorState.getCurrentContent()).blocks
        const contentText = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n')

        setTouched({ ...touched, content: true })
        setEditorState( editorState )
        setValues({ ...values, content: contentHTML, contentText: contentText })   
    }

    /// hook react
    useEffect(() => {
        
        setErrors( Validator.validate(values, V.rules) )
    }, [ values, touched ])

    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){
                
                const errors = Validator.validate( values, V.rules)
                if( errors.hasError ){
                    Object.keys(values).map((key, index) => {
                        touched[key] = true
                    })
                    setTouched(touched)
                    setValues({ ...values })
                    return false
                }else{
                    console.log("có vào đay lưu lại và next step ")
                    /// lưu lại và next step
                    return values
                }
            }
        }),
    )
    
    return(
        <div className="user-information position-relative">

            <h5 className="user-type__title pt-2 pb-4">Bạn cần nhập thông tin tiêu đề và nội dung:</h5>
            <div className="mycustom-form-group">
                <div className="row">
                    <div className="col-12">
                        <div className="form-group required">
                            <label htmlFor="title">Tiêu đề sản phẩm</label>
                            <input type="text" id="title" name="title" placeholder="Nhập tiêu đề ... vd: Bán căn hộ xxxxxx tại dự án xxxxxx"
                                className={"form-control " + ( hasErr("title") ? "is-invalid" : ( touched['title'] && "is-valid" ) )}
                                value={ values.title }
                                onChange={handleChange}
                            />
                            { hasErr('title') && <div className="d-block invalid-feedback"> { errors.getError('title') } </div> }
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group required">
                            <label htmlFor="content">Nội dung mô tả</label>
                            <div
                                style={{ borderRadius: '.25rem', cursor: "text" }} 
                                className={"editor hero__editor form-control h-auto " + ( hasErr("contentText") ? "is-invalid" : ( touched['contentText'] && "is-valid" ) )}>
                         
                                <Editor
                                    editorState={ editorState }
                                    onEditorStateChange={ handleChangeEditor }
                                    onCopy={onDraftEditorCopy}
                                    onCut={onDraftEditorCut}
                                    handlePastedText={handlePastedText}
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="px-1"
                                    editorClassName="editor__wrapper-hero"
                                    placeholder="Mô tả đặc điểm bất động sản... "
                                    toolbar={
                                        {
                                            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'link', 'emoji', 'image', 'history'],
                                            inline: { inDropdown: true },
                                            list: { inDropdown: true },
                                            textAlign: { inDropdown: true },
                                            link: { inDropdown: true },
                                            image: {
                                                uploadEnabled: true,
                                                uploadCallback: uploadCallback,
                                                previewImage: true,
                                                // inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                                inputAccept: 'image/jpeg,image/jpg,image/png',
                                                alt: '',
                                                defaultSize: {
                                                    height: 'auto',
                                                    width: 'auto',
                                                },
                                            },
                                            embedded: {
                                                inDropdown: false
                                            },
                                            blockType: {
                                                inDropdown: false,
                                                options: [
                                                "Normal",
                                                "H2",
                                                "H3",
                                                "H4",
                                                "link"
                                                ]
                                            }
                                        }
                                    }
                                />
                            </div>
                            { hasErr('contentText') && <div className="d-block invalid-feedback"> { errors.getError('contentText') } </div> }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
})

export default ContentTitle