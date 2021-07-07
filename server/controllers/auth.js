import bcrypt from 'bcrypt';
import { User } from '../models/authModel.js';

const saltround = 10;

export const register = (req, res) => {
    const {name, email,password, isAdmin } = req.body
   
    User.findOne({email: email}, (err, foundUser)=> {
        if (err) {
            console.log(err);
        }else {
            if (foundUser){
                res.json(false)
            }else{
                bcrypt.hash(password, saltround, (err, hash) => {
                    const newUser = new User ({
                        name : name,
                        email: email,
                        password: hash,
                        isAdmin: isAdmin,
                    });
                    newUser.save((err)=>{
                        if(err) {
                            console.log(err)
                        }else{
                            console.log('successfuly registered');
                        }
                    });
                })
                res.json('success')
            }
        }
    })
}

export const login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}, (err, foundUser)=> {
        if (err) {
            console.log(err);
        }else {
            if (foundUser){
                console.log('found user')
                bcrypt.compare(password, foundUser.password, (err, result) => {
                    if (result === true) {
                        res.json(true)
                        console.log('logged in')
                    }else{
                        res.json(false)
                    }
                });
            }else{
                res.json(false)
                console.log('not found')
            }
        }
    })
}

export const logout =(req, res) => {
    res.redirect("/login")
}
