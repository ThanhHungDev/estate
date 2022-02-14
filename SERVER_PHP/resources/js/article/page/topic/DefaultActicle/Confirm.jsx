import React from "react"
import { connect } from "react-redux"
import SeeMore from "../../../general/SeeMore"

function Confirm({ data, CONFIG }){

    function renderTypePost(type){
        
        if( type == CONFIG.CONSTANT.POST_TYPE.SALE ){
            return <p className="d-block font-weight-light text-muted pt-2">Bạn đăng bài <span className="text-color-pink"> để bán </span></p>
        }else if( type == CONFIG.CONSTANT.POST_TYPE.BUY ){
            return <p className="d-block v">Bạn đăng bài <span className="text-color-pink"> để mua </span></p>
        }else if( type == CONFIG.CONSTANT.POST_TYPE.LEASE ){
            return <p className="d-block font-weight-light text-muted pt-2">Bạn đăng bài <span className="text-color-pink"> cho thuê </span></p>
        }
        return <p className="d-block font-weight-light text-muted pt-2">Bạn đăng bài <span className="text-color-pink"> tìm nơi thuê </span></p>
    }

    function renderContentTitle(){
        if( !data.title || !data.content ){
            return null
        }
        return (
            <li>
                <a className="h6 text-capitalize font-weight-bold">Nội dung hiện thị trong tìm kiếm</a>
                <div className="row pt-2">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <tbody>
                                    <tr>
                                        <th scope="row" className="w-25">Tiêu đề Bài đăng</th>
                                        <td className="w-75">{ data.title }</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="w-25">
                                            Nội dung bài đăng
                                            <br />
                                            <span className="text-color-pink size-sm"><strong>*</strong>khi copy sẽ bị loại bỏ những tag không được chấp thuận</span>
                                        </th>
                                        <td className="w-75"><SeeMore content={data.content}/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
    
    return (
        <div className="confirm">
            <div className="row">
                <div className="col-12">
                    <ul className="timeline">
                        <li>
                            <a className="h6 text-capitalize font-weight-bold">Bạn đăng bài để</a>
                            { renderTypePost(data.type ) }
                        </li>
                        {
                            data.title
                            ? renderContentTitle()
                            : null
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        locations: state.location
    }
}
export default connect(mapStateToProps)(Confirm)