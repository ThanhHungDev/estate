import React from "react"


const HeaderApartment = ({ SW }) => (
    <div>
        <h4>Control from outside component</h4>
        <button className={'btn btn-secondary'} onClick={SW.previousStep}>Previous Step</button>
        &nbsp;
        <button className={'btn btn-secondary'} onClick={SW.nextStep}>Next Step</button>
        &nbsp;
        <button className={'btn btn-secondary'} onClick={() => SW.goToNamedStep('progress')}>Go to 'progress'</button>
    </div>
);

export default HeaderApartment