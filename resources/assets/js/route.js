/**
 * Created by Sunil on 25-10-2016.
 */
app.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home',
        {
            url:'/',
            templateUrl:'template/index.html'
        })
        .state('/addquestion,',{
            url:'/addquestion',
            templateUrl:''
        })
    $locationProvider.html5Mode(true);
});