import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';  
import { PagingData } from 'src/app/models/pagingData';
import { ProductDto } from 'src/app/models/ProductDto'; 
import { ProductService } from 'src/app/services/product.service';
import { DeleteProductDialogComponent } from '../delete-product-dialog/delete-product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: ProductDto[] = [];

  pagingParams = new PagingData();

  constructor(private route: ActivatedRoute, private router: Router,
     private dialog: MatDialog,
     private productService: ProductService) { }


  ngOnInit(): void {
    this.loadProductsFromResolver();
  }

  loadProductsFromResolver() {
    var response = this.route.snapshot.data["productsResponse"] as HttpResponse<ProductDto[]>;

    this.products = response.body as ProductDto[];
    console.log("products list : ", this.products);

    // Getting the pagination header
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
 
  // Delete product dialog actions
  deleteProduct(id: string){
    console.log("ID: ", id);
    const dialogRef: MatDialogRef<DeleteProductDialogComponent> =    
    this.dialog.open(DeleteProductDialogComponent, { data: {id} });

    // this.dialog.open(DeleteProductDialogComponent, { data: product }); 
    
    dialogRef.afterClosed().subscribe(data=>{
      if (data.clicked === "ok") {
        // TODO 
        this.productService.deleteProduct(id).subscribe(data=>{
          console.log("Product deleted successfully: ", data)
        })
      }else if (data.clicked === "cancel") {
        this.router.navigate(['/admin']);
      }
    })
  }
}
