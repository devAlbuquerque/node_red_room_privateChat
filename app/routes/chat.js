module.exports = function(application){
	application.post('/chat', function(req, res){
		application.app.controllers.chat.iniciaChat(application, req, res);
	});

	application.get('/chat', function(req, res){
		res.render('index', {validacao : {}});
		//application.app.controllers.chat.iniciaChat(application, req, res);
	});
}