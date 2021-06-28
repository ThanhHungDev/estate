const VERSION = "?v=657432";


const PRECACHE = 'HERO-CACHE-v1'
const RUNTIME  = 'HERO-RUNTIME-v1'
const DOMAIN   = "https://ebudezain.com"

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [

    "css/library/jquery-ui.min.css" + VERSION,
    "css/library/jquery.toast.min.css" + VERSION,
    "css/library/prism.min.css" + VERSION,
    "css/library/slick-theme.css" + VERSION,
    "css/library/slick.css" + VERSION,
    "/css/client.css" + VERSION,
    '/js/client/app.min.js' + VERSION,
    '/js/client/validate.contact.min.js' + VERSION,
    "/favicon.ico" + VERSION,
    "/js/library/jquery.min.js" + VERSION,
    "/js/library/jquery.rateit.min.js" + VERSION,
    "/js/library/prism.min.js" + VERSION,
    "/js/library/select2.min.js" + VERSION,
    "/js/library/slick.min.js" + VERSION,
    "/js/library/wanakana.min.js" + VERSION,

    "/images/background/bg-developer.jpg",
    "/images/background/bg-developer-pc.jpg",
    "/images/background/avatar-developer.jpg",

    "/font/IconFont/webfont.woff2?v=1.4.57",
    "/font/font-awe/webfonts/fa-duotone-900.woff2",
    "/font/font-awe/webfonts/fa-light-300.woff2",
    "/font/font-awe/webfonts/fa-solid-900.woff2"
];


// Cài đặt sw
// Thông thường sau quá trình đăng ký ta đã có thể sử dụng sw nhưng các tính năng như cache, push notification sẽ chưa hoạt động được. Ta cần cài đặt sw trước. Để tiến hành cài đặt thêm cho sw ta sẽ xỷ lý event install của nó.

// Trong callback của install event ta có thể:

// // Mở một cache mới
// // Cache các file cần thiết.
// // Xác nhận có hay không các asset được yêu cầu cần được cache.

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(PRECACHE)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(PRECACHE_URLS);
        })
    );
});



// // Update service worker
// // Khi cần update sw ta cần làm theo các bước sau:

// // // Update file js của sw. Một file js sw được coi là mới nếu file mới và file cũ khác nhau bằng byte.
// // // SW mới sẽ được đăng ký và event install sẽ được bắn ra.
// // // Nếu sw cũ còn đang điều khiển trang web thì sw mới sẽ được đưa vào trạng thái awaiting.
// // // Khi trang web bị tắt (đóng trình duyệt) thì sw cũ sẽ bị hủy và sw mới sẽ chiếm được quyền điều khiển.
// // // Sau đó event activate của sw mới sẽ được bắn ra.

// // Khi update sw một trong những việc cần xử lý là quản lý lại việc cache, xóa bỏ cache cũ và tạo ra cache mới cho sw. Qua trình này diễn ra ở event activate của sw mới.
// // Đoạn code trên sẽ lặp qua cache và xóa đi các cache không nằm trong currentCaches.
// // The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', function(event){
    const currentCaches = [PRECACHE, RUNTIME];
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return cacheNames.filter(function(cacheName){ return !currentCaches.includes(cacheName) });
        }).then(function(cachesToDelete){
            return Promise.all(cachesToDelete.map(function(cacheToDelete) {
                return caches.delete(cacheToDelete);
            }));
        }).then( function(){ return self.clients.claim()} )
    );
});



// Cache và trả về các request
// Sau khi đã cài đặt sw và user sử dụng điều hướng hoặc refresh lại trang thì sw sẽ bắt đầu nhận các fetch event. Sau đó sẽ xử lý chúng:
// Ở trên ta định nghĩa một event fetch và với event.respondWith(), ta truyền vào một promises của caches.match(). Phương thức này sẽ request nhìn vào request và tìm bất kỳ kết quả nào trùng khớp mà sw đã cached từ trước. Nếu có kết quả trùng khớp ta sẽ trả về giá trị, nếu không ta sẽ trả về kết quả của việc gọi phương thức fetch bằng việc tạo một request và trả về dữ liệu lấy được từu request đó trả về.

// // The fetch handler serves responses for same-origin resources from a cache.
// // If no response is found, it populates the runtime cache with the response
// // from the network before returning it to the page.
self.addEventListener('fetch', event => {
    // console.log("fetch before cache " + event.request.url)
    
    if (event.request.method !== 'GET') { return; }
    if (event.request.url.indexOf("/api/") != -1) { return; }
    if (event.request.url.indexOf("/admin/") != -1) { return; }
    // if (event.request.url.indexOf(DOMAIN) == -1) { return; }
    // console.log("compare -" + event.request.url, self.location.origin)

    const destination = event.request.destination
    switch (destination) {
        case 'style':
        case 'script':
        case 'image':
        case 'font': {
            
            return handleCache(event);
        }

        case 'document':
        // All `XMLHttpRequest` or `fetch()` calls where
        // `Request.destination` is the empty string default value
        default: {
            return;
        }
    }

    
});

function handleCache(event){
    // Skip cross-origin requests, like those for Google Analytics.
    if (event.request.url.startsWith(self.location.origin)) {

        event.respondWith(
            caches.match(event.request).then(cachedResponse => {

                if (cachedResponse) {
                    return cachedResponse;
                }
                
                return caches.open(RUNTIME).then(cache => {
                    if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
                        return;
                    }
                    // console.log("fetch cái này :::::::::::: " + event.request.url, RUNTIME)
                    return fetch(event.request)
                    .then(response => {
                        // Dont cache if not a 200 response
                        if (!response || response.status !== 200) {
                            return response;
                        }
                        // Put a copy of the response in the runtime cache.
                        return cache.put(event.request, response.clone()).then(() => {
                            return response;
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    })
                });
            })
        );
    }
}

// self.addEventListener('push', function (event) {
//     console.log(event, 'Received push');

//     var serverData = event.data.json();
//     if(serverData){
//         console.log(serverData)

//         var title = serverData.title ? serverData.title : "thông báo";
//         var notifiBody = serverData.body ? serverData.body : 'thông báo cho vui';
//         var imageIcon = serverData.imageUrl ? serverData.imageUrl : "favicon/apple-icon-57x57.png";
//         var rUrl       = serverData.redirectUrl ? serverData.redirectUrl : DOMAIN + "/chat";
        
//         self.registration.showNotification(title,{
//             body : notifiBody,
//             icon : imageIcon,
//             data: {
//                 dateOfArrival: Date.now(),
//                 primaryKey: 1,
//                 redirectUrl : rUrl
//             },
//             timeout : 1000
//         });
//     }else{
//         console.log("There is no data to be displayed.");
//     }
// });






/**
 * Is the current request for an HTML page?
 * @param {Object} event
*/
// function isHtmlPage(event) {
//     console.log(event.request.headers.get('accept'), "event.request.headers.get('accept')")
//     return event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html');
// }

/**
 * Is the current request for the admin portal resource
 * @param {Object} event
 */
// function isAdminPageResource(event) {
//     return event.request.url.includes("/admin");
// }
