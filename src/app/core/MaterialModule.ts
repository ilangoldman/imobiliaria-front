import { NgModule } from '@angular/core';

// Material
import { MatMenuModule } from '@angular/material/menu';
import * as MD from '@angular/material';
import {
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatFormFieldControl,
    MatSnackBarModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatAutocompleteModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const modules = [
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatAutocompleteModule
];

@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule { }
