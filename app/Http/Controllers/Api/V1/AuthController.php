<?php 
namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Requests\Authrequest;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Cookie;
use App\Http\Resources\UserResource;
class AuthController extends Controller
{
    public function __construct(){
        // Đảm bảo bạn bật middleware này cho các route cần xác thực
        // $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login(Authrequest $request)
    {
        $credentials = $request->only('email', 'password');
        
        if (! $token = auth()->attempt($credentials)) {
            return response()->json(
            ['error' => 'Tài khoản hoặc mật khẩu không chính xác'],
            Response::HTTP_UNAUTHORIZED);
        }

        $user = auth()->user();


        // Tạo cookie chứa token
        $cookie = Cookie::make('access_token',
        $token, 
        auth()->factory()->getTTL(), '/', null, false, true);        
        // Trả về phản hồi với token và cookie
        return $this->respondWithToken($token, $user)->withCookie($cookie);
    }
    protected function respondWithToken($token,  $user)
    {
        return response()->json([
            'user' => new UserResource($user),
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL()
        ]);
    }
}
