<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ADMIN_VALIDATE_SAVE_SLIDER extends FormRequest
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
            'alt'     => 'max:150',
            'topic'   => 'required|max:150',
            'excerpt' => 'required|max:510',
            'title'   => 'required|max:510',
            'content' => 'max:5000',
            'src'     => 'required|max:510',
        ];
    }

    public function messages(){
        return [
            'alt.max'          => ':attribute vượt quá :max kí tự',
            'topic.required'   => ':attribute phải được nhập',
            'topic.max'        => ':attribute vượt quá :max kí tự',
            'excerpt.required' => ':attribute phải được nhập',
            'excerpt.max'      => ':attribute vượt quá :max kí tự',
            'title.required'   => ':attribute phải được nhập',
            'title.max'        => ':attribute vượt quá :max kí tự',
            'content.max'      => ':attribute vượt quá :max kí tự',
            'src.required'     => ':attribute phải được nhập',
            'src.max'          => ':attribute vượt quá :max kí tự',
        ];
    }
}
