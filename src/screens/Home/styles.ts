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
  taskInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
  },
  taskInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    marginRight: 10,
    fontWeight: '700',
  },
  quantityText: {
    width: 25,
    backgroundColor: '#333333',
    textAlign: 'center',
    borderRadius: 10,
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: '700',
  },
  horizontalBar: {
    borderWidth: 1,
    borderColor: '#333333',
    marginTop: 20
  },
  taskContainer: {
    flex: 1,
    alignItems: 'center',
  },
  statusText: {
    color: '#333333',
    fontSize: 14,
  }
}) 