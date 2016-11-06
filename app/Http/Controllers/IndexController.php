<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\PaperCode;
use App\QuestionPaper;


class IndexController extends Controller
{
   function storeQuestionPaperCode(Request $request){

       $paperCode = new PaperCode();
       $paperCode->name = $request->questionPaper;
       $paperCode->code = $request->code;
       $paperCode->save();

      return response()->json(['paperCode'=>$request->code,'questionPaper'=> $request->questionPaper,'paperCode_id'=>$paperCode->id]);
    }

    function storeQuestionCode(Request $request){
        $question = new QuestionPaper();
        $question->question = $request->question;
        $question->a = $request->a;
        $question->b = $request->b;
        $question->c= $request->c;
        $question->d = $request->d;
        $question->result = $request->result;
        $question->papercode_id = $request->paperCode;
        $question->save();
        return response()->json(['success'=>'success'],200);
    }

    function getPaper($paperCode){
/*        $papercode = new PaperCode();
        $papercode->where('id',1)->with(['getPaper'=>function($query) {
            $query->where(['id'=>2]);
        }])->get()->toArray();*/


        $papercode = new PaperCode();
         $result= $papercode->where('code',$paperCode)->with('getPaper')->get()->toArray();
        return response()->json(['paper'=>$result],200);

    }
}
