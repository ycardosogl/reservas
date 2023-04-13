var express = require('express');
var router = express.Router();
//var db = require('../db')

  //api get clientes
router.get('/api/clientes', async (req, res, next) => {
    try {
      res.send(await db.findAll("clientes"));
    } catch (err) {
      next(err);
    }
  })
  
//api post clientes
router.post('/clientes', async (req, res, next) => {
  try {
    const clientes = await db.Insert("clientes",req.body);
    res.send('/clientes');
  } catch (err) {
    next(err);
  }
})

//  api delete clientes 
router.delete('/clientes/deletar/:id', async (req, res, next) => {
  const id=req.params.id;
  
    try {
      const result = await db.deletedb('clientes', id);
      res.send('asdasd');
    } catch (err) {
      next(err);
    }
  }) 

  //  api update clientes 
router.put('/clientes/:id', async (req, res, next) => {
  const id=req.params.id;
  const clientes=req.body

    try {
      const result = await db.updateOne('clientes', id, clientes);
      res.send(clientes);

    } catch (err) {
      next(err);
    }
  }) 


   //api get funcionarios
router.get('/api/funcionarios', async (req, res, next) => {
  try {
    res.send(await db.findAll("funcionarios"));
  } catch (err) {
    next(err);
  }
})

//api post funcionarios
router.post('/funcionarios', async (req, res, next) => {
try {
  const funcionarios = await db.Insert("funcionarios",req.body);
  res.send('/funcionarios');
} catch (err) {
  next(err);
}
})

//  api delete funcionarios
router.delete('/funcionarios/deletar/:id', async (req, res, next) => {
const id=req.params.id;

  try {
    const result = await db.deletedb('funcionarios', id);
    res.send('asdasd');
  } catch (err) {
    next(err);
  }
}) 

//  api update funcionarios
router.put('/funcionarios/:id', async (req, res, next) => {
const id=req.params.id;
const funcionarios=req.body

  try {
    const result = await db.updateOne('funcionarios', id, funcionarios);
    res.send(funcionarios);

  } catch (err) {
    next(err);
  }
}) 

  //api get salas
  router.get('/salas', async (req, res, next) => {
    try {
      res.send(await db.findAll("salas"));
    } catch (err) {
      next(err);
    }
  })

  router.get('/salas/:id', async (req, res, next) => {
    try {
      const id= req.params.id
      res.send(await db.findOne("salas", id));
    } catch (err) {
      next(err);
    }
  })
  
//api post salas
router.post('/salas', async (req, res, next) => {
  try {
    const salas = await db.insertdb("salas",req.body);
    res.send('/salas');
  } catch (err) {
    next(err);
  }
})

//  api delete salas
router.delete('/salas/:id', async (req, res, next) => {
  const id=req.params.id;
  
    try {
      const result = await db.deletedb('salas', id);
      res.send(result);
    } catch (err) {
      next(err);
    }
  }) 

  //  api update salas
router.put('/salas/:id', async (req, res, next) => {
  const id=req.params.id;
  const salas=req.body

    try {
      const result = await db.updatedb('salas', id, salas);
      res.send(result);

    } catch (err) {
      next(err);
    }
  })



  module.exports = router;

  