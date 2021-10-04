import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import { EditorState, convertFromRaw, convertToRaw } from "draft-js"
import draftToHtml from 'draftjs-to-html';
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

{/* <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/react-draft-wysiwyg@1.12.3/dist/react-draft-wysiwyg.css' />
<div id="root"></div> */}

import Validator from "hero-validate"
import V from "../../../validator/user.content-apartment"
/// create rule for your form
Validator.setLocale(Validator.languages.vi)

const ContentApartment = forwardRef((props, ref) => {

    const [ values, setValues]   = useState({ title: "", content: "", contentText: "" })
    const [ touched, setTouched] = useState({})
    const [ errors, setErrors]   = useState(Validator.getEmpty())

    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
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
                                defaultValue={ values.title }
                                onChange={handleChange}
                            />
                            { hasErr('title') && <div className="d-block invalid-feedback"> { errors.getError('title') } </div> }
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group required">
                            <label htmlFor="content">Nội dung mô tả</label>
                            <div
                                style={{ borderRadius: '.25rem', minHeight: "10em", cursor: "text" }} 
                                className={"editor form-control h-auto " + ( hasErr("contentText") ? "is-invalid" : ( touched['contentText'] && "is-valid" ) )}>
                         
                                <Editor
                                    editorState={ editorState }
                                    onEditorStateChange={ handleChangeEditor }
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="px-1"
                                    editorClassName=" "
                                    placeholder="Mô tả đặc điểm bất động sản... "
                                    toolbar={{
                                    options: ["inline", "blockType", "fontSize"],
                                    inline: { inDropdown: true },
                                    list: { inDropdown: true },
                                    textAlign: { inDropdown: true },
                                    link: { inDropdown: true },
                                    blockType: {
                                        inDropdown: false,
                                        options: [
                                        "Normal",
                                        "H2",
                                        "H3",
                                        "H4",
                                        ]
                                    }
                                    }}
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

export default ContentApartment