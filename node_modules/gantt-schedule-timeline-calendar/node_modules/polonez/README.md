# polonez

Micro web server (faster express alternative with almost the same api and dynamic routing - you can add / remove routes while your app is running).

Dynamic routing can be helpfull in situations when the user is creating routes or tree-like routes structure (categories etc) and you dont want to restart your app on each change.

It can be usefull also when your system has an option to dynamically install third party plugins with custom middlewares or routes - you can turn off them or uninstall without need to restart your app.

Adding removing routes / middlewares without restart is important because other users could be logged in when route is added / removed (some user will add or remove some article / category simultanously when other user is doing something else - we don't wat to kick off anybody right?).

With polonez you can use express plugins
