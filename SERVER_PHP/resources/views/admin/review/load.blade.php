@extends('admin._layout')

@section('title', 'Thêm bài viết')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/admin/app.js') }}"></script>
    <script>
        var ADMIN_DELETE_REVIEW = "{{ Route('ADMIN_DELETE_REVIEW', ['id' => null ])}}";
        function deleteComponent( id, element ){

            var result = confirm("Có chắc muốn xóa không?")
            if(typeof ADMIN_DELETE_REVIEW == 'undefined'){
                
                showErrorSystem("ADMIN_DELETE_REVIEW")
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
                    url: ADMIN_DELETE_REVIEW + '/' +id , 
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


@section('page_title', 'danh sách review')

@section('content_admin')
<div class="page__review-load admin-main-content">
    
    <div class="row block-content">
        <div class="col-12 bg-white shadows-1 px-3 py-3 table-list">
            <div class="row thead-list">
                <div class="col-1">image</div>
                <div class="col-3">topic</div>
                <div class="col-7">excerpt</div>
                <div class="col-1">#remove#</div>
            </div>
            @foreach( $reviews as $review)
            <div class="row trow-list">
                <div class="col-1 trow_list__wrapper_image">
                    <img class="item_image" src="{{ $review->avatar }}" />
                </div>
                <div class="col-3">
                    <a href="{{ Route("ADMIN_STORE_REVIEW", ['id' =>  $review->id]) }}">
                        {{ $review->topic }}
                    </a>
                </div>
                <div class="col-7">{{ $review->getExcerpt(100) }}</div>
                <div class="col-1">
                    <button type="button"
                    onclick="deleteComponent('{{ $review->id }}', this)"
                    class="bg-transparent btn-remove-row">
                        <i class="hero-icon hero-delete-variant"></i>
                    </button>
                </div>
            </div>
            @endforeach

            <div class="pagi">
                {{ $reviews->onEachSide(3)->links("pagination::default") }}
            </div>

        </div>
    </div>
</div>
@endsection
