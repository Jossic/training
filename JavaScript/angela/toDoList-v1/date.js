

exports.getDate = getDate = () => {
    const today = new Date();
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    return today.toLocaleDateString('en-US', options);
};

exports.getDay = getDay = () => {
    const today = new Date();
    const options = {
        weekday: 'long'
    };
    return today.toLocaleDateString('en-US', options);
};