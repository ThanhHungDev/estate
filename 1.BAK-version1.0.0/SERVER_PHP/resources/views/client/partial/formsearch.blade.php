<form class="search__form" action="{{ Route("PRODUCT_SEARCH") }}" autocomplete="off">
    <input type="text" placeholder="tìm kiếm..." name="q" autocomplete="off">
    <button class="search__form--btn" type="submit">
        @svg('font/font-awe/svgs/duotone/search-plus.svg')
    </button>
</form>