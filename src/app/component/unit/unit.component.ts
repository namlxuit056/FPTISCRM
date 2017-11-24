import { Component, OnInit } from '@angular/core';
import {UnitService} from '../../service/unit/unit.service';
import {Unit} from '../../model/unit'

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent  {

  units: Unit[];
  id: string;
  name:string;
  constructor(private unitService: UnitService){
  this.unitService.getUnits()
      .subscribe(units => {
        this.units = units;
      });
  }
  addTask(event){
    event.preventDefault();
    console.log(this.id);
		var newTask ={
			title: this.name,
			isDone: false
		}

		this.unitService.addUnit(newTask)
			.subscribe(unit => {
				this.units.push(unit);
        this.id = '';
        this.name = '';
			})

    }
}
