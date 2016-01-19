// edit if you want to 

$(function() {
  init();
});

function init() {
  setEventListener();
  setAnimationManager();
}

function setEventListener() {
  $('#reset-btn').on('click', function() {
    swapBtnView('hide');
    setAnimationManager();
  });
}

function swapBtnView(state) {
  var value = (state === 'hide') ? -30 : 0;
  $('#reset-btn').animate({
    top: value
  });
}

function setAnimationManager() {
  var promise = setAnimations();
  promise
    .then(function() {
      reset();
    });
}

function reset() {
  var promise = hideContainers();
  promise
    .then(resetPosition);
}

function resetPosition() {
  var $targets = $('div.container').find('>div');
  $targets.removeClass();
  $targets.addClass('element-container');
  $('div.container').css({
    opacity: 1
  });
  swapBtnView('show');
}

function hideContainers() {
  var promises = [];
  var length = $('div.container').length;
  for (var i = 0; i < length; i++) {
    var promise = hideContainer(i);
    promises.push(promise);
  }
  
  return $.when.apply(undefined, promises).promise();
}

function hideContainer(i) {
  var deferred = $.Deferred();
  $('div.container').eq(i)
    .delay(500)
    .animate({
      opacity: 0
    }, function() {
      return deferred.resolve();
    });

  return deferred.promise();
}

function setAnimations() {
  var LENGTH = 20;
  var promises = [];
  for (var i = 0; i < LENGTH; i++) {
    var promise = setAnimation(i);
    promises.push(promise);
  }

  return $.when.apply(undefined, promises).promise();
}

function setAnimation(i) {
  var deferred = $.Deferred();
  var $target = $('div.container').eq(i);
  setTimeout(function() {
    $target.find('>div').removeClass();
    $target.find('>div').addClass('reset');
    return deferred.resolve();
  }, i * 150);
  return deferred.promise();
}
