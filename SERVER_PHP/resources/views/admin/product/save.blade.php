@extends('admin._layout')

@section('title', 'Thêm bài viết')

@php 
$showto = $product->showto ? $product->showto : Config::get('constant.LDJSON.HIDE');
$howto  = $product->howto ? $product->howto : null;

$district_id = old('district_id', null );
if( !$district_id ){
    $district_id = $product->commune ? $product->commune->district_id : null;
}
@endphp

@section('javascripts')
    @php 
                $configApp  = Config::get('app');
    $configApp['CONSTANT'] = Config::get('constant');
    $configApp['UNIT']     = Config::get('unit');
    $configApp['IMAGE']    = Config::get('image.UPLOAD');
    $configApp['VIDEO']    = Config::get('video.UPLOAD');
    @endphp
    <script>
        const CONFIG_APP = {!! json_encode($configApp) !!};
    </script>

    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script src="{{ asset('js/library/select2.full.min.js') }}"></script>
    <script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
    <script src="{{ asset('ckfinder/ckfinder.js') }}"></script>
    <script src="{{ asset('js/admin/validate.product.js') }}"></script>
    <script src="{{ asset('js/admin/app.js') }}"></script>
    @if ($howto)
    <script src="{{ asset('js/library/jsoneditor.min.js') }}"></script>
    <script>
        const HOW_TO_DATA = {!! $howto !!};
    </script>
    @endif
    @if (old('commune_id', $product->commune_id))
    <script>
        $(document).ready(function() {
            selectDistrictCommuneAdmin('{{ $district_id }}', "{{ $product->commune_id }}")
        })
    </script>
    @endif
    @if (count( old('images', $pictures) ) )
    <script type="text/javascript">
        console.log({!! json_encode(old('images', $pictures)) !!})
        $(document).ready(function() {
            showlstImage__InputCKFinder({!! json_encode(old('images', $pictures))  !!}, document.getElementById('js__multiImageCKFinder'))
        })
    </script>
    @endif
    @if (old('price', $product->price))
    <script type="text/javascript">
        $(document).ready(function() {
            calcTotalPriceProduct()
        })
    </script>
    @endif
@endsection
@section('page_title', $product->id ? 'chỉnh sửa product' : 'thêm mới product')

@section('content_admin')
<div class="page__product admin-main-content">

    <div class="row">
        <div class="col-12">
            @if (Session::has(Config::get('constant.SAVE_ERROR')))
            <div class="alert alert-warning">
                {{ Session::get(Config::get('constant.SAVE_ERROR')) }}
            </div>
            @elseif (Session::has(Config::get('constant.SAVE_SUCCESS')))
            <div class="alert alert-success">
                lưu bài viết thành công
            </div>
            @endif
            @if(!empty($errors->all()))
                @foreach ($errors->all() as $error)
                <div class="alert alert-warning">
                    {{ $error }}
                </div>
                @endforeach
            @endif
        </div>
    </div>
    <form class="row js-validate-form" action="{{ Route('ADMIN_SAVE_PRODUCT', ['id' => $product->id]) }}" method="POST">
        {!! csrf_field() !!}
        <input type="hidden" name="_slug_old" value="{{ $product->slug }}">
        <div class="col-md-8 pr-0">
            <div class="row block-content">
                <div class="js-parent__create-slug col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">
                        title product 
                        <a target="_blank" id="show-url" class="link__post" href="/{{ $product->slug }}">
                            hiện thị product
                            <i class="hero-icon hero-shield-link-variant-outline"></i>
                        </a>
                    </h2>
                    <div class="input-control-link">
                        <input class="jquery__append-out" name="title" type="text" value="{{ old('title', $product->title ) }}" onblur="isExistSlug(this.value)" />
                    </div>
                    <div class="input-control-link js-input-control">
                        <input class="mt-2 jquery__append-out" name="slug" type="text" value="{{ old('slug', $product->slug ) }}" readonly onblur="isExistSlug(this.value)"/>
                        <button type="button" class="btn__edit-slug" onclick="toggleEditSlugLink(this)">
                            <i id="js-toggle-icon-edit" class="hero-icon hero-shield-link-variant-outline"></i>
                            <i id="js-toggle-icon-key" class="hero-icon hero-shield-edit-outline d-none"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">excerpt -- đoạn trích</h2>
                    <textarea  class="height-80px @error('excerpt') is-invalid @enderror" name="excerpt" cols="30" rows="10">{{ old('excerpt', $product->excerpt) }}</textarea>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">content</h2>
                    <textarea name="content" id="editor1" class="h-100">{{ old('content', $product->content) }}</textarea>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">site name SEO</h2>
                    <input name="site_name" type="text" value="{{ old('site_name', $product->site_name) }}" />
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">hình ảnh SEO</h2>
                    <div class="position-relative wrapper__selectImageWithCKFinder type-select-ckfinder__inline">
                        <input name="image_seo" class="img__outputCKFinder jquery__append-out" type="text" 
                            value="{{ old('image_seo', $product->image_seo) }}" 
                            onblur="showImage__InputCKFinder( this.value, this )"
                            onclick="this.setSelectionRange(0, this.value.length)"/>
                        <button class="btn bg-cyan bd-cyan text-white btn-input-append" 
                        type="button" onclick="selectImageWithCKFinder(this)">chọn ảnh</button>
                    </div>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">Tải Danh sách hình ảnh</h2>
                    <div class="position-relative wrapper__selectImageWithCKFinder">
                        {{-- <input name="image_seo" class="img__outputCKFinder jquery__append-out" type="text" 
                            value="{{ old('image_seo', $product->image_seo) }}" 
                            onblur="showImage__InputCKFinder( this.value, this )"
                            onclick="this.setSelectionRange(0, this.value.length)"/> --}}
                        <button id="js__multiImageCKFinder" class="btn bg-cyan bd-cyan text-white btn-input-append" 
                        type="button" onclick="selectMultiImageWithCKFinder(this)">chọn ảnh</button>
                    </div>
                </div>
            </div>

            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">meta description ( <span class="italic text-xs normal-case">* nếu không nhập sẽ tự động lấy của phần nội dung</span> )</h2>
                    <textarea class="height-80px" name="description_seo" cols="30" rows="10">{{ old('description_seo', $product->description_seo) }}</textarea>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">meta css</h2>
                    <textarea class="min-height-80px" name="stylesheet" cols="30" rows="10">{{ old('stylesheet', $product->stylesheet) }}</textarea>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">meta javascript</h2>
                    <textarea class="min-height-80px" name="javascript" cols="30" rows="10">{{ old('javascript', $product->javascript) }}</textarea>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <div class="d-flex">
                        <div class="w-50 px-1">
                            <section class="pb-4">
                                <h2 class="title">hướng nhà</h2>
                                <select name="direction" class="js__single-select">
                                    @foreach (Config::get("constant.DIRECTION") as $key => $direction )
                                    <option @if(old('direction', $product->direction) == $direction['VALUE']) {{ 'selected' }} @endif
                                        value="{{ $direction['VALUE'] }}">{{ $direction['TEXT'] }}</option>
                                    @endforeach
                                </select>
                            </section>
                        </div>
                        <div class="w-50 px-1">
                            <section class="pb-4">
                                <h2 class="title">hướng ban công</h2>
                                <select name="direction_balcony" class="js__single-select">
                                    @foreach (Config::get("constant.BALCONY") as $key => $direction )
                                    <option @if(old('direction_balcony', $product->direction_balcony) == $direction['VALUE']) {{ 'selected' }} @endif
                                        value="{{ $direction['VALUE'] }}">{{ $direction['TEXT'] }}</option>
                                    @endforeach
                                </select>
                            </section>
                        </div>
                    </div>

                    <div class="d-flex">
                        <div class="w-50 px-1">
                            <section class="pb-4">
                                <h2 class="title">chiều ngang</h2>
                                <div class="position-relative after-unit-met">
                                    <input class="jquery__append-out" name="horizontal" type="text" value="{{ old('horizontal', $product->horizontal ) }}" />
                                </div>
                            </section>
                        </div>
                        <div class="w-50 px-1">
                            <section class="pb-4">
                                <h2 class="title">tổng diện tích</h2>
                                <div class="position-relative after-unit-met-double">
                                    <input class="jquery__append-out" name="area" type="text" 
                                        autocomplete="false"
                                        onkeyup="calcTotalPriceProduct()"
                                        value="{{ old('area', $product->area ) }}" />
                                </div>
                            </section>
                        </div>
                        
                    </div>
                    <div class="d-flex">
                        <div class="w-40 px-1">
                            <section class="pb-4">
                                <h2 class="title">Thương lượng</h2>
                                <label class="container__radio">
                                    {{ Config::get('constant.NEGOTIATE.YES.TEXT') }}
                                    <input name="negotiate" type="radio" value="{{ Config::get('constant.NEGOTIATE.YES.VALUE') }}" 
                                        {{ old('negotiate', $product->negotiate) != Config::get('constant.NEGOTIATE.NO.VALUE') ? 'checked' : '' }} >
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container__radio">
                                    {{ Config::get('constant.NEGOTIATE.NO.TEXT') }}
                                    <input name="negotiate" type="radio" value="{{ Config::get('constant.NEGOTIATE.NO.VALUE') }}" 
                                        {{ old('negotiate', $product->negotiate) == Config::get('constant.NEGOTIATE.NO.VALUE') ? 'checked' : '' }} >
                                    <span class="checkmark"></span>
                                </label>
                            </section>
                        </div>
                        <div class="w-60">
                            <div class="d-flex">
                                <div class="w-50 px-1">
                                    <section class="pb-4">
                                        <h2 class="title">Giá bán</h2>
                                        <input class="jquery__append-out" name="price" type="text" 
                                            autocomplete="false"
                                            onkeyup="calcTotalPriceProduct()"
                                            value="{{ old('price', $product->price ) }}" />
                                    </section>
                                </div>
                                <div class="w-50 px-1">
                                    <section class="pb-4">
                                        <h2 class="title">Đơn vị giá</h2>
                                        <select name="unit_price" class="js__single-select js__fixheight--input"
                                            onchange="calcTotalPriceProduct()">
                                            @foreach (Config::get("unit.PRICE") as $key => $unit )
                                            <option @if(old('unit_price', $product->unit_price) == $unit['VALUE']) {{ 'selected' }} @endif
                                                value="{{ $unit['VALUE'] }}">{{ $unit['TEXT'] }}</option>
                                            @endforeach
                                        </select>
                                    </section>
                                </div>
                            </div>
                            <div id="js__output__product--price"></div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <div class="d-flex">
                        <div class="w-50 px-1">
                            <section class="pb-4">
                                <h2 class="title">Kiểu BDS </h2>
                                <select name="type" class="js__single-select">
                                    <option @if(old('type', $product->type) == Config::get('constant.TYPE-PRODUCT.HOUSE')) {{ 'selected' }} @endif
                                    value="{{ Config::get('constant.TYPE-PRODUCT.HOUSE') }}">Nhà</option>
                                    <option @if(old('type', $product->type) == Config::get('constant.TYPE-PRODUCT.LAND')) {{ 'selected' }} @endif
                                    value="{{ Config::get('constant.TYPE-PRODUCT.LAND') }}">Đất</option>
                                </select>
                            </section>
                        </div>
                        
                    </div>

                    <div class="d-flex">
                        <div class="w-25 px-1">
                            <section class="pb-4">
                                <h2 class="title">Số lầu</h2>
                                <select name="extensions[floors]" class="js__single-select">
                                    @foreach (Config::get("constant.FLOORS") as $key => $floor )
                                    <option @if(old('extensions.floors', @$product->extensions['floors'] ) == $floor['VALUE']) {{ 'selected' }} @endif
                                        value="{{ $floor['VALUE'] }}">{{ $floor['TEXT'] }}</option>
                                    @endforeach
                                </select>
                            </section>
                        </div>
                        <div class="w-25 px-1">
                            <section class="pb-4">
                                <h2 class="title">Nhà vệ sinh</h2>
                                <select name="extensions[wc]" class="js__single-select">
                                    @foreach (Config::get("constant.WC") as $key => $wc )
                                    <option @if(old('extensions.wc', @$product->extensions['wc'] ) == $wc['VALUE']) {{ 'selected' }} @endif
                                        value="{{ $wc['VALUE'] }}">{{ $wc['TEXT'] }}</option>
                                    @endforeach
                                </select>
                            </section>
                        </div>
                        <div class="w-25 px-1">
                            <section class="pb-4">
                                <h2 class="title">Phòng ngủ</h2>
                                <select name="extensions[room]" class="js__single-select">
                                    @foreach (Config::get("constant.ROOM") as $key => $room )
                                    <option @if(old('extensions.room', @$product->extensions['room'] ) == $room['VALUE']) {{ 'selected' }} @endif
                                        value="{{ $room['VALUE'] }}">{{ $room['TEXT'] }}</option>
                                    @endforeach
                                </select>
                            </section>
                        </div>
                        
                    </div>
                    <div class="d-flex">
                        <div class="w-25 px-1">
                            <section class="pb-4">
                                <h2 class="title">Sổ hồng / đỏ </h2>
                                <select name="extensions[legal]" class="js__single-select">
                                    @foreach (Config::get("constant.LEGAL") as $key => $legal )
                                    <option @if(old('extensions.legal', @$product->extensions['legal'] ) == $legal['VALUE']) {{ 'selected' }} @endif
                                        value="{{ $legal['VALUE'] }}">{{ $legal['TEXT'] }}</option>
                                    @endforeach
                                </select>
                            </section>
                        </div>
                        <div class="w-25 px-1">
                            <section class="pb-4">
                                <h2 class="title">Thổ cư</h2>
                                <select name="extensions[residence]" class="js__single-select">
                                    @foreach (Config::get("constant.RESIDENCE") as $key => $residence )
                                    <option @if(old('extensions.residence', @$product->extensions['residence'] ) == $residence['VALUE']) {{ 'selected' }} @endif
                                        value="{{ $residence['VALUE'] }}">{{ $residence['TEXT'] }}</option>
                                    @endforeach
                                </select>
                            </section>
                        </div>
                        <div class="w-25 px-1">
                            <section class="pb-4">
                                <h2 class="title">Giấy tờ</h2>
                                <select name="extensions[notarize]" class="js__single-select">
                                    @foreach (Config::get("constant.NOTARIZE") as $key => $notarize )
                                    <option @if(old('extensions.notarize', @$product->extensions['notarize'] ) == $notarize['VALUE']) {{ 'selected' }} @endif
                                        value="{{ $notarize['VALUE'] }}">{{ $notarize['TEXT'] }}</option>
                                    @endforeach
                                </select>
                            </section>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <h2 class="title">render howto json</h2>
                    <select name="showto" class="js__single-select">
                        <option @if($showto == Config::get('constant.LDJSON.HIDE')) selected @endif value="{{Config::get('constant.LDJSON.HIDE')}}">không tạo howto json trong bài viết</option>
                        <option @if($showto == Config::get('constant.LDJSON.SHOW')) selected @endif value="{{Config::get('constant.LDJSON.SHOW')}}">tạo howto json trong bài viết</option>
                    </select>
                    <textarea id="js__json-how-to" class="min-height-80px mt-2" name="howto" cols="30" >{{ old('howto', $howto ) }}</textarea>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4">
                        <h2 class="title text-center">bấm lưu mới product</h2>
                        @if($categories)
                        <select name="public" class="js__single-select">
                            <option value="">chọn kiểu lưu</option>
                            <option @if(old('public', $product->public) == Config::get('constant.TYPE_SAVE.PUBLIC')) {{ 'selected' }} @endif
                            value="{{ Config::get('constant.TYPE_SAVE.PUBLIC') }}">
                                công khai
                            </option>
                            <option @if(old('public', $product->public) == Config::get('constant.TYPE_SAVE.ADMIN_READ')) {{ 'selected' }} @endif
                            value="{{ Config::get('constant.TYPE_SAVE.ADMIN_READ') }}">
                                chỉ admin xem
                            </option>
                            
                        </select>
                        @endif
                        <div class="text-center">
                            <button type="submit" class="btn btn-save-data">
                                Lưu
                            </button>
                        </div>
                    </section>
                </div>
            </div>
            
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4">
                        <h2 class="title text-center">chọn category</h2>
                        @if($categories)
                        <select name="category_id" class="js__single-select">
                            <option value="">chọn category</option>
                            @foreach($categories as $category)
                            <option @if(old('category_id', $product->category_id) == $category->id) {{ 'selected' }} @endif
                            value="{{ $category->id }}">{{ $category->name }}</option>
                            @endforeach
                        </select>
                        @endif
                    </section>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4">
                        <h2 class="title text-center">chọn ptag</h2>
                        @if($ptags)
                        <select name="ptag_id[]" class="js__multi-select" multiple="multiple">
                            @foreach($ptags as $ptag)
                            <option @if(collect(old('ptag_id', $ptags_id ?? null ))->contains($ptag->id)) {{ 'selected' }} @endif
                            value="{{ $ptag->id }}">{{ $ptag->name }}</option>
                            @endforeach
                        </select>
                        @endif
                    </section>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4">
                        <h2 class="title text-center">chọn rating</h2>
                        @if($rates)
                        <select name="rating_id" class="js__single-select">
                            <option value="">chọn rating</option>
                            @foreach($rates as $rate)
                            <option @if(old('rating_id', $product->rating_id) == $rate->id) {{ 'selected' }} @endif
                            value="{{ $rate->id }}">{{ $rate->username }}</option>
                            @endforeach
                        </select>
                        @endif
                        <input class="mt-2" name="rate_value" value="{{ old('rate_value', $product->rate_value) }}"/>
                        <input class="mt-2" name="rate_review_body" value="{{ old('rate_review_body', $product->rate_review_body) }}"/>
                    </section>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4">
                        <h2 class="title text-center">chọn quận / huyện</h2>
                        @if($districts)
                        <select name="district_id" class="js__single-select"
                        onchange="changeDistrictAdmin(this)">
                            <option value="">chọn quận / huyện</option>
                            @foreach($districts as $district)
                            <option value="{{ $district->id }}" 
                                @if ($district_id == $district->id ) {{ 'selected' }} @endif
                            >{{ $district->name }}</option>
                            @endforeach
                        </select>
                        @endif
                    </section>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4">
                        <h2 class="title text-center">chọn phường / xã</h2>
                        <select id="js__select-commune" name="commune_id" class="js__single-select"
                        onchange="jQuery(this).valid()">
                            <option value="">chọn phường / xã</option>
                        </select>
                    </section>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4 wrapper__selectImageWithCKFinder">
                        <h2 class="title text-center">thiết lập background</h2>
                        <div class="text-center">
                            <button type="button" onclick="selectImageWithCKFinder(this)"
                                class="btn btn-select-thumb">
                                Select background
                            </button>
                        </div>
                        <div class="group-control-img-ckfinder">
                            <input name="background" class="img__outputCKFinder thumbnail-topic mb-2" 
                                onblur="showImage__InputCKFinder( this.value, this )"
                                onclick="this.setSelectionRange(0, this.value.length)"
                                type="text" value="{{ old('background', $product->background) }}" />
                        </div>
                    </section>
                </div>
            </div>
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4 wrapper__selectImageWithCKFinder">
                        <h2 class="title text-center">setup thumbnail</h2>
                        <div class="text-center">
                            <button type="button" onclick="selectImageWithCKFinder(this)"
                                class="btn btn-select-thumb">
                                Select Thumbnail
                            </button>
                        </div>
                        <div class="group-control-img-ckfinder">
                            <input name="thumbnail" class="img__outputCKFinder thumbnail-topic mb-2" 
                                onblur="showImage__InputCKFinder( this.value, this )"
                                onclick="this.setSelectionRange(0, this.value.length)"
                                type="text" value="{{ old('thumbnail', $product->thumbnail) }}" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </form>
    @if ($howto)
    <div class="row block-content">
                
        <div class="col-12 bg-color-white shadows-1 px-3 py-3 foundation">
            <div class='medium-12-columns'>
                <span id='valid_indicator' class='label'></span>
                <button type="button" id='js__save-json-textarea' class='tiny'>Lưu Json</button>
            </div>
            <div class='row'>
                <div id='editor_holder' class='medium-12 columns'></div>
            </div>
        </div>
    </div>
    @endif
</div>


@endsection