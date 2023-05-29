import { StyleSheet } from "react-native";

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },

  button: {
    backgroundColor: '#8e44ad',
    width: '55%',
    height: '100%',
    maxHeight: 40,
    paddingHorizontal: 15,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
  },

  input: {
    backgroundColor: '#FFF',
    width: '55%',
    height: '100%',
    maxHeight: 45,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: '12%'
  },

  iconImage: {
    width: '30%',
    height: 120,
    marginLeft: '8%'
  },

  linkId: {
    marginTop: '3%'
  },

  separator: {
    marginTop: '5%',
    height: 1,
    width: '75%',
    backgroundColor: '#ddd'
  }
});

export default stylesLogin;