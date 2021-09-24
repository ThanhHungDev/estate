<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ADMIN_VALIDATE_SAVE_REVIEW extends FormRequest
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
            'avatar'  => 'max:510',
            'topic'   => 'required|max:510',
            'excerpt' => 'required|max:5000',
            'author'  => 'required|max:510',
        ];
    }

    public function messages(){
        return [
            
            'topic.required'   => ':attribute phải được nhập',
            'topic.max'        => ':attribute vượt quá :max kí tự',
            'excerpt.required' => ':attribute phải được nhập',
            'excerpt.max'      => ':attribute vượt quá :max kí tự',
            'author.required'   => ':attribute phải được nhập',
            'author.max'        => ':attribute vượt quá :max kí tự',
            'avatar.max'          => ':attribute vượt quá :max kí tự',
        ];
    }
}
