@extends('admin._layout')

@section('title', 'Thêm bài viết')

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/admin/app.js') }}"></script>
    <script src="{{ asset('js/library/select2.min.js') }}"></script>
    <script>
        var ADMIN_DELETE_POST = "{{ Route('ADMIN_DELETE_POST', ['id' => null ])}}";
        function deleteComponent( id, element ){

            var result = confirm("Có chắc muốn xóa không?")
            if(typeof ADMIN_DELETE_POST == 'undefined'){
                
                showErrorSystem("ADMIN_DELETE_POST")
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
                    url: ADMIN_DELETE_POST + '/' +id , 
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
        var ADMIN_UPDATE_POST = "{{ Route('ADMIN_UPDATE_POST', ['id' => null ])}}";
        function updateComponent( id, element ){

            var result = confirm("Có chắc muốn chỉnh sửa không?")
            if(typeof ADMIN_UPDATE_POST == 'undefined'){
                
                showErrorSystem("ADMIN_UPDATE_POST")
            }
            if (result) {
                /// delete
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': "{{ csrf_token() }}"
                    }
                });
                var sort = $("#sort-select-" + id).val()
                var post = {
                    sort : parseInt(sort) || -1
                }
                $.ajax({
                    type: "PUT",
                    url: ADMIN_UPDATE_POST + '/' +id , 
                    data : post,
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
<div class="page__post-load admin-main-content">
    <div class="row block-content ">
        <div class="col-12 bg-white search">
            <form class="form-inline" action="" method="GET">
                <label for="topic">chủ đề:</label>
                <select name="topic">
                    <option value="0">chọn topic</option>
                    @foreach ($topics as $topic)
                    <option value="{{$topic->id}}" {{ $query['topic'] == $topic->id ? "selected": null }}>
                        {{$topic->name}}
                    </option>
                    @endforeach
                </select>
                <label for="post">bài viết:</label>
                <input type="text" id="post" placeholder="nhập slug của post" name="post"  value="{{ $query['post'] }}" />
                <button type="submit">Tìm Kiếm</button>
            </form>
        </div>
        <div class="col-12 bg-white shadows-1 px-3 py-3 table-list">
            <div class="row thead-list">
                <div class="col-1">id</div>
                <div class="col-1">image</div>
                <div class="col-3">title</div>
                <div class="col-1">type</div>
                <div class="col-2">topic</div>
                <div class="col-1">public</div>
                <div class="col-1">sort</div>
                <div class="col-1">#update#</div>
                <div class="col-1">#remove#</div>
            </div>
            @foreach( $posts as $post)
            <div class="row trow-list {{ $post->public == Config::get('constant.TYPE_SAVE.ADMIN_READ') ? 'highlight' : null }}">
                <div class="col-1">{{ $post->id }}</div>
                <div class="col-1 trow_list__wrapper_image">
                    <img class="item_image" src="{{ $post->background }}" />
                </div>
                <div class="col-3">
                    <a href="{{ Route("ADMIN_STORE_POST", ['id' =>  $post->id]) }}">
                        {{ $post->getTitle(30) }}
                    </a>
                </div>
                <div class="col-1">{{ $post->getType()  }}</div>
                <div class="col-2">{{ $post->topic_name }}</div>
                <div class="col-1">{{ $post->public == Config::get('constant.TYPE_SAVE.PUBLIC') ? 'all' : 'admin' }}</div>
                <div class="col-1 post__selection-sort">
                    <select id="sort-select-{{$post->id}}"
                        class="js__single-select">
                        @for ($i = 0; $i < 100; $i++)
                            <option value="{{ $i }}" {{ $i == $post->sort ? 'selected' : null}}>{{ $i }}</option>
                        @endfor
                    </select>
                </div>
                <div class="col-1">
                    <button type="button"
                    onclick="updateComponent('{{ $post->id }}', this)"
                    class="bg-transparent btn-update-row">
                        <i class="hero-icon hero-update"></i>
                    </button>
                </div>
                <div class="col-1">
                    <button type="button"
                    onclick="deleteComponent('{{ $post->id }}', this)"
                    class="bg-transparent btn-remove-row">
                        <i class="hero-icon hero-delete-variant"></i>
                    </button>
                </div>
            </div>
            @endforeach

            <div class="pagi">
                {{ $posts->onEachSide(3)->links("pagination::default") }}
            </div>

        </div>
    </div>
</div>
@endsection
