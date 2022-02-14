import React from "react";
import { Switch, Route, withRouter,  Redirect } from "react-router-dom";
// import Header from "../Common/Header/Header";
import { FORoutesString, RoutesString } from "Components/Modules/routesString";
import { useRecoilValue } from "recoil";
import { AuthenticatedState,UserAccountState } from "Components/Modules/Store/Common.recoil";
import Login from "Components/Pages/Login/Login";
import ResetPassword from 'Components/Pages/Login/ResetPassword';
import BO from "Components/Pages/BO/Routers/Router"
import FO from "Components/Pages/FO/Routers/Router"
// const RenderHeader = (isHeader: Boolean) => {
//   if (!isHeader) {
//     return <Header />;
//   }
// };

function RoutesWrapper() {
  
  const authenticated = useRecoilValue(AuthenticatedState);
  const userState=useRecoilValue(UserAccountState)
  



  // const getRedirectPath = (path) => {
  //   if(path === RoutesString.ContentsMng){
  //     return RoutesString.Album;
  //   }else if(path === RoutesString.UserMng){
  //     return RoutesString.Member;
  //   }
  // }

  return (
    <>
      {/* {RenderHeader(isHistoryCheck())} */}
      <Switch>
        <Route path="/" exact>
          {!authenticated && <Redirect to={RoutesString.Login}></Redirect>}
        </Route>
        
        <Route path={RoutesString.Login}component={Login} exact={true}/>
        <Route path={RoutesString.ResetPw}component={ResetPassword} exact={true}/>
        {/* {userState} */}
        
        <Route path={RoutesString.Main}component={BO} />
        <Route path={FORoutesString.Main}component={FO} />

      </Switch>
      
    </>
  );
}

export default withRouter(RoutesWrapper);