/**
 * Created by Sunil on 26-10-2016.
 */
app.service('apiService',function ($http) {
    this.post =function (requestrl,questionPaper) {
        return $http({
            method:'post',
            url:requestrl,
            data:questionPaper
        });
    }
})