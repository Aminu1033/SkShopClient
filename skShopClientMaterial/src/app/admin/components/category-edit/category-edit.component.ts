import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category'; 
import { CategoryDto } from 'src/app/models/categoryDto';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  id!: string;
  isEditMode: boolean = true;
  categoryFormGroup!: FormGroup;
  category = new CategoryDto();
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    
    this.categoryFormGroup = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(250), Validators.minLength(5)])
    })

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') as string;
      // console.log("ID: ", this.id)
      if (this.id === null) {
        this.isEditMode = false;
      }else{ 
 
        this.loadCategory();      
      }
    });
     
  }

  onSubmit(){}

  loadCategory() {
    this.categoryService.getCategory(this.id).subscribe(data=>{ 
      this.categoryFormGroup.patchValue(data);
      console.log("patched category : ", this.categoryFormGroup.value)
    })
  }

}