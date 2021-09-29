import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react'
import Validator from "hero-validate"
import AsyncCreatableSelect from 'react-select/async-creatable'
import projectApi from "../../../../service/apartment.project.api"
import V from "../../../validator/user.apartment-info"

Validator.setLocale(Validator.languages.vi)

const ApartmentInfo = forwardRef((props, ref) => {
    const DEFAULT_NONE_SELECT = "";
    const { AUTH, CONFIG } = props
    const [ projects, setProjects ] = useState([])

    const [values, setValues] = useState({ project: DEFAULT_NONE_SELECT, title: '' })
    const [touched, setTouched] = useState({ project: true })
    const [errors, setErrors] = useState(Validator.getEmpty())
    /// add function error custom
    const hasErr = name => {
        return touched[name] && errors.isError(name)
    }


    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){
                const errors = Validator.validate(values, V.rules)
                if( errors.hasError ){
                    
                    Object.keys(touched).map((key, index) => {
                        touched[key] = true
                    })
                    setTouched(touched)
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
    
    const handleChangeProject = (event) => {
        
        setTouched({ ...touched, ['project']: true })  
        const newValues = { ...values, ['project']: event } 
        setValues(newValues)
        setErrors(Validator.validate(newValues, V.rules))
    }

    const handleChange = (event) => {
        
        if(event.persist){
            event.persist()
        }

        setValues({ ...values, [event.target.name]: event.target.value })
        setTouched({ ...touched, [event.target.name]: true })
    }

    return(
        <div className="user-information position-relative">
            <div className="row">
                <div className="col-12">
                    <div className="form-group required">
                        <label htmlFor="title">Tiêu đề sản phẩm</label>
                        <input type="text" id="title" placeholder="Nhập tiêu đề ... vd: Bán căn hộ xxxxxx tại dự án xxxxxx"
                            className={hasErr("title") ? "is-invalid form-control" : "form-control"}
                            name="title"
                            value={ values.title }
                            onChange={handleChange}
                        />
                        { errors.getError('title') && <div className="invalid-feedback"> { errors.getError('title') } </div> }
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group required">
                        <label htmlFor="description">Nội dung mô tả</label>
                        <textarea id="description" rows="3"
                        className={ hasErr("description") ? "is-invalid form-control" : "form-control" }
                        placeholder="Mô tả đặc điểm bất động sản... "
                        onChange={handleChange}
                        >{ values.description }</textarea>
                        { errors.getError('description') && <div className="invalid-feedback"> { errors.getError('description') } </div> }
                    </div>
                </div>
                <div className="col-12 col-md-6">
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
                        { values.project == DEFAULT_NONE_SELECT && <small className="form-text text-muted">Bạn chưa chọn hoặc thêm thông tin căn hộ.</small> }
                        { hasErr("project") &&  <div className="invalid-feedback"> { errors.getError("project") } </div> }
                    </div>
                </div>
                
                {
                    values.project.id && (
                        <div className='col-12'>
                            <a target='_blank' href={ `${CONFIG.REACT_ASSET}/apartment/project/${values.project.id}` }>
                                bấm để xem chi tiết
                            </a>
                            <div dangerouslySetInnerHTML={{ __html: values.project.short_introduction }} />
                        </div>
                    )
                }
                {
                    ! values.project.id && values.project.label && (
                        <div className='col-12'> { values.project.label } </div>
                    )
                }
            </div>
            
        </div>
    )
})

export default ApartmentInfo