function hasFreeShipping(obj) {
    
    console.log(Object.values(obj).reduce((a, b) => (a + b)) > 50 && true || false);

}

hasFreeShipping({"Masks": 5.99, "HDMI Cable": 15.99});
hasFreeShipping({"XBOX Series X": 599.99});
hasFreeShipping({"A": 5.99, "B": 25.99, "C": 20.00});