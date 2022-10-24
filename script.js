

// let res1 = prompt("Enter First Number");
// let res2 = prompt("Enter Second Number");

//     let result = Number(res1) + Number(res2);

    // alert(result);



    function calculate()
{
    let num1 = document.getElementById('num1').value;

    let num2 = document.getElementById('num2').value;
    
    let result = Number(num1) + Number(num2);
     
    document.getElementById('special').innerHTML =`${num1} + ${num2} = ${result}`;



    console.log(`${num1} + ${num2} = ${result}`);
    
}

        // let x = 123;

        // let y = 314159;
        
        // let result = x + y;
        
        // console.log(`${x} + ${y} = ${result}`);

  

let x = 123;

let y = 314159;

let result = x + y;

console.log(`${x} + ${y} = ${result}`);

// console.log(x '+' + y + '=' + result);

function check()
{

let number1 = document.getElementById('number1').value;

let number2 = document.getElementById('number2').value;

if(Number (number1) > Number (number2))
{
document.getElementById('_special').innerHTML = `${number1} Is Bigger Then ${number2}🔼`;
}

else if (Number(number1) < Number(number2)){ 
    document.getElementById('_special').innerHTML = `${number1} Is Less Then ${number2} 🔽`;
}

else if (Number(number1) == Number(number2)){

document.getElementById('_special').innerHTML = `${number1} Is Equal To ${number2}😃`;
}

}



let x2 = [10,20,30,40]; //length = 4

console.log(x2); // prints the value

console.log(x2[x2.length - 1]); // prints the value

// console.log(x2[2]) // index array

let movies = [
    { 
        title:"Batman The Dark Knight",
        year: 2008,
        rate: 9,
        imageUrl: "https://m.media-amazon.com/images/I/91KkWf50SoL._SL1500_.jpg",
        movieUrl: "https://www.imdb.com/title/tt0468569",
        rateUrl:  "https://www.imdb.com/title/tt0468569/ratings"
    },
    { 
        title: "Batman The Dark Knight Rises",
        year: 2012,
        rate: 8.4,
        imageUrl: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/63b5bed74b1870ba6b8615c181ccecca1dce574cc57005212492567ae6060f83._RI_V_TTW_.jpg",
        movieUrl: "https://www.imdb.com/title/tt1345836/",
        rateUrl: "https://www.imdb.com/title/tt1345836/ratings"
    },
    { 
        title: "Taxi Driver",
        year: 1976,
        rate: 8.2,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        movieUrl: "https://www.imdb.com/title/tt0075314/",
        rateUrl: "https://www.imdb.com/title/tt0075314/ratings"
    },
    {
        title: "avengers infinity war",
        year: 2018,
        rate: 8.4,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg",
        movieUrl: "https://www.imdb.com/title/tt4154756/",
        rateUrl: "https://www.imdb.com/title/tt4154756/ratings/?ref_=tt_ov_rt"
    },
    {
        title: "doctor strange in the multiverse of madness",
        year: 2022,
        rate: 7,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
        movieUrl: "https://www.imdb.com/title/tt9419884/",
        rateUrl: "https://www.imdb.com/title/tt9419884/ratings/?ref_=tt_ov_rt"
    },
    {
        title: "thor love and thunder",
        year: 2022,
        rate: 6.7,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        movieUrl: "https://www.imdb.com/title/tt10648342/",
        rateUrl: "https://www.imdb.com/title/tt10648342/ratings/?ref_=tt_ov_rt"
    },
]


function displayImages(){
    for (let index = 0; index < movies.length; index++) {
      
        document.getElementById('movies').innerHTML += `
        <div class="col">
              <div class="card shadow-sm">
              <img class="card-img" src="${movies[index].imageUrl}" alt="">
                <div class="card-body">
                  <h6 class="card-text">Movie Name: ${movies[index].title}</h6>
                  <h6 class="card-text">Release Year: ${movies[index].year}</h6>
                  <h6 class="card-text">Rating: ${movies[index].rate}</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <a class="btn btn-sm btn-secondary" href="${movies[index].movieUrl}" target="_blank">View Movie</a>
                    <a class="btn btn-sm btn-outline-secondary" href="${movies[index].rateUrl}" target="_blank">Rate</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `;
    }
    }

    // function sendEmail() {

    //     let firstName = document.querySelector('[name="FirstName"]').value;
    //     let lastName = document.querySelector('[name="lastName"]').value;
    //     let email = document.querySelector('[name="email"]').value;
    //     let message = document.querySelector('[name="messageContent"]').value;
    //     let date = new Date();
    
    //     Email.send({
    //         Host: "smtp.elasticemail.com",
    //         Username: "yahel.a.rahum@gmail.com",
    //         Password: "2BBE9D0889A9A305185D21677AEBD53870C0",
    //         From: "yahel.a.rahum@gmail.com",
    //         To: "yahel.a.rahum@gmail.com",
    //         Subject: `${firstName} ${lastName} שלח/ה לך הודעה מהאתר`,
    //         Body: `
    //        <b>הודעה מאת:</b> ${firstName} ${lastName}
    //         <br>
    //         <br>
    //         <b>כתובת איימיל של השולח:</b> ${email}
    //         <br>
    //         <br>
    //         <b>נשלח בתאריך:</b> ${date}
    //         <br>
    //         <br>
    //         <b>תוכן ההודעה:</b>
    //         <br>
    //       ${message}
    //       `
    //     });
    
    
    // }


    function sendEmail() {
        let firstName = document.querySelector('[name="firstName"]').value;
        let lastName = document.querySelector('[name="lastName"]').value;
        let email = document.querySelector('[name="email"]').value;
        let message = document.querySelector('[name="messageContent"]').value;
        let date = new Date();
    
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "yahel.a.rahum@gmail.com",
            Password: "2BBE9D0889A9A305185D21677AEBD53870C0",
            From: "yahel.a.rahum@gmail.com",
            To: "yahel.a.rahum@gmail.com",
            Subject: `${firstName} ${lastName} שלח/ה לך הודעה מהאתר`,
            Body: `
        <b>הודעה מאת::</b> ${firstName} ${lastName}
        <br>
        <br>
        <b>כתובת אימייל של השולח:</b> ${email}
        <br>
        <br>
        <b>נשלח בתאריך:</b> ${date}
        <br>
        <br>
        <b>תוכן ההודעה:</b>
        <br>
        ${message}`
        });
    
        document.querySelector('#sent-success').style = 'display:block';
    
    }

// for (let index = 0; index < 100; index++) {
//    console.log(index)    
// }

