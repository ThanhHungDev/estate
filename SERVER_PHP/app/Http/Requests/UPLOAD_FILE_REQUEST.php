<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Config;

class UPLOAD_FILE_REQUEST extends FormRequest
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
        $TYPE = Config::get('image.UPLOAD');
        $RULE_TYPE = join(",",array_values($TYPE));
        return [
            'file' => 'required',
            'type' => "in:$RULE_TYPE",
        ];
    }

    public function messages(){
        $TYPE = Config::get('image.UPLOAD');

        return [
            'file.required' => 'Tệp tải lên phải được nhập',
            'file.max'      => 'Tệp tải lên không được vượt quá 2MB',
            'type.in'       => 'Kiểu lưu trữ phải trong các định dạng sau : ' . join(", ",array_keys($TYPE))
        ];
    }
}
