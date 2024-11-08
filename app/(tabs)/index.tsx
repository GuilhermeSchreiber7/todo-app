import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
export default function index() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      completed: false
    },
    {
      id: 2,
      title: "Estudar React Native",
      completed: false
    },
    {
      id: 3,
      title: "Estudar Expo",
      completed: false
    },
  ])
  const updateTask = (id: number) => {
    const task = tasks.find(task => task.id === id);
    if (task) {
      task.done = !task.done;
      setTasks([...tasks]);
    }
    }
  return (
    <View style={styles.container}>
      <View style={styles.tasks}>
        <Text>Minhas Tarefas em React</Text>
        <ScrollView style={styles.list}>
          {tasks.map(task => (
            <Text style={styles.taskItems} onPress={() => updateTask(task.id)}>
              {task.title}
              {task.done ? "✅" : "❌"}
              </Text>
              
          ))
          }
        </ScrollView>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Alternar
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",

  },
  tasks: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  list:{
    padding: 20
  },
  taskItems:{
    marginTop: 2,
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    width: 300,
    textAlign: "center"
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    marginBottom: 20,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
  buttonText:{
    color: "white",
    fontSize: 18
  }
});
