# Exercise App
GitHub pages: https://magpieshrike.github.io/exerciseapp/

Exercises from https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/

Uses Stack and Tab navigation. Looks and works better on mobile.

## Screens
### Collection
        - contains an array of exercise collections
        - renders the collections using FlatList
        - passes a list of exercises in each collection to ListScreen
        - provides navigation to ListScreen

### List
        - receives array of exercises from CollectionScreen
        - renders them in a FlatList
        - passes exercise name, description, steps, and next exercise to ExerciseScreen
        - provides navigation to ExerciseScreen

### Exercise
        - receives exercise name, description, instructions, and next exercise from ListScreen
        - displays exercise name, description, and instructions
        - allows user to go to the previous or next exercise in the exercise list

### Resources
        - provides links to external sites that contain helpful information

## Issues
        - links work on mobile but not web
