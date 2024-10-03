<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Status;
use Illuminate\Http\Response;
class StatusController extends Controller
{
    // Lấy danh sách status
    public function index()
    {
        $statuses = Status::select('id', 'status_code', 'status_name')->get(); 
    
        if ($statuses->isEmpty()) {
            return response()->json([
                'status' => Response::HTTP_NOT_FOUND,
                'message' => 'No statuses found',
            ], Response::HTTP_NOT_FOUND);
        }
    
        return response()->json([
            'data' => $statuses,
            'status' => Response::HTTP_OK,
        ], Response::HTTP_OK);
    }
    // Lưu status mới
    public function store(Request $request)
    {
        $validated = $request->validate([
            'status_code' => 'required|unique:statuses',
            'status_name' => 'required',
        ]);

        $status = Status::create([
            'status_code' => $request->status_code,
            'status_name' => $request->status_name,
        ]);

        return response()->json([
            'data' => $status,
            'status' => Response::HTTP_CREATED,
            'message' => 'Status created successfully',
        ], Response::HTTP_CREATED);
    }

    // Lấy status theo id
    public function show($id)
    {
        $status = Status::find($id);

        if (!$status) {
            return response()->json([
                'status' => Response::HTTP_NOT_FOUND,
                'message' => 'Status not found',
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'data' => $status,
            'status' => Response::HTTP_OK,
        ], Response::HTTP_OK);
    }

    // Cập nhật status
    public function update(Request $request, $id)
    {
        $status = Status::find($id);

        if (!$status) {
            return response()->json([
                'status' => Response::HTTP_NOT_FOUND,
                'message' => 'Status not found',
            ], Response::HTTP_NOT_FOUND);
        }

        $validated = $request->validate([
            'status_code' => 'required|unique:statuses,status_code,' . $id,
            'status_name' => 'required',
        ]);

        $status->update([
            'status_code' => $request->status_code,
            'status_name' => $request->status_name,
        ]);

        return response()->json([
            'data' => $status,
            'status' => Response::HTTP_OK,
            'message' => 'Status updated successfully',
        ], Response::HTTP_OK);
    }

    // Xóa status
    public function destroy($id)
    {
        $status = Status::find($id);

        if (!$status) {
            return response()->json([
                'status' => Response::HTTP_NOT_FOUND,
                'message' => 'Status not found',
            ], Response::HTTP_NOT_FOUND);
        }

        $status->delete();

        return response()->json([
            'message' => 'Status deleted successfully',
            'status' => Response::HTTP_OK,
        ], Response::HTTP_OK);
    }
}
