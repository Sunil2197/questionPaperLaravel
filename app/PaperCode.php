<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\QuestionPaper;

class PaperCode extends Model
{
    //
    protected $fillable =['name','code'];

    public function getPaper(){
        return $this->hasMany('App\QuestionPaper','papercode_id','id');
    }
}
