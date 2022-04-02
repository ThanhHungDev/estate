@extends('admin._layout')

@section('title', 'xem danh sách request')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/admin/app.js') }}"></script>
    <script>
        var ADMIN_DELETE_REQUEST = "{{ Route('ADMIN_DELETE_REQUEST', ['id' => null ])}}";
        function deleteComponent( id, element ){

            var result = confirm("Có chắc muốn xóa không?")
            if(typeof ADMIN_DELETE_REQUEST == 'undefined'){
                
                showErrorSystem("ADMIN_DELETE_REQUEST")
            }
            if (result) {
                /// delete
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': "{{ csrf_token() }}"
                    }
                });
                $.ajax({
                    type: "DELETE",
                    url: ADMIN_DELETE_REQUEST + '/' +id , 
                    data : {},
                    dataType:"JSON",
                    success: function(response){
                        if(response.status == 200){
                            $( element ).closest('.row').remove();
                        }
                    }
                });
            }
        }
    </script>
@endsection

@section('page_title', 'xem danh sách request')

@section('content_admin')
<div class="page__post-load admin-main-content">
    <div class="row block-content ">
        
        <div class="col-12 bg-white shadows-1 px-3 py-3 table-list">
            <div class="row thead-list">
                <div class="col-1">user name</div>
                <div class="col-1">ip</div>
                <div class="col-2">thời điểm <br/> sau cùng </div>
                <div class="col-1">method <br/> sau cùng</div>
                <div class="col-2">uri <br/> sau cùng</div>
                <div class="col-2">router <br/> sau cùng</div>
                <div class="col-2">agent</div>
                <div class="col-1">số lượng</div>
            </div>
            @foreach( $requests as $request)
            <div class="row trow-list">
                <div class="col-1 wrap-break-word">
                    {{ $request->id }} <br /> 
                    {{ $request->getUserNameUserRequest() }} <br /> 
                    <a href="{{ Route('ADMIN_SHOW_REQUEST', ['id' => $request->id ]) }}" target="_blank" rel="noopener noreferrer">
                        chi tiết
                    </a>
                </div>
                <div class="col-1 wrap-break-word">{{ $request->ip }}</div>
                <div class="col-2 wrap-break-word">
                    {!! $request->getLastestTime() !!}<br />
                    chi tiết request
                    @php $request->detectInfor() @endphp
                    thông tin: <br />
                    "ip": {{ $request->ip_infor }}<br />
                    +"city": {{ $request->city }}<br />
                    +"region": {{ $request->region }}<br />
                    +"country": {{ $request->country }}
                </div>
                <div class="col-1 wrap-break-word">{{ $request->getLastestMethod() }}</div>
                <div class="col-2 wrap-break-word">
                    {{ $request->getLastestUri() }}
                    <br />
                    @if ($request->getLastestMethod() == 'GET')
                    <a target="_blank" rel="noopener noreferrer" href="{{ asset($request->getLastestUri()) }}">đi đến trang</a>
                    @endif
                    <br />
                    lastest referer: 
                    {{ $request->getLastestReferer() }}
                </div>
                <div class="col-2 wrap-break-word">
                    {{ $request->getLastestRouter() }} <br />
                    @php 
                    $latlong = $request->loc;
                    if(strpos($latlong, ',') === false){

                        $lat  = Config::get('app.map_lat');
                        $long = Config::get('app.map_long');
                    }else{

                        list($lat, $long ) = explode(",", $latlong);
                    }
                    @endphp
                    +"loc": {{ $latlong }}<br />
                    +"postal": {{ $request->postal }}<br />
                    +"timezone": {{ $request->timezone }}<br />
                </div>
                <div class="col-2 wrap-break-word">{!! $request->getAgentRequest() !!}</div>
                <div class="col-1 wrap-break-word text-center">
                    {!! $request->count !!} 
                    <br />
                    <button type="button"
                    onclick="deleteComponent('{{ $request->id }}', this)"
                    class="bg-transparent btn-remove-row">
                        <i class="hero-icon hero-delete-variant"></i>
                    </button>
                </div>
            </div>
            @endforeach

            <div class="pagi">
                {{ $requests->onEachSide(3)->links("pagination::default") }}
            </div>

        </div>
    </div>
</div>
@endsection
