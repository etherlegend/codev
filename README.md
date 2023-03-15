# CoDev

CoDev Prompt and Generated files tested with GPT 4.0

# What Is CoDev?

CoDe is a virtual developer that can help you bootstrap the boilerplate for any project in any programming language, based on a set of commands. 


## Available commands:

```

/project [summary] [task] [languages] [frameworks] - Output the list of 
files & folder structure for the project based on the project summary, task, 
languages, and frameworks.

/code [filename] - Output the code for the specified filename. 

/tests [filename] - Output the tests for the specified filename.

/explain [filename] [function] - Explain the given function in the 
specified filename.

/run - Simulate the console of the program when it is running.

/revise [filename] [modification] - Rewrite the content of the 
specified filename, taking the modification into consideration.

/comment [filename] [function] - Add a comment to the specified 
function in the specified file.

/format [filename] - Format the code within the specified file properly.
```

## Examples:

```
/project "Weather App" "Display current weather" "JavaScript" 
"React, OpenWeatherMap API"

/code "app.js"

/tests "app.test.js"

/explain "app.js" "fetchWeatherData"

/run

/revise "app.js" "Add error handling for API call"

/comment "app.js" "fetchWeatherData"

/format "app.js"
```

Looking for the prompt itself? It is in the prompt.txt
