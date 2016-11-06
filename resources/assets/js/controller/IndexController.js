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
            $scope.id =sucess.data.paperCode_id
            $scope.isFormnView=true;
        });

    }

    $scope.addQuestionCode = function () {

        var data={
            question:$scope.question,
            a:$scope.optionA,
            b:$scope.optionB,
            c:$scope.optionC,
            d:$scope.optionD,
            result:$scope.result,
            paperCode:$scope.id,
        }

            apiService.post('/api/storeQuestion',data);
    }

    $scope.saveAndAddQuestionCode = function () {
        var data={
            question:$scope.question,
            a:$scope.optionA,
            b:$scope.optionB,
            c:$scope.optionC,
            d:$scope.optionD,
            result:$scope.result,
            paperCode:$scope.id,
        }

        apiService.post('/api/storeQuestion',data);

        $scope.question = "";
        $scope.optionA = "";
        $scope.optionB = "";
        $scope.optionC = "";
        $scope.optionD= "";
        $scope.result = "";

    }

});