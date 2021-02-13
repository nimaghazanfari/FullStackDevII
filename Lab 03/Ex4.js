function Car(obj) {
    this.obj = obj;

    this.getBrand = () => {
        console.log('The manufacturer is:', this.obj.brand);
    }

    this.getModel = () => {
        console.log('The model is:', this.obj.model);
    }
}

var tesla = new Car({brand: 'Tesla', model: 'S'});
tesla.getBrand();
tesla.getModel();