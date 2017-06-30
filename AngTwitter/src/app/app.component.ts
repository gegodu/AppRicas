import { Component } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  searchquery = '';
  tweetsdata;
  followres;
  tweet=false;
  usuario=false;
  seguidores;
  siguiendo;
  fondo;
tweetsuser;
nombre;
foto;
scrname;
    constructor(private http: Http){
    
  }

  makecall(){
      var headers = new Headers();
      headers.append('Content-Type', 'application/X-www-form-urlencoded');
      this.tweet = true;
      this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
        console.log(res);
      })
  }

  searchcall(){
    var headers = new Headers();
    var searchterm = 'query=' +this.searchquery;
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    this.http.post('http://localhost:3000/search', searchterm, {headers:headers}).subscribe((res) =>{
      
      this.tweetsdata = res.json().data.statuses;
        console.log(this.tweetsdata);
      this.repImg();
  }); 
  }

  usercall(user){
    var headers = new Headers();
    var searchterm = 'screenname=' + user;
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    this.http.post('http://localhost:3000/user', searchterm, {headers:headers}).subscribe((res) =>{
      console.log(res.json().data);
      this.tweetsuser = res.json().data;
      this.nombre = this.tweetsuser[0].user.name;
      this.siguiendo = this.tweetsuser[0].user.friends_count;
      this.seguidores = this.tweetsuser[0].user.followers_count;
      this.fondo = this.tweetsuser[0].user.profile_background_image_url;
      this.foto = this.tweetsuser[0].user.profile_image_url
      this.usuario = true;
this.scrname = this.tweetsuser[0].user.screen_name;
console.log(this.scrname);
    }); 
  }
repImg(){
      
}
followerscall(user){
 var headers = new Headers();
    var searchterm = 'screenname=' + user;
    
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    this.http.post('http://localhost:3000/followers', searchterm, {headers:headers}).subscribe((res) =>{
      console.log(res.json().data);
       this.followres = res.json().data.users;
       console.log(this.followres);
    }); 
  }
}

