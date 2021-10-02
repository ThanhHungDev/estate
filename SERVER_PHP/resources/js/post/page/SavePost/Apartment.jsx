import React, { useState, forwardRef, useRef, useImperativeHandle } from "react"
import { connect } from "react-redux"
import StepWizard from "react-step-wizard"

import HeaderApartment from "./Apartment/HeaderApartment"
import FooterApartment from "./Apartment/FooterApartment"
import UserPostInfomation from "./Partial/UserPostInfomation"
import TypePost from "./Partial/TypePost"
import RoleUser from "./Partial/RoleUser"
import GalleryPost from "./Partial/GalleryPost"
import AreaPrice from "./Partial/AreaPrice"
import ApartmentInfo from "./Partial/ApartmentInfo"
import ConfirmApartment from "./Partial/ConfirmApartment"


import userAPI from "../../../service/user.api"
import ContentApartment from "./Partial/ContentApartment"
import ApartmentOrtherInfor from "./Partial/ApartmentOrtherInfor"
import SaveApartmentSuccess from "./Apartment/SaveApartmentSuccess"
import SaveApartmentError from "./Apartment/SaveApartmentError"


/// lưu căn hộ chung cư
function Apartment( props ){

    const [ form, setForm ]         = useState({})
    const [ state, updateState]     = useState({})
    const [ progress, setProgress ] = useState(false)
    const [ success, setSuccess ]   = useState(false)
    const [ error, setError ]       = useState(false)

    // let refRolePost = React.createRef()
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
        /// fetch api
        console.log( "dữ liệu lưu lên server", form )
        const { 
            title, content, area, price, horizontal, vertical,
            commune, home_number, street,
            direction, direction_balcony, negotiate, room, wc, bathroom,
            role,
            type,
            project,
            images, videos
        } = form

        const formData = {
            project, //// ===========> đặc biệt cái field này dùng trong đây để đẩy lên tính riêng nha
            images, 
            videos,
            categories: category,

            /// dành cho user
            user_commune_id: commune,
            home_number: home_number,
            street: street,
            role: role,

            /// dành cho product 
            category_id: category,
            usertype: type, /// xác định bài đăng thuộc thuê / cho thuê hay bán / mua 
            title: title,
            content: content,
            public: CONFIG.CONSTANT.TYPE_SAVE.PUBLIC,
            type: CONFIG.CONSTANT['TYPE-PRODUCT'].HOUSE,
            direction: direction, 
            direction_balcony: direction_balcony, 
            horizontal: horizontal, /// chiều rộng của bất động sản
            vertical: vertical, /// chiểu dài của bất động sản
            area: area, /// tổng diện tích của bất động sản
            price: price, /// tổng giá của bất động sản
            unit_price: CONFIG.UNIT.PRICE.DEFAULT.VALUE, 
            negotiate: negotiate, 
            extensions: { room, wc, bathroom }
        }
        if( project?.__isNew__ ){
            /// thêm mới project
            formData.commune_id = project.commune /// thông qua project appartment
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
        
    }
    
    /// ban đầu state là {} => SW là undefine
    const { SW } = state
    const { CONFIG, AUTH, device } = props

    if( success ){
        return <SaveApartmentSuccess />
    }

    if( error ){
        return <SaveApartmentError error={JSON.stringify(error)} />
    }

    return (
        <div className="apartment" style={{ minHeight: device.calcHeightSubtractHeight + "px" }}>

            <div className={ "apartment__wrapper d-none " + ( progress && 'd-block') }>
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

            { SW && <HeaderApartment SW={SW} parentCallback={continueStep} /> }
            
            <div className={ "apartment__wrapper " + ( progress && 'd-none') }>
                <StepWizard
                    isHashEnabled
                    onStepChange={onStepChange}
                    instance={setInstance}
                >
                    <TypePost ref={ refType } CONFIG={CONFIG}/>
                    <UserPostInfomation ref={ refUserPostInfor } CONFIG={CONFIG} AUTH={AUTH}/>
                    <RoleUser ref={ refRoleUser}  CONFIG={CONFIG} OLD={form} />
                    <ContentApartment ref={ refContent } CONFIG={CONFIG}/>
                    <GalleryPost ref={ refGalleryUser}  CONFIG={CONFIG}/>
                    <AreaPrice ref={ refAreaPrice } CONFIG={CONFIG}/>
                    <ApartmentOrtherInfor ref={ refOrtherInfo } CONFIG={CONFIG} OLD={form} />
                    <ApartmentInfo ref={ refApartmentInfo }  CONFIG={CONFIG} AUTH={AUTH}/>
                    <ConfirmApartment data={form} CONFIG={CONFIG} />
                </StepWizard>
            </div>
            
            <FooterApartment currentStep={SW?.currentStep} parentCallback={continueStep} fetchApiSave={ saveApartment } />
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