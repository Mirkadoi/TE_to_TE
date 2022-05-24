import { useSelector } from 'react-redux';

// our redux state
reduxState = {
    isOnline: true,
    userData: {
        name: 'Peter',
        surname: 'Pen'
    }
}

const MainComponent = () => {
    const userData = useSelector(reduxState => reduxState.userData, (prev, next) => prev.name === next.name && prev.surname === next.surname); // subscribe and get only userData object

    // ... other code
};
