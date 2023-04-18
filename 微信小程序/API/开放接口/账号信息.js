wx.getAccountInfoSync()
获取当前帐号信息。线上小程序版本号仅支持在正式版小程序中获取，开发版和体验版中无法获取。
miniProgram
  appId：小程序 appId
  envVersion：develop开发版、trial体验版、release正式版
  version：线上小程序版本号
plugin
  appId：插件 appId
  version：插件版本号

可以根据小程序的版本信息，区分调用接口。例如：开发版调用dev服务，体验版调用test服务，正式版调用正式接口。
