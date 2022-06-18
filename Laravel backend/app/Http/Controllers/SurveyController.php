<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use App\Models\Question;
use App\Models\QuestionType;
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

    public function getServeyQuestions($id){
        $survey = Survey::find($id);
        $questions = $survey->questions;
        foreach ($questions as $question) {
            $question->QuestionType;
            $question->choices;
        }

        return response()->json([
            "status" => "Success",
            "res"    => $questions

        ], 200);
    }

    public function getServeys(){
        $surveys = Survey::all();

        return response()->json([
            "status" => "Success",
            "res"    => $surveys

        ], 200);
    }
}

