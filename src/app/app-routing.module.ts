import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TemaComponent } from './tema/tema.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PostagemComponent } from './postagem/postagem.component';
import { MinhaspostagensComponent } from './minhaspostagens/minhaspostagens.component';
import { EncontreOngsComponent } from './encontre-ongs/encontre-ongs.component';
import { FooterComponent } from './footer/footer.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';

const routes: Routes = [

  {path:"", redirectTo:"inicio", pathMatch:"full"},
  {path:"entrar", component: LoginComponent},
  {path:"cadastrar", component: CadastrarComponent},
  {path:"postagens", component:PostagemComponent },
  {path: "temas", component: TemaComponent},
  {path:"inicio", component: LandingPageComponent},
  {path:"minhaspostagens", component: MinhaspostagensComponent},
  {path:"encontreongs", component: EncontreOngsComponent},
  {path: "rodape", component: FooterComponent},
  {path: "usuarios/editar/:id", component: UsuarioEditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
