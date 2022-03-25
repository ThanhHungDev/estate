@extends('client.layout.index')

@section('title', $member->name)
@section('description', $member->name )


@section('preload')

@endsection

@section('stylesheets')
<link rel="stylesheet" type="text/css" href="{{ asset('css/category.css' . Config::get('app.version')) }}" />
@endsection


@section('javascripts')
<script type="text/javascript" src="{{ asset('js/product.detail.js' . Config::get('app.version')) }}"></script>
@endsection
@section('content')
<div class="content pb-4">
    {{ $member->name }}
    
</div>
@endsection