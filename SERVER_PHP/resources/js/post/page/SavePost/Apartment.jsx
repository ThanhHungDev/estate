import React, { useState, forwardRef, useRef, useImperativeHandle } from "react"
import { connect } from "react-redux"
import StepWizard from "react-step-wizard"

import Header from "./Apartment/Header"
import Footer from "./Apartment/Footer"
import Info from "./Apartment/Info"
import Confirm from "./Apartment/Confirm"
import OrtherInfor from "./Apartment/OrtherInfor"

import UserPostInfomation from "./Partial/UserPostInfomation"
import TypePost from "./Partial/TypePost"
import RoleUser from "./Partial/RoleUser"
import GalleryPost from "./Partial/GalleryPost"
import AreaPrice from "./Partial/AreaPrice"
import ContentTitle from "./Partial/ContentTitle"

import SaveProductSuccess from "./Partial/SaveProductSuccess"
import SaveProductError from "./Partial/SaveProductError"

import userAPI from "../../../service/user.api"

/// lưu căn hộ chung cư
function Apartment( props ){

    
    const [ form, setForm ]         = useState( props.OLD ?? {})
    const [ state, updateState]     = useState({})
    const [ progress, setProgress ] = useState(false)
    const [ success, setSuccess ]   = useState(false)
    const [ error, setError ]       = useState(false)

    // let refRolePost = React.createRef()
    const refHeader        = useRef()
    const refType          = useRef()
    const refUserPostInfor = useRef()
    const refRoleUser      = useRef()
    const refGalleryUser   = useRef()
    const refContent       = useRef()
    const refAreaPrice     = useRef()
    const refOrtherInfo    = useRef()
    const refApartmentInfo = useRef()

    // Do something on step change
    const onStepChange = (stats) => {

        console.log(form, "onStepChange đã cập nhật dữ liệu mới");
        updateState( {
            ...stats,
            ...state,
            ...form
        } )
    }

    const setInstance = SW => updateState({
        ...form,
        ...state,
        SW,
    })

    const saveApartment = () => {

        //// khi chạy 1 cái apartment cũng phải truyền cái category người dùng đã chọn vào
        const { category, CONFIG } = props
        /// create progress
        setProgress(true)
        window.scrollTo(0, refHeader.current.offsetTop)
        /// fetch api
        console.log( "dữ liệu lưu lên server", form )
        const { 
            title, content, area, price, horizontal, vertical,
            commune, home_number, street,
            direction, direction_balcony, negotiate, room, wc, bathroom,
            role,
            type,
            project,
            images, videos,
            edit
        } = form

        const formData = {
            edit: edit,
            project, //// ===========> đặc biệt cái field này dùng trong đây để đẩy lên tính riêng nha
            images, 
            videos,
            categories: category,

            /// dành cho user
            commune_id: commune,
            home_number: home_number,
            street: street,
            role: role, /// role là để xác định cái người này là cá nhân hay môi giới

            /// dành cho product 
            project_id: project.id,
            category_id: category.id,
            posttype: type, /// xác định bài đăng thuộc thuê / cho thuê hay bán / mua 
            title: title,
            content: content,
            public: CONFIG.CONSTANT.TYPE_SAVE.PUBLIC,
            type: CONFIG.CONSTANT['TYPE-PRODUCT'].HOUSE, /// bán nhà hay bán đất
            direction: direction, 
            direction_balcony: direction_balcony, 
            horizontal: horizontal, /// chiều rộng của bất động sản
            vertical: vertical, /// chiểu dài của bất động sản
            area: area, /// tổng diện tích của bất động sản
            price: price, /// tổng giá của bất động sản
            unit_price: CONFIG.UNIT.PRICE.DEFAULT.VALUE, 
            negotiate: negotiate, 
            extensions: { room, wc, bathroom, project, category }
        }
        if( project?.__isNew__ ){
            /// thêm mới project
            formData.product_commune_id = project.commune /// thông qua project appartment
        }

        userAPI
        .saveApartment(formData)
        .then( response => {
            const { data } = response
            setProgress(false)
            console.log( data )
            setSuccess("thành công rồi nè")
        })
        .catch(error => {
            setProgress(false)
            console.log("ERROR:: ",error)
            setError( error )
        });
    }

    const continueStep = (childData) => {
        
        if( SW.currentStep == 1 ){
            /// validate đúng thì mới đc next step
            const type = refType.current.validateFromStep()
            if( type ){
                setForm({ ...form, type })
                SW.nextStep()
            }
        }else if(SW.currentStep == 2){

            const infor = refUserPostInfor.current.validateFromStep()
            if( infor ){
                setForm({ ...form, ... infor })
                SW.nextStep()
            }
        }else if(SW.currentStep == 3){

            const role = refRoleUser.current.validateFromStep()
            if( role ){
                setForm({ ...form, role })
                SW.nextStep()
            }
        }else if(SW.currentStep == 4){
            
            const contentTitle = refContent.current.validateFromStep()
            if( contentTitle ){
                setForm({ ...form, ... contentTitle })
                SW.nextStep()
            }
        }else if(SW.currentStep == 5){

            const { images, videos } = refGalleryUser.current.validateFromStep()
            if( images && images.length ){
                setForm({ ...form, images, videos })
                SW.nextStep()
            }
        }else if(SW.currentStep == 6){
            
            const areaPrice = refAreaPrice.current.validateFromStep()
            if( areaPrice ){
                setForm({ ...form, ... areaPrice })
                SW.nextStep()
            }
        }else if(SW.currentStep == 7){
            
            const ortherInfo = refOrtherInfo.current.validateFromStep()
            if( ortherInfo ){
                setForm({ ...form, ... ortherInfo })
                SW.nextStep()
            }
        }else if(SW.currentStep == 8){

            const apartmentInfo = refApartmentInfo.current.validateFromStep()
            if( apartmentInfo ){
                setForm({ ...form, ... apartmentInfo })
                SW.nextStep()
            }
        }
        window.scrollTo(0, refHeader.current.offsetTop)
    }
    
    /// ban đầu state là {} => SW là undefine
    const { SW } = state
    const { CONFIG, AUTH, device } = props

    if( success ){
        return <SaveProductSuccess />
    }

    if( error ){
        return <SaveProductError error={JSON.stringify(error)} />
    }

    return (
        <div className="apartment" style={{ minHeight: device.calcHeightSubtractHeight + "px" }}>

            <div ref={refHeader} className={ "apartment__wrapper d-none " + ( progress && 'd-block') }>
                <p>
                    Đang lưu trữ dữ liện lên server
                </p>
                <p>
                    { progress }
                </p>
                <div className="progress progress-purple">
                    <div className="progress-loadding"></div>
                </div>
            </div>

            { SW && <Header SW={SW} parentCallback={continueStep} /> }
            
            <div className={ "apartment__wrapper " + ( progress && 'd-none') }>
                <StepWizard
                    isHashEnabled
                    onStepChange={onStepChange}
                    instance={setInstance} 
                >
                    <TypePost ref={ refType } CONFIG={CONFIG} OLD={form} />
                    <UserPostInfomation ref={ refUserPostInfor } CONFIG={CONFIG} AUTH={AUTH} OLD={form}/>
                    <RoleUser ref={ refRoleUser}  CONFIG={CONFIG} OLD={form} />
                    <ContentTitle ref={ refContent } CONFIG={CONFIG} OLD={form} />
                    <GalleryPost ref={ refGalleryUser}  CONFIG={CONFIG} OLD={form} />
                    <AreaPrice ref={ refAreaPrice } CONFIG={CONFIG}  OLD={form} />
                    <OrtherInfor ref={ refOrtherInfo } CONFIG={CONFIG} OLD={form} />
                    <Info ref={ refApartmentInfo }  CONFIG={CONFIG} AUTH={AUTH} OLD={form} />
                    <Confirm data={form} CONFIG={CONFIG} />
                </StepWizard>
            </div>
            
            <div className={ "footer__wrapper " + ( progress && 'd-none') }>
                <Footer currentStep={SW?.currentStep} parentCallback={continueStep} fetchApiSave={ saveApartment } />
            </div>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        CATEGORIES: state.categories,
        CONFIG    : state.config,
        AUTH      : state.auth,
        device    : state.device,
    }
}
export default connect(mapStateToProps)(Apartment)