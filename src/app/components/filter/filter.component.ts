import { Component, Output, EventEmitter } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  // @Output() filterChange!: EventEmitter<string>;
  filter!: string;

  onFilterChange() {
    console.log("filter changed");
    console.log(this.filter);
    // this.filterChange.emit(this.filter);
  }
}
