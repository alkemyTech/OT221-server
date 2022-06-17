const bcrypt = require('bcrypt');
const express = require('express');
const { User, sequelize } = require('../models')
const jwt = require('jsonwebtoken')
const authRepository = require('../repositories/auth-repository')

const login = async (body) => {
    const user = await authRepository.getByEmail(body.email)
    return bcrypt.compareSync(body.password, user.password)

}



module.exports={
    login
}