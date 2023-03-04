// Init project 
// console.log('express + ts')
// USO DE POSTMAN

// 2- Init express
import express, {NextFunction, Request, Response} from 'express';


const app = express();

// 3- route with POST
app.use(express.json());

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path);
    next();
}
app.use(showPath)

app.get("/", (req, res) => {
    return res.send("HEllo express");
});

// Routes
app.post('/api/product', (req, res) => {
    console.log(req.body);

    return res.send("Produto added");
})


// Routes all. O metodo .all faz com que aceite qualquer verbo
app.all("/api/product/check", (req, res) => {

    //req.method = HTTP verbose

    if(req.method === "POST"){
        return res.send("Inseriu um registro")
    } else if( req.method === "GET"){
        return res.send("Leu algum registro")
    } else{
        return res.send("Não podemos realizar operação")
    }

});

// 5 - Interfaces with express
app.get("/api/interfaces", (req: Request, res: Response ) => {
    return res.send('Utilizando as interfaces')
})

// 6 - Using json
app.get('/api/json', (req: Request, res: Response) => {
    return res.json({
        name: "Camisa",
        price: 29.87,
        color: "blue pen",
        sizes: ["p", 'm', 'g'],
    })
});

// 7 -Router parameters 
app.get("/api/router/parameters/:id", (req: Request, res: Response) => {
    console.log(req.params);
    const id = req.params.id;

    if( id === '1'){
        const product = {
            name: 'bone',
            id: 1,
            price: 23
        }
        return res.json(product)
    } else{
        return res.send('Produto nao encontrado')
    }
})

// 8 - Rotas complexas
app.get('/api/router/:routerId/review/:reviewedId', (req: Request, res: Response) => {
    console.log(req.params)

    const routerId = req.params.routerId
    const reviewedId = req.params.reviewedId;

    return res.send(`Acessando a review ${reviewedId} do produto com id: ${routerId}`)
})

//9 - route handler
function getUser(req: Request, res: Response) {
    console.log(`Resgatando user com id: ${req.params.id}`);

    return res.send( 'User encontrado')
}
app.get('/api/user/:id', getUser);

// 10 - middleware
function someMiddleware(req: Request, res: Response, next: NextFunction) {
    if (req.params.id === "1") {
      console.log("Pode seguir!");
      next();
    } else {
      console.log("Não pode seguir");
    }
  }
  
  app.get(
    "/api/user/:id/access",
    someMiddleware,
    (req: Request, res: Response, next: NextFunction) => {
      return res.json({ msg: "Bem-vindo a área administrativa!" });
    }
  );

  
  // 12 - req res generics
  app.get(
    "/api/user/:id/details/:name",
    (
      req: Request<{ id: string; name: "string" }>,
      res: Response<{ status: boolean }>
    ) => {
      console.log(`ID: ${req.params.id}`);
      console.log(`Name: ${req.params.name}`);
  
      return res.json({ status: true });
    }
  );
  
  // 13 - tratando erros
  app.get("/api/error", (req: Request, res: Response) => {
    try {
      throw new Error("Algo deu errado!");
    } catch (e: any) {
      res.statusCode = 500;
  
      res.status(500).json({ msg: e.message });
    }
  });

app.listen(3000, () =>{
    console.log('Aplicação ts + express funcionando!')
})