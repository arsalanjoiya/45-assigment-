let current_users: string[] = ["azhar","samee","bilal","rehan","arsalan"]
let new_users: string[] = ["meraj","ammar","zeeshan","daniyal","shahriyar"]

new_users.forEach((newUser) => {
  if(
    current_users.some(
        (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )


  ) { 
    console.log(`${newUser} well need to enter a new username`)
  } else {
    
    console.log(`${newUser} is avalible`);
  }
});

  





