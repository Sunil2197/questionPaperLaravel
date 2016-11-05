/**
 * Created by Sunil on 23-10-2016.
 */
app.controller("IndexController",function ($scope,apiService) {

    $scope.savePaperCode = function () {

        $scope.isFormnView = false;
        var data = {
            questionPaper:$scope.questionPapername,
            code:$scope.questionPaperCode
        }

        apiService.post('/api/storePaperCode',data).then(function (sucess) {
            $scope.code = sucess.data.paperCode;
            $scope.questionpaer=sucess.data.questionPaper;
            $scope.isFormnView=true;
        });

    }

    $scope.addQuestionCode = function () {
        console.log('Button click');

        var data={
            question:$scope.question,
            a:$scope.optionA,
            b:$scope.optionB,
            c:$scope.optionC,
            d:$scope.optionD,
            result:$scope.result,
            paperCode:$scope.questionPaperCode
        }

            apiService.post('/api/storeQuestion',data);
    }

});