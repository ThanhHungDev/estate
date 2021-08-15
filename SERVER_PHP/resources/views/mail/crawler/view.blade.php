Chào <i>Admin</i>,
<p>
    Đây là công ty {{ Config::get('app.company_name') }}. 
    Chúng tôi là đơn vị thiết kế website uy tín chuyên nghiệp.
</p>
<div>
    <b>{{ $input['message'] }}</b> 
</div>
<hr />
<div>
    <p><b>Trân trọng cảm ơn!</b></p>
    <p> {{ Config::get('app.founder') }} (Mr.) </p>
    <p>
        <a href="mailto:{{ Config::get('app.company_mail') }}">{{ Config::get('app.company_mail') }}</a>
    </p>
    <img src="http://ebudezain.com/images/logo-ebu-white.png" alt="ebudezain" />

    <p>
        <b>Website: </b> <span> {{ asset('/') }} </span>        
    </p>
</div>