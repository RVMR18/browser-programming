## Why do we use async/await?

async/await is used to handle asynchronous operations in a clean way. It allows us to write code that looks like normal sequential code while still working with asynchronous tasks such as API requests

## Why do we use try/catch with fetch?

We use try/catch with fetch to handle errors that may occur during a network request. In the internet connection might fail or the server may not respond. Using try/catch prevents the program from crashing and allows us to display a helpful error message to the user.

## Why do we check response.ok?

We check response.ok to make sure the HTTP request was successful before using the returned data. Sometimes a request completes but the server returns an error status such as 404 Not Found . 
