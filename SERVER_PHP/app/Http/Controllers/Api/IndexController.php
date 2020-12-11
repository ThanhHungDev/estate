<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    // show all slug
    public function index(){

        
        $slugs = [];
        
        $slugs['post'] = $this->model->createPostModel()->get(['slug'])->pluck('slug');
        $slugs['topic'] = $this->model->createCategoriesModel()->get(['slug'])->pluck('slug');
        $slugs['tag'] = $this->model->createTagModel()->get(['slug'])->pluck('slug');

        /// run sitemap 
        $slugs['sitemaps'] = null;
        $datetime = date('Y-m-d') . 'T' . date('H:i:s') .'+00:00';
        foreach($slugs['topic'] as $topicSlug ){


            $slugs['sitemaps'][] = "
            <url>
                <loc>https://ebudezain.com/topic/$topicSlug</loc>
                <lastmod>$datetime</lastmod>
                <priority>0.64</priority>
            </url>
            ";
        }
        foreach($slugs['tag'] as $tagSlug ){


            $slugs['sitemaps'][] = "
            <url>
                <loc>https://ebudezain.com/tag/$tagSlug</loc>
                <lastmod>$datetime</lastmod>
                <priority>0.55</priority>
            </url>
            ";
        }
        foreach($slugs['post'] as $postSlug ){


            $slugs['sitemaps'][] = "
            <url>
                <loc>https://ebudezain.com/$postSlug</loc>
                <lastmod>$datetime</lastmod>
                <priority>0.60</priority>
            </url>
            ";
        }
        $sitemap = implode("", $slugs['sitemaps']);

        return var_dump($slugs). "===================\n <pre>". htmlentities($sitemap) . "</pre>";
    }

    
}
