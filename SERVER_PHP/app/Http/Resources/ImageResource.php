<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'             => $this->id,
            'alt'            => $this->alt,
            'gallery'        => $this->gallery,
            'height'         => $this->height,
            'key'            => $this->key,
            'publish'        => $this->publish,
            'src'            => $this->src,
            'title'          => $this->title,
            'IMAGE_RESIZE'   => Route('IMAGE_RESIZE', [ "size" => 'small', "type" => 'fit', 'imagePath' => $this->src ]),
            'IMAGE_COMPRESS' => Route('IMAGE_COMPRESS', ['quality' => '50', 'imagePath' => $this->src ]),
        ];
    }
}
