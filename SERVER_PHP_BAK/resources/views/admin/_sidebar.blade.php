<div id="sidebar" class="sidebar">
    <div class="sidebar__fixed">
        <a class="logo" href="{{ Route('HOME_PAGE') }}">
            <img class="logo__img lazyload" src="{{ Config::get('app.lazyload') }}" data-src="{{ asset('/logo.png' . Config::get('app.version')) }}" alt="admin"/>
            <span class="logo__text">
                {{ env("APP_NAME_SIGN", "Hdev") }}
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
    
        

            @if(Illuminate\Support\Facades\Gate::allows('permission'))
            <li class="block_navigate {{ Route::is("ADMIN_STORE_ROLE", "ADMIN_LOAD_ROLE") ? 'active' : null}}">
                <a class="block_navigate__link">
                    <i class="hero-icon hero-recycle-variant"></i>
                    <span class="nav__text">Role</span>
                    <i class="hero-icon hero-chevron-sidebar"></i>
                </a>
                <ul class="dropdown__item">
                    <li class="{{ Route::is("ADMIN_STORE_ROLE") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_STORE_ROLE') }}">
                            lưu trữ Role
                        </a>
                    </li>
                    <li class="{{ Route::is("ADMIN_LOAD_ROLE") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_LOAD_ROLE') }}">
                            Xem danh sách Role
                        </a>
                    </li>
                </ul>
            </li>


            <li class="block_navigate {{ Route::is("ADMIN_STORE_USER", "ADMIN_LOAD_USER", "USER_EDIT_PERMISSION") ? 'active' : null}}">
                <a class="block_navigate__link">
                    <i class="hero-icon hero-account-check-outline"></i>
                    <span class="nav__text">User</span>
                    <i class="hero-icon hero-chevron-sidebar"></i>
                </a>
                <ul class="dropdown__item">
                    <li class="{{ Route::is("ADMIN_STORE_USER") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_STORE_USER') }}">
                            lưu trữ user
                        </a>
                    </li>
                    <li class="{{ Route::is("ADMIN_LOAD_USER") ? 'active' : null}}">
                        <a href="{{ Route('ADMIN_LOAD_USER') }}">
                            Xem danh sách user
                        </a>
                    </li>
                    <li class="{{ Route::is("USER_EDIT_PERMISSION") ? 'active' : null}}">
                        <a href="{{ Route('USER_EDIT_PERMISSION') }}">
                            permission user
                        </a>
                    </li>
                </ul>
            </li>
            @endif
            
        </ul>
        <span class="toggle_navigate" onclick="toggle_sidebar(this)">
            <i class="js_toggle_navigate__icon hero-icon hero-chevron-double-left"></i>
        </span>
    </div>
</div>