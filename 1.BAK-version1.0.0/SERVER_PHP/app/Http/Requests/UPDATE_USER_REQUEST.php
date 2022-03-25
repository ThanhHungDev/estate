<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UPDATE_USER_REQUEST extends FormRequest
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
            'name'             => 'required|min:6|max:50',
            'password'         => 'required|min:6|max:30',
            'confirm_password' => 'required|same:password',
        ];
    }

    public function messages(){
        return [
            'name.required'         => 'Tên phải được nhập',
            'name.min'              => 'Tên phải chứa ít nhất 6 kí tự',
            'name.max'              => 'Tên không được vượt quá 30 kí tự',
            'password.required'     => 'mật khẩu phải được nhập',
            'password.min'          => 'mật khẩu phải chứa ít nhất 6 kí tự',
            'password.max'          => 'mật khẩu không được vượt quá 30 kí tự',
            'confirm_password.same' => 'mật khẩu không trùng khớp',
        ];
    }
}
