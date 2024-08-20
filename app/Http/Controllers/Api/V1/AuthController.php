<?php 
namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Requests\Authrequest;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Cookie;

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
            return response()->json(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }
        
        // Tạo cookie chứa token
        $cookie = Cookie::make('access_token', $token, auth()->factory()->getTTL(), '/', null, false, true);
        
        // Trả về phản hồi với token và cookie
        return $this->respondWithToken($token)->withCookie($cookie);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL()
        ]);
    }
}
