class GridColumn {
    id: string;
    name: string;
    display: boolean;
    displayOrder: number;
    width: number;
    sortDirection: number;
    sortOrder: number;

    constructor(
        id: string,
        name: string,
        display: boolean = true,
        displayOrder: number = 0,
        width: number = 100,
        sortDirection: number = 0,
        sortOrder: number = 0
        ) {
        this.id = id;
        this.name = name;
        this.display = display;
        this.displayOrder = displayOrder;
        this.width = width;
        this.sortDirection = sortDirection;
        this.sortOrder = sortOrder;
    }
}

export default GridColumn;
