exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['module/jokenpo/tests/e2e/*.js'],
  capabilities: { 'browserName': 'chrome' },
  /*multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }],
  onPrepare: function(){
    browser.driver.manager().window().setSize(1600, 800);
  },*/
  jasmineNodeOpts: {
    showColors: true
  }
};
