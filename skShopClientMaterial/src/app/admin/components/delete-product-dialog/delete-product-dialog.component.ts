import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'; 

@Component({
  selector: 'app-delete-product-dialog',
  templateUrl: './delete-product-dialog.component.html',
  styleUrls: ['./delete-product-dialog.component.css']
})
export class DeleteProductDialogComponent implements OnInit {
 
  productId!: string;
  // product = new ProductDto();
  constructor(@Inject(MAT_DIALOG_DATA) private data:{id:string}) {
     
   }

  ngOnInit(): void { 
    // this.productId = this.data.id;
    // // this.product = this.data.product;
    // console.log("Data passed: ", this.data)
    // console.log("Id: ", this.productId)
  }

}
