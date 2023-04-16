const generateRandomNumber = async (first, last) => {
    const randomNumber = Math.floor(Math.random() * (last - first + 1) + first);
    return(randomNumber.toString());
}
module.exports = {
    generateRandomNumber
}