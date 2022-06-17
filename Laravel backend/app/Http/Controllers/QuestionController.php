<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{

    // to be modified
    public function addQuestion(Request $request){
        $question = new Question;
        $question->context = $request->context;
        $question->type = $request->type;
        $question->survey_id = $request->survey_id;
        $question->save();

        return response()->json([
            "status" => "Success"
        ], 200);
    }

    //Testing
    public function getQuestion(){
        $question = Question::find(2);
        $question->questionType;
        return response()->json([
            "status" => $question
        ], 200);
    }
}
