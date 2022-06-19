<?php

namespace App\Http\Controllers;

use App\Models\Choice;
use App\Models\Question;
use Illuminate\Http\Request;

class ChoiceController extends Controller
{
    public function addChoice(Request $request)
    {
        $choice = new Choice;
        $choice->context = $request->context;
        $choice->question_id = $request->question_id;
        $choice->save();

        return response()->json([
            "status" => "Success"
        ], 200);

    }
}
