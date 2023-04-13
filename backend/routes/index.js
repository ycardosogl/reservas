var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET index. */ 
router.get('/', function(req, res, next) {
    res.render('index', { title: 'express' });
  })


//get funcionario
router.get('/funcionarios', async (req, res, next) => {
  try {
    const funcionarios = await db.findAll("funcionarios");
    res.render('funcionarios', { title: 'Funcionarios', funcionarios });
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


//post funcionario
router.post('/funcionarios', async (req, res, next) => {
  try {
    const funcionarios = await db.Insert("funcionarios",req.body);
    res.redirect('/funcionarios');
  } catch (err) {
    next(err);
  }
}) 


//delete funcionarios
router.get('/funcionario/deletar/:id', async (req, res, next) => {
  const id=req.params.id;
  
    try {
      const result = await db.deletedb('funcionarios', id);
      res.redirect('/funcionarios');
    } catch (err) {
      next(err);
    }
  })

  //editar funcionario
  router.get('/funcionario/editar/:id', async (req, res, next) => {
    const id=req.params.id;
    
      try {
        const result = await db.findOne('funcionarios', id);
        res.redirect('/funcionarios');
      } catch (err) {
        next(err);
      }
    })



// get cliente
router.get('/clientes', async (req, res, next) => {
  try {
    const clientes = await db.findAll("clientes");
    res.render('clientes', { title: 'clientes', clientes});
  } catch (err) {
    next(err);
  }
}) 

//api get clientes
router.get('/api/clientes', async (req, res, next) => {
  try {
    res.send(await db.findAll("clientes"));
  } catch (err) {
    next(err);
  }
})


//post clientes
router.post('/clientes', async (req, res, next) => {
  try {
    const clientes = await db.Insert("clientes",req.body);
    res.redirect('/clientes');
  } catch (err) {
    next(err);
  }
})

//delete clientes 
router.get('/clientes/deletar/:id', async (req, res, next) => {
const id=req.params.id;

  try {
    const result = await db.deletedb('clientes', id);
    res.redirect('/clientes');
  } catch (err) {
    next(err);
  }
}) 


module.exports = router;
