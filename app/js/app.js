angular.module('myApp', [])
    .run(function(){
console.log('hi')    
    });

    
    angular.module('myApp').controller('myCont', function($scope,TaskService){
        $scope.thing = 'Hello World';
        TaskService.getTasks().then(function(resp) {
                    $scope.tasks = resp.data;
                    //console.log(resp.data)
                    console.log($scope.tasks + " Imad is a genius")
                });
        //console.log($scope.tasks);
        
    });
    
    angular.module('myApp').directive('box', function(){
        return {
            scope: {
                taskData: '&'
                
            },
            template: "<div>i am a task {{ $parent.task.status }}</div>",
            link: function(scope, element, attrs) {
                console.log(scope.$parent.task);
                console.log(scope.taskData);
                //console.log(scope);
            }
        }
        
    });

    angular.module("myApp").factory("TaskService",function($http){
        return{
            getTasks:function(){
                
                return $http.get("http://localhost:3000/tasks/");
                
                
            }
            
        }
        
        
    })