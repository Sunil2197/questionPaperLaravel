<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuestionPaper extends Model
{
    protected $fillable = ['question','a','b','c','d','result','papercode_id'];
    //
}
