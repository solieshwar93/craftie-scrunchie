import { Component, OnInit } from '@angular/core';
import { ScrunchiesService } from '../services/scrunchies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  scrunchies: any[] = [];
  types: string[] = [];
  constructor(private scrunchieService: ScrunchiesService) { 

  }
  
  ngOnInit(): void {
    this.getScrunchies();
  }

  getScrunchies() {
    this.scrunchieService.getScrunchies().subscribe(
      (data: any) => {
        // If the JSON is { scrunchies: [...] }
        this.scrunchies = data.scrunchies || [];
        this.types = ['All', ...Array.from(new Set(this.scrunchies.map((s: any) => s.type)))];
      },
      (error) => {
        console.error('Error fetching scrunchies:', error);
      }
    );
  }
  
  selectedType = 'All';

  get filteredScrunchies() {
    if (this.selectedType === 'All') {
      return this.scrunchies;
    }
    return this.scrunchies.filter(s => s.type === this.selectedType);
  }
}
