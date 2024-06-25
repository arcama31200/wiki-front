import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkboxes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkboxes.component.html',
  styleUrl: './checkboxes.component.scss'
})
export class CheckboxesComponent {
  // Utilisation d'une signature d'index pour permettre l'indexation par clé de type string
  selectedOptions: { [key: string]: boolean } = {
    toto: false,
    titi: false,
    tata: false
  };
  inputText: string = '';
  label: string | null = null;

  addLabel() {
    const selectedKeys = Object.keys(this.selectedOptions).filter((key: string) => this.selectedOptions[key]);
    this.label = `${selectedKeys.join(' ')} ${this.inputText}`.trim();
  }
}
