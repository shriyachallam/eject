import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container : {
        backgroundColor: '#FFFCE0',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'  
      },
    logo: {
        flex: 1,
        height: 200,
        width: 200,
        alignSelf: "center",
        margin: 30
    },
    instructions : {
        backgroundColor: '#FFFCE0',
        fontSize: 30, 
        alignSelf: "center",
      },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#521228',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#521228",
        fontWeight: "bold",
        fontSize: 16
    }
})
