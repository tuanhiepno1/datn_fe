<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
class RoleController extends Controller
{
     //Lấy danh sách Role
     public function index(Request $request)
     {
         $roleSeller = Role::select('id', 'admin', 'buyer', 'seller')->get(); 
         if ($roleSeller->isEmpty()) {
             return response()->json([
                 'status' => Response::HTTP_NOT_FOUND,
                 'message' => 'account không tồn tại'
             ], Response::HTTP_NOT_FOUND);
         } else {
             return response()->json([
                 'data' => $roleSeller,
                 'message' => 'danh sách Role',
                 'status' => Response::HTTP_OK
             ], Response::HTTP_OK);
         }
     }
     // Tạo tài khoản mới
     public function store(Request $request)
     {
         // Validate input data
         $validated = $request->validate([
             'admin' => 'required',
             'buyer' => 'required',
             'seller' => 'required',
         ]);
         try {
             // Tạo tài khoản mới
             Role::create([
                 'admin' => $request->admin,
                 'buyer' => $request->buyer,
                 'seller'     => $request->seller,
             ]);
             // Trả về phản hồi thành công
             return response()->json([
                 'status'  => 'HTTP OK',
                 'message' => 'Data  successfully in the database',
             ], 201);
     
         } catch (\Exception $e) {
             // Xử lý lỗi nếu có ngoại lệ
             return response()->json([
                 'status'  => 'HTTP INTERNAL_SERVER_ERROR',
                 'message' => 'Failed data in the database',
                 'error'   => $e->getMessage(),
             ], 500);
         }
     }
     // Lấy chi tiết Role
     public function show($id)
     {
         
         $roleSeller = Role::where('id', $id)->first();
         if ($roleSeller) {
             return response()->json([
                 'status' => Response::HTTP_OK,
                 'data' => [
                     "admin" => $roleSeller->admin,
                     "buyer" => $roleSeller->buyer,
                     "seller" => $roleSeller->seller,
                 ]
             ], Response::HTTP_OK);
         } else {
             return response()->json([
                 'status' => Response::HTTP_NOT_FOUND,
                 'message' => 'account not found'
             ], Response::HTTP_NOT_FOUND);
         }
     }
     // Cập nhật vài trò
     public function update(Request $request, $id)
     {
         $roleSeller = Role::find($id);
         if ($roleSeller) {
             $roleSeller->update($request->all());
             return response()->json($roleSeller, 200);
         } else {
             return response()->json(['message' => 'Account not found'], 404);
         }
     }
 
     // Xóa vai trò
     public function destroy($id)
     {
         $roleSeller = Role::find($id);
         if ($roleSeller) {
             $roleSeller->delete();
             return response()->json(['message' => 'Role deleted'], 200);
         } else {
             return response()->json(['message' => 'Role not found'], 404);
         }
     }
}
