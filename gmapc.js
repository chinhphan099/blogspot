/**
 *  @name youtube
 *  @description Control play/pause/end youtube, using youtube API
 *  @version 1.0
 */
;(function($, window, undefined) {
  'use strict';

  var pluginName = 'youtube';
  var Statuses = {
    PAUSED: 'paused',
    PLAYING: 'playing',
    LOADING: 'loading',
    ENDED: 'ended'
  };
  var ClassNames = {
    PAUSED: 'paused',
    PLAYING: 'playing',
    LOADING: 'loading',
    ENDED: 'ended'
  };

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options, this.element.data(pluginName));
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      this.handle = this.element.find(this.options.handle);
      this.idWrap = this.options.idWrap;
      this.idVideo = this.options.idVideo;
      this.status = Statuses.PAUSED;
      this.initYoutube();
    },
    initYoutube: function() {
      var that = this;

      that.player = new YT.Player(that.idWrap, {
        videoId: that.idVideo,
        playerVars: {
          'autoplay': 1,
          'rel': 1,
          'showinfo': 0,
          'controls': 1,
          'modestbranding': 0
        },
        events: {
          onReady: function() {
            that.listener();
          },
          onStateChange: function(event) {
            that.onPlayerStateChange(event, that);
          }
        }
      });
    },
    listener: function() {
      var that = this;
      this.handle.off('click.toggleYoutube').on('click.toggleYoutube', function() {
        switch(that.status) {
          case Statuses.PAUSED:
            that.element
              .addClass(ClassNames.PLAYING)
              .removeClass(ClassNames.PAUSED +' '+ ClassNames.LOADING + ' ' + ClassNames.ENDED);
            that.player.playVideo();
            break;
          case Statuses.ENDED:
            that.player.playVideo();
            that.element
              .addClass(ClassNames.PLAYING)
              .removeClass(ClassNames.PAUSED +' '+ ClassNames.LOADING + ' ' + ClassNames.ENDED);
            break;
          case Statuses.LOADING:
            break;
          case Statuses.PLAYING:
            that.element
              .addClass(ClassNames.PAUSED)
              .removeClass(ClassNames.PLAYING +' '+ ClassNames.LOADING + ' ' + ClassNames.ENDED);
            that.player.pauseVideo();
            break;
        }
      });
    },
    onPlayerStateChange: function(event, plugin) {
      switch (event.data) {
        case YT.PlayerState.PAUSED:
          plugin.status = Statuses.PAUSED;
          plugin.element
            .addClass(ClassNames.PAUSED)
            .removeClass(ClassNames.PLAYING +' '+ ClassNames.LOADING + ' ' + ClassNames.ENDED);
          break;
        case YT.PlayerState.PLAYING:
          plugin.status = Statuses.PLAYING;
          plugin.element
            .addClass(ClassNames.PLAYING)
            .removeClass(ClassNames.PAUSED +' '+ ClassNames.LOADING + ' ' + ClassNames.ENDED);
          break;
        case YT.PlayerState.BUFFERING:
          plugin.status = Statuses.LOADING;
          break;
        case YT.PlayerState.ENDED:
          plugin.status = Statuses.ENDED;
          plugin.element
            .addClass(ClassNames.ENDED)
            .removeClass(ClassNames.PLAYING +' '+ ClassNames.LOADING + ' ' + ClassNames.PAUSED);
          break;
      }
    }
  };

  $.fn[pluginName] = function(options, params) {
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (!instance) {
        $.data(this, pluginName, new Plugin(this, options));
      } else if (instance[options]) {
        instance[options](params);
      }
    });
  };

  $.fn[pluginName].defaults = {
    handle: '[data-handle]'
  };

  $(function() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = function() {
      $('[data-' + pluginName + ']')[pluginName]();
    };
  });

}(jQuery, window));
