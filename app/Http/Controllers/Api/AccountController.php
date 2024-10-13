<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AccountController extends Controller
{
    
    //Lấy danh sách tài khoản
    public function index()
    {
        // $accounts = Account::all();
        $accounts = Account::select('id', 'username', 'password', 'name', 'address', 'phone', 'email')->get(); 
        if ($accounts->isEmpty()) {
            return response()->json([
                'status' => Response::HTTP_NOT_FOUND,
                'message' => 'account không tồn tại'
            ], Response::HTTP_NOT_FOUND);
        } else {
            return response()->json([
                'data' => $accounts,
                'message' => 'danh sách accounts',
                'status' => Response::HTTP_OK
            ], Response::HTTP_OK);
        }
    }
    // Tạo tài khoản mới
    public function store(Request $request)
    {
        // Validate input data
        $validated = $request->validate([
            'username' => 'required|unique:accounts',
            'password' => 'required|min:8',
            'name'     => 'required',
            'address'  => 'required',
            'phone'    => 'required',
            'email'    => 'required|email|unique:accounts',
            // 'status_id'=> 'required',
            // 'role_id'  => 'required',
        ]);
        try {
            // Tạo tài khoản mới
            Account::create([
                'username' => $request->username,
                'password' => bcrypt($request->password), // Mã hóa mật khẩu
                'name'     => $request->name,
                'address'  => $request->address,
                'phone'    => $request->phone,
                'email'    => $request->email,
                // 'status_id'=> $request->status_id,
                // 'role_id'  => $request->role_id,
            ]);
    
            // Trả về phản hồi thành công
            return response()->json([
                'status'  => 'HTTP OK',
                'message' => 'Data stored successfully in the database',
            ], status: 201);
    
        } catch (\Exception $e) {
            // Xử lý lỗi nếu có ngoại lệ
            return response()->json([
                'status'  => 'HTTP INTERNAL_SERVER_ERROR',
                'message' => 'Failed to store data in the database',
                'error'   => $e->getMessage(),
            ], status: 500);
        }
    }
    

    // Lấy chi tiết tài khoản
    public function show($id)
    {
        
        $account = Account::where('id', $id)->first();
        if ($account) {
            return response()->json([
                'status' => Response::HTTP_OK,
                'data' => [
                    "username" => $account->username,
                    "password" => $account->password,
                    "name" => $account->name,
                    "address" => $account->address,
                    "phone" => $account->phone,
                    "email" => $account->email,
                    "status_id" => $account->status_id,
                    "role_id" => $account->role_id,

                ]
            ], Response::HTTP_OK);
        } else {
            return response()->json([
                'status' => Response::HTTP_NOT_FOUND,
                'message' => 'account not found'
            ], Response::HTTP_NOT_FOUND);
        }
    }

    // Cập nhật tài khoản
    public function update(Request $request, $id)
    {
        $account = Account::find($id);
        if ($account) {
            $account->update($request->all());
            return response()->json($account, 200);
        } else {
            return response()->json(['message' => 'Account not found'], 404);
        }
    }

    // Xóa tài khoản
    public function destroy($id)
    {
        $account = Account::find($id);
        if ($account) {
            $account->delete();
            return response()->json(['message' => 'Account deleted'], 200);
        } else {
            return response()->json(['message' => 'Account not found'], 404);
        }
    }
}
