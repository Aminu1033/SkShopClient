export class ProductResourceParams {
    searchQuery!: string;
    category!: string;
    exact!: boolean;
    itemsOfTheWeek!: boolean;
    noPaging!: boolean;

    pageNumber!: number;
    pageSize!: number;

    lessHtan50!:boolean;
    between50And100!: boolean;
    higherThan100!: boolean;
}
