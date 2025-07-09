import { StyleSheet } from "react-native";
import { colors } from "@/assets/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    flex: 1, 
    textAlign: 'center',
    padding:4
  },
  card: {
    backgroundColor: '#FDDCC6',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center', 
    paddingVertical: 10,
  },
  label: {
    fontSize: 14,
    marginTop: 4,
  },
  bold: {
    fontWeight: '600',
  },
  priceList: {
    marginTop: 6,
    marginLeft: 8,
  },
  description: {
    fontWeight: '400',
  },
  addButton: {
    position: 'absolute',
    bottom: 80,
    right: 30,
    backgroundColor: '#FFEFE6',
    borderColor: '#000',
    borderRadius: 50,
    padding: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  availabilityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  weekday: {
    fontWeight: 'bold'
  },
  timeRange: {
    color: '#666'
  },
});