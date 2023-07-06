import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#D5AC53",
    paddingHorizontal: 15,
    borderRadius: 8,
    color: "#1C2D78",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1C2D78",
  },
  icon: {
    color: "green",
    fontSize: 16,
  },
});