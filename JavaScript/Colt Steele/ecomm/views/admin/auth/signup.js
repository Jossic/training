module.exports = ({ req }) => {
    return `
    <div>
        Votre identifiant : ${req.session.userId}
        <form method="post">
            <input name="email" placeholder="email">
            <input name="password" placeholder="password">
            <input name="passwordConfirmation" placeholder="password confirmation">
            <button>Sign Up</button>
        </form>
    </div>
    `;
};