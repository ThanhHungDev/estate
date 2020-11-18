@extends('admin._layout')

@section('title', 'Thêm bài viết')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/admin/app.min.js') }}"></script>
    <script>
        var ADMIN_UPDATE_USER_PERMISSION = "{{ Route('ADMIN_UPDATE_USER_PERMISSION', ['id' => null ])}}";
        function updateComponent( userId, permissionId , element ){

            var result = confirm("Có chắc muốn chỉnh sửa không?")
            if(typeof ADMIN_UPDATE_USER_PERMISSION == 'undefined'){
                
                showErrorSystem("ADMIN_UPDATE_USER_PERMISSION")
            }
            if (result) {
                /// delete
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': "{{ csrf_token() }}"
                    }
                });
                var update = element.checked
                
                var data = {
                    update : update ? 1 : 0,
                    permission : permissionId
                }
                $.ajax({
                    type: "PUT",
                    url: ADMIN_UPDATE_USER_PERMISSION + '/' +userId , 
                    data : data,
                    dataType:"JSON",
                    success: function(){
                        if(response.status != 200){
                            alert("lỗi update không thành công")
                            location.reload();
                        }
                    }
                });
            }
        }
    </script>
@endsection


@section('page_title', 'danh sách quyền của user bạn có thể edit' )

@section('content_admin')
<div class="page__user admin-main-content">

    <div class="row block-content">
        <div class="col-12 bg-white shadows-1 px-3 py-3 table-list">
            <div class="row thead-list">
                <div class="col-1">id</div>
                <div class="col-3">permission</div>
                <div class="col-1">check</div>
            </div>
            
            @foreach( $permissions as $permission)
            <div class="row trow-list">
                <div class="col-1">
                    {{ $permission->id }}
                </div>
                <div class="col-3">
                    {{ $permission->name }}
                </div>
                <div class="col-1">
                    @if($user->role->type == Config::get('constant.TYPE-PERMISSION.USER'))
                    <input type="checkbox" 
                    onchange="updateComponent('{{ $user->id }}', '{{ $permission->id }}', this)"
                    {{ $permissionUsers->contains('name' , $permission->name) ? "checked" : '' }} />
                    @endif
                </div>
            </div>
            @endforeach

        </div>
    </div>
</div>
@endsection
