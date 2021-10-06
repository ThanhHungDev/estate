import React from "react"

const renderTitleHeader = currentStep => {

    switch(currentStep) {
        case 1:
            return 'Chọn Kiểu Đăng'
        case 2: 
            return 'Thông Tin Liên Hệ'
        case 3: 
            return 'Cá Nhân Hay Môi Giới'
        case 4: 
            return 'Thông tin bds'
        case 5: 
            return 'Thêm Hình Ảnh/Video'
        case 6: 
            return 'Thêm Diện Tích/Giá'
        case 7: 
            return 'Thông tin bds'
        default:
            return 'Nhập Thông Tin Liên Hệ';
    }
}
const Header = (props) => {
    let { SW } = props

    const continueStepInHeader = () => {
        console.log("vào continueStepInHeader of Header")
        props.parentCallback()
    }


    const width = Math.floor(SW.currentStep * 100 / SW.totalSteps) + '%'
    return (
        <div className="apartment__header--wrapper">
            <div className="apartment__header">
                {
                    SW.currentStep == 1
                    ? null
                    : <button className='btn apartment__btn-prev' onClick={SW.previousStep}><i className="fas fa-chevron-left"></i></button>
                }
                <span className="apartment__title">
                { renderTitleHeader(SW.currentStep) }
                </span>
                {
                    SW.currentStep == SW.totalSteps
                    ? null
                    : <button className='btn apartment__btn-next' onClick={ continueStepInHeader }><i className="fas fa-chevron-right"></i></button> 
                    // onClick={() => SW.goToNamedStep('progress')}
                }
            </div>
            <div className="apartment__header-progress progress progress-success bg-color-indeterminate">
                <div className="progress-bar" style={ { width: width } } ></div>
            </div>
        </div>
    )
};

export default Header


// https://github.com/jcmcneal/react-step-wizard
// <h2>Step {this.props.currentStep}</h2>
// <p>Total Steps: {this.props.totalSteps}</p>
// <p>Is Active: {this.props.isActive}</p>
// <!-- Functions -->
// <p><button onClick={this.props.previousStep}>Previous Step</button></p>
// <p><button onClick={this.props.nextStep}>Next Step</button></p>
// <p><button onClick={()=>this.props.goToStep(2)}>Step 2</button></p>
// <p><button onClick={this.props.firstStep}>First Step</button></p>
// <p><button onClick={this.props.lastStep}>Last Step</button></p>