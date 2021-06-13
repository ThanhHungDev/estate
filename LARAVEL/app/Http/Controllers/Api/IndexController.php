<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class IndexController extends Controller
{
    // show all slug
    public function index(){

        $sitemap = implode("", $this->createSitemap() );

        // return response($content)
        // ->withHeaders([
        //     'Content-Type' => 'text/xml'
        // ]);
        return response()->view("admin.sitemap", compact('sitemap'))->header('Content-Type', 'text/xml');
    }

    
    public function save(){

        $sitemap = implode("", $this->createSitemap() );
        $view = view("admin.sitemap", compact('sitemap'))->render();
        $path = public_path('sitemap/sitemap' . date('Y-m-d') . '.xml');
        try {
            File::put( $path, $view );
        } catch (\Throwable $th) {
            return 'error 500 ' . $th->getMessage();
        }
        return $path;
    }

    private function createSitemap(){

        $posts = $this->model->createPostModel()->get(['title', 'slug', 'updated_at']);
        // $topics = $this->model->createTopicModel()->get(['slug', 'updated_at']);
        $tags = $this->model->createTagModel()->get(['slug', 'updated_at']);

        /// run sitemap 
        $sitemaps = [];
        // foreach($topics as $topic ){

        //     $sitemaps[] = "
        //     <url>
        //         <loc>https://ebudezain.com/topic/{$topic['slug']}</loc>
        //         <lastmod>{$topic->updated_at->tz('UTC')->toAtomString()}</lastmod>
        //         <priority>0.64</priority>
        //     </url>
        //     ";
        // }
        foreach($tags as $tag ){
            $link = Route('TAG_VIEW', [ 'slug' => $tag['slug'] ]);
            $sitemaps[] = "
            <url>
                <loc>{$link}</loc>
                <lastmod>{$tag->updated_at->tz('UTC')->toAtomString()}</lastmod>
                <priority>0.55</priority>
            </url>
            ";
        }
        foreach($posts as $post ){

            
            $linkSearch = Route('SEARCH', [ 'q' => $post['title'] ]);
            $sitemaps[] = "
                <url>
                    <loc>{$linkSearch}</loc>
                    <lastmod>{$post->updated_at->tz('UTC')->toAtomString()}</lastmod>
                    <priority>0.3</priority>
                </url>";

            $linkPost = Route('SEARCH', [ 'q' => $post['slug'] ]);
            $sitemaps[] = "
            <url>
                <loc>{$linkPost}</loc>
                <lastmod>{$post->updated_at->tz('UTC')->toAtomString()}</lastmod>
                <priority>0.60</priority>
            </url>
            ";
        }
        return $sitemaps;
    }
}
