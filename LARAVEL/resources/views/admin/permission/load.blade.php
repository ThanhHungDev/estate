@extends('admin._layout')

@section('title', 'Thêm bài viết')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/admin/app.min.js') }}"></script>
@endsection


@section('page_title', 'danh sách permission' )

@section('content_admin')
<div class="page__permission admin-main-content">

    <div class="row block-content">
        <div class="col-12 bg-white shadows-1 px-3 py-3 table-list">
            <div class="row thead-list">
                <div class="col-1">id</div>
                <div class="col-3">name</div>
            </div>
            @foreach( $permissions as $permission)
            <div class="row trow-list">
                <div class="col-1">
                    {{ $permission->id }}
                </div>
                <div class="col-3">
                    {{ $permission->name }}
                </div>
            </div>
            @endforeach

            <div class="pagi">
                {{ $permissions->onEachSide(3)->links() }}
            </div>

        </div>
    </div>
</div>
@endsection
