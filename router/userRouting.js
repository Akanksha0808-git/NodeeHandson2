const route=require("express").Router()

route.get('/readata',(req,res)=>{

  res.send("Hello welcome to elevation academy")
});
route.get('/mainData', (req, res) => {
  res.send({

    "what is ExpressJs?":"Express.js is a web application framework for Node.js. It simplifies the process of building robust and scalable web applications.",
    "benefits":{
      "1":"Minimalistic and Lightweight: Express.js is known for its minimalistic and unopinionated design.",
      "2":"Middleware: Express.js has a robust middleware system that allows you to add various functions and features to your application's request-response cycle. Middleware can be used for tasks like authentication, logging, input validation, and more, making it highly customizable and extensible.",
      "3":"Routing: Express.js provides a simple and intuitive way to define routes for handling HTTP requests. You can define routes for different HTTP methods (GET, POST, PUT, DELETE, etc.) and URLs, making it easy to create RESTful APIs and web applications.",
      "3":"Performance: Express.js is known for its performance and scalability. It's designed to be fast and can handle a high volume of concurrent connections, making it suitable for building real-time applications and APIs."
    
    }  ,
    "limitation":{
      "1":"Minimalistic: While the minimalistic nature of Express.js can be a benefit, it can also be a limitation for developers who prefer a more opinionated framework. ",
      "2":"Middleware Order: The order in which middleware is defined in Express.js can be crucial, and it's essential to understand the sequence in which middleware functions are executed to avoid unexpected behavior."
    },
    "What is NodeJs?":"Node.js is an open-source, server-side JavaScript runtime environment that allows developers to build scalable and high-performance network applications. It is built on the V8 JavaScript engine, which is also used by Google Chrome, and it enables developers to write server-side code using JavaScript, a language typically associated with client-side scripting in web browsers."
  });
});
module.exports=route;
