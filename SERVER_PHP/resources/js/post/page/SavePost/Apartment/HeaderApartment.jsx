import React from "react"

const renderTitleHeaderApartment = currentStep => {

    switch(currentStep) {
        case 1:
            return 'Chọn kiểu đăng'
        case 2: 
            return 'Nhập thông tin liên hệ'
        case 3: 
            return 'Bạn Là Cá Nhân Hay Môi giới'
        default:
            return 'Nhập thông tin liên hệ';
    }
}
const HeaderApartment = (props) => {
    let { SW } = props

    const continueStepInHeader = () => {
        console.log("vào continueStepInHeader of HeaderApartment")
        props.parentCallback()
    }


    const width = Math.floor(SW.currentStep * 100 / SW.totalSteps) + '%'
    return (
        <div>
            <div className="apartment__header">
                {
                    SW.currentStep == 1
                    ? null
                    : <button className='btn apartment__btn-prev' onClick={SW.previousStep}><i className="fas fa-chevron-left"></i></button>
                }
                <span className="apartment__title">
                { renderTitleHeaderApartment(SW.currentStep) }
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

export default HeaderApartment


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