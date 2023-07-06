import { Button, TextInput, View } from "react-native";

import { styles } from "./styles";

const InputTask = ({
  borderColor,
  onHandlerFocus,
  onHandlerBlur,
  onHandlerChangeText,
  task,
  onHandlerCreateTask,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { borderColor }]}
        placeholder="Agregar elementos a la lista"
        autoCapitalize="none"
        autoCorrect={false}
        cursorColor="#424D9E"
        selectionColor="#D4D7ED"
        placeholderTextColor="#C5C9E7"
        onFocus={onHandlerFocus}
        onBlur={onHandlerBlur}
        onChangeText={onHandlerChangeText}
        value={task}
      />
      <Button
        disabled={task.length === 0}
        title="Añadir"
        color="#2A781C"
        onPress={onHandlerCreateTask}
      />
    </View>
  );
};

export default InputTask;