//async await
//you need

let printValue = async () => {
  return 1;
};

console.log(printValue());

/*let fetchData =("https://jsonplaceholder.typicode.
.then(data=>data.json())
.then(result=>fetch("url...")
.then(data=>data.json())
.then(finalresult=>console.log(finalresult)))
}

fetchData() */

//using async await
//asynchronous code
let fetchData = async () => {
  //the function itself is synchronous, but await makes it synchronous
  //you can only use async within a function
  //inside async you write your code in synchronous way
  //if you are using async await always use try and catch block -- best practice to find an error

  /*try{}
  catch(err){}*/
  try {
    let data = await fetch("https://jsonplaceholder.typicode.com.users");
    let jsonData = await data.json();
    //the .json() method returns a promise}

    //synchronous code
    console.log("console.log before calling fetchData function");
    console.log(jsonData);
  } catch (err) {
    // console.log("something wrong with your code");
    console.log(err);
  }
};

//it will execute after all synchronous code
fetchData();
