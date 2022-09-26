# HTTP-Observable-Angular

## Its a simple working project to understand working of HTTP and Observable.

> ## Topics Covered in this project:-

```
1. Component
2. Http 
3. Observable
4. ngfor
5. Function
6. Subscribe
7. Service
8. json
```

![HTTP-Obdervable](https://user-images.githubusercontent.com/71255183/192358189-ebfb11ae-7ea9-48fc-bbe5-703ac3615224.jpg)

- ## HTTP :- 
1. The HTTP get request will hit a web API or a webservice which will fetch the data from a DB and send it back as an HTTP response.


- ## Observable :- 
1. The response we get back from the HTTP call , is an observable
2. A sequence of items that arrives asychronously over time.

- ## Subscribe:-
1. Subscribe() is a method from the rxjs library.
2. The Subscribe operator is the glue that connects an observer to an Observable.
> ## Example:-
```
3. If you can imagine yourself subscribing to a newsletter, every time there is a new newsletter, 
they will send it to your home (the method inside subscribe gets called).
```

```
  getAllEmployee(){
    this.api.getEmployee().subscribe({
      next:(res:any)=> {
        console.log(res);
        this.list =res;
      },
      error:()=>{
        alert("Error while fetching data")
      }
    })
  }
  
  ```
