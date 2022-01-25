<script>
    // Nạp Javascript SDK
    (function(thisdocument, scriptelement, id) {
      var js, fjs = thisdocument.getElementsByTagName(scriptelement)[0];
      if (thisdocument.getElementById(id)) return;
      
      js = thisdocument.createElement(scriptelement); js.id = id;
      js.src = "//connect.facebook.net/vi_VN/sdk.js"; //you can use 
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
      
    window.fbAsyncInit = function() {
    FB.init({
      appId      : '212550605589620', // APP ID ứng dụng của bạn
      cookie     : true,  // Kích hoạt cookies
                          
      xfbml      : true,  // plugins xã hội
      version    : 'v2.1' // Sử dụng version 2.1
    });
  
    // Xử lý hàm callback
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  
    };
      
    // Kết quả từ FB.getLoginStatus().
    function statusChangeCallback(response) {
      if (response.status === 'connected') {
        // Đăng nhập vào ứng dụng của bạn và facebook.
        _i();
      } else if (response.status === 'not_authorized') {
        // Người dùng đăng nhập từ một địa chỉ khác.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
      }
    }  
    
    function _login() {
      FB.login(function(response) {
         // Xử lý các kết quả
         if(response.status==='connected') {
          _i();
         }
       }, {scope: 'public_profile,email'});
   }
   
  // Điền kết quả vào textbox
   function _i(){
       FB.api('/me', function(response) {
        console.warn(response, "fill kết quả có sẵn");
      });
   }
  
  </script>