var app = angular.module('slides',[]);

app.controller('control', function($scope,$http){

  $scope.title = "Hemp!";
  $scope.name = "Phillip Salazar";

  // body slide title
  $scope.part1 = "All about hemp!";
  $scope.part2 = "Hemp products";
  $scope.part3 = "Who uses hemp?";
  $scope.part4 = "In conclusion";

  $scope.list = ["A type of cannabis", " Non-pychoactive"];
  $scope.hemp_list = ['Textile','Food','Fuel','Plastic', 'Building materials'];
  $scope.world_list = ['Companies like hemp technologies', 'Hemp oils are use for medical purposes'];
  $scope.summary = ['Hemp is Non-pychoactive type of cannabis', 'Hemp can be made into a lot of things','Hemp is use medically and industrially'];

  $scope.website1 = "http://www.hemp-technologies.com/";
  $scope.website2 = "http://www.medicalmarijuanainc.com/what-is-cbd-hemp-oil/";

  $scope.imageurl1 = "/images/Hemp.png";
  $scope.url1 = "http://dofuswiki.wikia.com/wiki/File:Hemp.png";

  $scope.imageurl2 = "/images/weed.jpg";
  $scope.url2 = "https://en.wikipedia.org/wiki/Hemp";

  $scope.imageurl3 = "/images/medical.jpg";
  $scope.url3 = "https://clipartion.com/free-clipart-3023/";

  $scope.imageurl4 = "/images/cannabis.jpg";
  $scope.url4 = "http://www.medicalmarijuanainc.com/what-is-cbd-hemp-oil/";

  $scope.imageurl5 = "http://images.clipartpanda.com/algae-clipart-weed-md.png";
  $scope.url5 = "https://pixabay.com/en/cannabis-hemp-leaf-weed-reed-306291/";

  $scope.f  = function() {
  $.simplyToast('this is from '+ $scope.website1,'success');
  };


  $scope.e = function() {
  $.simplyToast('this is from '+ $scope.website1,'success');
};

});
