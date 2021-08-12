import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react'
import Validator from "hero-validate"
import AsyncCreatableSelect from 'react-select/async-creatable'
import projectApi from "../../../../service/apartment.project.api"



const rules = {
    project: {
        required: true,
        validateProject: function (project) {
            console.log("đang là hàm validate project", project)
            if( project.id ){
                /// đã có trong hệ thống 
                return true
            }
            if( project.label.length <= 1 || project.value == 0 ){
                /// thêm mới mà không có text 
                return "Bạn cần nhập project"
            }
            return true;
        },
    }
}
Validator.setLocale(Validator.languages.vi)



const ApartmentInfo = forwardRef((props, ref) => {
    const { AUTH, CONFIG } = props
    const [ projects, setProjects ] = useState([])

    const [values, setValues] = useState({ project: "" })
    const [touched, setTouched] = useState({ project: true })
    const [errors, setErrors] = useState(Validator.getEmpty())
    /// add function error custom
    const hasErr = name => {
        return touched[name] && errors.isError(name)
    }
    // const [ inputValue, setInputValue ] = useState('')


    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){
                const errors = Validator.validate(values, rules)
                if( errors.hasError ){
                    let _touched = {}
                    Object.keys(touched).map(function(key, index) {
                        _touched[key] = true
                    })
                    setTouched(_touched)
                    setErrors(errors)
                    return false
                }else{
                    /// lưu lại và next step
                    return values
                }
            }
        }),
    )

    const loadOptions = (inputValue, callback) => {
        /// call api get province
        projectApi.getProjects(inputValue)
        .then( response => {
            let { data } = response
            data = data.map( p => {
                return {
                    ...p,
                    value: p.id, 
                    label: p.name, 
                    currentTarget: { value: p.id }, 
                    target: { name: 'project', value: p.id } 
                }
            })
            setProjects([ ... projects, ...data ])
            callback( [ ... data ])
        })
        .catch(error => {
            console.log("ERROR:: ",error)
            callback([{ value: "0", label: "đã có lỗi tìm kiếm" }])
        });
    }

    // const handleInputChange = newValue => {

    //     setInputValue( newValue.replace(/\W/g, '') )
    //     console.log(newValue.replace(/\W/g, ''), "data nhận được")
    // }
    // const handleChange = (event) => {
        
    //     if(event.persist){
    //         event.persist()
    //     }
    //     setTouched({ ...touched, [event.target.name]: true })
    //     const newValues = { ...values, [event.target.name]: event }
    //     setValues(newValues)
    //     setErrors(Validator.validate(newValues, rules));
    // }
    const handleChangeProject = (event) => {

        setTouched({ ...touched, ['project']: true })
        const newValues = { ...values, ['project']: event }
        setValues(newValues)
        setErrors(Validator.validate(newValues, rules))
    }

    return(
        <div className="user-information position-relative">
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label htmlFor="project">Tên khu dân cư / dự án </label>
                        <AsyncCreatableSelect
                            id="project" 
                            name='project'
                            className={ " " + ( hasErr('project') && 'is-invalid' ) }

                            cacheOptions
                            defaultOptions={ [{ value: "0", label: "nhập dự án bạn muốn tìm" }] }
                            loadOptions={ loadOptions }
                            // onInputChange={ handleInputChange }
                            onChange={ handleChangeProject }
                        />
                        {
                            hasErr("project") && (
                                <div className="invalid-feedback"> { errors.getError("project") } </div>
                            )
                        }
                    </div>
                </div>
                {
                    values.project == "" && (
                        <div>đây là trường hợp không có nhập gì</div>
                    )
                }
                {
                    values.project.id && (
                        <div dangerouslySetInnerHTML={{__html: values.project.process }} />
                    )
                }
                {
                    !values.project.id && values.project.label && (
                        <div> {values.project.label } </div>
                    )
                }
            </div>
            
        </div>
    )
})

export default ApartmentInfo