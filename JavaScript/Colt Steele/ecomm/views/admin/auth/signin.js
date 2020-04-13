const layout = require('../layout');

module.exports = () => {
    return layout({
        content: `
        <div>
            <form method="post">
                <input name="email" placeholder="email">
                <input name="password" placeholder="password">
                <button>Sign In</button>
            </form>
        </div>
    `});
};