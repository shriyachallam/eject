import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container : {
        backgroundColor: '#FFFCE0',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'  
      },
      instructions : {
        backgroundColor: '#FFFCE0',
        fontSize: 30, 
      },
    formContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 48,
        width: 300,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5,
        borderRadius: 25,
    },
    button: {
        width: 100,
        backgroundColor: '#521228',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
      }, 
    buttonText : {
        fontSize: 16,
        fontWeight: '500',
        color: "#ffffff", 
        textAlign: 'center'
      },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    }
})
