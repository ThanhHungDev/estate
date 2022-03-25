<?php

namespace App\Http\Resources;

use App\Models\Product;
use Illuminate\Http\Resources\Json\JsonResource;

class LikeResource extends JsonResource
{
    protected $active;
    public function __construct(Product $resource, ?bool $_active)
    {
        parent::__construct($resource);
        $this->active = $_active;
    }

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'      => $this->id,
            'like'   => $this->like,
            'active' =>  $this->active,
        ];
    }
}
