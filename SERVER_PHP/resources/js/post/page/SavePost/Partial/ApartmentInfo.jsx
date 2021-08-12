import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react'
import Validator from "hero-validate"
import AsyncCreatableSelect from 'react-select/async-creatable'
import projectApi from "../../../../service/apartment.project.api"



const rules = {
    project: {
        required: true,
        min: 1
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
        console.log("touched[name] && errors.isError(name)" + name,  errors.isError(name) )
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
                    return formState.values
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
    const handleChange = (event) => {
        
        if(event.persist){
            event.persist()
        }
        setTouched({ ...touched, [event.target.name]: true })
        const newValues = { ...values, [event.target.name]: event.target.value }
        setValues(newValues)
        setErrors(Validator.validate(newValues, rules));
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
                            onChange={ handleChange }
                        />
                        {
                            hasErr("project") && (
                                <div className="invalid-feedback"> { errors.getError("project") } </div>
                            )
                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
})

export default ApartmentInfo