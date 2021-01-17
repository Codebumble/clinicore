<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiGeter extends Controller
{
    public function demoshow()
    {
        $demodata = [
            'name' => 'Shakil Ahmed',
            'phone' => 'ok',
            'blank' => '',
        ];

        return response()->json($demodata);
    }

    public function add_department(Request $request)
    {   
        $name = $request->get('name');
        $description = $request->get('description');
        $status = $request->get('status');
        $departmentheadname = $request->get('departmentheadname');
        $departmentheadsince = $request->get('departmentheadsince');

        DB::table('cb_departments')
    ->updateOrInsert(
        ['name' => $name, 'value' => $description],
        ['status' => $status, 'department_head_name' => $departmentheadname, 'head_since' => $departmentheadsince]
    );
    return response()->json('success');
    }
}
