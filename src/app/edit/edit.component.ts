import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../api.service';
import { offer } from '../shared/interfaces';


@Component({
  selector: 'app-edit-job-form',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  //users!: IUser[];


  constructor(private activatedRoute: ActivatedRoute, private authService : ApiService,private router:Router) { }

  form = new FormGroup({
    'imageUrl': new FormControl('', [Validators.required]),
    'color': new FormControl('', [Validators.required]),
    'description': new FormControl('', [Validators.required]),
    'madeIn': new FormControl('', [Validators.required]),
    'model': new FormControl('', [Validators.required]),
    'price': new FormControl('', [Validators.required]),
    'seats': new FormControl('', [Validators.required]),
    'town': new FormControl('', [Validators.required]),
    'year': new FormControl('', [Validators.required]),


    //color,description,imageUrl,madeIn,model,price,seats,town,year
  })

  get town() {
    return this.form.get('town')
  }

  get description() {
    return this.form.get('description')
  }

  get color() {
    return this.form.get('color');
  }
  get madeIn() {
    return this.form.get('madeIn');
  } 
  get model() {
    return this.form.get('model');
  } 
  get imageUrl() {
    return this.form.get('imageUrl');
  }
  get seats() {
    return this.form.get('seats');
  }
  get year() {
    return this.form.get('year');
  }
  get price(){
    return this.form.get('price')
  }
/*
  updateJob(form: FormGroup) {
    const car: offer = {
      name: this.form.value.name!,
      description: this.form.value.description!,
      salary: this.form.value.salary!,
    }

   /* console.log(job);

    this.jobService.updateJob(job, '6393762f045fca10ea31bc7c')
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: () => {

        }
      })
    
    }
    
    */
   
  loadCar() {
    this.authService.getDetails(this.activatedRoute.snapshot.params?.['id'])
    .subscribe({
      next: (response:offer) => {
      
        const car:any = response;
    car.city =  car.city.toString()
         console.log(car);
         this.form.patchValue({
          imageUrl:car.imageUrl,
          model:car.model,
          madeIn:car.madeIn,
          year:car.year,
          town:car.city,
          color:car.color,
          description:car.description,
          price:car.price,
          seats:car.seats,
         

         })
        
      }
    })
  }
  update(form:FormGroup){
    let {color,description,imageUrl,madeIn,model,price,seats,town,year} = form.value
    console.log(color);
    
this.authService.edit(this.activatedRoute.snapshot.params?.['id'],color,description,imageUrl,madeIn,model,price,seats,town,year).subscribe({
  next:(value)=>{
console.log(value);

  }
})
 this.router.navigate(['/catalog'])
  };

  ngOnInit(): void {
    this.loadCar();
  }
}