var twitterAppControl = require('twitter_app_control.module').create({
    verbose: true,
    logLevel: "debug",
    pageSettings: {
        //loadImages:  false,
        //loadPlugins: false
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
    },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X)',
    viewportSize: {
        width: 1600,
        height: 900
    }
});

twitterAppControl.login().updateSettings().deleteApps().createApp().execute();
