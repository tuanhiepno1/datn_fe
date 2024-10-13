<?php 
namespace App\Http\Controllers\Api\v1;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\Authrequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Dotenv\Exception\ValidationException;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function  getLogin(){
        return view('login'); 
    }

   
    public function postLogin(Request $request)
    {
        try{ 

            $request->validate([
                'email' => 'required|email',
                'password' => 'required',
            ]);

            $credentials = [
                'email' => $request->email,
                'password' => $request->password,
            ];

            if(Auth::guard('accounts')->attempt($credentials, $request->filled('remember'))) {
                // Xử lý sau khi đăng nhập thành công (ví dụ: chuyển hướng đến trang chủ)
                return redirect()->intended('/')->with('success', 'Đăng nhập thành công!'); 
            }

            // Đăng nhập thất bại
            throw ValidationException::withMessages([
                'email' => [trans('auth.failed')], 
            ]);

        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }
}