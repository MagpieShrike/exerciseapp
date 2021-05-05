/*

    COLLECTION SCREEN
        - contains an array of exercise collections
        - renders them individually using FlatList
        - passes a list of exercises to ListScreen
        -provides navigation between collection and ListScreen

*/

import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';

const data = [
    {
        key: "0",
        name: "Abs",
        exercises: [
            {
                key: "0",
                name: "Bird-Dog",
                instructions: [ 
                    {
                        key: "1",
                        step: "Starting Position: Kneel on an exercise mat or floor, positioning your knees and feet hip-width apart, with your feet dorsi-flexed (toes pointing towards your body).",
                    },
                    {
                        key: "2",
                        step:  "Slowly lean forward to place your hands on the mat, positioning them directly under your shoulders at shoulder-width with your fingers facing forward. Reposition your hands and knees as necessary so that your knees are directly under your hips and hands are directly under your shoulders.",
                    },
                    {
                        key: "3",
                        step: "Stiffen your core and abdominal muscles to position your spine in a neutral position, avoid any excessive sagging or arching.",
                    },
                    {
                        key: "4",
                        step: " Upward Phase: This exercise involves simultaneous movement of your leg and contralateral (opposite) arm. This exercise is best performed facing a mirror. Hip Extension: Slowly extend your left hip (raise and straighten the knee) attempting to extend it until it is at, or near parallel, to the floor without any rotation in the hip. Your goal is to keep both hips parallel to the floor. The use of a light bar placed across the hips, parallel to the waistline of your pants, provides visual feedback to hip rotation and what corrections are needed.",
                    },
                    {
                        key: "5",
                        step: "Shoulder flexion: Slowly flex your right arm (raise and straighten the arm) attempting to raise it until it is at, or near parallel, to the floor without any tilting at the shoulders. Your goal is to keep the both shoulders parallel to the floor. The use of a light bar placed across the shoulders provides visual feedback to shoulder rotation and what corrections are needed. Your head should remain aligned with the spine throughout the movement.",
                    },
                    {
                        key: "6",
                        step: "The degree of hip extension and shoulder flexion is determined by the ability to control against movement in the low back. As the leg is raised, individuals may witness an increase in lumbar lordosis (low back sagging). Only raise the limbs to heights where the low back position can be maintained through the combined actions of the core and abdominal muscles.",
                    },
                    {
                        key: "7",
                        step: "Downward Phase: Gently lower yourself back to your starting position and repeat with the opposite limbs."
                    }
                ]
            },
            {
                key: "1",
                name: "Bodyweight Squat",
                instructions: [ 
                    {
                        key: "1",
                        step:"Starting Position: Begin standing with your feet slightly wider than hip-width, with the toes turned slightly outwards with your hands by your sides so the palms facing inwards. Depress and retract your scapulae (pull the shoulders down and back).",
                    },
                    {
                        key: "2",
                        step:"Stiffen your core and abdominal muscles (“bracing”) to stabilize your spine. Hold your chest up and out, tilt your head slightly up, shift your weight back into your heels while pushing your hips towards the wall behind you.",
                    },
                    {
                        key: "3",
                        step:"Downward Phase: Start the downward phase by first shifting your hips backwards then downwards to create a hinge-like movement at your hips and knees simultaneously. As you lower your hips the knees will then start to shift forward slowly, but try to control the amount of forward translation (movement) of the tibia (shinbone). Maintain tension in the core muscles (continue bracing) and attempt to keep your back flat.",
                    },
                    {
                        key: "4",
                        step:"Continue to lower yourself until your thighs are parallel or almost parallel with the floor, until your heels begin to lift off the floor, or until your torso begins to round or flex forward. Monitor your feet, ankles and knees, ensuring that the feet don't move, the ankles do not collapse in or out and the knees remain aligned over the second toe.",
                    },
                    {
                        key: "5",
                        step:"From the Lowered Position: the knees should continue to remain aligned over the second toe and body weight should be evenly distributed between the balls and heels of the feet. From the side, the position of the tibia (shinbone) and torso should be parallel with each other and the low back should appear flat or showing the beginning of some rounding.",
                    },
                    {
                        key: "6",
                        step:"Upward Phase: While maintaining your back, chest and head-up position, exhale and extend the hips and knees by pushing your feet into the floor through your heels. The hips and torso need to rise together while keeping the heels flat on the floor and knees aligned over the second toe. Continue extending until you reach your starting position.  Think about inhaling on the way down and exhaling while exerting on the way back to the initial standing position."
                    }
                ]
            }
        ]
    },
    {
        key: "1",
        name: "Arms",
        exercises: [
            {
                key: "0",
                name: "Bent Knee Push-up",
                instructions: [ 
                    {
                        key: "1",
                        step: "Starting Position: Kneel on an exercise mat or floor and bring your feet together behind you."
                    },
                    {
                        key: "2",
                        step: "Slowly bend forward to place your palms flat on the mat, positioning your hands shoulder-width apart with your fingers facing forward. Slowly shift your weight forward until your shoulders are positioned directly over your hands. Reposition your hands as needed to allow full extension of your body from the knees without any bend at the hips. Stiffen your torso by contracting your core and abdominal muscles (bracing)."
                    },
                    {
                        key: "3",
                        step: "Downward Phase: Slowly lower your body towards the floor while maintaining a rigid torso and head aligned with your spine. Do not allow your low back to sag or your hips to hike upwards during this downward phase. Continue to lower yourself until your chest or chin touch the mat or floor. Your elbows should remain close to the sides of your body or flare outwards slightly."
                    },
                    {
                        key: "4",
                        step: "Upward Phase: Press upwards through your arms while maintaining a rigid torso and head aligned with your spine. Do not allow your low back to sag or your hips to hike upwards. Continue pressing until the arms are fully extended at the elbows."
                    },
                ]
            },
            {
                key: "1",
                name: "Cat-Cow",
                instructions: [ 
                    {
                        key: "1",
                        step: "Starting Position: Kneel on an exercise mat or floor, positioning your knees and feet hip-width apart, with your feet dorsi-flexed (toes pointing towards your body)."
                    },
                    {
                        key: "2",
                        step: "Slowly lean forward to place your hands on the mat, positioning them directly under your shoulders at shoulder-width with your hands facing forward. Reposition your hands and knees as necessary so that your knees are directly under your hips and hands are directly under your shoulders."
                    },
                    {
                        key: "3",
                        step: "Gently stiffen your core and abdominal muscles to position your spine in a neutral position, avoiding any sagging or arching."
                    },
                    {
                        key: "4",
                        step: "Upward (Cat) Phase: Gently exhale and contract your abdominal muscles, pushing your spine upwards towards the ceiling and hold this position for 10 - 15 seconds. Allow your head to fall towards your chest, maintaining alignment with the spine."
                    },
                    {
                        key: "5",
                        step: "Downward (Cow) Phase: Slowly relax and yield to the effects of gravity. Let your stomach fall towards the floor (increasing the arch in your low back) and allow your shoulder blades to fall together (move towards the spine). Hold this position for 10 - 15 seconds before returning to your starting position."
                    },
                ]
            }
        ]
    },

    {
        key: "2",
        name: "Back",
        exercises: [
            {
                key: "0",
                name: "90 Lat Stretch",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            },
            {
                key: "1",
                name: "Bird-Dog",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            },
            {
                key: "2",
                name: "Cat-Cow",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            },
            {
                key: "3",
                name: "Childs Pose",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            },
            {
                key: "4",
                name: "Cobra Exercise",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            }
        ]
    },
    {
        key: "3",
        name: "Chest",
        exercises: [
            {
                key: "0",
                name: "Bent Knee Push-up",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            },
            {
                key: "1",
                name: "Cat-Cow",
                instructions: [ {
                    1: "step 1",
                    2: "step 2",
                    3: "step 2"
                }]
            }
        ]
    },
    {
        key: "4",
        name: "Legs",
        exercises: [
            {
                key: "0",
                name: "Childs Pose",
                instructions: [ 
                    {
                        key: "1",
                        step: "Starting Position: Kneel with both knees directly under your hips and feet plantar flexed (toes pointing behind you) with the big toes touching. Begin to widen your knees towards the outside of the mat. Stiffen your abdominal muscles (brace) to stabilize your spine, and depress and retract your scapulae (pull shoulders down and back) without arching your low back. Slowly lean forward placing your hands on the ground, positioning them directly under your shoulders with your fingers facing forward. Inhale.",
                    },
                    {
                        key: "2",
                        step: "Keep your hands planted, exhale and hinge at the hips, bringing your glutes to your heels. As you sit back, maintaining the connection between your glutes and heels, extend through your back and arms. Pull the shoulders down and back keeping them away from the ears. Allow your chest to rest between your thighs and your forehead to rest on the floor. Inhale as you lengthen the spine, extending through the upper body, and exhale as you fold deeper into the pose, widening the knees as needed.",
                    },
                    {
                        key: "3",
                        step: "Hold this position for 5-10 slow, deep breaths (approximately 30 seconds to a minute).",
                    },
                    {
                        key: "4",
                        step: "Exercise variation: Extend your arms alongside the body with the palms facing upward and the fronts of your shoulders toward the floor."
                    }
                ]
            },
            {
                key: "1",
                name: "Standing Ankle Mobilization",
                instructions: [ 
                    {
                        key: "1",
                        step: "Starting Position:  Stand in front of a wall with feet placed a few inches apart and toes pointing toward the wall.  Lean forward, extending your arms and placing your hands on the wall to support your upper body.  Heels stay in contact with the floor.  Stiffen your abdominal muscles (“brace”) to stabilize your spine, then depress and retract your scapulae (pull shoulders down and back) without arching your low back.",
                    },
                    {
                        key: "2",
                        step: "Maintaining alignment, slowly lift your right foot off the floor, flexing (bending) the hip and bending the knee to 90 degrees.",
                    },
                    {
                        key: "3",
                        step: "While stabilizing the body over your stance (left) leg and continuing to lean forward, swing your right leg across the front of the body in the transverse plane (rotating the hips).  Allow your chest to open to the left with your head staying in alignment moving the direction of the swing (gaze to the left).  Hold for 1-2 seconds. Then, swing the right leg out to the right side, rotating the hips in the transverse plane. Allow your chest to open to the right with your head in alignment.  Hold 1-2 seconds. Throughout the exercise, keep the heel of your stance leg in contact with the ground as your weight shifts.",
                    },
                    {
                        key: "4",
                        step: "Perform 5-10 repetitions on each leg for 1-2 sets."
                    }
                ]
            }
        ]
    },



]
// Collection Array End

function CollectionScreen({ navigation, image }) {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.push('List', { item: item, items: item.exercises })} >
                <Card >
                    <View style={ styles.strip }></View>
                    <View style={{ paddingHorizontal: 90, paddingBottom: 30 }}>
                        <Card.Title style={styles.title}>{ item.name }</Card.Title>
                        <Card.Divider />
                        <Text>Exercises: { item.exercises.length }</Text>
                    </View>   
                </Card>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <BackgroundImage source={require('./727.jpg')} style={styles.image}>
                <FlatList data={data} renderItem={renderItem} />
            </BackgroundImage>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: "center",
        justifyContent: "center",
      },
    strip:{
        backgroundColor: "#41e8e2",
        padding: 3,
        marginHorizontal: 30,
        marginBottom:20
    },
    title: {
        fontSize: 30,
    }
  });

export default CollectionScreen;


  
  
