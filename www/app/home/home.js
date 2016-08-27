/*global angular, Media, device*/
(function () {
    'use strict';

    function Home($timeout) {

        var vm = this,
            isPlaying = false;

        vm.playerIcon = 'ic_play_arrow_white_24px.svg';

        function getMediaURL(path) {
            if (device.platform.toLowerCase() === "android") {
                return "/android_asset/www/" + path;
            }

            return path;
        }

        vm.play = function (audioFile) {
            var medias = {}, media, path;

            if (!medias[audioFile]) {
                path = getMediaURL('assets/mp3/') + audioFile;
                media = new Media(path, function () {
                    $timeout(function () {
                        isPlaying = false;
                        vm.playerIcon = 'ic_play_arrow_white_24px.svg';
                    })
                });

                medias[audioFile] = media;
            } else {
                media = medias[audioFile];
            }

            isPlaying = !isPlaying;

            if (isPlaying) {
                vm.playerIcon = 'ic_stop_white_24px.svg';
                media.play();
            } else {
                vm.playerIcon = 'ic_play_arrow_white_24px.svg';
                media.pause();
            }
        };
    }

    Home.$inject = ['$timeout'];

    angular.module('app').controller('home', Home);

}());