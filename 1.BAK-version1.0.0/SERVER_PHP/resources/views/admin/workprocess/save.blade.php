@extends('admin._layout')

@section('title', 'Thêm workprocess')


@section('stylesheets')
    <link rel="stylesheet" href="{{ asset('css/library/jquery-ui.min.css')}}">
@endsection

@section('javascripts')
    <script src="{{ asset('js/library/jquery.min.js') }}"></script>
    <script src="{{ asset('js/library/jquery-ui.min.js') }}"></script>
    <script src="{{ asset('js/library/jquery.validate.min.js') }}"></script>
    <script src="{{ asset('js/library/select2.min.js') }}"></script>
    <script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
    <script src="{{ asset('ckfinder/ckfinder.js') }}"></script>
    <script src="{{ asset('js/admin/app.js') }}"></script>

    <script>
        $( "#sortable" ).sortable();
    </script>
@endsection

@section('content_admin')
<div class="page__option admin-main-content">
    <div class="row">
        <div class="col-12">
            @if (Session::has(Config::get('constant.SAVE_ERROR')))
            <div class="alert alert-warning">
                {{ Session::get(Config::get('constant.SAVE_ERROR')) }}
            </div>
            @elseif (Session::has(Config::get('constant.SAVE_SUCCESS')))
            <div class="alert alert-success">
                lưu workprocess thành công
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
    <form class="row js-validate-form page-edit-option" action="{{ Route('ADMIN_SAVE_WORKPROCESS') }}" method="POST">
        {!! csrf_field() !!}
        <div class="col-md-8" id="sortable">
            @if($workprocess)
            @foreach ($workprocess as $index => $work )
                <div class="row block-content js-group-option">
                    <i onclick="removeBlockParent(this)" class="hero-icon hero-close"></i>
                    <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                        <div class="row py-1">
                            <div class="col-6" id="js-input-key-option-{{ $index }}">
                                <input name="title[]" type="text" value="{{ $work->title }}" />
                            </div>
                            <div class="col-6 js-clone-select-option">
                                <select id="select2-{{ $index }}" name="type[]" class="js__single-select js__select_option_type_format" onchange="listenChangeTypeOption(this)">
                                    @foreach(Config::get('constant.TYPE_OPTION') as $key => $type__option)
                                    <option type="{{ 'type.'.$index . "-". $work->type }}" @if(old('type.'.$index, $work->type) == $type__option) {{ 'selected' }} @endif
                                    value="{{ $type__option }}">{{ $key }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="py-1 js-clone-value-option">
                            <input name="excerpt_text[]" type="text" value="{{ old('excerpt_text.'.$index, $work->excerpt_text) }}" />
                            <textarea id="ckeditor-{{ $index }}" name="excerpt_html[]" class="h-100 d-none">{{ old('excerpt_html.'.$index, $work->excerpt_html) }}</textarea>
                        </div>
                    </div>
                </div>
            @endforeach
            @endif

            <div class="row">
                <div class="col-12 text-right">
                    <button type="button" onclick="addMoreBlock()" class="btn btn-success"> 
                        thêm mới
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="row block-content">
                <div class="col-12 bg-color-white shadows-1 px-3 py-3">
                    <section class="pb-4">
                        <h2 class="title text-center">bấm lưu mới workprocess</h2>
                        <div class="text-center">
                            <button type="submit" class="btn btn-save-data">
                                Lưu
                            </button>
                        </div>
                    </section>
                </div>
            </div>
            
        </div>
    </form>
</div>
@endsection