const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});



//TypeError: path must be absolute or specify root to res.sendFile
//at ServerResponse.sendFile (C:\node_modules\express\lib\response.js:425:11)
//at C:\Users\katie\OneDrive\Documents\Software Engineering\Sprint 3\portfolio-node\server.js:7:9
//at Layer.handle [as handle_request] (C:\node_modules\express\lib\router\layer.js:95:5)
//at next (C:\node_modules\express\lib\router\route.js:137:13)
//at Route.dispatch (C:\node_modules\express\lib\router\route.js:112:3)
//at Layer.handle [as handle_request] (C:\node_modules\express\lib\router\layer.js:95:5)
//at C:\node_modules\express\lib\router\index.js:281:22
//at Function.process_params (C:\node_modules\express\lib\router\index.js:335:12)
//at next (C:\node_modules\express\lib\router\index.js:275:10)
//at expressInit (C:\node_modules\express\lib\middleware\init.js:40:5) 


app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');