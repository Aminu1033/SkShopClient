import { HttpParams, HttpResponse } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged, debounceTime, map, of } from 'rxjs';
import { CategoryDto } from 'src/app/models/categoryDto';
import { PagingData } from 'src/app/models/pagingData';
import { ProductResourceParams } from 'src/app/models/product-resource-params';
import { ProductDto } from 'src/app/models/ProductDto';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  products: ProductDto[] = [];

  pagingParams = new PagingData();
  maxPageNumber!: number;

  productResourceParams = new ProductResourceParams()
  searchAndPaginationForm!: FormGroup;

  categoryNames: string[] = [];
  pageSizes: number[] = [50, 5, 10, 15, 20, 25, 30, 35, 40, 45];
  colors: string[] = ['Black', "Blue", "Brown", "Yellow", "Green", "Gray",
                             "Aquamarine", "Magenta", "White", "Red", "Grey", "purple"]

  searchQuery!: FormControl;
  category!: FormControl;
  exact!: FormControl;
  itemsOfTheWeek!: FormControl;
  noPaging!: FormControl;
  pageNumber!: FormControl;
  pageSize!: FormControl;
  color!: FormControl;
  lessHtan50!: FormControl;
  between50And100!: FormControl;
  higherThan100!: FormControl;

  constructor(private _route: ActivatedRoute, public cartService: CartService,
    private categoryService: CategoryService,
    private productService: ProductService) { }

    
  ngOnChanges(changes: SimpleChanges): void {
 
  }

  ngOnInit(): void {
    this.loadFormParamsControls();
    this.loadFormParamsAndPaginationForm();
    this.loadProductsFromResolver();
    this.loadCategories();
    this.onSubmit();
  }


  loadCategories() {
    this.categoryService.getCategories().subscribe(data => {
      for (const cat of data as CategoryDto[]) {
        // console.log("Cat name: ", cat.name);
        this.categoryNames.push(cat.name);
      }
    })
  }

  loadProductsFromResolver() {
    var response = this._route.snapshot.data["productsResponse"] as HttpResponse<ProductDto[]>;

    this.products = response.body as ProductDto[];
    // console.log("products list : ", this.products);

    let paging = response.headers.get("pagination") as string;

    this.pagingParams = JSON.parse(paging) as PagingData;

    if (this.pagingParams !== null) {
      console.log("CurrentPage : ", this.pagingParams.CurrentPage);
      console.log("HasNext : ", this.pagingParams.HasNext);
      console.log("HasPrevious : ", this.pagingParams.HasPrevious);
      console.log("PageSize : ", this.pagingParams.PageSize);
      console.log("TotalCount : ", this.pagingParams.TotalCount);
      console.log("TotalPages : ", this.pagingParams.TotalPages);
    }

  }

  loadFormParamsControls() { 
      this.searchQuery = new FormControl(''),
      this.category = new FormControl(''),
      this.exact = new FormControl(false),
      this.itemsOfTheWeek = new FormControl(false),
      this.noPaging = new FormControl(false),
      this.pageNumber = new FormControl('1', [Validators.min(1), Validators.max(this.pagingParams.TotalPages)]),
      this.pageSize = new FormControl(50),
      this.color = new FormControl(''),
      this.lessHtan50 = new FormControl(false),
      this.between50And100 = new FormControl(false),
      this.higherThan100 = new FormControl(false)
  }
  loadFormParamsAndPaginationForm() {
    this.searchAndPaginationForm = new FormGroup({
      searchQuery: this.searchQuery,
      category: this.category,
      exact: this.exact,
      itemsOfTheWeek: this.itemsOfTheWeek,
      noPaging: this.noPaging,
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
      color : this.color,
      lessHtan50: this.lessHtan50,
      between50And100: this.between50And100,
      higherThan100: this.higherThan100
    });

  }

  onSubmit() {  
    
    this.searchAndPaginationForm.valueChanges.pipe(
      debounceTime(2000),
      distinctUntilChanged()
            
    ).subscribe((data: HttpParams) => { 
      if (this.pageNumber.value === null) {  
        data.set('pageNumber', `${this.pageNumber.setValue(1)}`);          
      }
     
      this.productService.getProducts(data)
        .subscribe(data => {

          this.products = data?.body as ProductDto[];
          console.log(this.products);

          let paging = data?.headers.get("pagination") as string;

          if (paging) {
            this.pagingParams = JSON.parse(paging) as PagingData;
          }

        })
    })
  } 
}