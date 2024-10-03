<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Log;
class CommentController extends Controller
{
    public function index()
    {
        // $accounts = Account::all();
        $comments = Comment::select('id', 'name', 'email', 'content', 'content_date')->get(); 
        if ($comments->isEmpty()) {
            return response()->json([
                'status' => Response::HTTP_NOT_FOUND,
                'message' => 'comments không tồn tại'
            ], Response::HTTP_NOT_FOUND);
        } else {
            return response()->json([
                'data' => $comments,
                'message' => 'danh sách comments',
                'status' => Response::HTTP_OK
            ], Response::HTTP_OK);
        }
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required',
                'email' => 'required|email|min:8', 
                'content' => 'required',
                'content_date' => 'required|date_format:Y-m-d', 
            ]);
    
            Comment::create($validated);
    
            return response()->json([
                'status' => 'HTTP OK',
                'message' => 'Data stored successfully in the database',
            ], 201);
    
        } catch (ValidationException $e) {
            return response()->json([
                'status' => 'HTTP_UNPROCESSABLE_ENTITY',
                'message' => 'Validation error',
                'errors' => $e->errors(),
            ], 422);
    
        } catch (QueryException $e) {
            Log::error($e); 
    
            return response()->json([
                'status' => 'HTTP_INTERNAL_SERVER_ERROR',
                'message' => 'Failed to store data in the database',
            ], 500);
        } 
    }


    public function show($id)
    {
        
        $comments = Comment::where('id', $id)->first();
        if ($comments) {
            return response()->json([
                'status' => Response::HTTP_OK,
                'data' => [
                    "name" => $comments->username,
                    "email" => $comments->password,
                    "content" => $comments->name,
                    "content_date" => $comments->address,
                ]
            ], Response::HTTP_OK);
        } else {
            return response()->json([
                'status' => Response::HTTP_NOT_FOUND,
                'message' => 'account not found'
            ], Response::HTTP_NOT_FOUND);
        }
    }
    public function update(Request $request, $id)
    {
        $comments = Comment::find($id);
        if ($comments) {
            $comments->update($request->all());
            return response()->json($comments, 200);
        } else {
            return response()->json(['message' => 'Account not found'], 404);
        }
    }
    public function destroy($id)
    {
        $comments = Comment::find($id);
        if ($comments) {
            $comments->delete();
            return response()->json(['message' => 'Account deleted'], 200);
        } else {
            return response()->json(['message' => 'Account not found'], 404);
        }
    }
}
