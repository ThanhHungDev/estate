<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CLIENT_VALIDATE_CONTACT_PRODUCT extends FormRequest
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
            'name'                 => 'required|max:150',
            'slug'                 => 'required|max:1000',
            'mobile'               => 'required|numeric',
            'g-recaptcha-response' => ['required', new \App\Rules\ValidRecaptcha]
        ];
    }

    public function messages(){
        return [
            'name.required'                 => ':attribute phải được nhập',
            'name.max'                      => ':attribute vượt quá :max kí tự',
            'slug.required'                 => ':attribute phải được nhập',
            'slug.max'                      => ':attribute vượt quá :max kí tự',
            'mobile.required'               => ':attribute phải được nhập',
            'mobile.numeric'                => ':attribute  phải là số',
            'g-recaptcha-response.required' => 'chưa nhập recapcha'
        ];
    }
}
