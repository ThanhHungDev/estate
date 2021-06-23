<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class REGISTER_REQUEST extends FormRequest
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
            'email'            => 'required|email|unique:users,email',
            'password'         => 'required|min:6|max:30',
            'confirm_password' => 'required|same:password',
            'role_id'          => 'required',
            // 'g-recaptcha-response' => ['required', new \App\Rules\ValidRecaptcha]
        ];
    }

    public function messages(){
        return [
            'name.required'         => 'Tên phải được nhập',
            'name.min'              => 'Tên phải chứa ít nhất 6 kí tự',
            'name.max'              => 'Tên không được vượt quá 30 kí tự',
            'email.required'        => 'email phải được nhập',
            'email.email'           => 'email không phải là định dạng email',
            'email.unique'          => 'email đã tồn tại',
            'password.required'     => 'mật khẩu phải được nhập',
            'password.min'          => 'mật khẩu phải chứa ít nhất 6 kí tự',
            'password.max'          => 'mật khẩu không được vượt quá 30 kí tự',
            'confirm_password.same' => 'mật khẩu không trùng khớp',
            'role_id.required'      => 'bạn phải chọn bạn là người bán hoặc mua',
            // 'g-recaptcha-response.required' => 'chưa xác minh được recapcha',
            
        ];
    }
}
