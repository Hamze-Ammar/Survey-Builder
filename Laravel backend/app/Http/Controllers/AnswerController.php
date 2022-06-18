<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    public function saveAnswer(Request $request){
        $question_id = $request->question_id;
        $question = Question::find($question_id);
        $survey_id = $question->survey_id;
        $answer = new Answer;
        $answer->context = $request->context;
        $answer->question_id = $question_id;
        $answer->survey_id = $survey_id;
        $answer->save();

        return response()->json([
            "status" => "Success"
        ], 200);
    }
}
