<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ApiGeterDoctor extends Controller
{
    public function department_list()
    {
        $demodata = DB::table('cb_departments')
        ->get();

        return response()->json($demodata);
    }

    public function add_doctor(Request $request)
    {
        $id = $request->get('id');
        $username = $request->get('username');
        $uniqueid = $request->get('username');
        $fullname = $request->get('fullname');
        $email = $request->get('email');
        $address = $request->get('address');
        $birthdate = $request->get('birthdate');
        $city = $request->get('city');
        $postal = $request->get('postal');
        $gender = $request->get('doc_gender');
        $country = $request->get('country');
        $mobile = $request->get('mobile');
        $department = $request->get('department');
        $nationality = $request->get('nationality');


        DB::table('cb_users_details')
    ->updateOrInsert(
        ['unique_id' => $uniqueid],
        ['username' => $username,'occupation' => 'Doctor', 'full_name' => $fullname, 'date_of_birth' => $birthdate,'address' => $address,'city' => $city, 'postal_code' => $postal, 'country' => $country,'mobile' => $mobile, 'gender' => $gender] 
    );

    return response()->json('Updated Users');
    }
}
