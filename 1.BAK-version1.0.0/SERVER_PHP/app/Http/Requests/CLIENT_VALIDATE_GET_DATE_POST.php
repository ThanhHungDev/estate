<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CLIENT_VALIDATE_GET_DATE_POST extends FormRequest
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
            'token' => 'required',
            'limit' => 'required',
            'time'  => 'required',
        ];
    }

    public function messages(){
        return [
            'token.required' => ':attribute phải được nhập',
            'limit.required' => ':attribute phải được nhập',
            'time.required'  => ':attribute phải được nhập',
        ];
    }
}
