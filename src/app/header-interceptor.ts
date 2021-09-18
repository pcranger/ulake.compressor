
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token = localStorage.getItem("token");
        // Add Auth Token
        // In production you would get the token value from an auth service
        // const hardcodedToken = '1d38d128-0671-4121-8084-f6332a992a40';
        req = req.clone({
            setHeaders:{
                
                Authorization: `Bearer ${token}`
            }
        //   headers: req.headers.delete('Authorization')
        });
        
        return next.handle(req)
    }
}