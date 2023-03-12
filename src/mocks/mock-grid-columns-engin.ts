import GridColumn from "../models/grid-column";

export const ENGIN_GRID_COLUMNS : GridColumn[] = [
    {
        id : 'id',
        name: 'id',
        display: true,
        displayOrder: 1,
        width: 100,
        sortDirection: 0,
        sortOrder: 0
    },
    {
        id : 'registrationNumber',
        name: 'Immatriculation',
        display: true,
        displayOrder: 2,
        width: 100,
        sortDirection: 0,
        sortOrder: 0
    },
    {
        id : 'type',
        name: 'Type',
        display: false,
        displayOrder: 3,
        width: 100,
        sortDirection: 0,
        sortOrder: 0
    },
    {
        id : 'brand',
        name: 'Marque',
        display: true,
        displayOrder: 4,
        width: 100,
        sortDirection: 0,
        sortOrder: 0
    },
    {
        id : 'model',
        name: 'Modèle',
        display: true,
        displayOrder: 5,
        width: 100,
        sortDirection: 0,
        sortOrder: 0
    },
    {
        id : 'available',
        name: 'Disponible',
        display: true,
        displayOrder: 6,
        width: 100,
        sortDirection: 0,
        sortOrder: 0
    },
    {
        id : 'creationDate',
        name: 'Créé le',
        display: true,
        displayOrder: 7,
        width: 100,
        sortDirection: 0,
        sortOrder: 0
    }
];

export default ENGIN_GRID_COLUMNS;
