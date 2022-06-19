<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\QuestionType;
use App\Models\Survey;
use Illuminate\Http\Request;

class QuestionController extends Controller
{

    // to be modified
    public function addQuestion(Request $request){
        $question = new Question;
        $question->context = $request->context;
        $question->survey_id = $request->survey_id;

        $type = $request->type;
        $question_type = QuestionType::where('type', $type)->first();
        //echo $question_type;
        $question_id = $question_type->id;
        $question->question_type_id = $question_id;

        $question->save();
        $id = $question->id;

        return response()->json([
            "status" => "Success",
            "question_id" => $id
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

    //Testing
    public function getQuestionWithChoices($id){
        $question = Question::find($id);
        $question->questionType;
        $question->choices;
        

        return response()->json([
            "status" => $question
        ], 200);
    }
    
}
