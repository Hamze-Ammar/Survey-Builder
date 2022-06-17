<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\AnswerController;



Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});

//Those are for admin, a middleware to be added
Route::post('/add_survey', [SurveyController::class, 'addSurvey']);
Route::post('/add_question', [QuestionController::class, 'addQuestion']);

//Testing eloquent
Route::post('/get_all_questions', [QuestionController::class, 'getAllQuestions']);
Route::get('/get_servey_questions/{id}', [SurveyController::class, 'getServeyQuestions']);

