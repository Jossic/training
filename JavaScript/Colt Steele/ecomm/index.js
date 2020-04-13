const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const usersRepo = require('./repositories/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: ['d5j4n5d6fgsr2azr64ht5']
}));

app.get('/signup', (req, res) => {
    res.send(`
    <div>
        Votre identifiant : ${req.session.userId}
        <form method="post">
            <input name="email" placeholder="email">
            <input name="password" placeholder="password">
            <input name="passwordConfirmation" placeholder="password confirmation">
            <button>Sign Up</button>
        </form>
    </div>
    `);
});



app.post('/signup', async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;

    const existingUser = await usersRepo.getOneBy({ email });
    if (existingUser) {
        return res.send("Email déjà utilisé");
    }

    if (password !== passwordConfirmation) {
        return res.send("Les mots de passe doivent correspondre");
    }

    const user = await usersRepo.create({ email, password });

    req.session.userId = user.id;

    res.send('Account created');
});

app.get('/signout', (req, res) => {
    req.session = null;
    res.send('Deconnection effective');
});

app.get('/signin', (req, res) => {
    res.send(`
    <div>
        
        <form method="post">
            <input name="email" placeholder="email">
            <input name="password" placeholder="password">
            <button>Sign In</button>
        </form>
    </div>
    `);
});

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await usersRepo.getOneBy({ email });
    if (!user) {
        return res.send('Email non reconnu');
    }

    if (user.password !== password) {
        return res.send('Mot de passe éronné');
    }

    req.session.userId = user.id;

    res.send('Vous êtes connecté');
});

app.listen(3000, () => {
    console.log('Listening...');
});