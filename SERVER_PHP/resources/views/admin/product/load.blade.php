@extends('admin._layout')

@section('title', 'Thêm bài viết')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/admin/app.js') }}"></script>
    <script src="{{ asset('js/library/select2.min.js') }}"></script>
    <script>
        var ADMIN_DELETE_PRODUCT = "{{ Route('ADMIN_DELETE_PRODUCT', ['id' => null ])}}";
        function deleteComponent( id, element ){

            var result = confirm("Có chắc muốn xóa không?")
            if(typeof ADMIN_DELETE_PRODUCT == 'undefined'){
                
                showErrorSystem("ADMIN_DELETE_PRODUCT")
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
                    url: ADMIN_DELETE_PRODUCT + '/' +id , 
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
    <script>
        var ADMIN_UPDATE_PRODUCT = "{{ Route('ADMIN_UPDATE_PRODUCT', ['id' => null ])}}";
        function updateComponent( id, element ){

            var result = confirm("Có chắc muốn chỉnh sửa không?")
            if(typeof ADMIN_UPDATE_PRODUCT == 'undefined'){
                
                showErrorSystem("ADMIN_UPDATE_PRODUCT")
            }
            if (result) {
                /// delete
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': "{{ csrf_token() }}"
                    }
                });
                var sort = $("#sort-select-" + id).val()
                var product = {
                    sort : parseInt(sort) || -1
                }
                $.ajax({
                    type: "PUT",
                    url: ADMIN_UPDATE_PRODUCT + '/' +id , 
                    data : product,
                    dataType:"JSON",
                    success: function(){
                        if(response.status != 200){
                            alert("lỗi update không thành công")
                        }
                    }
                });
            }
        }
    </script>
@endsection

@section('page_title', 'danh sách bài đăng')

@section('content_admin')
<div class="page__product-load admin-main-content">
    <div class="row block-content ">
        <div class="col-12 bg-white search">
            <form class="form-inline" action="" method="GET">
                <label for="category">chủ đề:</label>
                <select name="category">
                    <option value="0">chọn category</option>
                    @foreach ($categories as $category)
                    <option value="{{$category->id}}" {{ $query['category'] == $category->id ? "selected": null }}>
                        {{$category->name}}
                    </option>
                    @endforeach
                </select>
                <label for="product">bài viết:</label>
                <input type="text" id="product" placeholder="nhập slug của product" name="product"  value="{{ $query['product'] }}" />
                <button type="submit">Tìm Kiếm</button>
            </form>
        </div>
        <div class="col-12 bg-white shadows-1 px-3 py-3 table-list">
            <div class="row thead-list">
                <div class="col-1">id</div>
                <div class="col-1">image</div>
                <div class="col-3">title</div>
                <div class="col-1">type</div>
                <div class="col-2">category</div>
                <div class="col-1">public</div>
                <div class="col-1">sort</div>
                <div class="col-1">#update#</div>
                <div class="col-1">#remove#</div>
            </div>
            @foreach( $products as $product)
            <div class="row trow-list {{ $product->public == Config::get('constant.TYPE_SAVE.ADMIN_READ') ? 'highlight' : null }}">
                <div class="col-1">{{ $product->id }}</div>
                <div class="col-1 trow_list__wrapper_image">
                    <img class="item_image" src="{{ $product->background }}" />
                </div>
                <div class="col-3">
                    <a href="{{ Route("ADMIN_STORE_PRODUCT", ['id' =>  $product->id]) }}">
                        {{ $product->getTitle(30) }}
                    </a>
                </div>
                <div class="col-1">{{ $product->getType()  }}</div>
                <div class="col-2">{{ $product->category_name }}</div>
                <div class="col-1">{{ $product->public == Config::get('constant.TYPE_SAVE.PUBLIC') ? 'all' : 'admin' }}</div>
                <div class="col-1 product__selection-sort">
                    <select id="sort-select-{{$product->id}}"
                        class="js__single-select">
                        @for ($i = 0; $i < 100; $i++)
                            <option value="{{ $i }}" {{ $i == $product->sort ? 'selected' : null}}>{{ $i }}</option>
                        @endfor
                    </select>
                </div>
                <div class="col-1">
                    <button type="button"
                    onclick="updateComponent('{{ $product->id }}', this)"
                    class="bg-transparent btn-update-row">
                        <i class="hero-icon hero-update"></i>
                    </button>
                </div>
                <div class="col-1">
                    <button type="button"
                    onclick="deleteComponent('{{ $product->id }}', this)"
                    class="bg-transparent btn-remove-row">
                        <i class="hero-icon hero-delete-variant"></i>
                    </button>
                </div>
            </div>
            @endforeach

            <div class="pagi">
                {{ $products->onEachSide(3)->links("pagination::default") }}
            </div>

        </div>
    </div>
</div>
@endsection
