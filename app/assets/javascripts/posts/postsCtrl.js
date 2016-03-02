angular.module('flapperNews')
    .controller('PostsCtrl', [
        '$scope',
        '$log',
        'posts',
        'post',
        function($scope, $log, posts, post) {
            $scope.post = post;
            $scope.addComment = function() {
                if ($scope.body === '') {
                    return;
                }
                posts.addComment(post.id, {
                    body: $scope.body,
                    author: 'user',
                }).success(function(comment) {
                    $log.info(comment.last);
                    $scope.post.comments.push(comment);
                });
                $scope.body = '';
            };
            $scope.incrementUpvotes = function(comment) {
                posts.upvoteComment(post, comment);
            };
        }
    ]);
