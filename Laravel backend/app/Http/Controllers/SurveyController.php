<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function addSurvey(Request $request){
        $survey = new Survey;
        $survey->name = $request->name;
        $survey->num_of_questions = $request->num_of_questions;
        $survey->save();

        return response()->json([
            "status" => "Success"
        ], 200);
    }

}

