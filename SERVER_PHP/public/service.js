const CACHE_NAME = 'HERO-CACHE-v11' /// tên nhóm caches để khi xóa cache thì chỉ cần thay đổi nó thôi
const CACHE_OLD_DELETE = [ 
    'HERO-CACHE-v1', 
    'HERO-CACHE-v2', 
    'HERO-CACHE-v3', 
    'HERO-CACHE-v4', 
    'HERO-CACHE-v5', 
    'HERO-CACHE-v6', 
    'HERO-CACHE-v7', 
    'HERO-CACHE-v8', 
    'HERO-CACHE-v10',
]
// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
    
];


// Cài đặt sw
// Thông thường sau quá trình đăng ký ta đã có thể sử dụng sw nhưng các tính năng như cache, push notification sẽ chưa hoạt động được. Ta cần cài đặt sw trước. Để tiến hành cài đặt thêm cho sw ta sẽ xỷ lý event install của nó.

// Trong callback của install event ta có thể:

// // Mở một cache mới
// // Cache các file cần thiết.
// // Xác nhận có hay không các asset được yêu cầu cần được cache.

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', function(event) {
    console.log('Install cache:' + CACHE_NAME);
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache:' + CACHE_NAME);
            return cache.addAll(PRECACHE_URLS)
        })
    )
})



// // Update service worker
// // Khi cần update sw ta cần làm theo các bước sau:

// // // Update file js của sw. Một file js sw được coi là mới nếu file mới và file cũ khác nhau bằng byte.
// // // SW mới sẽ được đăng ký và event install sẽ được bắn ra.
// // // Nếu sw cũ còn đang điều khiển trang web thì sw mới sẽ được đưa vào trạng thái awaiting.
// // // Khi trang web bị tắt (đóng trình duyệt) thì sw cũ sẽ bị hủy và sw mới sẽ chiếm được quyền điều khiển.
// // // Sau đó event activate của sw mới sẽ được bắn ra.

// // Khi update sw một trong những việc cần xử lý là quản lý lại việc cache, xóa bỏ cache cũ và tạo ra cache mới cho sw. Qua trình này diễn ra ở event activate của sw mới.
// // Đoạn code trên sẽ lặp qua cache và xóa đi các cache không nằm trong CACHE_OLD_DELETE.
// // The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', function(event){
    console.log('Server activate cache: ' + CACHE_NAME);

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            console.log( `Cache name of ${CACHE_NAME} ` , cacheNames )
            return cacheNames.filter(function(cacheName){ return CACHE_OLD_DELETE.indexOf(cacheName) >= 0 })
        }).then(function(cachesToDelete){
            console.log( `Cache delete of ${CACHE_NAME} ` , cachesToDelete )
            return Promise.all(cachesToDelete.map(function(cacheToDelete) {
                return caches.delete(cacheToDelete)
            }));
        })
        .then( function(){ return self.clients.claim()} )
    )
})



// Cache và trả về các request
// Sau khi đã cài đặt sw và user sử dụng điều hướng hoặc refresh lại trang thì sw sẽ bắt đầu nhận các fetch event. Sau đó sẽ xử lý chúng:
// Ở trên ta định nghĩa một event fetch và với event.respondWith(), ta truyền vào một promises của caches.match(). Phương thức này sẽ request nhìn vào request và tìm bất kỳ kết quả nào trùng khớp mà sw đã cached từ trước. Nếu có kết quả trùng khớp ta sẽ trả về giá trị, nếu không ta sẽ trả về kết quả của việc gọi phương thức fetch bằng việc tạo một request và trả về dữ liệu lấy được từu request đó trả về.

// // The fetch handler serves responses for same-origin resources from a cache.
// // If no response is found, it populates the runtime cache with the response
// // from the network before returning it to the page.
self.addEventListener('fetch', event => {
    /// chỉ cache phương thức GET
    if (event.request.method !== 'GET') { return; }
    const WHITELIST_FETCH_IGNORE = [
        "/favicon.",
        "/favicon/",
        "/api/",
        "/browser-sync/",
        "/admin/",
    ]
    WHITELIST_FETCH_IGNORE.forEach(element => {
        /// ignore
        if (event.request.url.indexOf(element) >= 0) { return; }
    })
    /// không cache những url ngoài domain
    if (!event.request.url.startsWith(self.location.origin)) { return; }
    /// không cache mấy cái như document vì lỡ có add mới như comment đi, rồi fetch lên phát không thấy có mới, cái này là lo xa cho những thanh niên không biết có cache trong hệ thống
    const destination = event.request.destination
    const DESTINATIONS_ACCEPT = [ 'style', 'script', 'image', 'font'] ///  , 'document'
    if (DESTINATIONS_ACCEPT.indexOf(destination) < 0) { return; }
    
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            // if( destination == 'document' ){
            //     console.log(navigator.onLine + `khi offline html: ${CACHE_NAME} `, navigator)
            //     /// khi offline html thì cho return response
            //     if (!navigator.onLine && response ){
            //         return response
            //     }
            // }else 
            if ( response ) {
                // console.log(`Cache hit: ${CACHE_NAME} ` + JSON.stringify(response.url) )
                return response
            }
            

            // IMPORTANT: Clone the request. A request is a stream and
            // can only be consumed once. Since we are consuming this
            // once by cache and once by the browser for fetch, we need
            // to clone the response
            var fetchRequest = event.request.clone()

            return fetch(fetchRequest).then(
            function(response) {
                // Check if we received a valid response
                if(!response || response.status !== 200 || response.type !== 'basic') {
                    // console.log("return res:"+response.url + " status: "+response.status)
                    return response
                }

                // IMPORTANT: Clone the response. A response is a stream
                // and because we want the browser to consume the response
                // as well as the cache consuming the response, we need
                // to clone it so we have 2 stream.
                var responseToCache = response.clone()

                caches.open(CACHE_NAME)
                .then(function(cache) {
                    cache.put(event.request, responseToCache)
                })
                return response
            }
            );
        })
    );
});
