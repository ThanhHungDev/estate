Xin chào {{ $input['name'] }},

    Đây là công ty {{ Config::get('app.company_name') }}. 
    Chúng tôi là đơn vị cung cấp dịch vụ bất động sản uy tín chuyên nghiệp.

    Chúng tôi được gửi yêu cầu thông qua số điện thoại: {{ $input['mobile'] }}
    Cảm ơn bạn đã tin tưởng và cùng đồng hành.

    Với product đang được contact là: {{ Route('PRODUCT_VIEW', ['slug' => $input['slug'] ]) }}

    
    Tin nhắn sẽ gửi đến quản trị viên: {{ $input['message'] }}

====================================================================

Trân trọng cảm ơn!

{{ Config::get('app.founder') }} (Mr.)
email: {{ Config::get('app.company_mail') }}
Địa Chỉ: {{ implode(',', [ Config::get("app.company_address_street"), Config::get("app.company_address_locality"), Config::get("app.company_address_region"), Config::get("app.company_address_country")]) }}
Liên hệ: {{ Config::get("app.phone_one") }}
website: {{ asset('/') }}