<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VERIFY_CODE_REQUEST extends FormRequest
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
            'phone' => 'required',
            'code' => 'required',
        ];
    }

    public function messages(){
        return [
            'phone.required' => 'Số điện thoại phải được nhập',
            'code.required'  => 'required',
        ];
    }
}
