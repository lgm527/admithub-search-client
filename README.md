# README 😎

React 16.13.1 - This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Clone to local machine

In app's main directory:
```npm install```

Start the app's server on local machine:
```npm start```

## Backend

[Repo](https://github.com/lgm527/admithub_search_api)

## AutoComplete + List Management
The following coding exercise will have you implement an auto-suggest utility on a search bar that updates the results as you type, and then allow you to add one or many of the search results to a list. Some initial components/layout have been created for you, and will render on the right side of this preview. Only edit the JS / CSS sections for this assignment, do not edit this HTML section directly. You can add props, state, additional methods and components as you see fit.

You're welcome to pull the code out into a separate editor if you prefer (part 4 may even require it to some extent), but the final output should be relatively easily demo-able by us in some fashion.

Note: You can't save changes on this pen alone, so you'll want to select "Use this Template" or copy this skeleton into a new pen in order to have your changes saved and working on codepen.

If you have any questions regarding this exercise, don't hesitate to reach out. That said, feel free to make assumptions or choices about implementation details that you think are reasonable and aren't explicitly mentioned in the exercise.

### Part 1:
Create a React component <CountryListItem /> which takes the name of a country and a url to a flag image as props, and displays it like so:


Don't worry about the specific sizing or exact layout, but ensure that there is a '+' button justified on the right side. It won't do anything yet. You can use bootstrap classes for styling, it's packaged into this codepen.

### Part 2:
Whenever the user starts typing in the search bar, make a request to the Rest-Countries search endpoint (documentation here), which takes a search string and returns all the countries that contain the given string. This is the endpoint you want to hit (example):

https://restcountries.eu/rest/v2/name/{name}
Using the component created in part 1, display the name/image of the first 5 results returned from the API endpoint. Whenever the user changes what they've typed, the search results should update. While the network call is in progress, some loading state / message should be shown in the Search Results.

### Part 3:
Now that you have a functioning search, we want to make it so the user can "pin" certain items from that search to a separately managed list. Make it so that when the user hits the "+" button on a search item, it adds it to the "Selected Countries" list on the right, but only if that country is not already in the "Selected Countries" List.

The "Selected Countries" list items should have the same UI as the items in the search list, but there should be an "x" button in place of the "+" button. Clicking on the "x" should remove that item from the list.
