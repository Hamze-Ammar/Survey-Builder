<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Survey;
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

    public function getAllQuestions(){
        $questions = Question::all();

        foreach ($questions as $question) {
            $question->questionType;
        }

        return response()->json([
            "status" => $questions
        ], 200);
    }

    
}
