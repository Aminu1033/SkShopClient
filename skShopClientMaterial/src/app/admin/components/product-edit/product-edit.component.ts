import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryDto } from 'src/app/models/categoryDto';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productFormGroup!: FormGroup;
  isEditMode: boolean = true;
  catIds: string[] = [];
  id!: string;
  constructor(private route: ActivatedRoute, private categoryService: CategoryService,
     private productService: ProductService) {  }

  ngOnInit(): void {   

    this.productFormGroup = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      price: new FormControl(''),
      color: new FormControl(''), 
      shortDescription: new FormControl(''),
      longDescription: new FormControl(''),
      discount: new FormControl(''),
      imgUrl: new FormControl(''),
      imgFile: new FormControl(''),
      isInstock: new FormControl(''),
      isItemOfTheWeek: new FormControl(''),
      isHot: new FormControl(''),
      amountAvailable: new FormControl(''),
      categoryId: new FormControl(''),
      dateCreated : new FormControl(new Date().toUTCString())
    }); 

    this.categoryService.getCategories().subscribe(data=>{
      for (const cat of data as CategoryDto[]) {
        this.catIds.push(cat.id);          
      }
      console.log("catids: ", this.catIds);      
    })

    this.route.paramMap.subscribe(params=>{
      this.id = params.get('id') as string; 
      if (this.id === null) {
        this.isEditMode = false;
      }else{
        this.loadProduct();
      }
    });

    // this.productFormGroup.valueChanges
    //   .subscribe((product : Product) =>
    //     console.log("Stream as form changes, ", product));
  }

  onSubmit() {
      let item = this.productFormGroup.value as Product;
      console.log(item); 
  }

  loadProduct() {
    this.productService.getProduct(this.id).subscribe(data=>{
      this.productFormGroup.patchValue(data);
      console.log("patched product : ", this.productFormGroup.value)
    })
  }

}