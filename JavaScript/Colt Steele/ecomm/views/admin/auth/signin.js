module.exports = ({ req }) => {
    return `
    <div>
        <form method="post">
            <input name="email" placeholder="email">
            <input name="password" placeholder="password">
            <button>Sign In</button>
        </form>
    </div>
    `;
};