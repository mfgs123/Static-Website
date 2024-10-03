function getOnline(){
    document.getElementById("message").innerHTML = "Welcome, you are now subscribed!";
}

function changeAll(){
	const selectAll = document.querySelectorAll(".list-group-item1");
	for	(i = 0; i < selectAll.length; i++){
		let item = selectAll[i];
    item.textContent = "Previously read";
	}
}

const result = document.querySelector('.result');

function flavour(){
  result.textContent = `You like ${event.target.value}. Put the mouse over this message to see a recipe`;
}

function message(){
	result.textContent = "Check the the first and second page in this blog for reciped related to this item"
}

//displaying a list of recipes
const arrayRecipes = [
	'Pumpkin Pancakes','Shrimp Pasta','Chicken Skewers','Miso Soup','Cheesy Broccoli Pasta','Breakfast Cookies'
  ];
  
  // Function to display Irish counties on the webpage
  function displayRecipes() {
	const recipesList = document.getElementById('recipes-list');
  
	arrayRecipes.forEach(recipes => {
	  // Create a new list item element
	  const listRecipes = document.createElement('li');
	  
	  // Set the text content of the list item
	  listRecipes.textContent = recipes;
  
	  // Append the list item to the unordered list
	  recipesList.appendChild(listRecipes);
	});
  }
  
  // Call the function to display Irish counties
  displayRecipes();


// Example object representing an Irish county
const firstRecipe = {
	step1: 'Place pumpking puree, 2 eggs, milk, vanilla extract, maple syrup, rolled oats, baking powder and cozy spices in a blendr. blend until batter is nice and smooth.',
	step2: 'Cook them up. Add olive oil or coconut oil to a griddle or large nonstick pan and place over medium heat. Add pancake batter 1/3 cup at a time. Cook for about 2-3 minutes or until golden brown and tiny bubbles appear around the edges. Flip and cook for 2 minutes more.',
	step3: 'Top & devour. Serve your pancakes with pecans, butter (or my personal favorite: peanut butter) and a drizzle of pure maple syrup. SO GOOD.'
  };
  
  // Function to display county information on the webpage
  function displayfirstRecipe() {
  //Select the div with id county-info
	const firstRecipeContainer = document.getElementById('recipes-info');
	// Display the county object properties on the webpage
	firstRecipeContainer.innerHTML = `
	  <p>Step 1: ${firstRecipe.step1}</p>
	  <p>Step 2: ${firstRecipe.step2}</p>
	  <p>Step 3: ${firstRecipe.step3}</p>
	`;
  }
  
  // Call the function to display county information
  displayfirstRecipe();

 
  
  //to validate form in contact us
function validateForm() {
	 // retrieving form values
	 let name = document.getElementById("name").value;
	 let email = document.getElementById("email").value;
	 let message = document.getElementById("message").value;
	 // avoiding blank input
	 if (name === "" || email === "" || message === "") {
		 alert("Name and email and message are required");
		 return false;
	 }
	 // validating email format using a simple regular expression
	 let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	 if (!emailRegex.test(email)) {
		 alert("Please enter a valid email address");
		 return false;
	 }
      // if all validations pass
	 return true;
    }

 