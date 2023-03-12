class Engin {
    id: number;
    registrationNumber: string;
    type: string;
    brand: string;
    model: string;
    available: number;
    creationDate: Date;

    constructor(
        id: number = 0,
        registrationNumber: string = '',
        type: string = 'Plane',
        brand: string = '',
        model: string = '',
        available: number = 1,
        creationDate: Date = new Date()
    ) {
        this.id = id;
        this.registrationNumber = registrationNumber;
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.available = available;
        this.creationDate = creationDate;
    }
}

export default Engin;
