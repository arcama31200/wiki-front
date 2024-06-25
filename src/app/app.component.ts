import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckboxesComponent } from './components/checkboxes/checkboxes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CheckboxesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Wiki-front';
}
