Chào <i>{{ $input['name'] }}</i>,
<p>
    Đây là công ty {{ Config::get('app.company_name') }}. 
    Chúng tôi là đơn vị thiết kế website uy tín chuyên nghiệp.
</p>

 
<div>
<p><b>Demo One:</b>&nbsp;{{ $input['email'] }}</p>
<p><b>Demo Two:</b>&nbsp;{{ $input['mobile'] }}</p>
</div>
<div>
<p><b>Message:</b>&nbsp;{{ $input['message'] }}</p>
</div>
 
Thank You,
<br/>
<i>{{ $input['name'] }}</i>