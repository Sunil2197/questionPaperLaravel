<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionPapersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('question_papers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('question');
            $table->string("a");
            $table->string("b");
            $table->string("c");
            $table->string("d");
            $table->string("result");
            $table->integer("papercode_id");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('question_papers');
    }
}
