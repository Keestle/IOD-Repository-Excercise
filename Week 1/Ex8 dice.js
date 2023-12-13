// Rolling a D6
function rolld6() {
        return Math.floor(Math.random() * 6) + 1;
}

const result1 = rolld6();
console.log(`Rolling a 6-sided die: ${result1}`);


module.exports = rolld6;