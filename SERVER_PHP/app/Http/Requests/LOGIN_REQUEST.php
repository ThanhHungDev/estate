<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LOGIN_REQUEST extends FormRequest
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
            'email'    => 'required|email',
            'password' => 'required|min:6|max:30'
        ];
    }

    public function messages(){
        return [
            'email.required'    => 'email phải được nhập',
            'email.email'       => 'email không phải là định dạng email',
            'email.unique'      => 'email đã tồn tại',
            'password.required' => 'mật khẩu phải được nhập',
            'password.min'      => 'mật khẩu phải chứa ít nhất 6 kí tự',
            'password.max'      => 'mật khẩu không được vượt quá 30 kí tự'
        ];
    }
}
