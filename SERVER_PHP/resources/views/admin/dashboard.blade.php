@extends('admin._layout')

@section('title', 'Trang Quản Trị')
@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/admin/app.js') }}"></script>
@endsection

@section('content_admin')
<div class="page__dashboard">
    <div class="page__post-load admin-main-content">
        
        <div class="row block-content ">
            <div class="col-12 bg-white search">
                <form class="form-inline" action="" method="GET">
                    <label for="router_admin">không tính admin:</label>
                    <select name="router_admin">
                        <option value="0">không tính admin</option>
                        <option value="1">có tính admin</option>
                    </select>
                    <button type="submit">Tìm Kiếm</button>
                </form>
            </div>

            <div class="col-12 bg-white shadows-1 py-5 table-list">
                <div class="row thead-list">
                    <div class="col-2 wrap-break-word">at_time</div>
                    <div class="col-2 wrap-break-word">referer</div>
                    <div class="col-1 wrap-break-word">TYPE</div>
                    <div class="col-1 wrap-break-word">method</div>
                    <div class="col-3 wrap-break-word">uri</div>
                    <div class="col-3 wrap-break-word">TYPE</div>
                </div>
                @foreach( $requestTimes as $requestTime)
                <div class="row trow-list">
                    <div class="col-2 wrap-break-word">
                        {{ $requestTime->at_time }} <br />
                        {{ $requestTime->router }}
                    </div>
                    <div class="col-2 wrap-break-word">
                        <a href="{{ $requestTime->referer }}">
                            {{ $requestTime->referer }}
                        </a>
                    </div>
                    <div class="col-1 wrap-break-word">
                        <a href="{{ Route('ADMIN_SHOW_REQUEST', ['id' => $requestTime->request_id ]) }}">
                            @if($requestTime->bucket == 1 ) 
                            today
                            @elseif( $requestTime->bucket == 7 )
                            tuần qua 
                            @elseif( $requestTime->bucket == 30 )
                            tháng qua
                            @else
                            năm qua
                            @endif
                        </a>
                        
                    </div>
                    <div class="col-1 wrap-break-word">
                        {{ $requestTime->method }}
                    </div>
                    <div class="col-3 wrap-break-word">
                        <a href="{{ asset($requestTime->uri) }}">{{ asset($requestTime->uri) }}</a>
                    </div>
                    <div class="col-3 wrap-break-word">
                        @php
                        $request = $requestTime->request;
                        @endphp
                        chi tiết request
                        @php $request->detectInfor() @endphp
                        thông tin: <br />
                        "ip": {{ $request->ip_infor }}<br />
                        +"city": {{ $request->city }}<br />
                        +"region": {{ $request->region }}<br />
                        +"country": {{ $request->country }}
                    </div>
                </div>
                @endforeach
                <div class="pagi">
                    {{ $requestTimes->onEachSide(3)->links("pagination::default") }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection


@section('page_title', 'Trang dashboard nè')

