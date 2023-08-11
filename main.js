const myForm = document.querySelector('#myForm')
const div = document.querySelector('.div')
const form2 = document.querySelector('#form')
const form3 = document.querySelector('#formt')
console.log(form2)
 myForm.addEventListener('submit',event =>{
    event.preventDefault()
   switch (event.target.elements.text.value) {
     case "понеділок":
       div.innerHTML = `
        <h1> ${"work"}</h1>
        <p> ${"робочий день"}</p>
        `;
       break;
     case "вівторок":
       div.innerHTML = `
        <h1> ${"work"}</h1>
        <p> ${"робочий день"}</p>
        `;
       break;
     case "середа":
       div.innerHTML = `
        <h1> ${"work"}</h1>
        <p> ${"робочий день"}</p>
        `;
       break;
     case "четвер":
       div.innerHTML = `
        <h1> ${"work"}</h1>
        <p> ${"робочий день"}</p>
        `;
       break;
     case "пятниця":
       div.innerHTML = `
        <h1> ${"work"}</h1>
        <p> ${"робочий день"}</p>
        `;
       break;
     case "субота":
       div.innerHTML = `
        <h1> ${"work"}</h1>
        <p> ${"вихідний"}</p>
        `;
       break;
     case "неділя":
       div.innerHTML = `
        <h1> ${"work"}</h1>
        <p> ${"вихідний"}</p>
        `;
       break;
   }
   function year(){
    switch (+event.target.elements.text.value) {
      case 12:
        div.innerHTML = `
        <h1> ${"пора року"}</h1>
        <p> ${"зима"}</p>
        `
        break;
      case 1:
        div.innerHTML = `
        <h1> ${"пора року"}</h1>
        <p> ${"зима"}</p>
        `
        break;
      case 2:
        div.innerHTML = `
        <h1> ${"пора року"}</h1>
        <p> ${"зима"}</p>
        `
        break;

      case 3:
        div.innerHTML = `
        <h1> ${"пора року"}</h1>
        <p> ${"весна"}</p>
        `
        break;

      case 4:
        div.innerHTML = `
        <h1> ${"пора року"}</h1>
        <p> ${"весна"}</p>
        `
        break;
    
        case 5:
        div.innerHTML = `
        <h1> ${"пора року"}</h1>
        <p> ${"весна"}</p>
        `
        break;
   
        case 6:
        div.innerHTML = `
        <h1> ${"пора року"}</h1>
        <p> ${"літо"}</p>
        `
        break;
            case 7:
        div.innerHTML = `
        <h1> ${"пора року"}</h1>
        <p> ${"літо"}</p>
        `;
        break;
    
        case 8:
        div.innerHTML = `
        <h1> ${"пора року"}</h1>
        <p> ${"літо"}</p>
        `;
        break;

            case 9:
        div.innerHTML = `
        <h1> ${"пора року"}</h1>
        <p> ${"осінь"}</p>
        `;
        break;

           case 10:
        div.innerHTML = `
        <h1> ${"пора року"}</h1>
        <p> ${"осінь"}</p>
        `;
        break;

           case 11:
        div.innerHTML = `
        <h1> ${"пора року"}</h1>
        <p> ${"осінь"}</p>
        `;
        break;
    }
    }
    function svitlofor(){
        switch (event.target.elements.text.value) {
          case "червоний":
            div.innerHTML = `
        <h1> ${"світлофор"}</h1>
        <p> ${"СТОП"}</p>
        `;
            break;
          case "жовтий":
            div.innerHTML = `
        <h1> ${"світлофор"}</h1>
        <p> ${"ПРИГОТУЙТЕСЬ"}</p>
        `;
            break;
          case "зелений":
            div.innerHTML = `
        <h1> ${"світлофор"}</h1>
        <p> ${"МОЖЕШ ЙТИ"}</p>
        `;
            break;
        }
    }
    year()
    svitlofor()
 })
   form3.addEventListener('submit',event =>{
   event.preventDefault()

    switch (+event.target.elements.name.value) {
      case 1:
        div.innerHTML = `
        <h1> ${"січень"}</h1>
        <p> ${"31"}</p>
        `;
        break;
      case 2:
        div.innerHTML = `
        <h1> ${"лютий"}</h1>
        <p> ${"28-29"}</p>
        `;
        break;
      case 3:
        div.innerHTML = `
        <h1> ${"березень"}</h1>
        <p> ${"31"}</p>
        `;
        break;
      case 4:
        div.innerHTML = `
        <h1> ${"квітень"}</h1>
        <p> ${"30"}</p>
        `;
        break;
      case 5:
        div.innerHTML = `
        <h1> ${"травень"}</h1>
        <p> ${"31"}</p>
        `;
        break;
      case 6:
        div.innerHTML = `
        <h1> ${"червень"}</h1>
        <p> ${"30"}</p>
        `;
        break;
      case 7:
        div.innerHTML = `
        <h1> ${"липень"}</h1>
        <p> ${"31"}</p>
        `;
        break;
      case 8:
        div.innerHTML = `
        <h1> ${"серпень"}</h1>
        <p> ${"31"}</p>
        `;
        break;
      case 9:
        div.innerHTML = `
        <h1> ${"вересень"}</h1>
        <p> ${"30"}</p>
        `;
        break;
      case 10:
        div.innerHTML = `
        <h1> ${"жовтень"}</h1>
        <p> ${"31"}</p>
        `;
        break;
      case 11:
        div.innerHTML = `
        <h1> ${"листопад"}</h1>
        <p> ${"30"}</p>
        `;
        break;
      case 12:
        div.innerHTML = `
        <h1> ${"грудень"}</h1>
        <p> ${"31"}</p>
        `;
        break;
    }
    })

  form2.addEventListener('submit',event =>{
    event.preventDefault()
      let p = +event.target.elements.kal.value;
      let i = +event.target.elements.kal2.value;
      let c = event.target.elements.selee.value
      switch (c) {
        case "a":
          div.innerHTML = `
          <h1>${p + i}</h1>
          `;
          break;
        case "b":
          div.innerHTML = `
          <h1>${p - i}</h1>
          `;
          break;
        case "c":
          div.innerHTML = `
          <h1>${p * i}</h1>
          `;
          break;
        case "d":
          div.innerHTML = `
          <h1>${p / i}</h1>
          `;
          break;
      }
      })