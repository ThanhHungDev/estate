@extends('admin._layout')

@section('title', 'Thêm bài viết')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/admin/app.js') }}"></script>
    <script>
        var ADMIN_DELETE_SLIDER = "{{ Route('ADMIN_DELETE_SLIDER', ['id' => null ])}}";
        function deleteComponent( id, element ){

            var result = confirm("Có chắc muốn xóa không?")
            if(typeof ADMIN_DELETE_SLIDER == 'undefined'){
                
                showErrorSystem("ADMIN_DELETE_SLIDER")
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
                    url: ADMIN_DELETE_SLIDER + '/' +id , 
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


@section('page_title', 'danh sách slider')

@section('content_admin')
<div class="page__slider-load admin-main-content">
    
    <div class="row block-content">
        <div class="col-12 bg-white shadows-1 px-3 py-3 table-list">
            <div class="row thead-list">
                <div class="col-1">image</div>
                <div class="col-3">name</div>
                <div class="col-7">excerpt</div>
                <div class="col-1">#remove#</div>
            </div>
            @foreach( $sliders as $slider)
            <div class="row trow-list">
                <div class="col-1 trow_list__wrapper_image">
                    <img class="item_image" src="{{ $slider->src }}" />
                </div>
                <div class="col-3">
                    <a href="{{ Route("ADMIN_STORE_SLIDER", ['id' =>  $slider->id]) }}">
                        {{ $slider->getName(30) }}
                    </a>
                </div>
                <div class="col-7">{{ $slider->getExcerpt(100) }}</div>
                <div class="col-1">
                    <button type="button"
                    onclick="deleteComponent('{{ $slider->id }}', this)"
                    class="bg-transparent btn-remove-row">
                        <i class="hero-icon hero-delete-variant"></i>
                    </button>
                </div>
            </div>
            @endforeach

            <div class="pagi">
                {{ $sliders->onEachSide(3)->links("pagination::default") }}
            </div>

        </div>
    </div>
</div>
@endsection
