<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\AnswerController;

Route::group(['prefix' => 'v1'], function(){
    Route::group(['prefix' => 'user'], function(){
        Route::group(['middleware' => 'api'], function($router) {
            Route::post('/register', [JWTController::class, 'register']);
            Route::post('/login', [JWTController::class, 'login']);
            Route::post('/logout', [JWTController::class, 'logout']);
            Route::post('/refresh', [JWTController::class, 'refresh']);
            Route::post('/profile', [JWTController::class, 'profile']);
        });
    });

    Route::group(['prefix' => 'admin'], function(){
        Route::group(['middleware' => 'role.admin'], function(){
            Route::post('/add_survey', [SurveyController::class, 'addSurvey']);
            Route::post('/add_question', [QuestionController::class, 'addQuestion']);
        });
    });

    Route::group(['prefix' => 'survey'], function(){
        Route::post('/get_all_questions', [QuestionController::class, 'getAllQuestions']);
        Route::get('/get_question_choices', [QuestionController::class, 'getQuestionWithChoices']);
        Route::get('/get_servey_questions/{id}', [SurveyController::class, 'getServeyQuestions']);
    });

    Route::get('/not_found', [UserController::class, 'notFound'])->name("not-found");
});