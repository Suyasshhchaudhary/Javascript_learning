/*
"Producing code" is code that can take some time.
"Consuming code" is code that must wait for the result.
A Promise is an Object that links Producing code and Consuming code.

myPromise.state	        myPromise.result
"pending"	            undefined
"fulfilled"	            a result value
"rejected"	            an error object

syntax:
myPromise.then(
    function(value) { code if successful },
    function(error) { code if some error }
);
 */