@extends('admin._layout')

@section('title', 'Thêm bài viết')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/admin/app.min.js') }}"></script>
    <script>
        var ADMIN_DELETE_ROLE = "{{ Route('ADMIN_DELETE_ROLE', ['id' => null ])}}";
        function deleteComponent( id, element ){

            var result = confirm("Có chắc muốn xóa không?")
            if(typeof ADMIN_DELETE_ROLE == 'undefined'){
                
                showErrorSystem("ADMIN_DELETE_ROLE")
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
                    url: ADMIN_DELETE_ROLE + '/' +id , 
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


@section('page_title', 'danh sách role' )

@section('content_admin')
<div class="page__role admin-main-content">

    <div class="row block-content">
        <div class="col-12 bg-white shadows-1 px-3 py-3 table-list">
            <div class="row thead-list">
                <div class="col-1">id</div>
                <div class="col-3">name</div>
                <div class="col-1">type</div>
                <div class="col-1">#remove#</div>
            </div>
            @foreach( $roles as $role)
            <div class="row trow-list">
                <div class="col-1">
                    {{ $role->id }}
                </div>
                <div class="col-3">
                    {{ $role->name }}
                </div>
                <div class="col-1">
                    {{ $role->type }}    
                </div>
                <div class="col-1">
                    <button type="button"
                    onclick="deleteComponent('{{ $role->id }}', this)"
                    class="bg-transparent btn-remove-row">
                        <i class="hero-icon hero-delete-variant"></i>
                    </button>
                </div>
            </div>
            @endforeach

            <div class="pagi">
                {{ $roles->onEachSide(3)->links() }}
            </div>

        </div>
    </div>
</div>
@endsection
