exports.login = (req, res, next) => {
    Users.findOne({ email: req.body.email })
        .then(user => {
            if (user === null) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'})
            }
    
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        //assigne un token
                        token: jwt.sign(
                            { userId: user._id},
                            'RANDOM_TOKEN_SECRET_KEY',
                            { expiresIn: '24h'}
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(404).json({ error }));
};
}