import React, { useState, useRef } from "react"
import StepWizard from "react-step-wizard"

import Header from "./Header"
import Footer from "./Footer"
import Confirm from "./Confirm"
import TypePost from "./TypePost"
import ContentTitle from "./ContentTitle"
import userApi from "../../../../service/user.api"
import SaveArticleSuccess from "./SaveArticleSuccess"

function DefaultActicle({ category, CONFIG, OLD }){

    const [ form, setForm ]         = useState( OLD ?? {})
    const [ state, updateState]     = useState({})
    const [ progress, setProgress ] = useState(false)
    const [ success, setSuccess ]   = useState(false)
    const [ alert, setAlert ]       = useState(false)

    const refNeoScroller = useRef()
    const refType        = useRef()
    const refContent     = useRef()

    // Do something on step change
    const onStepChange = (stats) => {

        console.log(form, "đã cập nhật dữ liệu mới")
        updateState({
            ...stats,
            ...state,
            ...form
        })
    }

    const setInstance = SW => updateState({
        ...form,
        ...state,
        SW,
    })

    const saveArticle = async () => {
        // create progress
        setProgress(true)
        window.scrollTo(0, refNeoScroller.current.offsetTop)
        // fetch api
        const formData = {
            ...form,
            category_id: category.id,
            // public     : CONFIG.CONSTANT.TYPE_SAVE.PUBLIC,
        }
        if( OLD?.id ) formData.id = OLD.id
        const response = await userApi.saveArticleDefault(formData)
        setProgress(false)
        console.log(response)
        if( response.status >= 300 ){
            setAlert(response.data?.message)
            return false
        }
        // data:
        //     input: {category_id: 34, posttype: 2, title: 'ạn cần nhập thông tin tiêu đề và nội du', content: '<p>ạn cần nhập thông tin tiêu
        //     production: {content: '<p>ạn cần nhập thông tin tiêu đề và nội du</p>\n<p>…p>\n<p>ạn cần nhập thông tin tiêu đề và 
        //     token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3QiLCJpYXQiOjE2NDQxMzE3NzEsImV4cCI6
        // message: "create article thành công"
        // status: 200

        setSuccess(response?.data?.production)
        return false;
    }

    const continueStep = () => {
        if( SW.currentStep == 1 ){
            const posttype = refType.current.validateFromStep()
            if( posttype ){
                setForm({ ...form, posttype })
                SW.nextStep()
            }
        }
        else if(SW.currentStep == 2){
            const contentTitle = refContent.current.validateFromStep()
            if( contentTitle ){
                setForm({ ...form, ... contentTitle })
                SW.nextStep()
            }
        }
        window.scrollTo(0, refNeoScroller.current.offsetTop)
    }
    
    /// ban đầu state là {} => SW là undefine
    const { SW } = state

    if( success ) return <SaveArticleSuccess production={ success } CONFIG={ CONFIG } />

    return (
        <div className="apartment">

            <div ref={ refNeoScroller } className={ "apartment__wrapper d-none " + ( progress && 'd-block') }>
                <p> Đang lưu trữ dữ liệu </p>
                <div className="progress progress-purple">
                    <div className="progress-loadding"></div>
                </div>
            </div>

            <div className={ "apartment__wrapper " + ( progress && 'd-none') }>
                <Header SW={SW} continueStepCallback={ continueStep } /> 
                { alert && <div className="alert alert-danger mt-2" role="alert"> { alert } </div> }
                <StepWizard
                    // isHashEnabled
                    onStepChange={onStepChange}
                    instance={setInstance} 
                >
                    <TypePost ref={ refType } CONFIG={CONFIG} OLD={form} />
                    <ContentTitle ref={ refContent } CONFIG={CONFIG} OLD={form} />
                    <Confirm data={ form } CONFIG={CONFIG} />
                </StepWizard>
                <Footer isSubmit={ SW?.currentStep == SW?.totalSteps } continueStepCallback={ continueStep } fetchApiSave={ saveArticle } />
            </div>
            
            <div className={ "footer__wrapper " + ( progress && 'd-none') }>
                
            </div>
        </div>
    )
}

export default DefaultActicle