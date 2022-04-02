import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react'
import Validator from "hero-validate"
import AsyncCreatableSelect from 'react-select/async-creatable'
import projectApi from "../../../../service/apartment.project.api"
import V from "../../../validator/apartment.project"
import SelectLocation from '../SelectLocation'

Validator.setLocale(Validator.languages.vi)

const Info = forwardRef((props, ref) => {
    const DEFAULT_NONE_SELECT = ""

    const refLocation = useRef()


    const [ values, setValues]    = useState({ project: props.OLD?.project || DEFAULT_NONE_SELECT })
    const [ touched, setTouched ] = useState({})
    const [ errors, setErrors ]   = useState(Validator.getEmpty())

    /// add function error custom
    const hasErr = name => {
        return touched[name] && errors.isError(name)
    }

    /// hook react
    useEffect(() => {
        
        setErrors( Validator.validate(values, V.rules) )
    }, [ values, touched ])

    useImperativeHandle(
        ref,
        () => ({
            validateFromStep(){

                /// check xem có chọn không hay bấm không chọn
                if( values.project.__isNew__ ){
                    /// chạy hàm validate tất cả 3 field của location
                    refLocation.current?.validateData()
                    const errors = Validator.validate( values, V.rules)
                    if( errors.hasError ){
                        Object.keys(values).map((key, index) => {
                            touched[key] = true
                        })
                        setTouched(touched)
                        setValues({ ...values })
                        return false
                    }
                }
                return values
            }
        })
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
            callback( [ ... data ])
        })
        .catch(error => {
            console.log("ERROR:: ",error)
            callback([{ value: "0", label: "đã có lỗi tìm kiếm" }])
        })
    }
    
    const handleChangeProject = (event) => {
        console.log(event, "đây là event nha")

        setTouched({ ...touched, [event?.target?.name]: true })
        setValues({ ...values, project: event })
    }

    const getDataSelectChange = data => {
        const { project } = values
        setValues({ project: { ...project, ...data } })
    }

    const showProjectApartment = () => {
        const { CONFIG, AUTH } = props
        if( values.project.__isNew__ ){
            return <div className='col-12'> 
                <div className="row pt-2">
                    <div className="col-12">
                        <h3 className="text-color-warning"><span className="h6 text-muted">Bạn thêm mới dự án:</span> { values.project.label }</h3>
                    </div>
                    <div className="col-12 pt-2">
                        <SelectLocation ref={ refLocation }  CONFIG={CONFIG} OLD={AUTH} passingDataParent={ getDataSelectChange } />
                    </div>
                </div>
            </div>
        }
        if( !values.project.id ){
            return null
        }
        return <div className='col-12'>
            <a target='_blank' href={ `${CONFIG.REACT_ASSET}/apartment/project/${values.project.id}` }>
                bấm để xem chi tiết
            </a>
            <div dangerouslySetInnerHTML={{ __html: values.project.short_introduction }} />
        </div>
    }

    return(
        <div className="user-information position-relative">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="project">Tên khu dân cư / dự án </label>
                        <AsyncCreatableSelect
                            formatCreateLabel={(value) => `Tạo mới dự án: ${value}`}
                            // formatOptionLabel={(option) => option.__isNew__ ? <span>{option.label}</span> : option.label}
                            id="project" 
                            name='project'
                            cacheOptions
                            defaultOptions={ [{ value: "0", label: "nhập dự án bạn muốn tìm" }] }
                            loadOptions={ loadOptions }
                            onChange={ handleChangeProject }
                        />
                        { values.project == DEFAULT_NONE_SELECT && <small className="form-text text-muted">Bạn chưa chọn hoặc thêm thông tin căn hộ.</small> }
                        { hasErr('project') && <div className="d-block invalid-feedback"> { errors.getError('project') } </div> }
                    </div>
                </div>
                { showProjectApartment() }
                <div className="col-12">
                    <div className="alert alert-info mt-3">
                        <p><b>Tìm chung cư bạn sẽ đăng tin:</b></p>
                        <ul>
                            <li>Bạn có thể nhập tìm kiếm căn hộ bạn muốn đăng tin hoặc thêm mới căn hộ</li>
                            <li>Trong trường hợp bạn không tìm thấy căn hộ chung cư bạn muốn bán thì có thể <span className="text-color-red">thêm mới căn hộ</span>.</li>
                        </ul>
                        <p><b>Thêm mới chung cư bạn sẽ đăng tin:</b></p> 
                        <ul>
                            <li>Trong trường hợp bạn đăng căn hộ mới chưa có trên hệ thống, vui lòng nhập vị trí căn hộ bạn sẽ đăng tin.</li>
                        </ul>
                        <p><b>Thông tin căn hộ không bắt buộc:</b></p>
                        <ul>
                            <li>Chúng tôi không bắt buộc bạn phải nhập thông tin căn hộ, nhưng nếu bạn nhập thông tin căn hộ thì hệ thống sẽ hiện thị bài đăng của bạn nhiều hơn đến người dùng</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
})

export default Info