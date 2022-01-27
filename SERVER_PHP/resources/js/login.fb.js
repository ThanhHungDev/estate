window.fbAsyncInit = function () {
    // FB JavaScript SDK configuration and setup
    FB.init({
        appId: '283050503736872', // FB App ID
        cookie: true,  // enable cookies to allow the server to access the session
        xfbml: true,  // parse social plugins on this page
        version: 'v3.2' // use graph api version 2.8
    });

    // Check whether the user already logged in
    FB.getLoginStatus(function (response) {
        console.log(response, "luôn chạy hàm này mặc định để xác định user login chưa");
        // connected => Người dùng đăng nhập Facebook và đã đăng nhập trang web của bạn.
        // not_authorized => Người dùng đăng nhập Facebook nhưng chưa đăng nhập trang web của bạn.
        // unknown => Người dùng chưa đăng nhập Facebook nên bạn không biết họ đã đăng nhập trang web của bạn hay chưa. Hoặc FB.logout() đã được gọi trước đó nên không thể kết nối với Facebook.
        if (response.status === 'connected') {
            //display user data
            getFbUserData();
        }
    });
};

// Load the JavaScript SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// Facebook login with JavaScript SDK
window.fbLogin = function () {
    FB.login(function (response) {
        if (response.authResponse) {
            // Get and display the user profile data
            getFbUserData();
        } else {
            document.getElementById('status').innerHTML = 'Bạn vừa huỷ đăng nhập facebook, Vui lòng đăng nhập lại.';
        }
    }, { scope: 'email' });
}

// Fetch the user profile data from facebook
function getFbUserData() {
    FB.api('/me', { locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture' },
        function (response) {
            console.log(response, "đăng nhập fb thành công")
            // response.picture.data.url
            const {
                email, first_name, last_name, id,
                picture,
                gender,
                link
            } = response;
        });
}





