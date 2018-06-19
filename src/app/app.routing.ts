import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImovelComponent } from './imovel/imovel.component';
import { LoginComponent } from './login/login.component';
import { InquilinoComponent } from './inquilino/inquilino.component';
import { ProprietarioComponent } from './proprietario/proprietario.component';
import { CadastroComponent } from './cadastro/cadastro.component';




const routes: Routes = [
    {
        path: '',
        component: HomeComponent
        // redirectTo: '/login',
        // pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'cadastro',
        component: CadastroComponent,
    },
    {
        path: 'imovel/:id',
        component: ImovelComponent,
    },
    {
        path: 'inquilino',
        component: InquilinoComponent,
    },
    {
        path: 'proprietario',
        component: ProprietarioComponent,
    },
];


export const AppRouting = RouterModule.forRoot(routes, {
    useHash: false
});
