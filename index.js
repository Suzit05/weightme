function weightme(weight) {
    if (weight <= 50) {
        return (`${weight}!! ,Do you even cast a shadow? 🌪️"`);
    }
    else if (weight > 50 && weight <= 70) {
        return (`${weight}!! ,You're the perfect size—for a bag of rice. 🏋️`);
    }
    else if (weight > 70 && weight <= 100) {
        return (`${weight}!! ,You're not heavy—you're just more grounded than the rest of us. 🌍`);
    }
    else {
        return (`${weight}!! ,You're not overweight; you're just storing snacks for winter. 🐻`);
    }
}
module.exports = weightme;

