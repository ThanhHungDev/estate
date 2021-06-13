
<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
@php 
$datetime = date('Y-m-d') . 'T' . date('H:i:s') .'+00:00';
@endphp

<url>
  <loc>https://ebudezain.com/</loc>
  <lastmod>{{ $datetime }}</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://ebudezain.com/contact</loc>
  <lastmod>{{ $datetime }}</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://ebudezain.com/search</loc>
  <lastmod>{{ $datetime }}</lastmod>
  <priority>0.60</priority>
</url>
<url>
  <loc>https://ebudezain.com/search?q=java</loc>
  <lastmod>{{ $datetime }}</lastmod>
  <priority>0.55</priority>
</url>
<url>
  <loc>https://ebudezain.com/search?q=google</loc>
  <lastmod>{{ $datetime }}</lastmod>
  <priority>0.80</priority>
</url>


{!! $sitemap !!}


</urlset>


