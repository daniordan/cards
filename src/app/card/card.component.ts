import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  // Input Binding
  // bind input properties to DOM properties from the html template
  // instructs our class card component that it's going to receive these four different properties whenever we try to create it from some other components
  // use input decorator to bind properties - the input decorator is used to bind properties from the parent component to the child component
  // So this allows us to see the title, username, imageUrl, and content properties in the DOM template for this card component
  // input decorator tells Angular that this property is going to be provided by the parent component
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() content = '';
  @Input() username = '';
}
