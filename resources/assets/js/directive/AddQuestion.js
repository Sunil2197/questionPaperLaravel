/**
 * Created by Sunil on 30-10-2016.
 */

app.directive('addQuestion', function ($compile) {
    return {
        restrict: 'A',
        link: function (scope, element_, attrs) {
            scope.counter = 1;
            element_.on('click', function () {

                var html = `<div class="container question-add-container">
                            <div class="col-lg-6 col-lg-offset-2">
                                <form>
                                    <div class="form-group">
                                        <input type="text" ng-model="question" class="form-control" placeholder="Questionds">
                                    </div>
                                    <div>
                                        <label class="radio">
                                            <input type="radio" ng-model="result" name="answer" value="{{optionA}}">
                                            <input type="text" ng-model="optionA"  placeholder="Option 1" class="form-control">
                                        </label>
                                    </div>
                                    <div>
                                        <label class="radio">
                                            <input type="radio"  ng-model="result"  name="answer" value="{{optionB}}">
                                            <input type="text" ng-model="optionB"  placeholder="Option 2" class="form-control">
                                        </label>
                                    </div>
                                    <div>
                                        <label class="radio">
                                            <input type="radio" ng-model="result" name="answer" value="{{optionC}}">
                                            <input type="text" ng-model="optionC"  placeholder="Option 3"  class="form-control">
                                        </label>
                                    </div>
                                    <div>
                                        <label class="radio">
                                            <input type="radio"  ng-model="result"  name="answer" value="{{optionD}}">
                                            <input type="text" ng-model="optionD"  placeholder="Option 4" class="form-control">
                                        </label>
                                    </div>
                                    <div class="right">
                                        <button class="btn btn-success" add-question>Save & Add More</button>
                                        <button class="btn btn-success" ng-click="addQuestionCode()">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>`;


                var compile = $compile(html)(scope);
                var a = element_[0].closest('.container');
                angular.element(a).after(compile);
            });
        }
    }
});

/*+elemt[0].classList[0]*/






