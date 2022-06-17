<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function addQuestion(Request $request){
        $question = new Question;
        $question->context = $request->context;
        $question->type = $request->type;
        $question->survey_id = $request->survey_id;
        $question->choices = $request->choices;
        $question->save();

        return response()->json([
            "status" => "Success"
        ], 200);
    }
}
