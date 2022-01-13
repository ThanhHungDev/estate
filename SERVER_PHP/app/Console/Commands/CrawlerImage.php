<?php

namespace App\Console\Commands;

use App\Helpers\SupportString;
use App\Models\Category;
use App\Models\CrawlerCategory;
use App\Models\Picture;
use App\Models\Product;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use PHPHtmlParser\Dom;
use PHPHtmlParser\Dom\Node\HtmlNode;

class CrawlerImage extends Command
{
    private $HTML      = '<div class="bbWrapper"><b>Trang điểm môi trầm</b> đang là một trong những xu hướng làm đẹp rất nổi tiếng và được giới trẻ vô cùng ưa chuộng hiện nay.<br><br>Thông thường khi nghĩ tới phong cách trang điểm này nhiều người sẽ chỉ liên tưởng tới những cô nàng Âu Mỹ sành điệu và gợi cảm. Tuy nhiên, ngay cả giới trẻ ở các nước Châu Á – nơi phụ nữ luôn ưa chuộng với phong cách make-up tươi tắn, ngọt ngào giờ đây cũng cực kì mê mẩn kiểu <b>trang điểm môi trầm </b>này.<br><br>Hãy cùng theo dõi bài viết sau đây để biết lí do là gì nhé!<br><br>Xem thêm các sản phẩm về <a href="https://australisvietnam.com/vi/cat/moi/" target="_blank" class="link link--external" data-proxy-href="/proxy.php?link=https%3A%2F%2Faustralisvietnam.com%2Fvi%2Fcat%2Fmoi%2F&amp;hash=7434a16dd4544ce685bc76fb4095e8ea" rel="nofollow ugc noopener">môi</a><br><h2><b>1./ Thay đổi phong cách thường ngày với trang điểm môi trầm</b>​</h2>Không còn phổ biến những lối trang điểm nhẹ nhàng, giờ đây kiểu make-up sắc sảo mang đậm phong cách Âu mỹ đang ngày càng lan rộng và thịnh hành trong giới trẻ khắp thế giới. Điểm nổi bật của phong cách trang điểm này chính là bờ môi màu nâu trầm quyến rũ.<br><br>Không tự nhiên mà <b>trang điểm môi trầm</b> – phong cách make-up thập niên 90 một lần nữa quay trở lại và được yêu thích như vậy, thậm chí nó còn được dự đoán là một trong những xu hướng trang điểm thịnh hành nhất năm 2022.<br><br>Việc sử dụng những cây son có tông màu trầm như hồng nude, đỏ nâu, cam đất… không chỉ giúp các cô nàng che khuyết điểm môi thâm sạm mà còn tăng độ dày đáng kể giúp đôi môi trông cực kỳ quyến rũ.<br><br><div class="bbImageWrapper js-lbImage" title="Những cây son có tông màu trầm như hồng nude, đỏ nâu, cam đất" data-src="/proxy.php?image=https%3A%2F%2Faustralisvietnam.com%2Fwp-content%2Fuploads%2F2022%2F01%2Fson-co-mau-tram-533x400.jpg&amp;hash=8980b5b9c0c0b98dae2fe62fea9d4a79" data-lb-sidebar-href="" data-lb-caption-extra-html="" data-single-image="1"><img src="/proxy.php?image=https%3A%2F%2Faustralisvietnam.com%2Fwp-content%2Fuploads%2F2022%2F01%2Fson-co-mau-tram-533x400.jpg&amp;hash=8980b5b9c0c0b98dae2fe62fea9d4a79" data-url="https://australisvietnam.com/wp-content/uploads/2022/01/son-co-mau-tram-533x400.jpg" class="bbImage" data-zoom-target="1" style="" alt="Những cây son có tông màu trầm như hồng nude, đỏ nâu, cam đất" title="Những cây son có tông màu trầm như hồng nude, đỏ nâu, cam đất" width="" height="" loading="lazy"></div><br>Phong cách <b>trang điểm môi trầm</b> cũng rất phù hợp với những buổi tiệc tùng đầy năng động. Vì vậy nếu muốn trở nên thật thu hút và nổi bật để sẵn sàng đi “quẩy” cùng bạn bè thì nàng đừng bỏ qua kiểu trang điểm này nhé.<br><br>Đặc biệt thị trường mỹ phẩm hiện nay có vô vàn những cây son tông trầm với đủ màu khác nhau phù hợp cho từng tông da để các nàng thỏa thích lựa chọn. Vậy nên đừng ngần ngại sở hữu cho mình một em để “bắt trend” ngay nhé. Chắc chắn kiểu <b>trang điểm môi trầm</b> này sẽ giúp nàng thay đổi phong cách đa dạng và khiến bản thân trở nên mới mẻ hơn rất nhiều đấy!<br><br><b>Xem thêm :</b> » <a href="https://australisvietnam.com/vi/trang-diem-chi-voi-mot-cay-son/" target="_blank" class="link link--external" data-proxy-href="/proxy.php?link=https%3A%2F%2Faustralisvietnam.com%2Fvi%2Ftrang-diem-chi-voi-mot-cay-son%2F&amp;hash=dde7c11a39001f18d87f4517e8c56d2e" rel="nofollow ugc noopener">Trang điểm chỉ với một cây son bạn có tin không?</a><br><br><h2><b>2./ Hướng dẫn trang điểm môi trầm để có vẻ ngoài đầy thu hút cho nàng mới bắt đầu</b>​</h2>Dù trở nên ngày càng thịnh hành nhưng<b> trang điểm môi trầm</b> vẫn còn khá mới mẻ với nhiều người và không phải cô càng nào cũng biết cách trang điểm sao cho tôn được vẻ đẹp trên gương mặt nhất.<br><br><ul><li data-xf-list-type="ul">Bước 1: dùng kem che khuyết điểm để tạo một lớp nền hoàn hảo cho môi. Điều này rất quan trọng bởi nó có tác dụng che các khuyết điểm, giúp môi trở nên đều màu hơn và đặc biệt giúp son lên màu “chuẩn” nhất.</li><li data-xf-list-type="ul">Bước 2: dùng chì kẻ môi định hình khuôn môi để giúp việc tô son được dễ dàng và chính xác hơn, tránh tình trạng son bị lem hay chệch ra ngoài viền môi.</li><li data-xf-list-type="ul">Bước 3: dùng son môi tông trầm nhẹ nhàng tô toàn bộ vùng môi đã kẻ viền sao cho đều và đẹp nhất. Ngoài ra nàng có thể sử dụng cọ đánh môi để giúp việc tô son được dễ dàng hơn.</li><li data-xf-list-type="ul">Bước 4: cuối cùng chỉnh sửa lại các chi tiết và dùng che khuyết điểm che những vùng son bị lem để đảm bảo nàng có một đôi môi trầm hoàn hảo.</li></ul><div class="bbImageWrapper js-lbImage" title="Hướng dẫn trang điểm môi trầm để có vẻ ngoài đầy thu hút cho nàng mới bắt đầu" data-src="/proxy.php?image=https%3A%2F%2Faustralisvietnam.com%2Fwp-content%2Fuploads%2F2022%2F01%2Fhuong-dan-trang-diem-moi-tram-533x400.jpg&amp;hash=d3f43dace940f247c7a167aceb83f9cb" data-lb-sidebar-href="" data-lb-caption-extra-html="" data-single-image="1"><img src="/proxy.php?image=https%3A%2F%2Faustralisvietnam.com%2Fwp-content%2Fuploads%2F2022%2F01%2Fhuong-dan-trang-diem-moi-tram-533x400.jpg&amp;hash=d3f43dace940f247c7a167aceb83f9cb" data-url="https://australisvietnam.com/wp-content/uploads/2022/01/huong-dan-trang-diem-moi-tram-533x400.jpg" class="bbImage" data-zoom-target="1" style="" alt="Hướng dẫn trang điểm môi trầm để có vẻ ngoài đầy thu hút cho nàng mới bắt đầu" title="Hướng dẫn trang điểm môi trầm để có vẻ ngoài đầy thu hút cho nàng mới bắt đầu" width="" height="" loading="lazy"></div><br><h2><b>3./ Những lưu ý cho nàng khi trang điểm môi trầm</b>​</h2><h3><b>a./ Cần tẩy da chết trước khi trang điểm môi trầm</b>​</h3>Nên tẩy da chết và dưỡng môi mềm mịn trước khi <b>trang điểm môi trầm </b>bởi những màu son đậm sẽ dễ dàng khiến bạn lộ ra khuyết điểm môi bong tróc, nứt nẻ hơn.<br><br><h3><b>b./ Cần dùng tông màu đồng nhất</b>​</h3><b>Trang điểm môi trầm</b> phải đồng nhất với tông nền cũng như tông mắt và má hồng phù hợp để có được tổng thể lớp trang điểm hoàn hảo, tránh trường hợp bị rời rạc.<br><br><div class="bbImageWrapper js-lbImage" title="Những lưu ý cho nàng khi trang điểm môi trầm" data-src="/proxy.php?image=https%3A%2F%2Faustralisvietnam.com%2Fwp-content%2Fuploads%2F2022%2F01%2Fluu-y-trang-diem-moi-tram-533x400.jpg&amp;hash=d5267706d2fd7f53c6569ed69894e11c" data-lb-sidebar-href="" data-lb-caption-extra-html="" data-single-image="1"><img src="/proxy.php?image=https%3A%2F%2Faustralisvietnam.com%2Fwp-content%2Fuploads%2F2022%2F01%2Fluu-y-trang-diem-moi-tram-533x400.jpg&amp;hash=d5267706d2fd7f53c6569ed69894e11c" data-url="https://australisvietnam.com/wp-content/uploads/2022/01/luu-y-trang-diem-moi-tram-533x400.jpg" class="bbImage" data-zoom-target="1" style="" alt="Những lưu ý cho nàng khi trang điểm môi trầm" title="Những lưu ý cho nàng khi trang điểm môi trầm" width="" height="" loading="lazy"></div><br><h3><b>c./ Lưu ý về màu da trước khi chọn tông môi trầm</b>​</h3>Việc lựa chọn màu son trầm sao cho phù hợp với tông da và sắc tố môi là yếu tố vô cùng quan trọng khi <b>trang điểm môi trầm</b>. Đặc biệt với những cô nàng có làn da nâu, cần cân nhắc khi chọn màu son để tránh phản tác dụng khiến làn da bị “dìm màu”.<br><br>Trên đây là những thông tin hữu ích về <b>trang điểm môi trầm </b>cho cô nàng nào đang quan tâm đến kiểu make-up đầy thu hút này. Hi vọng bài viết sẽ giúp nàng trở nên tỏa sáng và xinh đẹp hơn mỗi ngày. Nếu có bất cứ câu hỏi hay thắc mắc nào đừng ngần ngại để lại bình luận bên dưới để được giải đáp ngay nhé.<br><br>CÔNG TY CỔ PHẦN GOLDEN BAY VIỆT NAM<br>» Địa chỉ: Số 15, Đường 5, Lakeview City, Phường An Phú, Quận 2, Tp.HCM.<br>» Số điện thoại: 0909 903 550<br>» Email: <a href="mailto:info@gbresourceslimited.com">info@gbresourceslimited.com</a><br>» Website: australisvietnam.com</div>';
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:crawler-img';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info( $this->signature . "detect html!!!");
        $dom = new Dom;
        $dom->loadStr($this->HTML);
        $imgwrappers = $dom->find('.bbImageWrapper');
        foreach($imgwrappers as $wrapper ){
            $img = $wrapper->find('img')[0];
            $src = $img->getAttribute('data-url');
            $alt = $img->getAttribute('alt');
            $title = $img->getAttribute('title');
            $tag = new \PHPHtmlParser\Dom\Tag('img');
            $tag->setAttribute('src', $src);
            /// download img về máy bằng queue
            $tag->setAttribute('alt', $alt);
            $tag->setAttribute('title', $title);
            $tag->selfClosing();
            $html = new HtmlNode($tag);
            $wrapper->getParent()->replaceChild($wrapper->id(), $html);
        }
        $this->info( $dom);
        
    }
}
