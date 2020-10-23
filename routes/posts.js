const { response } = require('express');
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.get('/', async (req, res) => {
    const posts = await Student.find();
    res.json(posts);
});

router.post('/', (req, res) => {
    const post = new Student({
        studentName: req.body.studentName,
        studentLastName: req.body.studentLastName,
        studentProgram: req.body.studentProgram,
        studentGPA: req.body.studentGPA,
        studentAddress: req.body.studentAddress,
        studentEmail: req.body.studentEmail
    })

    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        //res.json({message: error});
    })
})

router.get('/:id', async (req,res) => {
    const post = await Student.findById(req.params.id);
    res.json(post)
})

router.delete('/:id', async (req,res) => {
    const toRemove = await Student.remove({ _id : req.params.id });
    res.json(toRemove)
})

module.exports = router;