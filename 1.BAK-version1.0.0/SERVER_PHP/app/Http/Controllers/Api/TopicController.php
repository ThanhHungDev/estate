<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TopicResource;
use Illuminate\Http\Request;

class TopicController extends Controller
{
    //

    public function index(){

        $topicModel = $this->model->createTopicModel();
        $topics     = $topicModel->getAll();
        return TopicResource::collection($topics);
    }

    /**
     * Display the specified resource.
     *
     * @param Product $product
     * @return Product
     */
    public function show($id)
    {
        $topicModel = $this->model->createTopicModel();
        $topic      = $topicModel->find($id);
        return new TopicResource($topic);
    }
}
