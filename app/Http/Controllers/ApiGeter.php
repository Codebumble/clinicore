<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiGeter extends Controller
{
    public function department_list()
    {
        $demodata = DB::table('cb_departments')
        ->get();

        return response()->json($demodata);
    }

    public function add_department(Request $request)
    {
		$id = $request->get('id');
        $name = $request->get('name');
        $description = $request->get('value');
        $status = $request->get('status');
        $departmentheadname = $request->get('department_head_name');
        $departmentheadsince = $request->get('head_since');

        DB::table('cb_departments')
    ->updateOrInsert(
        ['id' => $id],
        ['name' =>  $name, 'value' => $description,'status' => $status, 'department_head_name' => $departmentheadname, 'head_since' => $departmentheadsince]
    );
    return response()->json('success');
    }

    public function delete_department(Request $request)
    {
        $id = $request->get('id');
        DB::table('cb_departments')->where('id', '=', $id)->delete();

    return response()->json('Data Deleted');
    }
}
