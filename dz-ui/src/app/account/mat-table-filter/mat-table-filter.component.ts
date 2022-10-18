import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../../model/employee';
import { EmpFilter, filterOption } from '../../model/empfilter';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-mat-table-filter',
  templateUrl: './mat-table-filter.component.html',
  styleUrls: ['./mat-table-filter.component.css']
})
export class MatTableFilterComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email','gender','jobtitle','department'];

  EmpData : Employee[] =[{"id":1,"firstname":"Mellie","lastname":"Gabbott","email":"mgabbott0@indiatimes.com","gender":"Female","department":"Support","jobtitle":"Support Analyst"},
    {"id":2,"firstname":"Yehudi","lastname":"Ainsby","email":"yainsby1@w3.org","gender":"Female","department":"Support","jobtitle":"Support Analyst"},
    {"id":3,"firstname":"Noellyn","lastname":"Primett","email":"nprimett2@ning.com","gender":"Female","department":"Human Resources","jobtitle":"Project Manager"},
    {"id":4,"firstname":"Stefanie","lastname":"Yurenin","email":"syurenin3@boston.com","gender":"Female","department":"Marketing","jobtitle":"Senior officer"},
    {"id":5,"firstname":"Stormi","lastname":"O'Lunny","email":"solunny4@patch.com","gender":"Female","department":"Engineering","jobtitle":"Software Engineer"},
    {"id":6,"firstname":"Keelia","lastname":"Giraudy","email":"kgiraudy5@nba.com","gender":"Male","department":"Marketing","jobtitle":"Senior officer"},
    {"id":7,"firstname":"Ikey","lastname":"Laight","email":"ilaight6@wiley.com","gender":"Male","department":"Support","jobtitle":"Support Analyst"},
    {"id":8,"firstname":"Adrianna","lastname":"Ruddom","email":"aruddom7@seattletimes.com","gender":"Male","department":"Marketing","jobtitle":"Senior officer"},
    {"id":9,"firstname":"Dionysus","lastname":"McCory","email":"dmccory8@ox.ac.uk","gender":"Male","department":"Engineering","jobtitle":"Software Engineer"},
    {"id":10,"firstname":"Claybourne","lastname":"Shellard","email":"cshellard9@rediff.com","gender":"Male","department":"Engineering","jobtitle":"Software Engineer"}];

  genders: string[]=['All','Male','Female'];
  jobtitles: string[]=['All','Support Analyst','Project Manager','Senior officer','Software Engineer'];
  departments: string[]=['All','Support','Human Resources','Marketing','Engineering'];
  empFilters: EmpFilter[]=[];

  defaultValue = "All";

  filterDictionary= new Map<string,string>();



  dataSource = new MatTableDataSource(this.EmpData);
  dataSourceFilters = new MatTableDataSource(this.EmpData);

  constructor() {
  }


  ngOnInit(): void {

    this.empFilters.push({name:'gender',options:this.genders,defaultValue:this.defaultValue});
    this.empFilters.push({name:'jobtitle',options:this.jobtitles,defaultValue:this.defaultValue});
    this.empFilters.push({name:'department',options:this.departments,defaultValue:this.defaultValue});

    this.dataSourceFilters.filterPredicate = function (record,filter) {
      var map = new Map(JSON.parse(filter));
      let isMatch = false;
      for(let [key,value] of map){
        isMatch = (value=="All") || (record[key as keyof Employee] == value);
        if(!isMatch) return false;
      }
      return isMatch;
    }
  }

  applyEmpFilter(ob:MatSelectChange,empfilter:EmpFilter) {

    this.filterDictionary.set(empfilter.name,ob.value);
    var jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));
    this.dataSourceFilters.filter = jsonString;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
