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
        $choice->question_id = $request->question_id;

        $choice->context = $request->context;

        $choice->save();

        return response()->json([
            "status" => "Success"
        ], 200);

    }
}
