import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit{

  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Output() btnClick = new EventEmitter();

  constructor() {}
  ngOnInit(): void {
    
  }

  onClick() {
    console.log('Add');
    this.btnClick.emit();
  }
}
