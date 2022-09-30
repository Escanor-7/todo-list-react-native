import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  headerContainer: {
    width: '100%',
    height: '30%',
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center'
  },
  createTaskContainer: {
    position: 'absolute',
    bottom: -27,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
}) 