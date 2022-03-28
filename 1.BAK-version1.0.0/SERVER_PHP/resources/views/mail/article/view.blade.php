Chào <i>Admin</i>,
<p>
    Đây là công ty {{ Config::get('app.company_name') }}. 
    Chúng tôi là đơn vị cung cấp dịch vụ bất động sản uy tín chuyên nghiệp.
</p>
<p>Hiện tại tài khoản {{ $input['user_id'] }} đã đăng bài:</p>
<div>
    Bài viết có title: <br/>
    {{ $input['title'] }}
</div>
<div>
    <h3>{{ $input['title'] }}</h3>
    <p><b>nội dung: </b></p>
    <div>
        <p>
            {{ $input['text_content'] }}
        </p>
    </div>
</div>
<hr />
<div>
    <p><b>Trân trọng cảm ơn!</b></p>
    <p> {{ Config::get('app.founder') }} (Mr.) </p>
    <p>
        <a href="mailto:{{ Config::get('app.company_mail') }}">{{ Config::get('app.company_mail') }}</a>
    </p>
    <img src="{{ env('APP_URL') . env('LOGO') }}" alt="ebudezain" />
    <p>
        <b>Địa Chỉ: </b> <span> {{ implode(',', [ Config::get("app.company_address_street"), Config::get("app.company_address_locality"), Config::get("app.company_address_region"), Config::get("app.company_address_country")]) }} </span>        
    </p>
    <p>
        <b>Liên hệ: </b> <span> {{ Config::get("app.phone_one") }} </span>        
    </p>
    <p>
        <b>Website: </b> <span> {{ env('APP_URL') }} </span>        
    </p>
</div>