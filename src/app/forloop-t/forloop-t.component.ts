import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop-t',
  templateUrl: './forloop-t.component.html',
  styleUrls: ['./forloop-t.component.css']
})
export class ForloopTComponent {
    list = [
      { "id": 1, "name": "bill" },
      { "id": 2, "name": "bob" },
      { "id": 3, "name": "billy" }
  ]

  objectValue = { 2:'Angular keyvalue Pipe', 1:'Angular ngFor' };

  complexList = [
    {
      "name": "vikas",
      "class": "First",
      "friend": [
        "Ravi",
        "Teja",
        "Siva",
        "Shiv",
        "Sharda"
      ]
    },
    {
      "name": "vinod",
      "class": "Second",
      "friend": [
        "Ravi",
        "Shiv",
        "Sharda"
      ]
    },
    {
      "name": "Lalu",
      "class": "First",
      "friend": [
        "Shiv",
        "Sharda"
      ]
    },
    {
      "name": "Nitish",
      "class": "Fifth",
      "friend": [
        "Ravi",
        "Sharda"
      ]
    },
    {
      "name": "Atal",
      "class": "Eight",
      "friend": [
        "Ravi",
        "Ravina",
        "Teja",
        "Siva",
        "Shiv",
        "Sharda"
      ]
    }
  ];

  identify(index:any, item:any) {
    return item.id;
}

  foo() {
    this.list = [
        { "id": 1, "name": "foo" },
        { "id": 2, "name": "bob" },
        { "id": 3, "name": "billy" }
    ]
}
}
