<div id="sidebar" class="sidebar">
    <div class="sidebar__fixed">
        <a class="logo" href="{{ Route('ADMIN_DASHBOARD') }}">
            <img class="logo__img" src="{{ asset('/fav.png') }}" alt="admin">
            <span class="logo__text">
                {{ env("APP_NAME_SIGN_SIDEBAR_ADMIN", "Ebudezain") }}
                <i class="logo__mini_text">
                    {{ env("APP_NAME_SIGN_LABEL", "hungtt") }}
                </i>
                <i class="logo__box_pro">pro</i>
            </span>
        </a>
        <a class="navigate_default {{ Route::is("ADMIN_DASHBOARD") ? 'active' : null}}" 
            href="{{ Route('ADMIN_DASHBOARD') }}">
            <i class="hero-icon hero-palette-outline"></i>
            <span class="nav__text">dashboard</span>
        </a>
        
        <ul class="nav_list">
            <li class="block_navigate {{ Route::is("ADMIN_STORE_OPTION") ? 'active' : null}}">
                <a class="block_navigate__link" 
                href="{{ Route('ADMIN_STORE_OPTION') }}">
                    <i class="hero-icon hero-segment"></i>
                    <span class="nav__text">Option</span>
                </a>
            </li>


            <li class="block_navigate {{ Route::is("ADMIN_STORE_PRODUCT", "ADMIN_LOAD_PRODUCT") ? 'active' : null}}" >
                <a class="block_navigate__link">
                    <i class="hero-icon hero-file-document-edit-outline"></i>
                    <span class="nav__text">Sản Phẩm</span>
                    <i class="hero-icon hero-chevron-sidebar"></i>
                </a>
                <ul class="dropdown__item">
                    <li class="{{ Route::is("ADMIN_STORE_PRODUCT") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_STORE_PRODUCT') }}">
                            lưu trữ Sản Phẩm
                        </a>
                    </li>
                    <li class="{{ Route::is("ADMIN_LOAD_PRODUCT") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_LOAD_PRODUCT') }}">
                            Xem danh sách Sản Phẩm
                        </a>
                    </li>
                </ul>
            </li>
    
            <li class="block_navigate {{ Route::is("ADMIN_STORE_CATEGORY", "ADMIN_LOAD_CATEGORY") ? 'active' : null}}">
                <a class="block_navigate__link">
                    <i class="hero-icon hero-scatter-plot-outline"></i>
                    <span class="nav__text">Danh Mục</span>
                    <i class="hero-icon hero-chevron-sidebar"></i>
                </a>
                <ul class="dropdown__item">
                    <li class="{{ Route::is("ADMIN_STORE_CATEGORY") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_STORE_CATEGORY') }}">
                            lưu trữ Danh Mục
                        </a>
                    </li>
                    <li class="{{ Route::is("ADMIN_LOAD_CATEGORY") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_LOAD_CATEGORY') }}">
                            Xem danh sách Danh Mục
                        </a>
                    </li>
                </ul>
            </li>

            <li class="block_navigate {{ Route::is("ADMIN_STORE_PTAG", "ADMIN_LOAD_PTAG") ? 'active' : null}}" >
                <a class="block_navigate__link">
                    <i class="hero-icon hero-tag"></i>
                    <span class="nav__text">Product Tag</span>
                    <i class="hero-icon hero-chevron-sidebar"></i>
                </a>
                <ul class="dropdown__item">
                    <li class="{{ Route::is("ADMIN_STORE_PTAG") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_STORE_PTAG') }}">
                            lưu trữ Product Tag
                        </a>
                    </li>
                    <li class="{{ Route::is("ADMIN_LOAD_PTAG") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_LOAD_PTAG') }}">
                            Xem danh sách Product Tag
                        </a>
                    </li>
                </ul>
            </li>


            <li class="block_navigate {{ Route::is("ADMIN_STORE_POST", "ADMIN_LOAD_POST") ? 'active' : null}}" >
                <a class="block_navigate__link">
                    <i class="hero-icon hero-file-document-edit-outline"></i>
                    <span class="nav__text">Post</span>
                    <i class="hero-icon hero-chevron-sidebar"></i>
                </a>
                <ul class="dropdown__item">
                    <li class="{{ Route::is("ADMIN_STORE_POST") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_STORE_POST') }}">
                            lưu trữ bài viết
                        </a>
                    </li>
                    <li class="{{ Route::is("ADMIN_LOAD_POST") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_LOAD_POST') }}">
                            Xem danh sách post
                        </a>
                    </li>
                </ul>
            </li>
            <li class="block_navigate {{ Route::is("ADMIN_STORE_TAG", "ADMIN_LOAD_TAG") ? 'active' : null}}" >
                <a class="block_navigate__link">
                    <i class="hero-icon hero-tag"></i>
                    <span class="nav__text">Tag</span>
                    <i class="hero-icon hero-chevron-sidebar"></i>
                </a>
                <ul class="dropdown__item">
                    <li class="{{ Route::is("ADMIN_STORE_TAG") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_STORE_TAG') }}">
                            lưu trữ tag
                        </a>
                    </li>
                    <li class="{{ Route::is("ADMIN_LOAD_TAG") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_LOAD_TAG') }}">
                            Xem danh sách tag
                        </a>
                    </li>
                </ul>
            </li>
    
            <li class="block_navigate {{ Route::is("ADMIN_STORE_TOPIC", "ADMIN_LOAD_TOPIC") ? 'active' : null}}">
                <a class="block_navigate__link">
                    <i class="hero-icon hero-scatter-plot-outline"></i>
                    <span class="nav__text">Topic</span>
                    <i class="hero-icon hero-chevron-sidebar"></i>
                </a>
                <ul class="dropdown__item">
                    <li class="{{ Route::is("ADMIN_STORE_TOPIC") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_STORE_TOPIC') }}">
                            lưu trữ topic
                        </a>
                    </li>
                    <li class="{{ Route::is("ADMIN_LOAD_TOPIC") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_LOAD_TOPIC') }}">
                            Xem danh sách topic
                        </a>
                    </li>
                </ul>
            </li>
            
            <li class="block_navigate {{ Route::is("ADMIN_STORE_RATING", "ADMIN_LOAD_RATING") ? 'active' : null}}">
                <a class="block_navigate__link">
                    <i class="hero-icon hero-table-star"></i>
                    <span class="nav__text">Rating</span>
                    <i class="hero-icon hero-chevron-sidebar"></i>
                </a>
                <ul class="dropdown__item">
                    <li class="{{ Route::is("ADMIN_STORE_RATING") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_STORE_RATING') }}">
                            lưu trữ rating
                        </a>
                    </li>
                    <li class="{{ Route::is("ADMIN_LOAD_RATING") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_LOAD_RATING') }}">
                            Xem danh sách rating
                        </a>
                    </li>
                </ul>
            </li>

            <li class="block_navigate {{ Route::is("ADMIN_GET_REQUEST", "ADMIN_SHOW_REQUEST") ? 'active' : null}}" >
                <a class="block_navigate__link">
                    <i class="hero-icon hero-vector-rectangle"></i>
                    <span class="nav__text">Information Request</span>
                    <i class="hero-icon hero-chevron-sidebar"></i>
                </a>
                <ul class="dropdown__item">
                    <li class="{{ Route::is("ADMIN_GET_REQUEST") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_GET_REQUEST') }}">
                            Danh sách request
                        </a>
                    </li>
                    <li class="{{ Route::is("ADMIN_SHOW_REQUEST") ? 'active' : null}}">
                        <a>Chi tiết request</a>
                    </li>
                </ul>
            </li>


            <li class="block_navigate {{ Route::is("ADMIN_STORE_SLIDER", "ADMIN_LOAD_SLIDER") ? 'active' : null}}" >
                <a class="block_navigate__link">
                    <i class="hero-icon hero-tag"></i>
                    <span class="nav__text">Slider</span>
                    <i class="hero-icon hero-chevron-sidebar"></i>
                </a>
                <ul class="dropdown__item">
                    <li class="{{ Route::is("ADMIN_STORE_SLIDER") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_STORE_SLIDER') }}">
                            lưu trữ slider
                        </a>
                    </li>
                    <li class="{{ Route::is("ADMIN_LOAD_SLIDER") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_LOAD_SLIDER') }}">
                            Xem danh sách slider
                        </a>
                    </li>
                </ul>
            </li>


            <li class="block_navigate {{ Route::is("ADMIN_STORE_REVIEW", "ADMIN_LOAD_REVIEW") ? 'active' : null}}" >
                <a class="block_navigate__link">
                    <i class="hero-icon hero-tag"></i>
                    <span class="nav__text">review</span>
                    <i class="hero-icon hero-chevron-sidebar"></i>
                </a>
                <ul class="dropdown__item">
                    <li class="{{ Route::is("ADMIN_STORE_REVIEW") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_STORE_REVIEW') }}">
                            lưu trữ review
                        </a>
                    </li>
                    <li class="{{ Route::is("ADMIN_LOAD_REVIEW") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_LOAD_REVIEW') }}">
                            Xem danh sách review
                        </a>
                    </li>
                </ul>
            </li>

            <li class="block_navigate {{ Route::is("ADMIN_STORE_WORKPROCESS") ? 'active' : null}}">
                <a class="block_navigate__link" 
                href="{{ Route('ADMIN_STORE_WORKPROCESS') }}">
                    <i class="hero-icon hero-segment"></i>
                    <span class="nav__text">workprocess</span>
                </a>
            </li>

            
            <li class="block_navigate {{ Route::is("ADMIN_GET_SITEMAP", "ADMIN_STORE_SITEMAP") ? 'active' : null}}" >
                <a class="block_navigate__link">
                    <i class="hero-icon hero-xml"></i>
                    <span class="nav__text">Sitemap</span>
                    <i class="hero-icon hero-chevron-sidebar"></i>
                </a>
                <ul class="dropdown__item">
                    <li class="{{ Route::is("ADMIN_GET_SITEMAP") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_GET_SITEMAP') }}">
                            xem sitemap
                        </a>
                    </li>
                    <li class="{{ Route::is("ADMIN_STORE_SITEMAP") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_STORE_SITEMAP') }}">
                            lưu sitemap
                        </a>
                    </li>
                </ul>
            </li>

            
            
        </ul>
        <span class="toggle_navigate" onclick="toggle_sidebar(this)">
            <i class="js_toggle_navigate__icon hero-icon hero-chevron-double-left"></i>
        </span>
    </div>
</div>