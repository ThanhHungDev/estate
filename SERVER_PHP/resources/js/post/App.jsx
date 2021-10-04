import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Categories from './page/Categories'
import SavePost from "./page/SavePost"
import VerifyPhone from "./VerifyPhone"
import ApartmentProjectDetail from './page/ApartmentProjectDetail'


function App( props ){

    const { auth, CATEGORIES, CONFIG } = props
    console.log(auth, "authauthauthauth")

    if( !auth ){
        return (
            <div className='guest'>
                tài khoản xác thực không thành công! <br />
                báo với admin hệ thống nếu bạn cảm thấy có bất thường<br />
                <a href={ CONFIG.WEB.LOGOUT } className="btn btn-logout-and-report-admin">logout và váo với admin về hiện tượng</a>
            </div>
        )
    }
    if( !auth.phone_verify ){ 
        return <VerifyPhone />
    }
    return (
        <div className="AppComponent post" id="Application">
            <BrowserRouter basename={CONFIG.WEB.USER_POST}>
                
                <Switch>
                    <Route exact path="/" component={Categories} />
                    <Route path="/apartment/project/:id" component={ ApartmentProjectDetail } />
                    {
                        // CATEGORIES.map( cat => <Route key={cat.id} path={ `/${cat.slug}` } component={ SavePost } />  ) cách này bị không lấy được params
                        CATEGORIES.map( cat => <Route key={cat.id} path={ `/${cat.slug}` } render={ props => <SavePost {...props } category={cat} /> }/>   )
                    }
                    
                </Switch>
            </BrowserRouter>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        auth      : state.auth,
        CATEGORIES: state.categories,
        CONFIG    : state.config,
    }
}
export default connect(mapStateToProps)(App)
