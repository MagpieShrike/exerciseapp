# exerciseapp

##Navigation
        - uses stack navigation

##COLLECTION SCREEN
        - contains an array of exercise collections
        - renders the collections using FlatList
        - passes a list of exercises in each collection to ListScreen
        - provides navigation to ListScreen

##LIST SCREEN
        - receives array of exercises from CollectionScreen
        - renders them in a FlatList
        - passes exercise name, description, steps, and next exercise to ExerciseScreen
        - provides navigation to ExerciseScreen

##EXERCISE SCREEN
        - receives exercise name, description, instructions, and next exercise from ListScreen
        - displays exercise name, description, and instructions
        - allows user to go to the previous or next exercise in the exercise list

##Issues
        - exercise instructions extend past the viewport and do not scroll all the way
        - exercise instructions cover the next exercise button on mobile