<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ADMIN_VALIDATE_SAVE_PRODUCT extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'           => 'required|max:150',
            'slug'            => 'required|max:150',
            'excerpt'         => 'required|max:255',
            'content'         => 'required',
            'background'      => 'required|max:510',
            'thumbnail'       => 'required|max:510',
            'public'          => 'required',
            'category_id'     => 'required',
            'rate_value'      => 'max:5|min:0',
            'site_name'       => 'required|max:150',
            'image_seo'       => 'required|max:510',
            'description_seo' => 'max:255',
            'type'            => 'required',
            'stylesheet'      => 'max:10000',
            'javascript'      => 'max:10000'
        ];
    }

    public function messages(){
        return [
            'title.required'           => ':attribute phải được nhập',
            'title.max'                => ':attribute vượt quá :max kí tự',
            'slug.required'            => ':attribute phải được nhập',
            'slug.max'                 => ':attribute vượt quá :max kí tự',
            'excerpt.required'         => ':attribute phải được nhập',
            'excerpt.max'              => ':attribute vượt quá :max kí tự',
            'content.required'         => ':attribute phải được nhập',
            'background.required'      => ':attribute phải được nhập',
            'background.max'           => ':attribute vượt quá :max kí tự',
            'thumbnail.required'       => ':attribute phải được nhập',
            'thumbnail.max'            => ':attribute vượt quá :max kí tự',
            'public.required'          => ':attribute phải được nhập',
            'category_id.required'     => ':attribute phải được nhập',
            'rate_value.required'      => ':attribute phải được nhập',
            'site_name.required'       => ':attribute phải được nhập',
            'site_name.max'            => ':attribute vượt quá :max kí tự',
            'image_seo.required'       => ':attribute phải được nhập',
            'image_seo.max'            => ':attribute vượt quá :max kí tự',
            'description_seo.max'      => ':attribute vượt quá :max kí tự',
            'type.required'            => ':attribute phải được nhập',
            'stylesheet'               => ':attribute vượt quá :max kí tự',
            'javascript'               => ':attribute vượt quá :max kí tự',
        ];
    }
}
