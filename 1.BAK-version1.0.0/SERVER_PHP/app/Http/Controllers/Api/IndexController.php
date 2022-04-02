<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class IndexController extends Controller
{
    // show all slug
    public function index(Request $request){

        $queryToday = null;
        if($request->has('today')) {

            $queryToday = $request->query('today');
        }

        $datetime = null;
        if( $queryToday ){

            $datetime = date('c',time());
        }
        $sitemaps      = $this->createSitemap($datetime);
        //// 1 sitemap limit 10000
        $sitemapsChunk = array_chunk($sitemaps, 10000);
        $sitemap = []; // 
        foreach($sitemapsChunk as $itemChunk ){

            $strSitemaps = implode("",  $itemChunk);
            $sitemap[]   = $this->createXMLSitemap($strSitemaps);
        }
        return response()->view("admin.sitemap", compact('sitemap'));
    }

    
    public function save( Request $request ){

        $queryToday = null;
        if($request->has('today')) {

            $queryToday = $request->query('today');
        }

        $datetime = null;
        if( $queryToday ){

            $datetime = date('c',time());
        }


        $sitemaps      = $this->createSitemap($datetime);
        //// 1 sitemap limit 10000
        $sitemapsChunk = array_chunk($sitemaps, 10000);

        $paths = [];
        $sitemap  = [];  // 
        foreach($sitemapsChunk as $key => $itemChunk ){

            $strSitemaps = implode("",  $itemChunk);
            $xml   = $this->createXMLSitemap($strSitemaps);

            $todayPath = '';
            if( $queryToday ){

                $todayPath = 'today';
            }
            $path = "sitemap/sitemap-$todayPath-$key-" . date('Y-m-d') . '.xml';
            $paths[]     = $path;
            $fullPath = public_path($path);
            try {
                if(File::exists($fullPath)){

                    File::delete($fullPath);
                }
                File::put( $fullPath, $xml );
            } catch (\Throwable $th) {
                return 'error 500 ' . $th->getMessage();
            }

        }
        return view('admin.sitemap-rendering', compact('paths'));
    }

    private function createXMLSitemap(string $site){

        return '<?xml version="1.0" encoding="UTF-8"?>
        <urlset
              xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
                    
        '. $site .'
        </urlset>';
    }

    private function createSitemapDefault(){

        $ASSET = trim(asset("/"), '/');
        $datetimeLinkDefault = date('c',time());

        /// run sitemap 
        $sitemaps = [];
        $sitemaps[] = "
        <url>
            <loc>$ASSET</loc>
            <lastmod>$datetimeLinkDefault</lastmod>
            <priority>1.00</priority>
        </url>
        <url>
            <loc>$ASSET/contact</loc>
            <lastmod>$datetimeLinkDefault</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>$ASSET/search</loc>
            <lastmod>$datetimeLinkDefault</lastmod>
            <priority>0.60</priority>
        </url>
        <url>
            <loc>$ASSET/search?q=java</loc>
            <lastmod>$datetimeLinkDefault</lastmod>
            <priority>0.55</priority>
        </url>
        <url>
            <loc>$ASSET/search?q=google</loc>
            <lastmod>$datetimeLinkDefault</lastmod>
            <priority>0.80</priority>
        </url>
            ";
        return $sitemaps;
    }

    private function createSitemap($datetime = null){

        $ASSET = trim(asset("/"), '/');

        $postModel = $this->model->createPostModel();
        $posts     = $postModel->getPostActiveByCondition()->get(['title', 'slug', 'catalogue', 'updated_at']);

        $topics = $this->model->createTopicModel()->get(['slug', 'updated_at']);
        $tags   = $this->model->createTagModel()->get(['slug', 'updated_at']);

        /// run sitemap 
        $sitemaps = $this->createSitemapDefault();
        foreach($topics as $topic ){

            $timeSitemap = $datetime;
            if(!$timeSitemap){
                $timeSitemap = $topic->updated_at->tz('UTC')->toAtomString();
            }
            $sitemaps[] = "
            <url>
                <loc>$ASSET/topic/{$topic['slug']}</loc>
                <lastmod>{$timeSitemap}</lastmod>
                <priority>0.80</priority>
            </url>
            ";
        }
        foreach($tags as $tag ){

            $timeSitemap = $datetime;
            if(!$timeSitemap){
                $timeSitemap = $tag->updated_at->tz('UTC')->toAtomString();
            }
            $sitemaps[] = "
            <url>
                <loc>$ASSET/tag/{$tag['slug']}</loc>
                <lastmod>{$timeSitemap}</lastmod>
                <priority>0.50</priority>
            </url>
            ";
        }
        foreach($posts as $post ){


            if( Carbon::parse($post->updated_at) >= Carbon::parse('2020-10-27 05:21:03')){
                
                $timeSitemap = $datetime;
                if(!$timeSitemap){
                    $timeSitemap = $post->updated_at->tz('UTC')->toAtomString();
                }
                $postTitle = preg_replace("/[^\p{L}\p{N}_]+/u", " ",  $post['title']);
                $postTitle = trim($postTitle, " ");
                $sitemaps[] = "
                    <url>
                        <loc>$ASSET/search?q={$postTitle}</loc>
                        <lastmod>{$timeSitemap}</lastmod>
                        <priority>0.3</priority>
                    </url>";
            }

            $timeSitemapPost = $datetime;
            if(!$timeSitemapPost){
                $timeSitemapPost = $post->updated_at->tz('UTC')->toAtomString();
            }
            $sitemaps[] = "
            <url>
                <loc>$ASSET/{$post['slug']}</loc>
                <lastmod>{$timeSitemapPost}</lastmod>
                <priority>0.7</priority>
            </url>
            ";
        }
        return $sitemaps;
    }
}
