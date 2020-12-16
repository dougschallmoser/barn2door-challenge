# Barn2Door Take Home

This phase of the interview process will consist of you completing this short (1-2 hour) take home problem and then we will evaluate your solution.  If we decide to move forward, we will invite you back to review your code and conduct an in-person interivew with two or more members of our team for approximately 2.5 hours total. Please create a merge request to push your final version within 1 week of receiving the invite as your access will be revoked after 1 week. If any questions pop up while completing this assignment, feel free to email us at geoff@barn2door.com. 

## Overview

### Objective:
Using the supplied JSON [example_data.json](./example_data.json), create a view that takes a users input and renders the objects that contain the users input to the screen.

### What we are looking for: 
* Your understanding of front-end aspects of development.
* Your thought process in solving problems.
* Your in-depth understanding of what you built.
* Your ability to write readable, scalable code.
* How you communicate to peers about your work.

### What you don't need to worry about
* Writing the most efficient code. We care more about your overall thought process.
* Using a specific programming language or framework. Use what you know!

### What we will rate you on
* Meet requirements - did you follow the specification?  If in doubt, document your assumptions.
* Code quality - is your code easy to read and maintain?
* Structure - are your directories, files, and code organized in a logical way?
* Optimization - is your code efficient?
* Bonus: Make it look pretty for bonus points to set you apart.

## Specification

Be able to parse data like the supplied json file ([example_data.json](./example_data.json)) based on a user's input. You should return all the objects that contain the supplied phrase at any sensible point. The matching objects should be rendered on to the screen any way you would like that goes beyond just text. Your solution should be able to handle characters, words, and phrases.

When you are done, edit this README with your answers to the questions at the bottom of the page.

---

## Example Input / Output

**User input:** Fruit

**Expected Objects:**
```
{
    "items": [
        {
            "id": 1,
            "categories": [
                {
                    "id": 1,
                    "name": "Fruit",
                    "subcategory": {
                        "id": 1,
                        "name": "Apple"
                    }
                }
            ],
            "title": "Red Delicious",
            "img": "http://www.bluestarclinic.com/wp-content/uploads/2013/12/apple-img.jpg",
            "description": "Yummy delicious apples that are red."
        },
        {
            "id": 2,
            "categories": [
                {
                    "id": 2,
                    "name": "Fruit"
                },
                {
                    "id": 3,
                    "name": "Vegetable"
                }
            ],
            "title": "Potato",
            "img": "https://paleofoundation.com/wp-content/uploads/2018/04/Are-Potatoes-Paleo-Are-Potatoes-allowed-on-the-Paleo-Diet.png",
            "description": "What even is a potato?"
        }
]
```

**User input:** Red

**Expected Objects:**
```
[
    {
            "id": 1,
            "categories": [
                {
                    "id": 1,
                    "name": "Fruit",
                    "subcategory": {
                        "id": 1,
                        "name": "Apple"
                    }
                }
            ],
            "title": "Red Delicious",
            "img": "http://www.bluestarclinic.com/wp-content/uploads/2013/12/apple-img.jpg",
            "description": "Yummy delicious apples that are red."
    },
    {
            "id": 3,
            "categories": [
                {
                    "id": 3,
                    "name": "Vegetable",
                    "subcategory": {
                        "id": 2,
                        "name": "Root"
                    }
                }
            ],
            "title": "Red Radishes"
    }
]
```

---

# Questions
### How do we run your app? (ex. `npm install` and then `npm start`)
> Run 'npm install'. Then run 'npm start'.

### How long did it take you to complete this assignment (in hours)?
> 2.5 hours

### What did you enjoy the most while working on this assignment?
> I enjoyed the challenge of using a local json file and combing through the data to parse the search query.

### What did you learn (if anything) while working on this assignment? (optional)
> How to utilize a local json file as I am accustomed to making a fetch request.

