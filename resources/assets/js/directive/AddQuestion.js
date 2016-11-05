/**
 * Created by Sunil on 30-10-2016.
 */

app.directive('addQuestion',function ($compile) {
    return{
        restrict:'A',
        link:function (scope,element_,attrs) {
         scope.counter=1;
         element_.on('click',function () {

         var html=  `<div class="container">
         <div class="col-lg-6 col-lg-offset-2">
         <form>
         <div class="form-group">
         <input type="text" class="form-control" placeholder="Questionds">
         </div>
         <div>
         <label class="radio">
         <input type="radio" name="answer" value="a">
         <input type="text"  placeholder="Option 1" class="form-control">
         </label>
         </div>
         <div>
         <label class="radio">
         <input type="radio"  name="answer" value="b">
         <input type="text"  placeholder="Option 2" class="form-control">
         </label>
         </div>
         <div>
         <label class="radio">
         <input type="radio" name="answer" value="c">
         <input type="text"  placeholder="Option 3"  class="form-control">
         </label>
         </div>
         <div>
         <label class="radio">
         <input type="radio"  name="answer" value="d">
         <input type="text"  placeholder="Option 4" class="form-control">
         </label>
         </div>
         <div class="right">
         <button class="btn btn-success" add-question>Add More</button>
         <button class="btn btn-success">Save</button>
         </div>
         </form>
         </div>
         </div>`;
         var compile=  $compile(html)(scope);
          var a=  element_[0].closest('.container');
             angular.element(a).after(compile);
         });
         }
    }
});

/*+elemt[0].classList[0]*/






