import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cartravels';
}
const themeToggle = document.getElementById('theme-toggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (themeToggle && hamburger && navMenu) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}
(document.getElementById('search-btn')! as HTMLButtonElement).addEventListener('click', () => {
  const pickupLocation = (document.getElementById('pickup-location')! as HTMLInputElement).value;
  const pickupDate = (document.getElementById('pickup-date')! as HTMLInputElement).value;
  const pickupTime = (document.getElementById('pickup-time')! as HTMLInputElement).value;
  const dropoffDate = (document.getElementById('dropoff-date')! as HTMLInputElement).value;
  const dropoffTime = (document.getElementById('dropoff-time')! as HTMLInputElement).value;

  alert(`Searching from ${pickupLocation} on ${pickupDate} at ${pickupTime}, returning ${dropoffDate} at ${dropoffTime}`);
});
