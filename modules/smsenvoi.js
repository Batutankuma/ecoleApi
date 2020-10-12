const authentification = require('./../config/authSms.json');

//elle nous permet d'envoyer une requete à orange
function getToken(client_Id, client_Secret,res){
    var credential = authentification.AuthHeader;
    var postData = "";
    postData += "grand_type=client_credential";
    try {
        var options = {
            host:'api.orange.com',
            path:'/oauth/v2/token'
        };
        options['method'] = 'POST',
        options['headers'] = {
            'Authorization':credential,
            'Content-Type':'application/x-www-form-urlencoded',
            'Content-Length':Buffer.byteLength(postData)
        };
        var req = https.request(options,function(response){
            response.setEncoding('utf8');
            var responseData ="";
            response.on('data',function(data){responseData += data;});
            response.on('end',function(){var result = JSON.parse(responseData);})
        })
        .on('error',function(e){});
        req.write(postData);
        console.log("****");
        console.log(postData);
        req.end()
    } catch (error) {
        
    }
}

const resp = getToken(authentification.ClientId,authentification.ClientSecret);