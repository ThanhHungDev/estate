<div class="userheader">
    <div class="userheader__wrapper">
        <div class="userheader__container">
            <div class="userheader__background img" 
            style="background-image: linear-gradient(150deg, rgba(63, 174, 255, .3)15%, rgba(63, 174, 255, .3)70%, rgba(63, 174, 255, .3)94%), 
            url('{{ $profile->background }}');"></div>
            <div class="userheader__head card">
                <div class="userheader__head-content card-body">
                    <div class="userheader__head-infor">
                        <img src="{{ $profile->avatar }}" alt="" class="avatar">
                        <h3 class="name">{{ $profile->name }}</h3>
                        <p class="email">{{ $profile->email }}</p>
                    </div>
                    <div class="navi__page">
                        <div class="row">
                            <div class="col-lg-12">
                                <ul class="tabcontrol">
                                    <li>
                                        <a class="{{ SupportRouter::fillClassActive('active', 'USER_DASHBOARD') }}" 
                                        href="{{ Route('USER_DASHBOARD') }}">Timeline</a>
                                    </li>
                                    <li>
                                        <a class="{{ SupportRouter::fillClassActive('active', 'USER_ABOUT') }}" 
                                        href="{{ Route('USER_ABOUT') }}">Thông tin</a>
                                    </li>
                                    <li><a href="#">Friends</a></li>
                                    <li><a href="#">Photos</a></li>
                                    <li><a href="#">Videos</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>