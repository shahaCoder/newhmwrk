let people = [
    {
        name: 'Malika',
        budget: 20000,
        rent: 12,
        expenses: [
            {
                total: 2000,
                title: 'sousages'
            },
            {
                total: 1200,
                title: 'mobile phone'
            },
            {
                total: 3000,
                title: 'car'
            },
        ]
    },
    {
        name: 'Diyor from 611 gr',
        budget: 20000,
        rent: 12,
        expenses: [{
                total: 1500,
                title: 'sousages'
            },
            {
                total: 2200,
                title: 'sousages width ketchup'
            },
            {
                total: 3500,
                title: 'sousages'
            },
        ]
    },
    {
        name: 'Aziz',
        budget: 20200,
        rent: 12,
        expenses: [{
                total: 100,
                title: 'girls'
            },
            {
                total: 4200,
                title: 'girls'
            },
            {
                total: 300,
                title: 'girls'
            },
        ]
    },
    {
        name: 'Amir',
        budget: 27000,
        rent: 12,
        expenses: [{
                total: 2000,
                title: 'study'
            },
            {
                total: 1000,
                title: 'games'
            },
            {
                total: 5000,
                title: 'clothes'
            },
        ]
    },
    {
        name: 'Maxmudbek',
        budget: 15000,
        rent: 12,
        expenses: [{
                total: 1111,
                title: 'sigarets'
            },
            {
                total: 1900,
                title: 'chilim'
            },
            {
                total: 6000,
                title: 'anasha'
            },
        ]
    },
    {
        name: 'Samir',
        budget: 12000,
        rent: 12,
        expenses: [{
                total: 1200,
                title: 'food'
            },
            {
                total: 990,
                title: 'car'
            },
            {
                total: 7000,
                title: 'protain'
            },
        ]
    },
    {
        name: 'Badriddin',
        budget: 2000,
        rent: 12,
        expenses: [{
                total: 1000,
                title: 'taxi'
            },
            {
                total: 8000,
                title: 'rich girls'
            },
            {
                total: 700,
                title: 'on himself'
            },
        ]
    }
]





for (let item of people){     
  let a = item.budget - (item.budget * item.rent / 100) - item.expenses[0].total - item.expenses[1].total - item.expenses[2].total 
    // let a = item.budget - (item.budget * item.rent / 100)  - (item.expenses.reduce((a,b) => a.total + b.total)) 
     document.write(`
     <div style= "margin-bottom: 90px;">
     <h1 style="color: red; font-size: 50px"> ${item.name} </h1>
     <b> <span style="color: red; font-size: 50px">  БЫЛО: </span> <span style="color: black; font-size: 50px">  ${item.budget} </span> <br>
     <b> <span style="color: red; font-size: 50px"> На аренду ушло <span style= "color: black"> ${item.rent} </span>% от общей суммы </span> <br>
     <b> <span style="color: red; font-size: 50px"> Осталось : </span> <span style="color: black; font-size: 50px"> ${a} </span>  <br>
     </div> <hr>
     `)  
}



